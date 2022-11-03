
import Item from './Component/Item';
import Main from './Component/Main';
import Topbutton from './Topbutton';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Intro from './survey/Intro';
import Survey from './survey/Survey';
import Step1 from "./survey/Step1";
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




function App() {


  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Header />
        <Route exact={true} path="/" component={Main} />
       <Route path="/servicecenter" component={ServiceCenter} />
       <Route path="/mypage" component={MyPage} />
       <Route path="/item" component={Item} />
       <Route path="/notice" component={Notice} />
       <Route path="/noticedetail" component={NoticeDetail} />
        <Route path="/intro" component={Intro} />
        <Route path="/cart" component={MyCart} />
        <Route path="/itemlist" component={ItemList} />
        
        <Footer />
        {/* <Route path="/surveyStart" component={Step1}><Survey /></Route>  */}
        <Topbutton></Topbutton>
      </BrowserRouter>

    </>
  );
}

export default App;
