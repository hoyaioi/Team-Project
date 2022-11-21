
import axios from "axios";
import "../CSS/QnaWrite.css";

function QnaWrite({itemNum}) {

    
    const memEmail = sessionStorage.getItem('memEmail');

    if (memEmail === null) {
        alert("로그인 후 이용해주세요.");
        window.location.href = "/login";
    }
    const handleCheck = (e) => {
        console.log(itemNum);
    }

    const handlerClickSubmit = () => {
        const qnaTitle = document.querySelector("#qna_title").value;
        const qnaContent = document.querySelector("#qna_content").value;

        if (qnaTitle === "") {
            alert("제목을 입력해주세요.");
            return;
        }

        if (qnaContent === "") {
            alert("내용을 입력해주세요.");
            return;
        }

        const qnaData = {
            qnaTitle: qnaTitle,
            qnaContent: qnaContent,
            memEmail: memEmail,
            itemIdx: itemNum
        }

        axios.post("http://localhost:8080/api/qna/write", qnaData)
            .then(response => {
                if (response.status === 200) {
                    alert("문의글이 정상적으로 등록되었습니다.");
                    window.location.href = "/qna";
                } else {
                    alert("문의글 등록에 실패했습니다.");
                    return;
                }
            })
            .catch(error => console.log(error));
    }



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

                                            <textarea className="qna_content" cols="80" rows="10">

                                            </textarea>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                    <div className="qnaWrite_btn_box">
                        <button className="qnaWrite_btn_del" onClick={handleCheck}>취소</button>
                        <button className="qnaWrite_btn">저장</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default QnaWrite;