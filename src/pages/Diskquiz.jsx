/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect, useState} from 'react';
import pageImg
    from '../assets/headers/menstruatiedisk.nl-kiezen-herbruikbaar-wegwerp-disk.jpg'
import DiscQuizTabel from "../components/tabel/DiscQuizTabel";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import Faq from "react-faq-component";
import {discQuizFAQ} from "../components/faqData/discQuizFAQ";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";


function Diskquiz({headerImageHandler, pageTitleHandler}) {
    const [menstrualDiscs] = useState([]);




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
                    dan verschijnen de disks die geschikt zijn voor jou in de tabel daaronder! Op die manier kun je
                    makkelijk een menstruatiedisk kiezen.
                </p>
                <h3>Legenda</h3>
                <p>De <strong><HashLink to="#legenda">Legenda</HashLink></strong> vind je onder de tabel. Net als
                    een <strong><HashLink to="#uitleg"> uitleg per vraag</HashLink></strong>.</p>
                <p>De tabel is het beste zichtbaar op een breed scherm. (Dus draai je telefoon)</p>
            </TextContainer>

            <DiscQuizTabel/>
            <a id="uitleg" href="# "> </a>

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
            <a id="legenda" href="# "> </a>

            <BookmarkBox verticalText="legenda">
                <h2>Uitleg menstruatiedisk&#173;tabel</h2>
                <p>
                    <strong>Inhoud:</strong> Hoeveel ml er in de disk kan. Het reservoir van de disk zal nooit helemaal vol kunnen,
                    omdat het een beetje platgedrukt in je vaginakanaal zit.<br/>
                    <strong>Diameter:</strong> Is het breedste gedeelte van de disk. <br/>
                    <strong>Materiaal:</strong> Herbruikbare disk zijn van siliconen. Wegwerp disks zijn van polymer. </p>

                    <p>Dat een disk opgenomen is in deze tabel betekent niet dat ik de disk aanraad. Ik kan ze niet allemaal controleren en kopen.</p>
            </BookmarkBox>
            <TextContainer>
                <h3>Heb je wat gehad aan de diskquiz?</h3>
                <p>Geweldig! Dat is goed om te horen. Hopelijk heeft het je zoektocht naar jouw perfecte
                    menstruatie-artikel makkelijker gemaakt.</p>
                <p>Het heeft me veel tijd gekost om deze website te maken en alle data bij elkaar te zoeken. Als je iets
                    kan missen, ga dan naar <Link to="/doneren">de doneer-pagina. </Link></p>
                <p>Wanneer jij een klein beetje doneert kan ik onafhankelijke info blijven geven en onder andere deze tabel up-to-date houden. Want er komen steeds meer nieuwe disks op de markt!
                    Bedankt! </p>
                <h3>Op hoogte blijven</h3>
                <p>Volg dan <a href="http://instagram.com/cupkiezer/" target="_blank" rel="nofollow">Cupkiezer, het zusterproject, op instagram!</a></p>
            </TextContainer>

        </>
    );
}

export default Diskquiz;