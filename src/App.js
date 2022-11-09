
import Item from './Component/Item';
import Main from './Component/Main';
import Topbutton from './Topbutton';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Intro from './survey/Intro';
import { BrowserRouter, Route } from 'react-router-dom';
import MyPage from './Component/MyPage';
import ServiceCenter from './Component/ServiceCenter';
import Notice from './Component/Notice';
import NoticeDetail from './Component/NoticeDetail';
import ScrollToTop from './ScrollToTop';
import MyPageCart from './Component/MyPageCart';
import GlobalStyles from './GlobalStyles';
import MyCart from './Component/MyCart';
import ItemList from './Component/ItemList';
import ServiceQna from './Component/ServiceQna';
import Step1 from './survey/Step1';
import Survey from './survey/Survey';
import Register from './Component/Register';
import Login from './Component/Login';
import Agreement from './Component/Agreement';
import Private from './Component/Private';
import Company from './Component/Compnay';
import ReviewWrite from './Component/ReviewWrite';
import { useState } from 'react';



function App() {


  return (
    <>
      <div id='wrapper'>
        <ScrollToTop />
        <Header />
        <Route exact={true} path="/" component={Main} />
        <Route path="/servicecenter" component={ServiceCenter} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/item/:itemIdx" component={Item} exact={true} />
        <Route path="/notice" component={Notice} />
        <Route path="/noticedetail" component={NoticeDetail} />
        <Route path="/intro" component={Intro} />
        <Route path="/cart" component={MyCart} />
        <Route path="/serviceqna" component={ServiceQna} />
        <Route path="/itemlist" component={ItemList} />
        <Route path="/join" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/private" component={Private} />
        <Route path="/company" component={Company} />
        <Route path="/agreement" component={Agreement} />
        <Route path="/surveyStart" component={Step1} ><Survey /></Route>
        </div>
        <Footer />
        {/* <Route path="/surveyStart" component={Step1}><Survey /></Route>  */}
        <Topbutton></Topbutton>

    </>
  );
}

export default App;
