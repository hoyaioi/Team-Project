import '../CSS/ItemReview.css';

function Review() {
    return (
        <table className='review-modal-table'>
            <tbody>
                <tr colspan="3" className="review-modal">
                    <td>
                        <div className='review-modal-cont'>
                            Good
                        </div>
                        <div className='review-comment'> 
                           <span className='comment-name'>코멘트</span> 
                            <div>
                                <sapn>관리자의 코멘트</sapn>
                            </div>
                            <div className='comment-date'>
                                <sapn>작성일자</sapn>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Review;