import { useParams,Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { retriveHelloWorldBean, retriveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";
export default function WelcomeComponent() {
    

    const {username} = useParams()

    const authContext = useAuth()

    const token = authContext.token

    const [message,setMessage]=useState(null)

    function callHelloWorldRestApi() {
        retriveHelloWorldPathVariable('Srikanth',token)
        .then( (response => successfulResponse(response)))
        .catch((error) =>errorResponse(error))
        .finally(() =>console.log('clean up'))

    }

    
    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(response) {
        console.log(response)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
           <div>Welcome to My React Todo App</div>
           <div>Manage yours todos - <Link to="/todos">Go here</Link></div>
           <div><button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World</button></div>
           <div className='text-info'>{message}</div>
        </div>
    )
}