export const ADD_LOCK = 'lock/ADD_LOCK'
export const DELETE_LOCK = 'lock/DELETE_LOCK'
export const UPDATE_LOCK = 'lock/UPDATE_LOCK'
export const UPDATE_LOCK_KEY_PRICE = 'lock/UPDATE_LOCK_KEY_PRICE'
export const WITHDRAW_FROM_LOCK = 'lock/WITHDRAW_FROM_LOCK'

export const addLock = (address, lock) => ({
  type: ADD_LOCK,
  address,
  lock,
})

export const deleteLock = address => ({
  type: DELETE_LOCK,
  address,
})

export const updateLock = (address, update) => ({
  type: UPDATE_LOCK,
  address,
  update,
})

export const withdrawFromLock = lock => ({
  type: WITHDRAW_FROM_LOCK,
  lock,
})

export const updateKeyPrice = (address, price) => ({
  type: UPDATE_LOCK_KEY_PRICE,
  address,
  price,
})
