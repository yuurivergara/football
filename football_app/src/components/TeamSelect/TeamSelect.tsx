import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Contexts/UserContext"
import React, {useState,useEffect} from "react"
import { LeagueSelectBox } from "./LeagueSelectBox"
import { TempSelectBox } from "./TempSelectBox"


export function TeamSelect(){

    interface Option1 {
        leaguename: string
      }
    
    interface Option2 {
        ano:string

    }




    const navigation = useNavigate()
    const [options, setOptions] = useState<Option1[]>([]) 
    const [temp, setTemp] = useState<Option2[]>([]) 
    const {league, setLeague} = React.useContext(UserContext)
    
    useEffect(()=>{
        setOptions([{
            leaguename: "Premier"
        },{
            leaguename: "la liga"
        },{
            leaguename: "champions"
        },{
            leaguename: "liberta"
        },{
            leaguename: "brasileirao"
        },{
            leaguename: "alemao"
        },{
            leaguename: "Premier"
        },{
            leaguename: "Premier"
        },{
            leaguename: "Premier"
        },{
            leaguename: "Premier"
        }
    ])

    setTemp([{
        ano:"2010"
    },{
        ano:"2011",
    },{
        ano:"2012",
    },{
        ano:"2013",
    },{
        ano:"2010",
    },{
        ano:"2010"
    },{
        ano:"2010",
    },{
        ano:"2010",
    },{
        ano:"2010",
    }])
    })
    
    

    
    const {country} = React.useContext(UserContext);
    const [selectedItem, setSelectedItem] = useState<Option1 | null>(null);
    const [selectedTemp, setSelectedTemp] = useState<Option2 | null>(null);

    return(
        <div style={{flex:1, display:"flex",backgroundColor:"#111", width:"100%",height:"100vh", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            <div onClick={()=> navigation("/home")} style={{color: "azure", marginBottom:20,marginTop:20, fontFamily:"sans-serif", fontSize:40}}>FOOTBALL STATS</div>
            <div style={{flex:1, display:"flex",flexDirection:"row", width:"100%" ,justifyContent:"center"}}>
            <div>

            <LeagueSelectBox
                placeholder='Liga'
                selected={selectedItem}
                options={options}
                onChange={(selection: Option1) => {
                    setSelectedItem(selection)
                    setLeague(selection.leaguename)
                }}
                />
                </div>
                <div>

            <TempSelectBox
                placeholder='Ano'
                selected={selectedTemp}
                temp={temp}
                onChange={(selection: Option2) => {
                    setSelectedTemp(selection)
                }}
                />
                </div>
            </div>

            <button style={{backgroundColor:"red", width:300, height:30, borderWidth:0,marginBottom:15}}>Alterar País</button>
        </div>
    )
}