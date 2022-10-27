


import {Link} from 'react-router-dom'

const NaviationLinks = ({views,currentView}) => {

    let links = [];

    for(let i=0 ; i<views.length ; i++){
        links.push(
            <li key={i}>
                <Link to={`/?view=${views[i]}`} className={(views[i] === currentView) ? 'active' : ''}>
                    {views[i]}
                </Link>
            </li>
        )
    }

    return(
        <ul className="navigation-links">
            {links}
        </ul>
    )
}

export default NaviationLinks