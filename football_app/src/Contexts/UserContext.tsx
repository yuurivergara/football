import {createContext, ReactNode, useState} from "react";

type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    
    token: string;
    setToken: (newState: string) => void;
    country: string;
    setCountry: (newState: string) => void;
    leagueId:string,
    setLeagueId: (newState: string) => void;
    teamId:string,
    setTeamId: (newState: string  ) => void;
    teamName: string,
    setTeamName: (newState: string) => void;
    season: string | null,
    setSeason: (newState: string) => void;
    
  };

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({children} : UserContextProps) => {
    const [token, setToken]= useState("")
    const [country, setCountry]= useState("")
    const [teamId, setTeamId]= useState("")
    const [leagueId, setLeagueId]= useState("")
    const [teamName, setTeamName]= useState("")
    const [season, setSeason]= useState("")
    return(
        <UserContext.Provider value={{token, setToken, country, setCountry, leagueId, setLeagueId, teamId, setTeamId, teamName, setTeamName, season, setSeason}}>
            {children}
        </UserContext.Provider>
    )
}