import React, {useEffect} from 'react';
import pageImg from "../assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg";
import Faq from 'react-faq-component';
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import "./css/faq-page.css";
import {discData} from "../components/faqData/discFAQData";
import {discCleanData} from "../components/faqData/discUseFAQData";
import {discChooseData} from "../components/faqData/discChooseFAQData";
import {discProblemsFAQData} from "../components/faqData/discProblemsFAQData";
import { HashLink } from 'react-router-hash-link';

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

                <p>Staat je vraag er echt niet tussen? Stel je vraag in <a href="https://www.facebook.com/groups/menstruatiecupclub/" target="_blank">onze Facebookgroep!</a></p>


            </TextContainer>
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
            </BookmarkBox>
            <BookmarkBox verticalText="onderhoud">
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
            <BookmarkBox verticalText="problemen">
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
            <TextContainer><HashLink to="#top">Scroll naar boven</HashLink></TextContainer>
        </>
);
}

export default FaqPage;