import { createContext, useEffect } from "react"

export const Context = createContext()

export function ContextProvider({ children }) {
  let user = {}
  //useEffect(() => {
  const userStr = localStorage.getItem("user")
  const userObj = JSON.parse(userStr)
  user = { ...userObj }
  //}, [])
  const contextValue = {}
  return (
    <>
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </>
  )
}
