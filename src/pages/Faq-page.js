import React, {useEffect} from 'react';
import pageImg from "../assets/headers/menstruatiedisk.nl-gevouwen-disk-quiz-5.jpg";
import faqImg1 from "../assets/img/Cupkiezer-alle-mensturatieproducten-icon-menstruatiecup.png";
import faqImg2 from "../assets/img/Cupkiezer-alle-mensturatieproducten-icon-menstruatiedisk.png";
import Faq from 'react-faq-component';
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import "./css/faq-page.css";
import {discData} from "../components/faqData/discFAQData";
import {discCleanData} from "../components/faqData/discUseFAQData";
import {discChooseData} from "../components/faqData/discChooseFAQData";
import {discProblemsFAQData} from "../components/faqData/discProblemsFAQData";
import {HashLink} from 'react-router-hash-link';
import YellowContentBox from "../components/pageItems/pageDesignElements/yellowContentBox/YellowContentBox";
import useScrollToHash from "../helpers/useScrollToHash";
import TwoColumnBothImg from "../components/pageItems/pageDesignElements/columns/TwoColumnBothImg";

function FaqPage({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Veelgestelde vragen");
    }, [headerImageHandler, pageTitleHandler]);


    return (
        <>
            <TextContainer>
                <p>Heb je een vraag over menstruatiedisks, het gebruik of het schoonmaken van de disks? Hieronder hebben
                    veel vragen beantwoordt, dus lees die maar rustig door.</p>

                <p>Staat je vraag er echt niet tussen? Stel je vraag in <a
                    href="https://www.facebook.com/groups/menstruatiecupclub/" target="_blank" rel="noreferrer">onze
                    Facebookgroep!</a>
                </p>

            </TextContainer>
            <a id="hoofdstukken"></a>
            <YellowContentBox>

                <h2>Hoofdstukken</h2>
                <ul>
                    <li><HashLink to="#algemeen">Algemene vragen over disks</HashLink></li>
                    <li><HashLink to="#gebruik">Diks gebruiken</HashLink></li>
                    <li><HashLink to="#kiezen">Disk kiezen</HashLink></li>
                    <li><HashLink to="/faq#problemen">Disk problemen</HashLink></li>
                </ul>
            </YellowContentBox>

            <a id="algemeen"></a>

            <BookmarkBox verticalText="Algemeen">
                <Faq data={discData}
                     styles={{
                         titleTextColor: "var(--black)",
                         rowTitleColor: "var(--black)",
                         rowContentColor: "var(--black)",
                         bgColor: "none",
                         rowContentTextSize: "1em",
                         arrowColor: "var(--black)",
                     }}

                />
                {useScrollToHash()}
            </BookmarkBox>
            <a id="gebruik"></a>

            <BookmarkBox verticalText="gebruik">
                <Faq data={discCleanData}
                     styles={{
                         titleTextColor: "var(--black)",
                         rowTitleColor: "var(--black)",
                         rowContentColor: "var(--black)",
                         bgColor: "none",
                         rowContentTextSize: "1em",
                         arrowColor: "var(--black)",
                     }}
                />
            </BookmarkBox>
            <a id="kiezen"></a>

            <BookmarkBox verticalText="kiezen">
                <Faq data={discChooseData}
                     styles={{
                         titleTextColor: "var(--black)",
                         rowTitleColor: "var(--black)",
                         rowContentColor: "var(--black)",
                         bgColor: "none",
                         rowContentTextSize: "1em",
                         arrowColor: "var(--black)",
                     }}
                />
            </BookmarkBox>
            <a id="problemen"></a>

            <BookmarkBox verticalText="problemen" id="problemen">
                <Faq data={discProblemsFAQData}
                     styles={{
                         titleTextColor: "var(--black)",
                         rowTitleColor: "var(--black)",
                         rowContentColor: "var(--black)",
                         bgColor: "none",
                         rowContentTextSize: "1em",
                         arrowColor: "var(--black)",
                     }}
                />

            </BookmarkBox>

            <TextContainer><HashLink to="#hoofdstukken">Bekijk alle hoofdstukken</HashLink></TextContainer>

        </>
    );
}

export default FaqPage;