
import {Row,Col} from 'react-bootstrap'

const Statistics = () => {
    return(
        <Row>
            <Col>
                <div className='statistics-box' >
                    <h6 className='figures'>1</h6>
                    <p>Total Item(s) Sold</p>
                </div>
            </Col>
            <Col>
                <div className='statistics-box'>
                    <h6 className='figures'>80,000</h6>
                    <p>Total Invested Amount</p>
                </div>
            </Col>
            <Col>
                <div className='statistics-box'>
                    <h6 className='figures'>22,500</h6>
                    <p>Total Collected Amount</p>
                </div>
            </Col>
            <Col>
                <div className='statistics-box'>
                    <h6 className='figures'>77,500</h6>
                    <p>Amount To Collect</p>
                </div>
            </Col>
            <Col>
                <div className='statistics-box'>
                    <h6 className='figures'>20,000</h6>
                    <p>Expected Profit</p>
                </div>
            </Col>
        </Row>
    )
}  

export default Statistics;