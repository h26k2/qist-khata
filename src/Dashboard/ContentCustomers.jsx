
import {Container, Row , Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import PopulateTable from '../Components/PopulateTable';

const ContentCustomers = ({data,setData,modal}) => {

    let tableFields = ['Name','CNIC Number','Phone','Address','Guarantor Name',
    'Guarantor Phone','Guarantor Address','CNIC Picture','Picture'];

    return(
        <Container className="content-ledger" fluid>

            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Customers</span>
                            <button className="btn" onClick={modal.handleShow}>Add New</button>
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

export default ContentCustomers;