import './styles.css'
import { Table } from 'react-bootstrap';
import { Card } from '@mui/material';
import { useSelector } from "react-redux";
import NoRecord from '../NoRecord.js';
import Grid from '@mui/material/Grid';

function Sensible(){
    return (
    <div>
        <Grid Container>
            <Grid Item xs={4}>
                <img src='https://firebasestorage.googleapis.com/v0/b/vitual-patient.appspot.com/o/Cases%2FC001%2FsensibilityR.png?alt=media&token=feb6a8a3-5dcd-4eaf-b81e-ad6c11a84340'/>
            </Grid>
            <Grid Item xs={8}>
                <div className="HAsec1">
                    <Card sx={{ maxWidth: 1000, maxHeight: 500}}>
                        <div className='HAtable1'>
                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <th>Tooth 17</th>
                                    <th>Tooth 27</th>
                                </tr>
                                <tr>
                                    <td>
                                    Delayed response
                                    </td>
                                    <td>
                                    Delayed response
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                </div>
            </Grid>
        </Grid>
    </div>
    );
}

export default Sensible;