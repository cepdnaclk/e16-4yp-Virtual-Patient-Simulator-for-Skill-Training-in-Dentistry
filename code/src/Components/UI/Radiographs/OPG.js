import { height } from "@mui/system";
import img3 from "../../../Images/80.png"
import './Case.css'
import { useSelector,useDispatch} from "react-redux";


function OPG() {
  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  
    return (
      <div className ="contPic"
        
       ><img src={selectedCaseDetails.DPT} height={300} width={600}  /></div>
    );
  }
  
  export default OPG;
  