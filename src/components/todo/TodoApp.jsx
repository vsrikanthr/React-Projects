
import { BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import './TodoApp.css'
import LogOutComponent from './LogOutComponent'
import HeaderComponent from './HeaderComponent'
import TodoComponent from "./TodoComponent";
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import AuthProvider from './security/AuthContext'
import { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children
    return <Navigate to="/" />
    
}
export default function TodoApp() {
    return (
        <div className="TodoApp">
            
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>} />

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                            } />

                        <Route path='/todos' element={
                             <AuthenticatedRoute>
                                 <ListTodosComponent/>
                            </AuthenticatedRoute>
                        } />
                        <Route path='/logout' element={
                             <AuthenticatedRoute>
                                <LogOutComponent />
                             </AuthenticatedRoute>
                        } />

                        <Route path='/todo/:id' element={
                             <AuthenticatedRoute>
                                <TodoComponent />
                             </AuthenticatedRoute>
                        } />

                        <Route path='*' element={<ErrorComponent/>} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            

            
        </div>
    )
}












