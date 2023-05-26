import { useContext, useEffect, useState } from "react"
import "./home.css"
import api from "../../services/api";
import { UserContext } from "../../Contexts/UserContext";
import { SelectBox } from "./SelectBox";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigation = useNavigate();

 interface Option {
      name: string
      code?: string
      flag?: string
    }

   
    const {token, setCountry} = useContext(UserContext)
    const [options, setOptions] = useState<Option[]>([]) 


    useEffect(()=>{
        setOptions([
            {
                name: "Brazil",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },
            {
                name: "Argentina",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            }
            ,{
                name: "México",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Uruguai",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Paraguai",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Venezuela",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Chile",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Peru",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            },{
                name: "Colombia",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
            }
        ]
        
        )
     api.get("/countries", {
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": token.toString()
	}
    })
    .then(response => {
    //setOptions(response.data.response)
    })
    

    },[])

    const [selectedItem, setSelectedItem] = useState<Option | null>(null);

    return (
        <div className="container">
            
                <span style={{fontSize:30, marginBottom:10}} className="text">SELECIONE O PAIS:    </span>
                <SelectBox
                placeholder='Selecione aqui'
                selected={selectedItem}
                 options={options}
                onChange={(selection: Option) => {
                    setSelectedItem(selection)
                    setCountry(selection.name)
                }}

                />


            <div className="box-pais">
                <img src={selectedItem?.flag} alt="" style={{width:160, height:100, marginBottom:40}}/>
                <span style={{color:"azure", fontSize:24}}>{selectedItem?.name}</span>
                <button style={{marginTop:20, color: "gray", height:40, padding:10}}
                onClick={()=> {
                    navigation("/team")
                }}
                >SELECIONAR</button>
            </div>
        </div>
    )
}