import React, { useState ,useEffect} from "react";
import "./App.css";
import sheet from '../../../Images/Dental_sheet.PNG'; 
import "./CheckBox"
import { useSelector,useDispatch } from "react-redux";
import { DentalSheetActions } from "../../../Actions/DentalSheet/DentalSheetActions";

import "./styles.css";
import CheckBox from "./CheckBox";

//console.log(sheet); // /logo.84287d09.png

export default function Mark() {

  // State with list of all checked item
  
  const [checked, setChecked] = useState([]);
  const {cariesMark} =useSelector((state) => state.cariesDentalMarking)
  console.log(cariesMark)
  console.log(checked)

  useEffect(() => {
    setChecked(cariesMark)
  
   
  }, [])
  

  const dispatch = useDispatch()

  const carie_checkList = ["1A", "1B", "1C", "1D","2A", "2B", "2C", "2D","3A", "3B", "3C", "3D","4A", "4B", "4C", "4D",
  "5A", "5B", "5C", "5D","6A", "6B", "6C", "6D","7A", "7B","7C", "7D","8A", "8B","8C", "8D","9A", "9B", "9C", "9D",
  "10A", "10B", "10C", "10D","11A", "12B", "13C", "14D","15A", "16B", "17C", "17D","18A", "18B", "18C", "18D",
  "19A", "19B", "19C", "19D","20A", "20B", "20C", "20D","21A", "21B", "21C", "21D","22A", "22B", "22C", "22D",
  "23A", "23B", "23C", "23D","24A", "24B", "24C", "25D","26A", "26B", "26C", "26D","27A", "27B", "27C", "28D",
  "29A", "29B", "29C", "29D","30A", "30B", "30C", "30D","31A", "31B", "31C", "31D","32A", "32B", "32C", "32D"
];


  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(checked)
    dispatch(DentalSheetActions.setcariesMarkDetails(updatedList))
  };
  


  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";
// dispatch(DentalSheetActions.setcariesMarkDetails(checked))

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div>
      {/* <div style={{position:'absolute',
            left:'40%',
            top:'62%',
            fontSize:'40px',
            fontWeight : 'bold',
            color: '#b80000'
            }}>Plaque Score
            </div> */}

      <div className="Dental_Sheet">
        <img src={sheet}/>
      </div>

      <div className="app1">
        <div className="checkList">
          <div className="title">Caries status:</div>
            <div className="list-container" style = {{flex:1, flexWrap: 'wrap'}}>
              {carie_checkList.map((item, index) => (
              <div key={index} >
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
            ))}
          </div>
        </div>

        <div className="listcont">
          {`Caries List: ${checkedItems}`}
        </div>
      </div>
      <div className="checkboxclass">
        <CheckBox/>
      </div>
    </div>
  );
  
}

  