import React, {useEffect, useState, useContext} from 'react';
import '../styles/DistribusiFrekuensi.css';
import TabelDistribusiFrekuensi from './TabelDistribusiFrekuensi';
import InfoDistribusiFrekuensi from './InfoDistribusiFrekuensi';
import {withRouter} from 'react-router-dom'
import BottomButton from './BottomButton';
import PDContext from '../contexts/PDContext';
    
const ResultPemusatanDataKelompok = ({history}) => {
    const PDConsumer = useContext(PDContext);
    const PDData = getPDData(PDConsumer.state.PD.data)
    const [data, setData] = useState(PDData.length === 0 ? [{ label: '', frekuensi: 0 }] : PDData)
    useEffect(() => {
    	console.log('PD DATA ==> ', data)
        getMean(data)
        getMedian(data)
        getModus(data)
    })
    function getPDData (PDD) {
        return PDD.map(val => ({label: val.label, frekuensi: Number(val.frekuensi)}))
    }
    function getMean (data) {
       
        let tabel_mean = data.map(d => {
            let ta = Number(d.label.split('-')[1])+0.5
            let tb = Number(d.label.split('-')[0])-0.5
            let xi = (ta+tb)/2
            return {
                label: d.label,
                frekuensi: d.frekuensi,
                xi: xi,
            }
        })
        let total_data = 0
        let total_frekuensi = 0
        tabel_mean.forEach(d => {
            total_data += d.xi * d.frekuensi
            total_frekuensi += d.frekuensi
        })
        const mean = total_data / total_frekuensi
        console.log('MEAN ==> ', mean.toFixed(2))
        return mean.toFixed(2)
    }
    function getMedian(data) {
        const fkk = getFrekuensiKumulatif(data)
        console.log("FKK", fkk)
        const fkk2 = fkk.reduce((acc, cur, i) => acc+cur.frekuensi, 0) / 2
        console.log('fkk2', fkk2)
        let data_ke = 0;
        let kal = 0
        for (let n=fkk.length-1; n>=0; n--) {
            if (fkk2 < fkk[n].fkk) {
                data_ke = n
                continue;
            }
        }

        console.log('PURE +++ data ke = ', data_ke)
        console.log('data ke = ', fkk[data_ke])

        const tb = Number(fkk[data_ke].label.split('-')[0])-0.5
        const num_fkk = fkk[data_ke-1] === undefined ? 0 : fkk[data_ke-1].fkk
        const fi = fkk[data_ke].frekuensi
        const p = (Number(fkk[0].label.split('-')[1]) - Number(fkk[0].label.split('-')[0])) + 1

        console.log('tb', tb)
        console.log('num_fkk', num_fkk)
        console.log('fi', fi)
        console.log('p', p)

        const me = tb + ((fkk2 - num_fkk) / fi ) * p
        console.log('MEDIAN ++>', me.toFixed(2))
        console.log('----------- END MEDIAN')
        return me.toFixed(2)
    }

    function getFrekuensiKumulatif(data) {
        const fkk = data.map((value, key) => {
            if (key>=0) {
                let num = data.filter((d,i) => i<=key).reduce((acc, cur, i) => {
                    return acc + cur.frekuensi
                }, 0)
                return {
                    label: value.label,
                    frekuensi: value.frekuensi,
                    fkk: num
                }
            } else {
                return {
                    label: value.label,
                    frekuensi: value.frekuensi,
                    fkk: value.frekuensi
                }
            }
        })
        return fkk;

    }

    function getModus(data) {
        let imax = data.findIndex(d => d.frekuensi === Math.max.apply(Math, data.map((v,k) => { return Number(v.frekuensi) }))) // index data f tertinggi
        console.log('TB = ', imax)
        const tb = Number(data[imax].label.split('-')[0])-0.5
        const d1 = data[imax-1] === undefined ? 0 : data[imax].frekuensi - data[imax-1].frekuensi 
        const d2 = data[imax+1] === undefined ? 0 : data[imax].frekuensi - data[imax+1].frekuensi 
        const p = (Number(data[0].label.split('-')[1]) - Number(data[0].label.split('-')[0]))+1
        const mo = tb + ((d1/(d1+d2)) * p)
        console.log('MODUSS : ', mo.toFixed(2))
        return mo.toFixed(2)
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


export default withRouter(ResultPemusatanDataKelompok)