
// import Item from './Compnent/Item';
import Main from './Component/Main';
import Topbutton from './Topbutton';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Intro from './survey/Intro';
import Survey from './survey/Survey';
import Step1 from "./survey/Step1";
import { BrowserRouter, Route } from 'react-router-dom';
import MyPage from './Component/MyPage';
import MyPageCart from './Component/MyCart';


function App() {
  return (
    <>
      {/* <Item></Item> */}
        {/* <Route path="/intro" component={Intro} /> */}
        <Header />
        <Route path='/' component={Main} exact={true}/>
        <Route path="/mypage" component={MyPage} exact={true} />
        <Route path="/mycart" component={MyPageCart} />
        <Footer />
        {/* <Route exact={true} path="/" component={Main} />
        <Route path="/surveyStart" component={Step1}><Survey /></Route> */}
        {/* <Footer/> */}
        <Topbutton />

    </>
  );
}

export default App;
