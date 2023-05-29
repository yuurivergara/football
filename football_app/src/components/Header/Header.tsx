import { useNavigate } from "react-router-dom"
import "./header.css"

export function Header(){
    const navigation = useNavigate()
    return(
    <div style={{ display:"flex", width:"100vw", height:80,alignItems:"center",justifyContent:"center"}}>
        <div style={{marginRight:"20vw"}}>
        <button  onClick={()=> navigation("/home")} style={{color: "azure", fontSize:40, backgroundColor:"#111", borderWidth:0}} className="title">FOOTBALL STATS</button>
        </div>
        <div>
        <button className="button" onClick={()=> navigation("/home")}> Alterar País</button>
        <button className="button" onClick={()=> navigation("/team")}> Alterar liga</button>
        </div>
    </div>

    )
}