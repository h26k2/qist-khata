

import Table from 'react-bootstrap/Table';
import Pagination from './Pagination';

const PopulateTable = ({data,fields}) => {

    let headings = [];

    for(let i=0 ; i<fields.length ; i++){
        headings.push(
            <th key={i}>{fields[i]}</th>
        )
    }

    let dataToRender = [];


    for(let i=0 ; i<data.length ; i++){
        
        let tempCols = [];

        for(let [key,value] of Object.entries(data[i])){

            if(key === 'cnic' ){
                
                tempCols.push(
                    <td key={`${key}_${i}`}>
                        <span className={`table-pic-wrapper nic`} style={{backgroundImage : `url('${value.front}')`}}></span>
                        <span className={`table-pic-wrapper nic`} style={{backgroundImage : `url('${value.back}')`}}></span>
                    </td>
                )

            }
            else if(key === 'picture'){
                tempCols.push(
                    <td key={`${key}_${i}`}>
                        <span className={`table-pic-wrapper`} style={{backgroundImage : `url('${value}')`}}></span>
                    </td>
                )
            }
            else{
                tempCols.push(
                    <td key={`${key}_${i}`}>
                        {value}
                    </td>
                )
            }

        }

        dataToRender.push(
            <tr key={i}>
                {tempCols}
            </tr>
        )

    }

    return(
        <>
        
        <Table className='qk-table'>
            <thead>
                <tr>
                    {headings}
                </tr>
            </thead>
            <tbody>
                {(dataToRender.length > 0) ? dataToRender : null}
            </tbody>
        </Table>

        {(dataToRender.length < 1) ? <span className='no-records'> No Records were found </span> : null}

        <Pagination />
        </>
    )
}

export default PopulateTable;