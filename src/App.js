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
import FindID from "./Component/FindId";
import FindPW from "./Component/FindPw";
import MyOrderList from "./Component/MyOrderList";
import MyRefund from "./Component/MyRefund";
import MyReview from "./Component/MyReview";
import MyPageResearch from "./Component/MyResearch";
import MyInfoUp1 from "./Component/MyInfoUp1";
import MyInfoUp2 from "./Component/MyInfoUp2";
import MyInfoDel1 from "./Component/MyInfoDel1";
import ItemWrite from "./Component/ItemWrite";
import Service from "./Component/Service";
import Result from "./Component/MyResearchDetail";
function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div id="wrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/service/*" element={<Service />}>
            <Route path="center" element={<ServiceCenter />} />
            <Route path="serviceqna" element={<ServiceQna />} />
            <Route path="notice" element={<Notice />} />
          </Route>
          {/* <Route path="/servicecenter" element={<ServiceCenter />} /> */}
          <Route path="/mypage/*" element={<MyPage />}>
            <Route path="myorderlist" element={<MyOrderList />} />
            <Route path="myrefund" element={<MyRefund />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="myreview" element={<MyReview />} />
            <Route path="myresearch" element={<MyPageResearch />} />
            <Route path="myinfo" element={<MyInfoUp1 />} />
            <Route path="modify" element={<MyInfoUp2 />} />
            <Route path="myinfodel" element={<MyInfoDel1 />} />
            <Route path="result/:resultIdx" element={<Result/>} />
          </Route>
          <Route path="/item/:itemIdx" element={<Item />} />
          <Route path="/write" element={<ItemWrite />} />
          <Route path="/noticedetail" element={<NoticeDetail />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/itemlist" element={<ItemList />} />
          <Route path="/join" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<Private />} />
          <Route path="/company" element={<Company />} />
          <Route path="/findAccount" element={<FindAccount />} />
          <Route path="/findid" element={<FindID />} />
          <Route path="/findpw" element={<FindPW />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/surveyStart" element={<Survey />}></Route>
        </Routes>
      </div>
      <Footer />
      {/* <Route path="/surveyStart" element={<Step1}><Survey /></Route>  */}
      <Topbutton></Topbutton>
    </>
  );
}

export default App;
