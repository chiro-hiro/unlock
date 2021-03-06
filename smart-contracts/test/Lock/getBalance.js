const Units = require('ethereumjs-units')
const Web3Utils = require('web3-utils')
const deployLocks = require('../helpers/deployLocks')

const TestErc20Token = artifacts.require('TestErc20Token.sol')
const LockApi = require('../helpers/lockApi')

const unlockContract = artifacts.require('../Unlock.sol')
const getUnlockProxy = require('../helpers/proxy')

const scenarios = [false, true]
let unlock, locks, testToken
const keyPrice = Units.convert('0.01', 'eth', 'wei')

contract('Lock / getBalance', accounts => {
  scenarios.forEach(isErc20 => {
    describe(`Test ${isErc20 ? 'ERC20' : 'ETH'}`, () => {
      before(async () => {
        testToken = await TestErc20Token.new()
        // Mint some tokens for testing
        for (let i = 0; i < accounts.length; i++) {
          await testToken.mint(accounts[i], '1000000000000000000', {
            from: accounts[0],
          })
        }

        const tokenAddress = isErc20
          ? testToken.address
          : Web3Utils.padLeft(0, 40)

        unlock = await getUnlockProxy(unlockContract)
        locks = await deployLocks(unlock, accounts[0], tokenAddress)

        // Purchase 1 key
        await testToken.approve(locks['FIRST'].address, '1000000000000000000', {
          from: accounts[2],
        })
        const lockApi = new LockApi(locks['FIRST'])
        await lockApi.purchaseFor(accounts[2], accounts[2], keyPrice)
      })

      it('get balance of contract', async () => {
        const balance = await locks['FIRST'].getBalance(locks['FIRST'].address)
        assert.equal(balance.toString(), keyPrice.toString())
      })

      it('get balance of account', async () => {
        const balance = await locks['FIRST'].getBalance(accounts[1])
        assert(balance.gt(0))
      })
    })
  })
})
