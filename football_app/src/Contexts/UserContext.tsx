import {createContext, ReactNode, useState} from "react";

type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    
    token: string;
    setToken: (newState: string) => void;
    country: string;
    setCountry: (newState: string) => void;
    league:string,
    setLeague: (newState: string) => void;
    team:string,
    setTeam: (newState: string) => void;
    
  };

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({children} : UserContextProps) => {
    const [token, setToken]= useState("")
    const [country, setCountry]= useState("")
    const [team, setTeam]= useState("")
    const [league, setLeague]= useState("")
    return(
        <UserContext.Provider value={{token, setToken, country, setCountry, league, setLeague, team, setTeam}}>
            {children}
        </UserContext.Provider>
    )
}