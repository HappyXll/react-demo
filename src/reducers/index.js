export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
       throw new Error('error in INCREMENT')
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

