
function Pagination({total, limit, page, setPage}) {
    const pagesTotal = Math.ceil(total / limit);
    function pageForm(index, page, setPage){
        return(
            <button 
            key={index + 1} 
            onClick={() => setPage(index + 1)} 
            className={page === index + 1 ? "on" : ""}>
                {index + 1}
            </button>
        )
    }
    return (
        <div className="pagination">
            <button onClick={() => setPage(1)} disabled={page === 1}>&lt;&lt;</button>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</button>
            {
                Array(pagesTotal)
                .fill()
                .map((_,index) => {
                    if(page-3 < index+1 && index+1 < page+3){
                        return(
                            pageForm(index, page, setPage)
                        )
                    }
                    if(page < 3 && index+1 < 6){
                        return(
                            pageForm(index, page, setPage)
                        )
                    }
                    if(page > pagesTotal-3 && index+1 > pagesTotal-5){
                        return(
                            pageForm(index, page, setPage)
                        )
                    }
                })
            }
            <button onClick={() => setPage(page + 1)} disabled={page === pagesTotal}>&gt;</button>
            <button onClick={() => setPage(pagesTotal)} disabled={page === pagesTotal}>&gt;&gt;</button>
        </div>
    )
}

export default Pagination;