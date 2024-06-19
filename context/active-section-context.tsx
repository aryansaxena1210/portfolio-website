"use client"
import React, { useState, createContext, useContext } from 'react'
import { links } from "../lib/data"
import { SectionName } from '@/lib/types';



export const ActiveSectionContext = createContext<null | ActiveSectionContextType>(null);

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    )


}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context===null){
        throw new Error("useActivSectionContext must be within an ActiveectionContextProvider Comonenet \n You must call the useActiveSectionContext() hook from an element which is served as a child to the ActiveSectoinProvider Componenet in the layout file")
    }

    return context;
}
export default ActiveSectionContextProvider
