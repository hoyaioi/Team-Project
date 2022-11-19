
import { useEffect } from "react";
import "../CSS/QnaWrite.css";

function QnaWrite() {


    return (
        <>
            <div className="qnaWrite_board_sec">
                <div className="qnaWrite_board_title">
                    <h3>상풍문의 글 작성</h3>
                </div>
                <div className="qnaWrite_board_write">
                    <form>
                        <div className="qnaWrite_board_box">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                                <img></img>
                                        </th>
                                        <td>
                                            상품명
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>작성자</th>
                                        <td>회원이메일</td>
                                    </tr>
                                    <tr>
                                        <th>제목</th>
                                        <td>
                                            <input
                                                type="text"
                                                className="qna_title"
                                                placeholder="문의하실 제목을 입력해주세요(임시)"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>내용</th>
                                        <td>
                                           
                                            <textarea></textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                    <div className="qnaWrite_btn_box">
                        <button className="qnaWrite_btn_del">취소</button>
                        <button className="qnaWrite_btn">저장</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default QnaWrite;