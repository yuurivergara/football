import { useNavigate } from "react-router-dom"
import "./login.css"
import React, { ChangeEvent } from "react";
import { UserContext } from "../../Contexts/UserContext";
import axios from "axios";

export default function Login(){

    const {token, setToken} = React.useContext(UserContext)
    const navigation = useNavigate();

    const handleTokenInput =  (event: ChangeEvent<HTMLInputElement>) => {
        setToken(event.target.value);
    }

    const handleLogin = () => {
        axios.get("https://v3.football.api-sports.io/status", {
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": token.toString()
            }
        })
        .then(response => {
            if (response.data.errors.length == 0){
                navigation("/home")
            }else{
                alert("Token invalido")
            }
        })
        
        

    }
    return(
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">
                            Bem vindo!
                        </span>
                        <div className="wrap-input">
                            <input type="password" value={token} className="input" onChange={handleTokenInput} />
                            <span className="focus-input" data-placeholder="Token"> 
                                 
                            </span>
                        </div>
                        <div className="container-login-form-btn">
                            
                            <button className="login-form-btn" type="button" onClick={handleLogin}
                            >Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">
                                Não possui conta?
                            </span>
                            <a href="https://dashboard.api-football.com/register" className="txt2">Cadastre-se aqui.</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}