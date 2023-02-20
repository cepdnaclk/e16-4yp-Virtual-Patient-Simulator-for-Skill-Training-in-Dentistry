import './App.css'
import { useSelector } from "react-redux";
import Sensible from './Sensible';

function ThreeD() {
  const caseID='C002'
  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
    return (
      <div>
        {selectedCaseDetails.caseID == caseID ?
        <div>
        <div className="invest" ><h1>No Record !
        <span role="img" aria-label="confused-face">😕</span></h1>
        </div>
     </div> :  <Sensible/> } 
     </div>
    );
  }
  
  export default ThreeD;
  