import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch} from "react-redux";
//import { firebaseConnect } from "react-redux-firebase";
import { compose } from 'redux'
import AddCase from "./CRUD/AddCase"
import Navbar from '../Navbar';


export default function AdminSignIn(){
    const [isAdminSignIn,setIsAdminSignIn] =useState(false);
    const handleClick= () => {
        setIsAdminSignIn(true);
    }

    if(isAdminSignIn){
    return(
        <div>
            <div>
                 <Navbar/>
            </div>
           <AddCase/>
           
        </div>
    )
    }
    else{
        return(
            <div>
                
                <button onClick={handleClick}>AdminSignIn</button>
               
            </div>
        )  
    }
}