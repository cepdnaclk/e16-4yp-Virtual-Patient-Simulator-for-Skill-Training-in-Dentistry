import { height } from "@mui/system";
import img3 from "../../../Images/200.png"
import './Case.css'
import { useSelector,useDispatch} from "react-redux";
function IOPG() {

  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
    return (
      <div className ="contPics"
        
       ><img src={selectedCaseDetails.IOPA} height={300} width={200} /></div>
    );
  }
  
  export default IOPG;
  