import React from "react";
import "../CSS/ItemWrite.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const ItemWrite = () => {
  const organsList = ["선택", "간", "눈", "몸", "혈관", "장"];
  const [organSelect, setOrganSelect] = useState("선택");

  const selectHandler = (e) => {
    setOrganSelect(e.target.value);
  };
  console.log(organSelect);

  return (
    <div id="main">
      <div className="write_item_wrap ">
        <div className="write_item_form">
          <div className="write_item_title">
            <h3>상품 등록</h3>
          </div>
          <div className="item_board_write">
            <form>
              <div className="item_board_box">
                <table>
                  <tbody>
                    <tr>
                      <th>분류</th>
                      <td>
                        <div className="serviceqna_select">
                          <select onChange={selectHandler} value={organSelect}>
                            {organsList.map((organ) => (
                              <option value={organ} key={organ}>
                                {organ}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>작성자</th>
                      <td>글쓴이~</td>
                    </tr>
                    <tr>
                      <th>제목</th>
                      <td>
                        <input
                          type="text"
                          className="item_write_title"
                          placeholder="상품명을 입력해주세요"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>본문</th>
                      <td>
                        <CKEditor
                          editor={ClassicEditor}
                          data="<p>안녕하세요</p>"
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>첨부파일</th>
                      <td>
                        <input type="file" />
                      </td>
                    </tr>
                    <tr>
                      <th>첨부파일</th>
                      <td>
                        <input type="file" />
                      </td>
                    </tr>
                    <tr>
                      <th>첨부파일</th>
                      <td>
                        <input type="file" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <div className="item_write_btn_box">
              <button className="serviceqna_btn_del">취소</button>
              <button className="serviceqna_btn">저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemWrite;
