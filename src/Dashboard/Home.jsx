
import { useSearchParams} from "react-router-dom"
import {useState} from 'react' 

import NavigationLinks from '../Components/NavigationLinks'
import Content from '../Components/Content'



const Home = () => {

    // Showing the content based on query parameters logics

    let views = ['dashboard','customers','vendors','items','ledger']
    let valid = false;

    const [searchParams , setSearchParams ] = useSearchParams();

    let currentView = searchParams.get('view');

    if(currentView === null || currentView === undefined){
        currentView = 'dashboard'
    }

    else{
        for(let v of views){
            if(v === currentView){
                valid = true;
            }
        }
    }

    if(valid === false){
        currentView = 'dashboard';
    }

    return(

        <div className="dashboard">
            <div className="sidebar">
                <NavigationLinks views={views} currentView={currentView} />
            </div>
            <div className="content-area">
                {<Content currentView={currentView}/>}
            </div>
        </div>

    )
}


export default Home;