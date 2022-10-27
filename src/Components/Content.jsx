
import ContentDashboard from '../Dashboard/ContentDashboard';
import ContentCustomers from '../Dashboard/ContentCustomers';
import ContentItems from '../Dashboard/ContentItems';
import ContentLedger from '../Dashboard/ContentLedger';
import ContentVendors from '../Dashboard/ContentVendors';

import {useState} from 'react'
import { Modal } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Content = ({currentView}) => {

    let [currentCustomer,setCurrentCustomer] = useState({});

    const handleCustomerInput = (e) => {
        
        let {id} = e.target;
        let {value} = e.target;


        if(id === 'name'){
            setCurrentCustomer((prev)=>{
                return {
                    ...prev,
                    name : value
                }
            });
        }
        else if(id === 'cnic_number'){
            setCurrentCustomer((prev)=>{
                return {
                    ...prev,
                    cnic_number : value
                }
            });
        }
        else if(id === 'phone'){
            setCurrentCustomer((prev)=>{
                return {
                    ...prev,
                    phone : value
                }
            });
        }
        else if(id === 'address'){
            setCurrentCustomer((prev)=>{
                return {
                    ...prev,
                    address : value
                }
            });
        }
        else if(id === 'guarantor_name'){
            setCurrentCustomer((prev)=>{
                return {
                    ...prev,
                    guarantor_name : value
                }
            });
        }
        else if(id === 'guarantor_phone'){
            
            setCurrentCustomer((prev)=>{
                return {
                    ...prev,
                    guarantor_phone : value
                }
            });
        }
        else if(id === 'guarantor_adddress'){
            setCurrentCustomer((prev)=>{
                return {
                    ...prev,
                    guarantor_adddress : value
                }
            });
        }
        

        

    }

    const createCustomer = () => {
        if(Object.entries(currentCustomer).length === 7){
            setCustomerContent((prev)=>{
                return [...prev,
                    {...currentCustomer,
                        cnic : {
                            front : '/pic1.jpg',
                            back : '/pic2.jpg'
                        },
                        picture : '/pic3.jpg'
                    }
                ]
            })
        }
    }

    // modal which 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   
    let [customerContent,setCustomerContent] = useState([
        {
            name : 'hasnain karim', cnic_number : '4240160512159',
            phone : '03212789262',
            address : 'E-106, Bilal Arcade, Phase 2',
            guarantor_name : 'abdul kabeer',
            guarantor_phone : '03152323228',
            guarantor_adddress : 'b-21 love lane, zohra terrace, garden west',
            cnic : {
                front : '/pic1.jpg',
                back : '/pic2.jpg'
            },
            picture : '/pic3.jpg',

        },
    ]);

    console.log(customerContent);
    let [vendorContent,setVendorContent] = useState([
        {
            id : '1' , name : 'hasnain karim', address : '70/2 garden east'
        }
    ]);

    let [itemContent,setItemContent] = useState([
        {
            id : '1', 
            item_name : 'Superpower 70cc bike', 
            customer_name : 'hasnain karim', 
            payment_schedule : 'monthly',
            installment_amount : '2500',
            actual_price : '80000',
            payable_price : '100000',
            vendor_name : 'Maqbool Shah',
            duration : '40 Months'
        }
    ]);

    let [ledgerContent,setLedgerContent] = useState([
        {
            item_no : '1',
            payment_date : '27-09-2022',
            payment_mode : 'Cash',
            payment_type : 'advance',
            payment_amount : '20000'
        },
        {
            item_no : '1',
            payment_date : '27-10-2022',
            payment_mode : 'Cash',
            payment_type : 'installment',
            payment_amount : '2500'
        }
    ]);


    let elementToRender , modalTitle , modalContent , modalButton;

    if(currentView === 'dashboard'){
        elementToRender = <ContentDashboard />
    }
    else if(currentView === 'customers'){
        elementToRender = <ContentCustomers data={customerContent} setData={setCustomerContent} modal={{handleShow}}/>
        modalTitle = 'Add New Customer';
        modalContent = (
            <div className='form-container'>

                <div className='qk-input-field'>
                    <label htmlFor='name'>customer Name</label>
                    <input type='text' placeholder='Enter name' id="name"  onChange={handleCustomerInput}/>
                </div>

                <div className='qk-input-field'>
                    <label htmlFor='cnic_number'>customer NIC</label>
                    <input type='number' placeholder='Enter name' id="cnic_number" onChange={handleCustomerInput}/>
                </div>

                <div className='qk-input-field'>
                    <label htmlFor='phone'>customer Phone</label>
                    <input type='number' placeholder='Enter name' id="phone" onChange={handleCustomerInput}/>
                </div>

                <div className='qk-input-field w-100'>
                    <label htmlFor='address'>customer Address</label>
                    <textarea placeholder='Enter name' id="address" onChange={handleCustomerInput}></textarea>
                </div>

                <div className='qk-input-field'>
                    <label htmlFor='guarantor_name'>Guarantor Name</label>
                    <input type='text' placeholder='Enter name' id="guarantor_name" onChange={handleCustomerInput}/>
                </div>

                <div className='qk-input-field'>
                    <label htmlFor='guarantor_phone'>Guarantor Phone</label>
                    <input type='number' placeholder='Enter name' id="guarantor_phone" onChange={handleCustomerInput}/>
                </div>

                <div className='qk-input-field w-100'>
                    <label htmlFor='guarantor_adddress'>Guarantor Address</label>
                    <textarea placeholder='Enter name' id="guarantor_adddress" onChange={handleCustomerInput}></textarea>
                </div>

            </div>
        )
        modalButton = (
            <button className='btn' onClick={createCustomer}>Save Changes</button>
        )
    }
    else if(currentView === 'items'){
        elementToRender = <ContentItems data={itemContent} setData={setItemContent}/>
        modalTitle = 'Add New Item';
    }
    else if(currentView === 'vendors'){
        elementToRender = <ContentVendors data={vendorContent} setData={setVendorContent}/>
        modalTitle = 'Add New Vendor';
    }
    else if(currentView === 'ledger'){
        elementToRender = <ContentLedger data={ledgerContent} setData={setLedgerContent}/>
        modalTitle = 'Add New Ledger';
    }


    return (
        <>
            {elementToRender}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent}
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose} className='btn'>Close</button>
                    {modalButton}
                </Modal.Footer>
            </Modal>
        </>
    )
        
}

export default Content;