"use client"
import React, { useContext, useEffect, useState } from 'react'

type ThemeType = "light" | "dark"

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({children}:{children: React.ReactNode}) => {

    const [theme, setTheme] = useState<ThemeType>("light")

    const toggleTheme = ()=>{
        if(theme ==='light'){
            setTheme("dark")
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }
        else{
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(
        ()=>{
            const localTheme = window.localStorage.getItem("theme")
            if(localTheme){
                setTheme(localTheme as ThemeType)

                if (localTheme === "dark"){
                    document.documentElement.classList.add("dark")
                }
            }
            else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark")
                document.documentElement.classList.add("dark")
            }
        }, []
    )

    
  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(context===null){
        throw new Error("useThem must be used within ThemeContxtProvider Component")
    }
    return context;

}
export default ThemeContextProvider