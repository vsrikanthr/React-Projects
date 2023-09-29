import { useState } from "react"
import { useNavigate} from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {

    const [username,setUsername] = useState("in28minutes")
    const [password,setPassword] = useState("dummy");
    const [showSuccessMessage,setshowSuccessMessage] = useState(false);
    const [showErrorMessage,setErrorMessage] = useState(false);
    const navigate = useNavigate();

    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    async function handleSubmit() {
        if(await authContext.login(username,password)) {
            navigate(`/welcome/${username}`)
            
        } else {  

            setErrorMessage(true)
        }

    }

   
    return (
        <div className="Login">
            {showErrorMessage && <div className ="errorMessage">Authenticated Failed,Please check your credentials</div> }
            <div className="LoginForm">
                <h1>Time to Login</h1>
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value = {username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value = {password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick = {handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}