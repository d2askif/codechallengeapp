const homeReducer = (state: any, action: any) => {
  const newState = { ...state }
  switch (action.type) {
    case 'Login Success': {
      return newState
    }

    case 'Login Failed': {
      return newState
    }
    default:
      return newState
  }
}
export default homeReducer
