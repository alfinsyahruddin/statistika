import React, {useEffect, useState, useContext} from 'react';
import '../styles/DistribusiFrekuensi.css';
import TabelDistribusiFrekuensi from './TabelDistribusiFrekuensi';
import InfoDistribusiFrekuensi from './InfoDistribusiFrekuensi';
import {withRouter} from 'react-router-dom'
import BottomButton from './BottomButton';
import DFContext from '../contexts/DFContext';

const ResultPemusatanDataTunggal = ({history}) => {
    const DFConsumer = useContext(DFContext);
    const all_data = DFConsumer.state.DF.all_data.map(v => Number(v.text))
  	// const [data, setData] = useState([{"id":"50","text":"50"},{"id":"78","text":"78"},{"id":"85","text":"85"},{"id":"94","text":"94"},{"id":"65","text":"65"},{"id":"95","text":"95"},{"id":"67","text":"67"},{"id":"96","text":"96"},{"id":"60","text":"60"},{"id":"88","text":"88"},{"id":"74","text":"74"},{"id":"72","text":"72"},{"id":"71","text":"71"},{"id":"90","text":"90"},{"id":"86","text":"86"},{"id":"78","text":"78"},{"id":"55","text":"55"},{"id":"81","text":"81"},{"id":"59","text":"59"},{"id":"65","text":"65"},{"id":"82","text":"82"},{"id":"75","text":"75"},{"id":"63","text":"63"},{"id":"81","text":"81"},{"id":"76","text":"76"},{"id":"78","text":"78"},{"id":"84","text":"84"},{"id":"85","text":"85"},{"id":"70","text":"70"},{"id":"78","text":"78"},{"id":"66","text":"66"},{"id":"95","text":"95"},{"id":"80","text":"80"},{"id":"70","text":"70"},{"id":"75","text":"75"},{"id":"88","text":"88"},{"id":"64","text":"64"},{"id":"68","text":"68"},{"id":"87","text":"87"},{"id":"96","text":"96"}])
    const [data, setData] = useState(all_data === undefined ? [] : all_data)
    useEffect(() => {
    	console.log('DF DATA ==> ', all_data)
    	console.log('MEAN', getMean(data))
    	console.log('MEDIAN', getMedian(data))
    	console.log('MODUS', getModus(data))
    })

    const getMean = (values) => {
    	console.log(values.length)
    	let mean = values.reduce((acc, cur) => { return acc+Number(cur)}, 0) / values.length
    	return mean.toFixed(2)
    }

	const getMedian = (values) => {
	  if(values.length ===0) return 0;

	  values.sort(function(a,b){
	    return a-b;
	  });

	  var half = Math.floor(values.length / 2);

	  if (values.length % 2) {	  	
	    return values[half];
	  } else {
        return (values[half - 1] + values[half]) / 2.0;          
      }

	}

const getModus = (values) => {
	  let modus = Object.values(
	    values.reduce((count, e) => {
	      if (!(e in count)) {
	        count[e] = [0, e];
	      }
	      count[e][0]++;
	      return count;
	    }, {})
	  ).reduce((c, v) => v[0] < c[0] ? c : v, [0, null])[1];

	  return modus;
}




	return (
		<>
			<h1 className="text-xl text-green-700">Hasil Ukuran Pemusatan Data</h1>

            <div className="mt-4">
                <ul className="list-disc list-inside">
                    <li>Mean : <span className="text-green-700">{getMean(data)}</span></li>
                    <li>Median : <span className="text-green-700">{getMedian(data)}</span></li>
                    <li>Modus : <span className="text-green-700">{getModus(data)}</span></li>
                </ul>
            </div>

            <BottomButton titleLeft="Kembali" leftFunc={() => (history.goBack())} btnRight={false} />
        </>
    )
}


export default withRouter(ResultPemusatanDataTunggal)