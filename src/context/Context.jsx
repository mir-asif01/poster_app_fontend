import { createContext } from "react"

export const Context = createContext()

export function ContextProvider({ children }) {
   const user = {}
   // const user = {};
   const contextValue = { user }
   return (
      <>
         <Context.Provider value={contextValue}>{children}</Context.Provider>
      </>
   )
}
