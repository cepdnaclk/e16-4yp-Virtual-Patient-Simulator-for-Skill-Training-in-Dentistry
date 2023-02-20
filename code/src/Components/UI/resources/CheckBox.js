import { rgbToHex } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { DentalSheetActions } from "../../../Actions/DentalSheet/DentalSheetActions";

import "./App.css";

function CheckBox (){
    const restoration_checkList = ["1A", "1B", "1C", "1D","2A", "2B", "2C", "2D","3A", "3B", "3C", "3D","4A", "4B", "4C", "4D",
  "5A", "5B", "5C", "5D","6A", "6B", "6C", "6D","7A", "7B","7C", "7D","8A", "8B","8C", "8D","9A", "9B", "9C", "9D",
  "10A", "10B", "10C", "10D","11A", "12B", "13C", "14D","15A", "16B", "17C", "17D","18A", "18B", "18C", "18D",
  "19A", "19B", "19C", "19D","20A", "20B", "20C", "20D","21A", "21B", "21C", "21D","22A", "22B", "22C", "22D",
  "23A", "23B", "23C", "23D","24A", "24B", "24C", "25D","26A", "26B", "26C", "26D","27A", "27B", "27C", "28D",
  "29A", "29B", "29C", "29D","30A", "30B", "30C", "30D","31A", "31B", "31C", "31D","32A", "32B", "32C", "32D"
];
const [checked, setChecked] = useState([]);
const {restorationMark} =useSelector((state) => state.resDentalMarking)
const dispatch = useDispatch()

console.log(restorationMark)

useEffect(() => {
  setChecked(...checked,restorationMark)
}, [])

const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    dispatch(DentalSheetActions.setrestorationMarkDetails(updatedList))
  };

  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

    var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    return(
        

        <div className="app1">
        <div className="checkList">
          <div className="title">Restoration status:</div>
            <div className="list-container" style = {{flex:1, flexWrap: 'wrap'}}>
              {restoration_checkList.map((item1, index) => (
              <div key={index} >
              <input value={item1} style ={{color:'#e6f9ff'}} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item1)}>{item1}</span>
            </div>
            ))}
          </div>
        </div>

        <div className="listcont">
          {`Restoration List: ${checkedItems}`}
        </div>
      </div>


    )
}

export default CheckBox;