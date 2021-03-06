// This file is auto-generated by ../scripts/compressAbi.js
// do not modify directly!

const abis = {
  v0: {
    PublicLock: {
      contractName: 'PublicLock',
      abi: [
        'function supportsInterface(bytes4 interfaceId) constant view returns (bool)',
        'function owners(uint256) constant view returns (address)',
        'function unlockProtocol() constant view returns (address)',
        'function keyPrice() constant view returns (uint256)',
        'function expirationDuration() constant view returns (uint256)',
        'function numberOfKeysSold() constant view returns (uint256)',
        'function renounceOwnership()',
        'function maxNumberOfKeys() constant view returns (uint256)',
        'function initialize()',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function initialize(address sender)',
        'function transferOwnership(address newOwner)',
        'event PriceChanged (uint256 oldKeyPrice,uint256 keyPrice)',
        'event Withdrawal (address indexed _sender,uint256 _amount)',
        'event OwnershipRenounced (address indexed previousOwner)',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'event Transfer (address indexed _from,address indexed _to,uint256 indexed _tokenId)',
        'event Approval (address indexed _owner,address indexed _approved,uint256 indexed _tokenId)',
        'event ApprovalForAll (address indexed _owner,address indexed _operator,bool _approved)',
        'function purchaseFor(address _recipient,bytes _data) payable',
        'function purchaseForFrom(address _recipient,address _referrer,bytes _data) payable',
        'function transferFrom(address _from,address _recipient,uint256 _tokenId) payable',
        'function withdraw()',
        'function partialWithdraw(uint256 _amount)',
        'function approve(address _approved,uint256 _tokenId) payable',
        'function updateKeyPrice(uint256 _keyPrice)',
        'function balanceOf(address _owner) constant view returns (uint256)',
        'function ownerOf(uint256 _tokenId) constant view returns (address)',
        'function getTokenIdFor(address _account) constant view returns (uint256)',
        'function getApproved(uint256 _tokenId) constant view returns (address)',
        'function numberOfOwners() constant view returns (uint256)',
        'function outstandingKeys() constant view returns (uint256)',
        'function getOwnersByPage(uint256 _page,uint256 _pageSize) constant view returns (address[])',
        'function expireKeyFor(address _owner)',
        'function keyDataFor(address _owner) constant view returns (bytes data)',
        'function keyExpirationTimestampFor(address _owner) constant view returns (uint256 timestamp)',
        'function onERC721Received(address operator,address from,uint256 tokenId,bytes data) returns (bytes4)',
      ],
      bytecodeHash:
        '0xb2a91ed884eb833846d7496292f10b05ba49e08869cef9499d27ec457baa63d2',
    },
    Unlock: {
      contractName: 'Unlock',
      abi: [
        'function locks(address) constant view returns (bool deployed,uint256 totalSales,uint256 yieldedDiscountTokens)',
        'function renounceOwnership()',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function totalDiscountGranted() constant view returns (uint256)',
        'function grossNetworkProduct() constant view returns (uint256)',
        'function transferOwnership(address newOwner)',
        'event NewLock (address indexed lockOwner,address indexed newLockAddress)',
        'event OwnershipRenounced (address indexed previousOwner)',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'function initialize(address _owner)',
        'function createLock(uint256 _expirationDuration,uint256 _keyPrice,uint256 _maxNumberOfKeys) returns (address lock)',
        'function computeAvailableDiscountFor(address _purchaser,uint256 _keyPrice) constant view returns (uint256 discount,uint256 tokens)',
        'function recordKeyPurchase(uint256 _value,address _referrer)',
        'function recordConsumedDiscount(uint256 _discount,uint256 _tokens)',
      ],
      bytecodeHash:
        '0x86edf160e4e30f3ce7e9577dfb1cd335b967f4a8856a78bc63dec68dbad7b6e9',
    },
  },
  v01: {
    PublicLock: {
      contractName: 'PublicLock',
      abi: [
        'function supportsInterface(bytes4 interfaceId) constant view returns (bool)',
        'function owners(uint256) constant view returns (address)',
        'function name() constant view returns (string)',
        'function getApproved(uint256 _tokenId) constant view returns (address)',
        'function approve(address _approved,uint256 _tokenId) payable',
        'function refundPenaltyDenominator() constant view returns (uint256)',
        'function refundPenaltyNumerator() constant view returns (uint256)',
        'function unlockProtocol() constant view returns (address)',
        'function getOwnersByPage(uint256 _page,uint256 _pageSize) constant view returns (address[])',
        'function keyPrice() constant view returns (uint256)',
        'function expirationDuration() constant view returns (uint256)',
        'function onERC721Received(address,address,uint256,bytes) returns (bytes4)',
        'function totalSupply() constant view returns (uint256)',
        'function updateKeyPrice(uint256 _keyPrice)',
        'function cancelAndRefund()',
        'function transferFrom(address _from,address _recipient,uint256 _tokenId) payable',
        'function updateRefundPenalty(uint256 _refundPenaltyNumerator,uint256 _refundPenaltyDenominator)',
        'function numberOfKeysSold() constant view returns (uint256)',
        'function withdraw()',
        'function updateTransferFee(uint256 _transferFeeNumerator,uint256 _transferFeeDenominator)',
        'function isAlive() constant view returns (bool)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId) payable',
        'function getCancelAndRefundValueFor(address _owner) constant view returns (uint256 refund)',
        'function updateLockName(string _lockName)',
        'function ownerOf(uint256 _tokenId) constant view returns (address)',
        'function getHasValidKey(address _owner) constant view returns (bool)',
        'function balanceOf(address _owner) constant view returns (uint256)',
        'function purchaseForFrom(address _recipient,address _referrer) payable',
        'function renounceOwnership()',
        'function partialWithdraw(uint256 _amount)',
        'function maxNumberOfKeys() constant view returns (uint256)',
        'function grantKeys(address[] _recipients,uint256[] _expirationTimestamps)',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function transferFeeNumerator() constant view returns (uint256)',
        'function numberOfOwners() constant view returns (uint256)',
        'function getTokenIdFor(address _account) constant view returns (uint256)',
        'function isKeyOwner(uint256 _tokenId,address _owner) constant view returns (bool)',
        'function grantKey(address _recipient,uint256 _expirationTimestamp)',
        'function tokenAddress() constant view returns (address)',
        'function expireKeyFor(address _owner)',
        'function setApprovalForAll(address _to,bool _approved)',
        'function destroyLock()',
        'function keyExpirationTimestampFor(address _owner) constant view returns (uint256 timestamp)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId,bytes _data) payable',
        'function disableLock()',
        'function initialize(address sender)',
        'function publicLockVersion() constant view returns (uint256)',
        'function transferFeeDenominator() constant view returns (uint256)',
        'function isApprovedForAll(address _owner,address _operator) constant view returns (bool)',
        'function transferOwnership(address newOwner)',
        'function purchaseFor(address _recipient) payable',
        'function grantKeys(address[] _recipients,uint256 _expirationTimestamp)',
        'event TransferFeeChanged (uint256 oldTransferFeeNumerator,uint256 oldTransferFeeDenominator,uint256 transferFeeNumerator,uint256 transferFeeDenominator)',
        'event CancelKey (uint256 indexed tokenId,address indexed owner,uint256 refund)',
        'event RefundPenaltyChanged (uint256 oldRefundPenaltyNumerator,uint256 oldRefundPenaltyDenominator,uint256 refundPenaltyNumerator,uint256 refundPenaltyDenominator)',
        'event ExpireKey (uint256 tokenId)',
        'event PriceChanged (uint256 oldKeyPrice,uint256 keyPrice)',
        'event Withdrawal (address indexed _sender,uint256 _amount)',
        'event Destroy (uint256 balance,address indexed owner)',
        'event Disable ()',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'event Transfer (address indexed _from,address indexed _to,uint256 indexed _tokenId)',
        'event Approval (address indexed _owner,address indexed _approved,uint256 indexed _tokenId)',
        'event ApprovalForAll (address indexed _owner,address indexed _operator,bool _approved)',
      ],
      bytecodeHash:
        '0x86b1448bb0b9cdb897a699c215bb478bbc8d5944928745115ea261e8d01d2d5d',
    },
    Unlock: {
      contractName: 'Unlock',
      abi: [
        'function locks(address) constant view returns (bool deployed,uint256 totalSales,uint256 yieldedDiscountTokens)',
        'function renounceOwnership()',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function totalDiscountGranted() constant view returns (uint256)',
        'function grossNetworkProduct() constant view returns (uint256)',
        'function transferOwnership(address newOwner)',
        'event NewLock (address indexed lockOwner,address indexed newLockAddress)',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'function initialize(address _owner)',
        'function createLock(uint256 _expirationDuration,address _tokenAddress,uint256 _keyPrice,uint256 _maxNumberOfKeys) returns (address lock)',
        'function computeAvailableDiscountFor(address _purchaser,uint256 _keyPrice) constant view returns (uint256 discount,uint256 tokens)',
        'function recordKeyPurchase(uint256 _value,address _referrer)',
        'function recordConsumedDiscount(uint256 _discount,uint256 _tokens)',
      ],
      bytecodeHash:
        '0x886b9da11c0a665e98fd914bc79908925a4f6a549286de92ee6825e441a26309',
    },
  },
  v02: {
    PublicLock: {
      contractName: 'PublicLock',
      abi: [
        'function supportsInterface(bytes4 interfaceId) constant view returns (bool)',
        'function owners(uint256) constant view returns (address)',
        'function name() constant view returns (string)',
        'function getApproved(uint256 _tokenId) constant view returns (address)',
        'function approve(address _approved,uint256 _tokenId) payable',
        'function refundPenaltyDenominator() constant view returns (uint256)',
        'function refundPenaltyNumerator() constant view returns (uint256)',
        'function unlockProtocol() constant view returns (address)',
        'function getOwnersByPage(uint256 _page,uint256 _pageSize) constant view returns (address[])',
        'function keyPrice() constant view returns (uint256)',
        'function expirationDuration() constant view returns (uint256)',
        'function onERC721Received(address,address,uint256,bytes) returns (bytes4)',
        'function totalSupply() constant view returns (uint256)',
        'function updateKeyPrice(uint256 _keyPrice)',
        'function cancelAndRefund()',
        'function transferFrom(address _from,address _recipient,uint256 _tokenId) payable',
        'function updateRefundPenalty(uint256 _refundPenaltyNumerator,uint256 _refundPenaltyDenominator)',
        'function numberOfKeysSold() constant view returns (uint256)',
        'function withdraw()',
        'function updateTransferFee(uint256 _transferFeeNumerator,uint256 _transferFeeDenominator)',
        'function isAlive() constant view returns (bool)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId) payable',
        'function getCancelAndRefundValueFor(address _owner) constant view returns (uint256 refund)',
        'function updateLockName(string _lockName)',
        'function ownerOf(uint256 _tokenId) constant view returns (address)',
        'function getHasValidKey(address _owner) constant view returns (bool)',
        'function balanceOf(address _owner) constant view returns (uint256)',
        'function purchaseForFrom(address _recipient,address _referrer) payable',
        'function renounceOwnership()',
        'function partialWithdraw(uint256 _amount)',
        'function maxNumberOfKeys() constant view returns (uint256)',
        'function grantKeys(address[] _recipients,uint256[] _expirationTimestamps)',
        'function getTransferFee(address _owner) constant view returns (uint256)',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function transferFeeNumerator() constant view returns (uint256)',
        'function numberOfOwners() constant view returns (uint256)',
        'function getTokenIdFor(address _account) constant view returns (uint256)',
        'function isKeyOwner(uint256 _tokenId,address _owner) constant view returns (bool)',
        'function grantKey(address _recipient,uint256 _expirationTimestamp)',
        'function tokenAddress() constant view returns (address)',
        'function expireKeyFor(address _owner)',
        'function setApprovalForAll(address _to,bool _approved)',
        'function destroyLock()',
        'function keyExpirationTimestampFor(address _owner) constant view returns (uint256 timestamp)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId,bytes _data) payable',
        'function disableLock()',
        'function initialize(address sender)',
        'function publicLockVersion() constant view returns (uint8)',
        'function transferFeeDenominator() constant view returns (uint256)',
        'function isApprovedForAll(address _owner,address _operator) constant view returns (bool)',
        'function transferOwnership(address newOwner)',
        'function purchaseFor(address _recipient) payable',
        'function grantKeys(address[] _recipients,uint256 _expirationTimestamp)',
        'event CancelKey (uint256 indexed tokenId,address indexed owner,uint256 refund)',
        'event RefundPenaltyChanged (uint256 oldRefundPenaltyNumerator,uint256 oldRefundPenaltyDenominator,uint256 refundPenaltyNumerator,uint256 refundPenaltyDenominator)',
        'event TransferFeeChanged (uint256 oldTransferFeeNumerator,uint256 oldTransferFeeDenominator,uint256 transferFeeNumerator,uint256 transferFeeDenominator)',
        'event ExpireKey (uint256 tokenId)',
        'event PriceChanged (uint256 oldKeyPrice,uint256 keyPrice)',
        'event Withdrawal (address indexed _sender,uint256 _amount)',
        'event Destroy (uint256 balance,address indexed owner)',
        'event Disable ()',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'event Transfer (address indexed _from,address indexed _to,uint256 indexed _tokenId)',
        'event Approval (address indexed _owner,address indexed _approved,uint256 indexed _tokenId)',
        'event ApprovalForAll (address indexed _owner,address indexed _operator,bool _approved)',
      ],
      bytecodeHash:
        '0x8d550be89b307f1446d068f20a0ce8f88ee22f41187c7c6157c5358cebc211b0',
    },
    Unlock: {
      contractName: 'Unlock',
      abi: [
        'function locks(address) constant view returns (bool deployed,uint256 totalSales,uint256 yieldedDiscountTokens)',
        'function renounceOwnership()',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function totalDiscountGranted() constant view returns (uint256)',
        'function grossNetworkProduct() constant view returns (uint256)',
        'function transferOwnership(address newOwner)',
        'event NewLock (address indexed lockOwner,address indexed newLockAddress)',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'function initialize(address _owner)',
        'function createLock(uint256 _expirationDuration,address _tokenAddress,uint256 _keyPrice,uint256 _maxNumberOfKeys) returns (address lock)',
        'function computeAvailableDiscountFor(address _purchaser,uint256 _keyPrice) constant view returns (uint256 discount,uint256 tokens)',
        'function recordKeyPurchase(uint256 _value,address _referrer)',
        'function recordConsumedDiscount(uint256 _discount,uint256 _tokens)',
        'function unlockVersion() constant pure returns (uint8)',
      ],
      bytecodeHash:
        '0x960a13a719e5937b7218323937da3bf6927cfd015d4d04c4987d387ad043d2d6',
    },
  },
  v10: {
    PublicLock: {
      contractName: 'PublicLock',
      abi: [
        'function supportsInterface(bytes4 interfaceId) constant view returns (bool)',
        'function owners(uint256) constant view returns (address)',
        'function name() constant view returns (string)',
        'function getApproved(uint256 _tokenId) constant view returns (address)',
        'function approve(address _approved,uint256 _tokenId) payable',
        'function refundPenaltyDenominator() constant view returns (uint256)',
        'function refundPenaltyNumerator() constant view returns (uint256)',
        'function unlockProtocol() constant view returns (address)',
        'function getOwnersByPage(uint256 _page,uint256 _pageSize) constant view returns (address[])',
        'function keyPrice() constant view returns (uint256)',
        'function expirationDuration() constant view returns (uint256)',
        'function onERC721Received(address,address,uint256,bytes) returns (bytes4)',
        'function totalSupply() constant view returns (uint256)',
        'function updateKeyPrice(uint256 _keyPrice)',
        'function cancelAndRefund()',
        'function transferFrom(address _from,address _recipient,uint256 _tokenId) payable',
        'function setBaseTokenURI(string _baseTokenURI)',
        'function updateRefundPenalty(uint256 _refundPenaltyNumerator,uint256 _refundPenaltyDenominator)',
        'function numberOfKeysSold() constant view returns (uint256)',
        'function withdraw()',
        'function updateTransferFee(uint256 _transferFeeNumerator,uint256 _transferFeeDenominator)',
        'function isAlive() constant view returns (bool)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId) payable',
        'function strConcat(string _a,string _b,string _c,string _d) constant pure returns (string _concatenatedString)',
        'function keyOwnerToNonce(address) constant view returns (uint256)',
        'function uint2Str(uint256 _i) constant pure returns (string _uintAsString)',
        'function getCancelAndRefundValueFor(address _owner) constant view returns (uint256 refund)',
        'function updateLockName(string _lockName)',
        'function address2Str(address _addr) constant pure returns (string)',
        'function incrementNonce()',
        'function ownerOf(uint256 _tokenId) constant view returns (address)',
        'function getHasValidKey(address _owner) constant view returns (bool)',
        'function balanceOf(address _owner) constant view returns (uint256)',
        'function purchaseForFrom(address _recipient,address _referrer) payable',
        'function renounceOwnership()',
        'function partialWithdraw(uint256 _amount)',
        'function maxNumberOfKeys() constant view returns (uint256)',
        'function updateLockSymbol(string _lockSymbol)',
        'function grantKeys(address[] _recipients,uint256[] _expirationTimestamps)',
        'function getTransferFee(address _owner) constant view returns (uint256)',
        'function getCancelAndRefundApprovalHash(address _keyOwner,address _txSender) constant view returns (bytes32 approvalHash)',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function transferFeeNumerator() constant view returns (uint256)',
        'function numberOfOwners() constant view returns (uint256)',
        'function symbol() constant view returns (string)',
        'function getTokenIdFor(address _account) constant view returns (uint256)',
        'function isKeyOwner(uint256 _tokenId,address _owner) constant view returns (bool)',
        'function grantKey(address _recipient,uint256 _expirationTimestamp)',
        'function tokenAddress() constant view returns (address)',
        'function expireKeyFor(address _owner)',
        'function setApprovalForAll(address _to,bool _approved)',
        'function destroyLock()',
        'function keyExpirationTimestampFor(address _owner) constant view returns (uint256 timestamp)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId,bytes _data) payable',
        'function cancelAndRefundFor(address _keyOwner,bytes _signature)',
        'function disableLock()',
        'function initialize(address sender)',
        'function tokenURI(uint256 _tokenId) constant view returns (string)',
        'function transferFeeDenominator() constant view returns (uint256)',
        'function isApprovedForAll(address _owner,address _operator) constant view returns (bool)',
        'function transferOwnership(address newOwner)',
        'function purchaseFor(address _recipient) payable',
        'function grantKeys(address[] _recipients,uint256 _expirationTimestamp)',
        'event CancelKey (uint256 indexed tokenId,address indexed owner,address indexed sendTo,uint256 refund)',
        'event RefundPenaltyChanged (uint256 oldRefundPenaltyNumerator,uint256 oldRefundPenaltyDenominator,uint256 refundPenaltyNumerator,uint256 refundPenaltyDenominator)',
        'event TransferFeeChanged (uint256 oldTransferFeeNumerator,uint256 oldTransferFeeDenominator,uint256 transferFeeNumerator,uint256 transferFeeDenominator)',
        'event NewLockSymbol (string symbol)',
        'event ExpireKey (uint256 tokenId)',
        'event PriceChanged (uint256 oldKeyPrice,uint256 keyPrice)',
        'event Withdrawal (address indexed _sender,uint256 _amount)',
        'event Destroy (uint256 balance,address indexed owner)',
        'event Disable ()',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'event Transfer (address indexed _from,address indexed _to,uint256 indexed _tokenId)',
        'event Approval (address indexed _owner,address indexed _approved,uint256 indexed _tokenId)',
        'event ApprovalForAll (address indexed _owner,address indexed _operator,bool _approved)',
        'function publicLockVersion() constant pure returns (uint16)',
      ],
      bytecodeHash:
        '0xd39a12277dda772e749d1d89564a16d58a5f4c292ea4a5d29b33ee5bce85f75b',
    },
    Unlock: {
      contractName: 'Unlock',
      abi: [
        'function locks(address) constant view returns (bool deployed,uint256 totalSales,uint256 yieldedDiscountTokens)',
        'function renounceOwnership()',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function totalDiscountGranted() constant view returns (uint256)',
        'function grossNetworkProduct() constant view returns (uint256)',
        'function transferOwnership(address newOwner)',
        'event NewLock (address indexed lockOwner,address indexed newLockAddress)',
        'event NewTokenURI (string tokenURI)',
        'event NewGlobalTokenSymbol (string tokenSymbol)',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'function initialize(address _owner)',
        'function createLock(uint256 _expirationDuration,address _tokenAddress,uint256 _keyPrice,uint256 _maxNumberOfKeys,string _lockName)',
        'function computeAvailableDiscountFor(address _purchaser,uint256 _keyPrice) constant view returns (uint256 discount,uint256 tokens)',
        'function recordKeyPurchase(uint256 _value,address _referrer)',
        'function recordConsumedDiscount(uint256 _discount,uint256 _tokens)',
        'function unlockVersion() constant pure returns (uint16)',
        'function getGlobalBaseTokenURI() constant view returns (string)',
        'function setGlobalBaseTokenURI(string _URI)',
        'function getGlobalTokenSymbol() constant view returns (string)',
        'function setGlobalTokenSymbol(string _symbol)',
      ],
      bytecodeHash:
        '0x61aa1e23d7edf8e39df534763b853b6844412c3b8f54b20fc4d7ced561f00f01',
    },
  },
  v11: {
    PublicLock: {
      contractName: 'PublicLock',
      abi: [
        'function supportsInterface(bytes4 interfaceId) constant view returns (bool)',
        'function owners(uint256) constant view returns (address)',
        'function name() constant view returns (string)',
        'function getApproved(uint256 _tokenId) constant view returns (address)',
        'function approve(address _approved,uint256 _tokenId) payable',
        'function updateBeneficiary(address _beneficiary)',
        'function refundPenaltyDenominator() constant view returns (uint256)',
        'function refundPenaltyNumerator() constant view returns (uint256)',
        'function unlockProtocol() constant view returns (address)',
        'function getOwnersByPage(uint256 _page,uint256 _pageSize) constant view returns (address[])',
        'function keyPrice() constant view returns (uint256)',
        'function expirationDuration() constant view returns (uint256)',
        'function onERC721Received(address,address,uint256,bytes) returns (bytes4)',
        'function totalSupply() constant view returns (uint256)',
        'function updateKeyPrice(uint256 _keyPrice)',
        'function cancelAndRefund()',
        'function transferFrom(address _from,address _recipient,uint256 _tokenId) payable',
        'function withdraw(uint256 _amount)',
        'function setBaseTokenURI(string _baseTokenURI)',
        'function beneficiary() constant view returns (address)',
        'function updateRefundPenalty(uint256 _refundPenaltyNumerator,uint256 _refundPenaltyDenominator)',
        'function numberOfKeysSold() constant view returns (uint256)',
        'function updateTransferFee(uint256 _transferFeeNumerator,uint256 _transferFeeDenominator)',
        'function isAlive() constant view returns (bool)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId) payable',
        'function strConcat(string _a,string _b,string _c,string _d) constant pure returns (string _concatenatedString)',
        'function keyOwnerToNonce(address) constant view returns (uint256)',
        'function uint2Str(uint256 _i) constant pure returns (string _uintAsString)',
        'function getCancelAndRefundValueFor(address _owner) constant view returns (uint256 refund)',
        'function updateLockName(string _lockName)',
        'function address2Str(address _addr) constant pure returns (string)',
        'function incrementNonce()',
        'function ownerOf(uint256 _tokenId) constant view returns (address)',
        'function getHasValidKey(address _owner) constant view returns (bool)',
        'function balanceOf(address _owner) constant view returns (uint256)',
        'function purchaseForFrom(address _recipient,address _referrer) payable',
        'function renounceOwnership()',
        'function maxNumberOfKeys() constant view returns (uint256)',
        'function updateLockSymbol(string _lockSymbol)',
        'function grantKeys(address[] _recipients,uint256[] _expirationTimestamps)',
        'function getTransferFee(address _owner) constant view returns (uint256)',
        'function getCancelAndRefundApprovalHash(address _keyOwner,address _txSender) constant view returns (bytes32 approvalHash)',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function transferFeeNumerator() constant view returns (uint256)',
        'function numberOfOwners() constant view returns (uint256)',
        'function symbol() constant view returns (string)',
        'function getTokenIdFor(address _account) constant view returns (uint256)',
        'function isKeyOwner(uint256 _tokenId,address _owner) constant view returns (bool)',
        'function grantKey(address _recipient,uint256 _expirationTimestamp)',
        'function tokenAddress() constant view returns (address)',
        'function expireKeyFor(address _owner)',
        'function setApprovalForAll(address _to,bool _approved)',
        'function destroyLock()',
        'function keyExpirationTimestampFor(address _owner) constant view returns (uint256 timestamp)',
        'function safeTransferFrom(address _from,address _to,uint256 _tokenId,bytes _data) payable',
        'function cancelAndRefundFor(address _keyOwner,bytes _signature)',
        'function disableLock()',
        'function initialize(address sender)',
        'function tokenURI(uint256 _tokenId) constant view returns (string)',
        'function transferFeeDenominator() constant view returns (uint256)',
        'function isApprovedForAll(address _owner,address _operator) constant view returns (bool)',
        'function transferOwnership(address newOwner)',
        'function purchaseFor(address _recipient) payable',
        'function getBalance(address _account) constant view returns (uint256)',
        'function grantKeys(address[] _recipients,uint256 _expirationTimestamp)',
        'event CancelKey (uint256 indexed tokenId,address indexed owner,address indexed sendTo,uint256 refund)',
        'event RefundPenaltyChanged (uint256 oldRefundPenaltyNumerator,uint256 oldRefundPenaltyDenominator,uint256 refundPenaltyNumerator,uint256 refundPenaltyDenominator)',
        'event TransferFeeChanged (uint256 oldTransferFeeNumerator,uint256 oldTransferFeeDenominator,uint256 transferFeeNumerator,uint256 transferFeeDenominator)',
        'event NewLockSymbol (string symbol)',
        'event ExpireKey (uint256 tokenId)',
        'event PriceChanged (uint256 oldKeyPrice,uint256 keyPrice)',
        'event Withdrawal (address indexed sender,address indexed beneficiary,uint256 amount)',
        'event Destroy (uint256 balance,address indexed owner)',
        'event Disable ()',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'event Transfer (address indexed _from,address indexed _to,uint256 indexed _tokenId)',
        'event Approval (address indexed _owner,address indexed _approved,uint256 indexed _tokenId)',
        'event ApprovalForAll (address indexed _owner,address indexed _operator,bool _approved)',
        'function publicLockVersion() constant pure returns (uint16)',
      ],
      bytecodeHash:
        '0x0d7ea1df12ab87024edd7add411416ee61a3f09cf41a0b6aa5499e1bc4277651',
    },
    Unlock: {
      contractName: 'Unlock',
      abi: [
        'function locks(address) constant view returns (bool deployed,uint256 totalSales,uint256 yieldedDiscountTokens)',
        'function renounceOwnership()',
        'function owner() constant view returns (address)',
        'function isOwner() constant view returns (bool)',
        'function totalDiscountGranted() constant view returns (uint256)',
        'function grossNetworkProduct() constant view returns (uint256)',
        'function transferOwnership(address newOwner)',
        'event NewLock (address indexed lockOwner,address indexed newLockAddress)',
        'event NewTokenURI (string tokenURI)',
        'event NewGlobalTokenSymbol (string tokenSymbol)',
        'event OwnershipTransferred (address indexed previousOwner,address indexed newOwner)',
        'function initialize(address _owner)',
        'function createLock(uint256 _expirationDuration,address _tokenAddress,uint256 _keyPrice,uint256 _maxNumberOfKeys,string _lockName)',
        'function computeAvailableDiscountFor(address _purchaser,uint256 _keyPrice) constant view returns (uint256 discount,uint256 tokens)',
        'function recordKeyPurchase(uint256 _value,address _referrer)',
        'function recordConsumedDiscount(uint256 _discount,uint256 _tokens)',
        'function unlockVersion() constant pure returns (uint16)',
        'function getGlobalBaseTokenURI() constant view returns (string)',
        'function setGlobalBaseTokenURI(string _URI)',
        'function getGlobalTokenSymbol() constant view returns (string)',
        'function setGlobalTokenSymbol(string _symbol)',
      ],
      bytecodeHash:
        '0xa1e7ddfa6d9183443aca067a96bd252f3ffa72a55ce36564ab77e79ce6527ac3',
    },
  },
}

export default abis
