import React, { useEffect,useState, Fragment } from 'react'
import jwt_decode from 'jwt-decode';
import background from "../../Images/dental_pg.png";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useSelector,useDispatch} from "react-redux";
import { UserActions } from '../../Actions/User/UserActions';
import Swl from 'sweetalert2';
import CaseSelect from '../UI/CaseSelect' 

function SignIn(){
    const [user,setUser]= useState({});
    const {isSignIn} =useSelector((state) => state.user)
    const dispatch = useDispatch()

    function handleCallbackResponse(response){
        console.log("Encoded JWT Id token" + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject.email.length)
        var text =userObject.email
        if(text.match("pdn.ac.lk")){
            setUser(userObject)
            dispatch(UserActions.getCurrentUserDetails(userObject))
        }
        else{
           showAlert();
        }
    }

    function showAlert (){
        Swl.fire({
            title: "Login Failed",
            text: "Use your Dental student account to login",
            icon: "fail",
            confirmButtonText: "OK",
          });
    }

    function handleSignout(event){
        setUser({})
        document.getElementById("signInDiv").hidden=false
    }

    useEffect(()=>{
        /*global google*/
        google.accounts.id.initialize({
            client_id: "305839887405-kho6bmbpfcr24d2jtpksfirb79a8v78v.apps.googleusercontent.com",
            callback:handleCallbackResponse
    })
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:'outline' , size: 'extra-larger' }
        )
        google.accounts.id.prompt();
    } ,[]);

    if(Object.keys(user).length==0 || !isSignIn){
    return(
        <div className ="backd"   xs={8} md={12}>
            <div xs={4} md={12} className='topic1'>
                    Virtual Patient Simulator <br/></div>
            <div xs={4} md={12} className='topic2'>
                    for Skill Training in </div>
            <div xs={3} md={12} className='topic3'>
                    Dentistry</div>
            <div className='authent'>
                <Button className= "relative" id="signInDiv" variant="light"></Button>
                 <p id="errorM"></p>
            </div>
        </div>
    )
            }
            else{
             return(
                <div>
              <CaseSelect/> 
                </div>
             )   
            }
}

export default SignIn;
/* <Button 
className= "position-absolute bottom-0 end-0"
 id="signInDiv" variant="light">Sign In2</Button>  */

/*
        <div className ="app" style={{
            backgroundImage: `url(${background})`,
            height:'120vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
            }}>
              <h3>hello</h3> 
              <Button  variant="warning">Sign In2</Button> 
            <div id="signInDiv"></div>
            {
                Object.keys(user).length!=0 &&
                <button onClick={(e)=>handleSignout(e)}>Sign out</button>
            }
            {user && <div>
              <Header1/> 
                </div>}

*/