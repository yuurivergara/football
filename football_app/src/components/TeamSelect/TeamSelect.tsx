import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
import React, {useState,useEffect} from "react"
import { LeagueSelectBox } from "./LeagueSelectBox"
import { TempSelectBox } from "./TempSelectBox"
import axios from "axios"
import "./Select.module.css"

interface Option1 {
    league: { id: number, name: string, type:string, logo:string}, 
    
}
interface times{
  team :{id: number, name :string, code:string, country:string, founded: number, national: boolean, logo: string}
}


export function TeamSelect(){

    
    
    
    const {country,token, setTeamId, setTeamName,setLeagueId, leagueId, setSeason,setCountry} = React.useContext(UserContext);
    const navigation = useNavigate()
    const [options, setOptions] = useState<Option1[]>([]) 
    const [teams, setTeams] = useState<times[]>() 
    const [temp, setTemp] = useState<[]>([]) 
    
    useEffect(()=>{
        axios.get("https://v3.football.api-sports.io/leagues", {
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": token.toString()
            },
            "params":{
                "country": country.toString()
            }
        })
        .then(response => {
            setOptions(response.data.response)
        }).catch(error => {console.log(error)})

        axios.get("https://v3.football.api-sports.io/leagues/seasons", {
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": token.toString()
            }
        })
        .then(response => {
            setTemp(response.data.response)
        }).catch(error => {console.log(error)})


        


        
        
    
    },[])
    
    
    
    const [enable, setEnable] = useState<string>("none")
    const [selectedItem, setSelectedItem] = useState<Option1 | null>(null);
    const [selectedTemp, setSelectedTemp] = useState<number | null>(null);

    return(
        <div style={{flex:1, display:"flex",backgroundColor:"#111", width:"100%",height:`100vh`, alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            <div onClick={()=> navigation("/home")} style={{color: "azure", marginBottom:20,marginTop:20, fontFamily:"sans-serif", fontSize:40}}>FOOTBALL STATS</div>
            <div style={{flex:1, display:"flex",flexDirection:"column",justifyContent:"space-around",width:"100%", alignItems:"center"}}>
            <div style={{display:"flex"}}>

            <LeagueSelectBox
                placeholder='Selecione a liga'
                selected={selectedItem}
                options={options}
                onChange={(selection: Option1) => {
                    setSelectedItem(selection)
                    setLeagueId(selection.league.id.toString())
                    setEnable("flex")
                
                    
                }}
                />

             <TempSelectBox
                placeholder='Selecione a temporada'
                selected={selectedTemp}
                temp={temp}
                enable={enable}
                onChange={(selection: number) => {
                    setSelectedTemp(selection)
                    setSeason(selection.toString())
                         axios.get(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=${selection}`, {
                     "headers": {
                         "x-rapidapi-host": "v3.football.api-sports.io",
                         "x-rapidapi-key": token.toString()
                     }
                 })
                 .then(response => {
                     setTeams(response.data.response)
                 }).catch(error => {console.log(error)})
 
                }}
                /> 
                </div> 
                <div style={{display:"flex",padding:30, width:"100%",height:"100%", flexWrap:"wrap",justifyContent:"center"}}>
                {teams?.map((team)=>(
                    <button className="button"
                    onClick={()=> {
                        setTeamId(team.team.id.toString())
                        setTeamName(team.team.name)
                        navigation("/teampage")
                    }}
                    style={{fontFamily:"monospace",backgroundColor:"#adadad", fontSize:14, display:"flex", flexDirection:"column", width:150, height:150,alignItems:"center", justifyContent:"center",marginBottom:15, borderRadius:10,marginRight:10, borderWidth:0}}>
                        <img src={team.team.logo} style={{width:50, height:50, marginBottom:15}} alt=""  />
                        {team.team.name}
                
                    </button>
                ))}
                </div>
            </div>
            
            <button onClick={()=> {
                navigation("/home")
                setCountry("")
            }}
            style={{backgroundColor:"red", width:300, height:30, borderWidth:0,marginBottom:15}} className="button">Alterar País</button>
        </div>
    )
}