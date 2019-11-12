import React, {useState, useContext} from 'react';
import {withRouter} from 'react-router-dom'
import { WithContext as ReactTags } from 'react-tag-input';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/DistribusiFrekuensi.css';
import DFContext from '../contexts/DFContext';
import BottomButton from './BottomButton';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PemusatanDataTunggal = ({history}) => {
    const DFConsumer = useContext(DFContext);
    const all_data = DFConsumer.state.DF.all_data
  	// const [data, setData] = useState([{"id":"50","text":"50"},{"id":"78","text":"78"},{"id":"85","text":"85"},{"id":"94","text":"94"},{"id":"65","text":"65"},{"id":"95","text":"95"},{"id":"67","text":"67"},{"id":"96","text":"96"},{"id":"60","text":"60"},{"id":"88","text":"88"},{"id":"74","text":"74"},{"id":"72","text":"72"},{"id":"71","text":"71"},{"id":"90","text":"90"},{"id":"86","text":"86"},{"id":"78","text":"78"},{"id":"55","text":"55"},{"id":"81","text":"81"},{"id":"59","text":"59"},{"id":"65","text":"65"},{"id":"82","text":"82"},{"id":"75","text":"75"},{"id":"63","text":"63"},{"id":"81","text":"81"},{"id":"76","text":"76"},{"id":"78","text":"78"},{"id":"84","text":"84"},{"id":"85","text":"85"},{"id":"70","text":"70"},{"id":"78","text":"78"},{"id":"66","text":"66"},{"id":"95","text":"95"},{"id":"80","text":"80"},{"id":"70","text":"70"},{"id":"75","text":"75"},{"id":"88","text":"88"},{"id":"64","text":"64"},{"id":"68","text":"68"},{"id":"87","text":"87"},{"id":"96","text":"96"}])
    const [data, setData] = useState(all_data === undefined ? [] : all_data)
    const handleDelete = (i) => {
        setData(data.filter((tag, index) => index !== i))
    }

    const handleAddition = (newData) => {
        if (newData !== "") {        
            setData([...data, newData]);
        }
    }
 
    const handleDrag = (tag, currPos, newPos) => {
        const _data = [...data];
        const newData = _data.slice();
 
        newData.splice(currPos, 1);
        newData.splice(newPos, 0, tag);
 
        // re-render
        setData(newData)
    }

    const hitung = () => {

  		let max = Math.max.apply(Math, data.map(function(o) { return Number(o.text); })) // data tertinggi
  		let min = Math.min.apply(Math, data.map(function(o) { return Number(o.text); })) // data terendah
  		let r = max-min // Rentang atau jangkauan data
  		let n = data.length // Banyaknya data
  		let k = Math.round((3.3 * (Math.log(n)/Math.LN10)) + 1); // Kelas Interval
  		let i = Math.round(r/k) // Panjang Interval

      // menentukan range atau rentang
      const range = []
      for (let x=min; x<=max; x+=i) {
          range.push({
              from: x,
              to: x+i-1,
              frekuensi: 0,
          })
      }

      // mencari frekuensi tiap angka
      const flags = [], out = [];
  		for(let x=0; x < data.length; x++) {
  		    if (flags[data[x].text]) {
  		    	let idx = out.findIndex(o => o.text === data[x].text)
  		    	out[idx].frekuensi = (out[idx].frekuensi + 1) || 1
  		    } else {
  			    flags[data[x].text] = true;
  			    out.push({ text: data[x].text, frekuensi: 1 });
  		    }
  		}

      // mencari frekuensi tiap range
      const flags2 = [];
      for(let x=0; x < out.length; x++) {
          let idx = out.findIndex(o => o.text === out[x].text)
          range.map(rg => {
              if ((flags2[out[x]] || Number(out[idx].text) === min) && Number(out[idx].text) >= rg.from && Number(out[idx].text) <= rg.to) {
                  rg.frekuensi = rg.frekuensi + Number(out[x].frekuensi)
              } else {
                  flags2[out[x]] = true
              }
          })
      }

       DFConsumer.dispatch({
        type: 'UPDATE_DF',
        payload: {
          data: range,
          all_data: data,
          info: {
            max, min, r, n, k, i,
          }
        }
       })

       history.push({
        pathname: '/pemusatan_data/tunggal/result'
       })
    }
	return (
          <>
            <h1 className="text-xl text-green-600 mb-2">
            <button className="focus:outline-none" onClick={() => {
              history.push({
                pathname: '/pemusatan_data'
              })
            }}><FaArrowLeft color="#48bb78" style={{display: 'inline-block', marginRight: 4}} /></button> Pemusatan Data - Tunggal</h1>
            <hr/>
      			<h1 className="text-lg text-gray-600 mt-1">Data :</h1>
           	<ReactTags tags={data}
           		allowUnique={false}
           		allowDragDrop={true}
           		inputFieldPosition="bottom"
           		placeholder="Tekan enter untuk memasukkan data..."
           		autoFocus={true}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                delimiters={delimiters} />
            <BottomButton btnLeft={false} titleRight="Hitung" rightFunc={hitung} />

      		</>
	)
}


export default withRouter(PemusatanDataTunggal)