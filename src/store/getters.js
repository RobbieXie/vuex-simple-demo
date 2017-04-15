export const userInfo = state => {
  return {
    userName: state.session.userName,
    userPassword: state.session.userPassword
  }
}
