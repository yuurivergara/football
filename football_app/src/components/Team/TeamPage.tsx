import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
import React, { useEffect, useState, useCallback } from "react"
import { PieChart, Pie, Sector } from "recharts";
import { renderActiveShape } from "../../assets/chart/data";
import axios from "axios"


interface Info {
    team :{id: number, name :string, code:string, country:string, founded: number, national: boolean, logo: string}
}

interface Player {
    player :{id: number, name :string,  nationality:string, photo: string, age: number}
}

export function TeamPage(){

    const data2 = [
       {"minute":{
            "0-15":{
                "total": 4,
                "percentage": "6.06%"
            },
            "16-30":{
                "total": 8,
                "percentage": "6.06%"
            },
            "31-45":{
                "total": 80,
                "percentage": "6.06%"
            },
            "46-60":{
                "total": 3,
                "percentage": "6.06%"
            },
            "61-75":{
                "total": 10,
                "percentage": "6.06%"
            },
            "76-90":{
                "total": 14,
                "percentage": "6.06%"
            },
       }}
      ];
    
    const data =  [{
        "player":{

            "id": 276,
            "name": "Neymar",
            "age": 28,      
            "nationality": "Brazil",
            "photo": "https://media.api-sports.io/football/players/276.png"
            },
            
        },{
            "player":{
    
                "id": 276,
                "name": "Neymar",
                "age": 28,      
                "nationality": "Brazil",
                "photo": "https://media.api-sports.io/football/players/276.png"
                },
                
            },{
                "player":{
        
                    "id": 276,
                    "name": "Neymar",
                    "age": 28,      
                    "nationality": "Brazil",
                    "photo": "https://media.api-sports.io/football/players/276.png"
                    },
                    
                },{
                    "player":{
            
                        "id": 276,
                        "name": "Neymar",
                        "age": 28,      
                        "nationality": "Brazil",
                        "photo": "https://media.api-sports.io/football/players/276.png"
                        },
                        
                    },{
                        "player":{
                
                            "id": 276,
                            "name": "Neymar",
                            "age": 28,      
                            "nationality": "Brazil",
                            "photo": "https://media.api-sports.io/football/players/276.png"
                            },
                            
                        },{
                            "player":{
                    
                                "id": 276,
                                "name": "Neymar",
                                "age": 28,      
                                "nationality": "Brazil",
                                "photo": "https://media.api-sports.io/football/players/276.png"
                                },
                                
                            },{
                                "player":{
                        
                                    "id": 276,
                                    "name": "Neymar",
                                    "age": 28,      
                                    "nationality": "Brazil",
                                    "photo": "https://media.api-sports.io/football/players/276.png"
                                    },
                                    
                                },{
                                    "player":{
                            
                                        "id": 276,
                                        "name": "Neymar",
                                        "age": 28,      
                                        "nationality": "Brazil",
                                        "photo": "https://media.api-sports.io/football/players/276.png"
                                        },
                                        
                                    },{
                                        "player":{
                                
                                            "id": 276,
                                            "name": "Neymar",
                                            "age": 28,      
                                            "nationality": "Brazil",
                                            "photo": "https://media.api-sports.io/football/players/276.png"
                                            },
                                            
                                        },{
                                            "player":{
                                    
                                                "id": 276,
                                                "name": "Neymar",
                                                "age": 28,      
                                                "nationality": "Brazil",
                                                "photo": "https://media.api-sports.io/football/players/276.png"
                                                },
                                                
                                            },{
                                                "player":{
                                        
                                                    "id": 276,
                                                    "name": "Neymar",
                                                    "age": 28,      
                                                    "nationality": "Brazil",
                                                    "photo": "https://media.api-sports.io/football/players/276.png"
                                                    },
                                                    
                                                },{
                                                    "player":{
                                            
                                                        "id": 276,
                                                        "name": "Neymar",
                                                        "age": 28,      
                                                        "nationality": "Brazil",
                                                        "photo": "https://media.api-sports.io/football/players/276.png"
                                                        },
                                                        
                                                    }
        ]

    const lineups =  [
        {
        "formation": "4-2-3-1",
        "played": 32
        },
        {
        "formation": "3-4-1-2",
        "played": 4
        },]  
        
    const fixtures = {
        "played": {
            "home": 19,
            "away": 19,
            "total": 38
            },
            "wins": {
            "home": 10,
            "away": 8,
            "total": 18
            },
            "draws": {
            "home": 7,
            "away": 5,
            "total": 12
            },
            "loses": {
            "home": 2,
            "away": 6,
            "total": 8
            }
    }

        const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_: any, index: any) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
    const {teamId,teamName,leagueId,token, season} = React.useContext(UserContext)
    const [info, setInfo] = useState<Info[] | string>("")
    const [newarray,setNewArray]= useState<any[] | null>(null)
    const navigation = useNavigate()
    
    
        
        const [players, setPlayers] = useState<Player[] | string>("")
        
        
        useEffect(()=>{
        setPlayers(data)

        
        if (newarray == null){
            data2.map((props) =>{
                setNewArray([
                    { name: "0-15", value: props.minute["0-15"].total },
                    { name: "16-30", value: props.minute["16-30"].total },
                    { name: "31-45", value: props.minute["31-45"].total },
                    { name: "46-60", value: props.minute["46-60"].total },
                    { name: "61-75", value: props.minute["61-75"].total},
                    { name: "76-90", value: props.minute["76-90"].total }
                ]) 
            })

        }else{

            console.log("novo array",newarray)
        }
        // axios.get(`https://v3.football.api-sports.io/leagues?id=${teamId}`, {
        //     "headers": {
        //         "x-rapidapi-host": "v3.football.api-sports.io",
        //         "x-rapidapi-key": token.toString()
        //     }
        
        // })
        // .then(response => {
        //     setInfo(response.data.response)
        // }).catch(error => {console.log(error)})
       
       
        // axios.get(`https://v3.football.api-sports.io/players?team=${teamId}&season=${season}`, {
        //     "headers": {
        //         "x-rapidapi-host": "v3.football.api-sports.io",
        //         "x-rapidapi-key": token.toString()
        //     }
        
        // })
        // .then(response => {
        //     setInfo(response.data.response)
        // }).catch(error => {console.log(error)})
        
    },[newarray])



    return(
    <div style={{flex:1, display:"flex", backgroundColor:"#111", height:"100%",flexDirection:"column", alignItems:"center"}}>
        <header style={{padding:10, alignItems:"center",width:"100%"}}>
            <button  onClick={()=> navigation("/home")} style={{color: "azure", fontSize:40, backgroundColor:"#111", borderWidth:0}}>FOOTBALL STATS</button>
        </header>
        <div style={{ flexDirection:"row", display:"flex", backgroundColor:"#adadad" ,width:"80%", borderRadius:20,height:"20%", alignItems:"center", justifyContent:"center"}}>
            <div style={{flexDirection:"row", display:"flex", alignItems:"center",flex:1,justifyContent:"center"}}>

            <img src="" style={{width:80,height:80,marginRight:50}} alt="" />
            <div style={{flexDirection:"column", display:"flex", alignItems:"center"}}>
                <text >//</text>
                <text >Fundado em : XXXX</text>
                <text >//</text>
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
            {data.map((data)=>(
                
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