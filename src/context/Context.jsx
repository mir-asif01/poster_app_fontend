import { createContext, useEffect } from "react"
import { getUserInfoFromLocalStorage } from "../utils/localStorage"

export const Context = createContext()

export function ContextProvider({ children }) {
  let user = {}
  useEffect(() => {
    user = getUserInfoFromLocalStorage()
  }, [])
  const contextValue = { user }
  return (
    <>
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </>
  )
}
