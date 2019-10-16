import React, {useContext} from 'react';
import DFContext from '../contexts/DFContext';

const InfoDistribusiFrekuensi = () => {
  const DFConsumer = useContext(DFContext);
  const info = DFConsumer.state.DF.info;
	return (
		<>
            <div className="mt-4">
                <ul className="list-disc list-inside">
                    <li>Jumlah Data : <span className="text-green-700">{info.n}</span></li>
                    <li>Data tertinggi : <span className="text-green-700">{info.max}</span></li>
                    <li>Data terendah : <span className="text-green-700">{info.min}</span></li>
                    <li>Rentang data : <span className="text-green-700">{info.r}</span></li>
                    <li>Kelas interval : <span className="text-green-700">{info.k}</span></li>
                    <li>Panjang interval : <span className="text-green-700">{info.i}</span></li>
                </ul>
            </div>
        </>
)
}


export default InfoDistribusiFrekuensi;