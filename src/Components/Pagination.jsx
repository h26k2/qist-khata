
import {Link} from 'react-router-dom'
import { useSearchParams ,useNavigate} from 'react-router-dom';

const Pagination = ({data}) => {

    const [searchParams , setSearchParams ] = useSearchParams();
    const navigate = useNavigate();

    let pagContent,currentView,pageid;
    
    
    // Finding the active view & page id (if any)
    currentView = searchParams.get('view');
    pageid = searchParams.get('paged');

    // When there is no record then no need of pagination
    if(data === undefined || data === null ||  data.length < 0){
        return null;
    }

    // finding total numbers of records

    let totalPages = Math.ceil(data.length / 10);
    let currentPage;

    if(pageid === undefined || pageid === null){
        currentPage = 1;
    }
    else{
        if(pageid < totalPages){
            currentPage = pageid;
        }
        else{
            currentPage = 1;
        }
    }

    // pagination content when there is only one page

    if(totalPages === currentPage){

        pagContent = (
            <>
                <Link to={`/?view=${currentView}`} className='btn'> &#x2039; </Link>
                <span className='pages-count'><span className='current'>{currentPage}</span> of <span className='total'>{totalPages}</span></span>
                <Link to={`/?view=${currentView}`} className='btn'> &#x203A; </Link>
            </>
        )
    }
    else{

        // if there is no pageid then show the first one

        if(pageid === undefined){

            pagContent = (
                <>
                    
                    <Link to={navigate({
                        pathname : '/',
                        search : `view=${currentView}&paged=${currentPage}`
                    })} className='btn'> &#xab; </Link>

                    <span className='pages-count'><span className='current'>{currentPage}</span> of <span className='total'>{totalPages}</span></span>
                    
                    <Link to={
                        navigate({
                            pathname : '/',
                            search : `view=${currentView}&paged=${(currentPage + 1 < totalPages) ? currentPage +1 : totalPages}`
                        })
                    } className='btn'> &#x203A; </Link>

                </>
                
            )

        }
        else{
            pagContent = (
                <>
                    <Link to={navigate({
                        pathname : '/',
                        search : `view=${currentView}&paged=${(currentPage - 1 > 1) ? currentPage - 1 : currentPage }`
                    })} className='btn'> &#xab; </Link>

                    <span className='pages-count'><span className='current'>{currentPage}</span> of <span className='total'>{totalPages}</span></span>
                    
                    <Link to={
                        navigate({
                            pathname : '/',
                            search : `view=${currentView}&paged=${(currentPage + 1 < totalPages) ? currentPage +1 : totalPages}`
                        })
                    } className='btn'> &#x203A; </Link>

                </>
            )
        }

    }
    

    return(
        <div className="qk-pagination">
           {pagContent}
        </div>
    )
}

export default Pagination;