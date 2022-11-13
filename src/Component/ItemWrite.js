import React from "react";
import "../CSS/ItemWrite.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import parse from "html-react-parser";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ItemWrite = () => {
  const navigate = useNavigate();
  const organsList = ["선택", "간", "눈", "몸", "혈관", "장"];
  const [organSelect, setOrganSelect] = useState("선택");

  const categoryList = ["선택", "추천", "기능별", "대상별", "성분별"];
  const [categorySelect, setCategorySelect] = useState("선택")
  const [selectedThumb, setSelectedThumb] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const saveThumb = (event) => {
    setSelectedThumb(event.target.files[0]);
    
  }
  const saveDetailImg = (event) => {
    setSelectedDetail(event.target.files[0]);
  }
  console.log(selectedThumb);

  const onFileUpload = () => {
    const formData = new FormData();


    // 파일 데이터 저장
    formData.append('itemThumb', selectedThumb);
    formData.append('itemDetailImg', selectedDetail);



    formData.append('itemsDto', JSON.stringify(itemInfo)); // 직렬화하여 객체 저장

    axios.post("http://localhost:8080/itemwrite", formData)
      .then((response) => {
        if (response.status === 200) {
          navigate('/');
          alert("상품이 등록되었습니다.");

        } else {
          alert("상품 등록 실패");
        }
      })

  };




  const selectOrganHandler = (e) => {
    setOrganSelect(e.target.value);
  };

  const selectCategoryHandler = (e) => {
    setCategorySelect(e.target.value);
  };
  console.log(categorySelect);
  console.log(organSelect);

  const [itemInfo, setItemInfo] = useState({
    itemNum: "",
    itemName: "",
    itemPrice: "",
    itemThumb: "",
    itemDetailImg: "",
    itemMaker: "",
    itemHow: "",
    itemExpDate: "",
    itemOrgans: "",
    itemMaterials: "",
    itemSubImg: "",
    categoryName: ""
  });

  // 이미지 업로드


  const getValue = (e) => {
    const { name, value } = e.target;
    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
    console.log(itemInfo);
  };

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
                      <th>대분류</th>
                      <td>
                        <div className="write_select" onChange={getValue}>
                          <select name="categoryName" onChange={selectCategoryHandler} value={categorySelect}>
                            {categoryList.map((category) => (
                              <option
                                value={category}
                                key={category}
                              >
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>분류</th>
                      <td>
                        <div className="write_select" onChange={getValue}>
                          <select name="itemOrgans" onChange={selectOrganHandler} value={organSelect}>
                            {organsList.map((organ) => (
                              <option
                                value={organ}
                                key={organ}
                              >
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
                      <th>상품명</th>
                      <td>
                        <input
                          type="text"
                          className="item_write_title"
                          placeholder="상품명을 입력해주세요"
                          onChange={getValue}
                          name="itemName"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>상품번호</th>
                      <td>
                        <input
                          type="text"
                          className="item_write_title"
                          placeholder="상품명을 입력해주세요"
                          onChange={getValue}
                          name="itemNum"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>유통기한</th>
                      <td>
                        <input
                          type="date"
                          className="item_write_title"
                          placeholder="상품명을 입력해주세요"
                          onChange={getValue}
                          name="itemExpDate"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>가격</th>
                      <td>
                        <input
                          type="number"
                          className="item_write_title"
                          placeholder="상품명을 입력해주세요"
                          onChange={getValue}
                          name="itemPrice"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>제조사</th>
                      <td>
                        <input
                          type="text"
                          className="item_write_title"
                          placeholder="상품명을 입력해주세요"
                          onChange={getValue}
                          name="itemMaker"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>제품썸네일</th>
                      <td>
                        <input type="file" name="itemThumb" onInput={saveThumb} />
                      </td>
                    </tr>
                    <tr>
                      <th>제품메인이미지</th>
                      <td>
                        <input type="file" name="itemDetailImg" onInput={saveDetailImg} />
                      </td>
                    </tr>
                    <tr>
                      <th>제품서브이미지</th>
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
              <button className="serviceqna_btn" onClick={onFileUpload}>
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemWrite;
