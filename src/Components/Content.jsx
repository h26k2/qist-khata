
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
        {
            name : 'ismail shah', cnic_number : '4240160512159',
            cnic : {
                front : 'sldkfj',
                back : 'skdlfj'
            },
            phone : '03212789262',
            address : 'E-106, Bilal Arcade, Phase 2',
            picture : 'hello world',
            guarantor_name : 'abdul kabeer',
            guarantor_phone : '03152323228',
            guarantor_adddress : 'b-21 love lane, zohra terrace, garden west'
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
        elementToRender = <ContentItems />
    }
    else if(currentView === 'vendors'){
        elementToRender = <ContentVendors />
    }
    else if(currentView === 'ledger'){
        elementToRender = <ContentLedger />
    }


    return elementToRender
        
}

export default Content;