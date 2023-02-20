import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from "./Components/SignIn";
import CaseDesc from "./Components/UI/CaseDesc"
import Exam from "./Components/UI/Exam"
import store from './store';
import { Provider } from 'react-redux';
import CaseSelect from "./Components/UI/CaseSelect";
import Radio from "./Components/UI/Radiographs/Radio";
import Invest from "./Components/UI/Invest/Invest";
import Diagnosis from "./Components/UI/Diagnosis/Diagnosis"
//import PrivateRoute from "./Components/auth/PrivateRoute";
import AdminSignIn from "./Components/Admin/AdminSignIn"
import PrivateRoute from "./auth/PrivateRout";
import FeedbackEval from "./Components/UI/FeedbackEval/FeedbackEval";
import Intra from "./Components/UI/Invest/Intra/Intra";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* <Route exact path="/home" element={<Home/>}/> */}
                    <Route exact path="/" element={<SignIn/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/adminSignIn" element={<AdminSignIn/>}/>
                    <Route path="/enterCase" element={<Invest/>}/> 
                    <Route exact path="/caseSelect" element={<PrivateRoute><CaseSelect/></PrivateRoute>}/>
                    <Route exact path="/historyTaking" element={<PrivateRoute><CaseDesc/></PrivateRoute>}/>
                    <Route exact path="/page2" element={<PrivateRoute><Exam/></PrivateRoute>}/>
                    <Route exact path="/page3" element={<PrivateRoute><Radio/></PrivateRoute>}/>
                    <Route exact path="/page4" element={<PrivateRoute><Invest/></PrivateRoute>}/>
                    <Route exact path="/diagnosis" element={<PrivateRoute><Diagnosis/></PrivateRoute>}/>
                    <Route exact path="/feedback" element={<PrivateRoute><FeedbackEval/></PrivateRoute>}/>
                    <Route exact path="/intra" element={<PrivateRoute><Intra/></PrivateRoute>}/>
                    {/* <Route exact path="/adminSignIn" element={<PrivateRoute><AdminSignIn/></PrivateRoute>}/> */}
                    {/* <Route exact path="/enterCase" element={<PrivateRoute><Invest/></PrivateRoute>}/> */}



                    {/* <Route path="/caseSelect" element={<CaseSelect/>}/>
                    <Route path="/historyTaking" element={<CaseDesc/>}/> {/*page1*/}
                    {/* <Route path="/page2" element={<Exam/>}/>
                    <Route path="/page3" element={<Radio/>}/>
                    <Route path="/page4" element={<Invest/>}/>
                    <Route path="/page5" element={<Diagnosis/>}/>
                    <Route path="/adminSignIn" element={<AdminSignIn/>}/>
                    <Route path="/enterCase" element={<Invest/>}/> */} 
                   
                   
                </Routes>
            </Router>
            </Provider>
    );
}

export default App;

function NotFound() {
    return <h2>404- no page found</h2>;
}
