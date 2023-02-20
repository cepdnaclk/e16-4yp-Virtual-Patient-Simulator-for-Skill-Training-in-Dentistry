import Table from 'react-bootstrap/Table';
import { useSelector} from "react-redux";
import { Card } from '@mui/material';

function PerioChart() {
  const {selectedCaseDetails} = useSelector((state) => state.caseSelected)
  return (
    <div className='pccard'>
      <Card sx={{ maxWidth: 1000, maxHeight: 500}}>
        <div className='pctable2'>
        <Table striped bordered hover>
          
          <tbody>
            <tr>
            
              <td>{selectedCaseDetails.perio_table[0]}</td>
              <td>{selectedCaseDetails.perio_table[1]}</td>
              <td>{selectedCaseDetails.perio_table[2]}</td>
            </tr>
            <tr>
              
              <td>{selectedCaseDetails.perio_table[3]}</td>
              <td>{selectedCaseDetails.perio_table[4]}</td>
              <td>{selectedCaseDetails.perio_table[5]}</td>
            </tr>
            
          </tbody>
        </Table>
        </div>
        </Card>
      </div>
  );
}

export default PerioChart;