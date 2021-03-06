const deployLocks = require('../helpers/deployLocks')

const unlockContract = artifacts.require('../Unlock.sol')
const getUnlockProxy = require('../helpers/proxy')

let unlock, locks

contract('Lock / erc165', accounts => {
  before(async () => {
    unlock = await getUnlockProxy(unlockContract)
    locks = await deployLocks(unlock, accounts[0])
  })

  it('should support the erc165 interface()', async function() {
    // 0x01ffc9a7 === bytes4(keccak256('supportsInterface(bytes4)'))
    const result = await locks['FIRST'].supportsInterface.call('0x01ffc9a7')
    assert.equal(result, true)
  })

  it('should support the erc721 metadata interface', async function() {
    // ID specified in the standard: https://eips.ethereum.org/EIPS/eip-721
    const result = await locks['FIRST'].supportsInterface.call('0x5b5e139f')
    assert.equal(result, true)
  })
})
