import Item from "./Component/Item";
import Main from "./Component/Main";
import Topbutton from "./Topbutton";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Intro from "./survey/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./Component/MyPage";
import ServiceCenter from "./Component/ServiceCenter";
import Notice from "./Component/Notice";
import NoticeDetail from "./Component/NoticeDetail";
import ScrollToTop from "./ScrollToTop";
import MyPageCart from "./Component/MyPageCart";
import MyCart from "./Component/MyCart";
import ItemList from "./Component/ItemList";
import ServiceQna from "./Component/ServiceQna";
import Step1 from "./survey/Step1";
import Survey from "./survey/Survey";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Agreement from "./Component/Agreement";
import Private from "./Component/Private";
import Company from "./Component/Compnay";
import FindAccount from "./Component/FindAccount";
import FindId from "./Component/FindId";
import FindPw from "./Component/FindPw";
import MyOrderList from "./Component/MyOrderList";
import MyRefund from "./Component/MyRefund";
import MyReview from "./Component/MyReview";
import MyPageResearch from "./Component/MyResearch";
import MyInfoUp1 from "./Component/MyInfoUp1";
import MyInfoUp2 from "./Component/MyInfoUp2";
import MyInfoDel1 from "./Component/MyInfoDel1";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div id="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/servicecenter" element={<ServiceCenter />} />
          <Route path="/mypage/*" element={<MyPage />}>
            <Route path="myorderlist" element={<MyOrderList />} />
            <Route path="myrefund" element={<MyRefund />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="myreview" element={<MyReview />} />
            <Route path="myresearch" element={<MyPageResearch />} />
            <Route path="myinfo" element={<MyInfoUp1 />} />
            <Route path="modify" element={<MyInfoUp2 />} />

            <Route path="myinfodel" element={<MyInfoDel1 />} />
          </Route>
          <Route path="/item" element={<Item />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/noticedetail" element={<NoticeDetail />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/serviceqna" element={<ServiceQna />} />
          <Route path="/itemlist" element={<ItemList />} />
          <Route path="/join" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<Private />} />
          <Route path="/company" element={<Company />} />
          <Route path="/findAccount" element={<FindAccount />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/surveyStart" element={<Survey />}>
            {/* <Step1 /> */}
          </Route>
        </Routes>
      </div>
      <Footer />
      {/* <Route path="/surveyStart" element={<Step1}><Survey /></Route>  */}
      <Topbutton></Topbutton>
    </>
  );
}

export default App;
