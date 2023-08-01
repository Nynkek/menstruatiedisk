import {Routes, Route, useLocation } from 'react-router-dom'
import {useLayoutEffect, useState} from 'react'
import './App.css';

import HomePage from "./pages/HomePage";
import Information from "./pages/Information";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import headerImg
    from '../src/assets/headers/menstruatiedisk.nl-kiezen-quiz-6.jpg'

import Donate from "./pages/Donate";
import Header from "./components/pageItems/header/Header";
import Footer from "./components/pageItems/footer/Footer";
import FaqPage from "./pages/Faq-page";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Elements from "./pages/Elements";
import Diskquiz from "./pages/Diskquiz";
import ReactGA from 'react-ga4';
import TermsAndConditions from "./pages/TermsAndConditions";
const TRACKING_ID = "G-LMPS4RD6EL"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

function App() {
    const [headerImage, setHeaderImage] = useState(headerImg);
    const [pageTitle, setPageTitle] = useState("Menstruatiedisk");


    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    }


    return (
        <Wrapper>
        <div className="container">
            <Header headerImage={headerImage} pageTitle={pageTitle}/>

            <Routes>
                <Route path="/*"
                       element={<HomePage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>
                <Route path="/informatie-over-menstruatiedisks/"
                       element={<Information headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/vergelijk-meerdere-menstruatiedisks/"
                       element={<Compare headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/diskquiz/"
                       element={<Diskquiz headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/faq/"
                       element={<FaqPage headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/privacy-policy/"
                       element={<PrivacyPolicy headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/contact/"
                       element={<Contact headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/design-elementen/"
                       element={<Elements headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/doneren"
                       element={<Donate headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

                <Route path="/algemene-voorwaarden"
                       element={<TermsAndConditions headerImageHandler={setHeaderImage} pageTitleHandler={setPageTitle}/>}/>

            </Routes>
            <Footer/>
        </div>
        </Wrapper>
    );
}

export default App;
