import ethersUtils from '../utils'
import { GAS_AMOUNTS, ETHERS_MAX_UINT } from '../constants'
import TransactionTypes from '../transactionTypes'
import { UNLIMITED_KEYS_COUNT, ZERO } from '../../lib/constants'
import { getErc20Decimals } from '../erc20'

/**
 * Returns the key price in its currency, rather than its decimal representation (Ether vs. Wei for example)
 * @param {*} currencyContractAddress
 * @param {*} lock
 * @param {*} provider
 */
async function _getKeyPrice(lock, provider) {
  let currencyContractAddress = lock.currencyContractAddress || ZERO

  if (currencyContractAddress !== ZERO) {
    // We need to get the decimal value
    const erc20Decimals = await getErc20Decimals(
      currencyContractAddress,
      provider
    )
    return ethersUtils.toDecimal(lock.keyPrice, erc20Decimals)
  } else {
    return ethersUtils.toWei(lock.keyPrice, 'ether')
  }
}

/**
 * Creates a lock on behalf of the user, using version v10
 * @param {PropTypes.lock} lock
 * @param {PropTypes.address} owner
 */
export default async function(lock, owner) {
  const unlockContract = await this.getUnlockContract()
  let maxNumberOfKeys = lock.maxNumberOfKeys
  if (maxNumberOfKeys === UNLIMITED_KEYS_COUNT) {
    maxNumberOfKeys = ETHERS_MAX_UINT
  }

  const decimalKeyPrice = _getKeyPrice(lock, this.provider)

  let currencyContractAddress = lock.currencyContractAddress || ZERO

  let transactionPromise
  try {
    const lockName = lock.name || 'New Lock'
    transactionPromise = unlockContract.functions[
      'createLock(uint256,address,uint256,uint256,string)'
    ](
      lock.expirationDuration,
      currencyContractAddress, // ERC20 address, 0 is for eth
      decimalKeyPrice, // FIX ME!
      maxNumberOfKeys,
      lockName,
      {
        gasLimit: GAS_AMOUNTS.createLock, // overrides default value for transaction gas price
      }
    )
    const hash = await this._handleMethodCall(
      transactionPromise,
      TransactionTypes.LOCK_CREATION
    )

    // Let's update the lock to reflect that it is linked to this
    // This is an exception because, until we are able to determine the lock address
    // before the transaction is mined, we need to link the lock and transaction.
    this.emit('lock.updated', lock.address, {
      expirationDuration: lock.expirationDuration,
      keyPrice: lock.keyPrice, // Must be expressed in Eth!
      maxNumberOfKeys: lock.maxNumberOfKeys,
      owner: owner,
      outstandingKeys: 0,
      balance: '0',
      transaction: hash,
      name: lockName,
      currencyContractAddress: lock.currencyContractAddress,
    })
  } catch (error) {
    this.emit('error', new Error(TransactionTypes.FAILED_TO_CREATE_LOCK))
  }
}
