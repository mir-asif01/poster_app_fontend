export const savaUserInfoToLocalStorage = (user) => {
  if (!user) {
    return "No argumanent recieved"
  }
  const savedUser = localStorage.getItem("user")
  if (savedUser) {
    localStorage.clear()
    return 0
  }
  localStorage.setItem("user", JSON.stringify(user))
}

export const getUserInfoFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return user
}
