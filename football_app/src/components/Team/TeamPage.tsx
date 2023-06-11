import { UserContext } from "../../Contexts/UserContext"
import React, { useEffect, useState, useCallback } from "react"
import { PieChart, Pie } from "recharts";
import { renderActiveShape } from "../../assets/chart/data";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";


interface Info {
    team :{id: number, name :string, code:string, country:string, founded: number, national: boolean, logo: string}
}

interface Player {
    player :{id: number, name :string,  nationality:string, photo: string, age: number}
}

export default function TeamPage(){
    const navigation = useNavigate()
    const {teamId,leagueId,token, season} = React.useContext(UserContext)
    const [info, setInfo] = useState<Info[] | null>(null)
    const [newarray,setNewArray]= useState<any[] | null>(null)
    const [players, setPlayers] = useState<Player[] | null>(null)
    const [activeIndex, setActiveIndex] = useState(0);
    const [goal, setGoals] = useState<any>(null)
    const [fixtures, setFixtures] = useState<any>(null)
    const [lineups, setLineups] = useState<any[] | null>(null)
    const onPieEnter = useCallback(
    (_: any, index: any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
    
       
    
        
        
        useEffect(()=>{
            if(info == null){

                
                axios.get(`https://v3.football.api-sports.io/teams?id=${teamId}`, {
                    "headers": {
                         "x-rapidapi-host": "v3.football.api-sports.io",
                 "x-rapidapi-key": token.toString()
                  }
        
                })
                 .then(response => {
                setInfo(response.data.response)
                 }).catch(error => {console.log(error)})

                 axios.get(`https://v3.football.api-sports.io/players?team=${teamId}&season=${season}`, {
                "headers": {
                 "x-rapidapi-host": "v3.football.api-sports.io",
                 "x-rapidapi-key": token.toString()
                 }
        
                 })
                .then(response => {
                 setPlayers(response.data.response)
                }).catch(error => {console.log(error)})

                axios.get(`https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${teamId}&league=${leagueId}`, {
                "headers": {
                 "x-rapidapi-host": "v3.football.api-sports.io",
                 "x-rapidapi-key": token.toString()
                 }
        
                 })
                .then(response => {
                 setGoals(response.data.response.goals.for.minute)
                 setFixtures(response.data.response.fixtures)
                 setLineups(response.data.response.lineups)
                }).catch(error => {console.log(error)})
                }
            
            if (newarray == null  && goal != null){
                console.log("AK",goal["0-15"].total)
            
                setNewArray([
                    { name: "0-15", value: goal["0-15"].total },
                    { name: "16-30", value: goal["16-30"].total },
                    { name: "31-45", value: goal["31-45"].total },
                    { name: "46-60", value: goal["46-60"].total },
                    { name: "61-75", value: goal["61-75"].total},
                    { name: "76-90", value: goal["76-90"].total },
                    { name: "91-105", value: goal["91-105"].total },
                    { name: "106-120", value: goal["106-120"].total }
                ]) 
            
            }   
        
        
       
       
       
        
        
    },[newarray, info, goal])


    if (info != null && players != null && newarray != null && lineups != null){
        if(info[0].team == undefined || players[0]== null){
            return(
                <div style={{flex:1 ,height:"100vh",alignItems:"center",justifyContent:"center", display:"flex", backgroundColor:"#111",flexDirection:"column"}}>
                    <text style={{fontSize:30,color:"azure"}}>INFORMAÇÕES NÃO DISPONIVEIS</text>
                    <button onClick={()=> {
                    navigation("/home")
                
                    }}
                    style={{marginTop:30,backgroundColor:"red", width:400, height:50, borderWidth:0,marginBottom:15}}>
                        VOLTAR
                    </button>
                </div>
            )
        }else{

            return(
            <div style={{flex:1, display:"flex", backgroundColor:"#111", height:"100%",flexDirection:"column", alignItems:"center", width:"100vw"}}>
                <Header />
                <div style={{ padding:20,flexDirection:"row", display:"flex", backgroundColor:"#adadad" ,width:"80%", borderRadius:20,height:"20%", alignItems:"center", justifyContent:"center"}}>
                    <div style={{flexDirection:"row", display:"flex", alignItems:"center",flex:1,justifyContent:"center"}}>
        
                    <img src={info[0].team.logo} style={{width:80,height:80,marginRight:50}} alt="" />
                    <div style={{flexDirection:"column", display:"flex", alignItems:"center"}}>
                        
                     <text >{info[0].team.name}</text>
                        <text >Fundado em : {info[0].team.founded}</text>
                        <text >{info[0].team.country}</text> 
                    </div>
                    </div>
                
                </div>
                <text style={{color:"azure", fontSize:30, marginTop:20}}>Jogadores</text>
                <div style={{flexWrap:"wrap",display:"flex",backgroundColor:"#fff", width:"90%",height:"100%", marginTop:30, borderRadius:5,padding:5,marginBottom:15}}>
                <div style={{display:"flex", flexDirection:"row", width:"100%", height:60,  alignItems:"center" }}>
                            <text style={{width:"25%",textAlign:"center"}}>Foto</text>
                            <text style={{width:"25%",textAlign:"center"}}>Nome</text>
                            <text style={{width:"20%",textAlign:"center"}}>Idade</text>
                            <text style={{width:"30%",textAlign:"center"}}>Nacionalidade</text>
                            </div>
                    {players.map((data)=>(
                        
                        <div style={{display:"flex", flexDirection:"row", width:"100%", height:60, justifyContent:"space-around", alignItems:"center"}}>
                            
                            <div style={{width:"25%",textAlign:"center"}}>
                                <img src={data.player.photo} style={{height:50,width:60}} alt="" />
                            </div>
                            <text style={{width:"25%",textAlign:"center"}}>{data.player.name}</text>
                            <text style={{width:"20%",textAlign:"center"}}>{data.player.age}</text>
                            <text style={{width:"30%",textAlign:"center"}}>{data.player.nationality}</text>
        
                        </div>
                    ))}
                </div>
        
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", flex:1, backgroundColor:"white", flexDirection:"row",padding:10, width:"90%", marginBottom:20,borderRadius:5}}>
                <div style={{display:"flex",alignItems:"center", flexDirection:"column", justifyContent:"center", flex:1}}>
                    <text style={{color:"#111", fontSize:24}}>Gols marcados por tempo de jogo</text>
                    
                        {
                            goal["0-15"].total == null && (
                                <text style={{fontSize:18}}>Informações indisponiveis</text>
                            )
                        }

                        {
                            goal["0-15"].total != null && (
                                <PieChart width={600} height={400}>
                                <Pie
                                 activeIndex={activeIndex}
                                 activeShape={renderActiveShape}
                                 data={newarray}
                                    cx={300}
                                 cy={200}
                                 innerRadius={60}
                                 outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                            onMouseEnter={onPieEnter}
                          />
                            </PieChart>
                            )
                        }
                    
                        
                   
                </div>
                <div style={{display:"flex",alignItems:"center", flexDirection:"column", justifyContent:"space-evenly", height:"70vh",width:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
        
                         <text style={{color:"#111", fontSize:24}}> Resultados na temporada</text>
                            
                        <div style={{display:"flex", flexDirection:"column", flex:1, alignItems:"center"}}>
                                <text>Total de jogos:{fixtures.played.total}</text>
                                <text>Total de vitorias:{fixtures.wins.total}</text>
                                <text>Total de derrotas:{fixtures.loses.total}</text>
                                <text>Total de empates:{fixtures.draws.total}</text>
        
                        </div> 
                            
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <text style={{color:"#111", fontSize:24}}> Formações mais utilizadas</text> 
                        <div style={{display:"flex", flexDirection:"column", flex:1, alignItems:"center"}}>
                            {lineups.map((props)=>(
        
                            <text>{props.formation} ({props.played} vezes)</text>
                            ))}
                            
                        </div>
                    </div>
        
                </div>
                
                </div>
            </div>
        
            )
        }
    }else{
        return(
            <div>
                LOADING...
            </div>
        )

    }
}