
"use client"

import { createContext, useContext, useState } from "react"

// Create the context
const AppContext = createContext()

// Create a provider component
export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)

  const value = {
    cart,
    setCart,
    user,
    setUser,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}