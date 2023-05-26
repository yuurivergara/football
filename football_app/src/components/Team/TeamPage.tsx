import { UserContext } from "../../Contexts/UserContext"
import React from "react"
export function TeamPage(){
    const {league} = React.useContext(UserContext)
    return(
    <div style={{justifyContent:"center",alignItems:"center",flex:1, display:"flex", backgroundColor:"#111",width:"100%", height:"100vh"}}>
        <div>

        {league}
        </div>
    </div>

    )
}