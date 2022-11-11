import { useState } from 'react';
import Pagination from 'react-js-pagination';
import '../CSS/Paging.css';

function Paging() {
    const [page, setPage] = useState(1);

    const handlerPageChange = (page) => {
        setPage(page);
    }

    return (
        <>
            <Pagination
                activePage={page} //현재 페이지
                itemsCountPerPage={10} //한 페이지에 보여줄 아이템 갯수
                totalItemsCount={300} //총 아이템 갯수
                pageRangeDisplayed={5} //보여줄 페이지의 범위
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlerPageChange} //페이지 바뀔 때 핸들링함수
            />
        </>
    )
}

export default Paging;