
import ContentDashboard from '../Dashboard/ContentDashboard';
import ContentCustomers from '../Dashboard/ContentCustomers';
import ContentItems from '../Dashboard/ContentItems';
import ContentLedger from '../Dashboard/ContentLedger';
import ContentVendors from '../Dashboard/ContentVendors';

import {useState} from 'react'

const Content = ({currentView}) => {


    let [customerContent,setCustomerContent] = useState([
        {
            name : 'hasnain karim', cnic_number : '4240160512159',
            cnic : {
                front : '/pic1.jpg',
                back : '/pic2.jpg'
            },
            phone : '03212789262',
            address : 'E-106, Bilal Arcade, Phase 2',
            picture : '/pic3.jpg',
            guarantor_name : 'abdul kabeer',
            guarantor_phone : '03152323228',
            guarantor_adddress : 'b-21 love lane, zohra terrace, garden west'
        },
    ]);


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


    let elementToRender;

    if(currentView === 'dashboard'){
        elementToRender = <ContentDashboard />
    }
    else if(currentView === 'customers'){
        elementToRender = <ContentCustomers data={customerContent} setData={setCustomerContent}/>
    }
    else if(currentView === 'items'){
        elementToRender = <ContentItems data={itemContent} setData={setItemContent}/>
    }
    else if(currentView === 'vendors'){
        elementToRender = <ContentVendors data={vendorContent} setData={setVendorContent}/>
    }
    else if(currentView === 'ledger'){
        elementToRender = <ContentLedger data={ledgerContent} setData={setLedgerContent}/>
    }


    return elementToRender
        
}

export default Content;