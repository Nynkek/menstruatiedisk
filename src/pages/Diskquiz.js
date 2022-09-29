import React, {useEffect, useState} from 'react';
import pageImg
    from '../assets/headers/menstruatiedisk.nl-kiezen-herbruikbaar-wegwerp-disk.jpg'
import DiscQuizTabel from "../components/tabel/DiscQuizTabel";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import {discProblemsFAQData} from "../components/faqData/discProblemsFAQData";
import Faq from "react-faq-component";
import {discQuizFAQ} from "../components/faqData/discQuizFAQ";


function Diskquiz({headerImageHandler, pageTitleHandler}) {
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);


    const sizes = menstrualDiscs.length; // misschien map?


    function showDisks(array) {
        let newArray = array.map(({id, name, brand}) => {
            return <li key={id}>{brand} {name}</li>;
        });
        return newArray;
    }

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Diskquiz");
    }, [headerImageHandler, pageTitleHandler]);


    return (
        <>

            <TextContainer>

                <p>Menstruatiedisks komen in verschillende breedtes, hardheden en modellen.
                    Er is niet één "one size fits all"-disk, helaas.</p>
                <p>
                    <strong>Wil je weten welke disk bij jouw lichaam past?</strong> Beantwoord onderstaande vragen en
                    dan verschijnen de disks die geschikt zijn voor jou in de tabel daaronder!
                </p>
            </TextContainer>

            <DiscQuizTabel/>

            <TextContainer>

                <Faq data={discQuizFAQ}
                     styles={{
                         titleTextColor: "var(--black)",
                         rowTitleColor: "var(--black)",
                         rowContentColor: "var(--black)",
                         bgColor: "none",
                         rowContentTextSize: "1em",
                         arrowColor: "var(--black)",
                     }}
                />


                {showDisks(menstrualDiscs)}
            </TextContainer>
            <BookmarkBox verticalText="legenda">
                <h2>Uitleg menstruatiedisk-tabel</h2>
                <p>Lengte: De lengte van de cup. Dit is exclusief de steel. (Die je er af kan knippen). Meer info.<br/>
                    Inhoud: Hoeveel ml er in de cup kan, tot de luchtgaten gemeten. Voller kan hij ook niet zonder te
                    lekken. Meer info.<br/>
                    Diameter: Is het breedste gedeelte van de cup. Meer info.<br/>
                    Hardheid: In drie gradaties (soft, regular, hard). Meer info.<br/>
                    Materiaal: Cups zijn van Siliconen, TPE of rubber. Meer info.<br/><br/>

                    Dat een cup opgenomen is in deze tabel betekent niet dat wij de cup aanraden. Lees hier meer over
                    cups en veiligheid.</p>
            </BookmarkBox>


        </>
    );
}

export default Diskquiz;