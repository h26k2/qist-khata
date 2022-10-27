
import {Container, Row , Col} from 'react-bootstrap'

import PopulateTable from '../Components/PopulateTable';

const ContentVendors = ({data,setData}) => {

    let tableFields = ['ID','Name','Address'];

    return(
        <Container className="content-vendors">
            
            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Vendors</span>
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

export default ContentVendors;