
import {Link} from 'react-router-dom'

const Pagination = () => {
    return(
        <div className="qk-pagination">
            <Link to={'/'} className='btn'> &#xab; </Link>
            <Link to={'/'} className='btn'> &#x2039; </Link>
            <span>1 of 1</span>
            <Link to={'/'} className='btn'> &#x203A; </Link>
            <Link to={'/'} className='btn'> &#xbb; </Link>
        </div>
    )
}

export default Pagination;