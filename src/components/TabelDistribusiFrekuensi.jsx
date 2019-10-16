import React, {useContext} from 'react';
import '../styles/TabelDistribusiFrekuensi.css';
import DFContext from '../contexts/DFContext';
import Turus from './Turus';
 
const TabelDistribusiFrekuensi = () => {
  const DFConsumer = useContext(DFContext);
  const data = DFConsumer.state.DF.data;
	return (
		<>
            <div className="container mx-auto p-0 mt-2 overflow-x-auto">
            <table className="table-auto border-collapse bordered-table shadow-lg">
            	<thead>
            		<tr>
	            		<th>Nilai</th>
                        <th>Turus</th>
	            		<th title="Frekuensi">F</th>
                        <th title="Batas Bawah">BB</th>
                        <th title="Batas Atas">BA</th>
                        <th title="Tepi Bawah">TB</th>
                        <th title="Tepi Atas">TA</th>
                        <th title="Titik Tengah">TT</th>
            		</tr>
            	</thead>
            	<tbody>
            		{data.map((o, k) => {
            			return (
            				<tr key={k}>
            					<td>{o.from} - {o.to}</td>
                                <td><Turus number={o.frekuensi} /></td>
                                <td>{o.frekuensi}</td>
                                <td>{o.from}</td>
                                <td>{o.to}</td>
                                <td>{o.from-0.5}</td>
                                <td>{o.to+0.5}</td>
                                <td>{(o.from+o.to)/2}</td>
            				</tr>
            			)
            		})}
            	</tbody>
            </table>

            </div>
		</>
	)
}


export default TabelDistribusiFrekuensi