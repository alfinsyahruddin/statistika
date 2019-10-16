import React, {useState, useContext} from 'react';
import '../styles/DistribusiFrekuensi.css';
import {withRouter} from 'react-router-dom'
import { FaPlus, FaTimes, FaArrowLeft } from 'react-icons/fa';
import DiagramContext from '../contexts/DiagramContext';

const DiagramGenerator = ({history}) => {
	const DiagramConsumer = useContext(DiagramContext);
	const DiagramData = DiagramConsumer.state.Diagram.data;
	const [fields, setFields] = useState(DiagramData.length === 0 ? [{ label: '', nilai: '' }] : DiagramData);

	const handleChangeLabel = (i, event) => {
		const labels = [...fields];
		labels[i].label = event.target.value;
		setFields(labels);
	}
	const handleChangeNilai = (i, event) => {
		const _fields = [...fields];
		_fields[i].nilai = event.target.value;
		setFields(_fields);
	}

	const handleAdd = () => {
		const _fields = [...fields];
		_fields.push({ label: null, nilai: null });
		setFields(_fields);
	}

	const handleRemove = (i) => {
		const _fields = [...fields];
		_fields.splice(i, 1);
		setFields(_fields);
	}
	const handleSubmit = () => {
		const regex = new RegExp(/^(\d*)-(\d*)$/)
		let isDF = [];
		fields.forEach((v, k) => {
			if (regex.test(fields[k].label)) {
				isDF.push(true)
			} else {
				isDF.push(false)
			}
		})
		if (!isDF.includes(false)) {
			const newFields = fields.map(f => {
				return {
					label: f.label,
					nilai: f.nilai,
					from: f.label.split('-')[0],
					to: f.label.split('-')[1]
				}
			})
		    DiagramConsumer.dispatch({
		      type: 'UPDATE_DIAGRAM',
		      payload: {
		        data: newFields
		      }
		    })

		    history.push({
		    	pathname: '/diagram_generator/chart_2'
		    })

		} else {
		    DiagramConsumer.dispatch({
		      type: 'UPDATE_DIAGRAM',
		      payload: {
		        data: fields
		      }
		    })

		    history.push({
		    	pathname: '/diagram_generator/chart'
		    })
		}

	}
	return (
		<>
			<h1 className="text-xl text-green-600 mb-2">
			<button className="focus:outline-none" onClick={() => {
				history.push({
					pathname: '/'
				})
			}}><FaArrowLeft color="#48bb78" style={{display: 'inline-block', marginRight: 4}} /></button> Membuat Diagram</h1>
			<hr/>
			{fields.map((field, idx) => {
				return (
				  <div key={`${field}-${idx}`} className="w-full mt-4 bg-white rounded-lg p-4 relative">
					  <button type="button" onClick={() => handleRemove(idx)} className="focus:outline-none absolute top-n-2 right-n-2 rounded-full text-white bg-red-400 border-4 border-white text-center w-10 h-10 flex flex-row justify-center items-center">
						<FaTimes color="#fff" style={{display: 'inline-block'}} size={16} />
					  </button>
					  <div className="pt-4">
					    <input
					      value={field.label !== null ? field.label : ''}
					      className="w-8/12 p-2 bg-gray-100 rounded-lg focus:outline-none mr-2"
					      type="text"
					      placeholder="Label"
					      label={field.label || ""}
					      onChange={e => handleChangeLabel(idx, e)}
					      autoFocus={true}
					    />
					    <input
					      value={field.nilai !== null ? field.nilai : ''}
					      className="w-3/12 p-2 bg-gray-100 rounded-lg focus:outline-none"
					      type="number"
					      placeholder="Nilai"
					      label={field.nilai || ""}
					      onChange={e => handleChangeNilai(idx, e)}
					    />
					  </div>
				  </div>
				);
			})}
			<div className="flex flex-row mt-4">
				<button type="button" onClick={() => handleAdd()} className="focus:outline-none rounded-full bg-white shadow-md hover:shadow-lg text-center w-10 h-10 flex flex-row justify-center items-center">
					<FaPlus color="#26a267" style={{display: 'inline-block'}} size={16} />
				</button>

				<button onClick={handleSubmit} className="flex-1 ml-4 w-full shadow-md hover:shadow-lg focus:outline-none bg-green-500 text-white rounded-lg text-center py-2 font-bold">BUAT DIAGRAM</button>
			</div>

        </>
    )
}


export default withRouter(DiagramGenerator)