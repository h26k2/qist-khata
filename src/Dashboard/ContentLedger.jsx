
import {Container, Row , Col} from 'react-bootstrap'
import PopulateTable from '../Components/PopulateTable';

const ContentLedger = ({data,setData}) => {

    let tableFields = ['Item No','Payment Date','Payment Mode','Payment Type','Payment Amount'];

    
    return(
        <Container className="content-ledger" fluid>
            
            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Ledger</span>
                            <button className="btn">Add New</button>
                        </h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <PopulateTable fields={tableFields} data={data}/>
                </Col>
            </Row>

        </Container>
    )
}

export default ContentLedger;