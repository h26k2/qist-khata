
import {Container, Row , Col} from 'react-bootstrap'
import PopulateTable from '../Components/PopulateTable';



const ContentItems= ({data,setData}) => {


    let tableFields = ['ID','Item Name','Customer Name','Payment Schedule','Installment Amount','Actual Price','Payable Price',
    'Vendor Name','Duration'];


    return(
        <Container className="content-items" fluid>
            
            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Items</span>
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

export default ContentItems;