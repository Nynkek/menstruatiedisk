import React, {useEffect, useState} from 'react';
import pageImg
    from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-4.jpg";
import discs
    from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-4.jpg"
import discs2
    from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-4.jpg"
import TwoColumnWithImg from "../components/pageItems/pageDesignElements/columns/TwoColumnWithImg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import {onValue, ref} from "firebase/database";
import {db} from "../firebase-config";

function Information({headerImageHandler, pageTitleHandler}) {
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Menstruatiedisk-informatie");
    }, []);

    useEffect(() => {

        function getDiscs() {
            onValue(ref(db), (snapshot) => {
                setMenstrualDiscs([]);
                const data = snapshot.val();
                if (data !== null) {
                    Object.values(data).map((disk) => {
                        setMenstrualDiscs((oldArray) => [...oldArray, disk]);
                    });
                }
            });
        }

        getDiscs();
        console.log(menstrualDiscs);
        console.log("Test");
    }, []);


    return (
        <>
            <TextContainer>
                {menstrualDiscs.map((disk) => (
                    <>
                        <h1>hoi</h1>
                        {console.log(disk)}
                    </>
                ))}

                <p>Menstruatiecups ken je nu hopelijk wel. Maar ken je de menstruatiedisk al? Deze zijn wat breder en
                    minder lang. Zoals de naam al doet vermoeden… zijn het meer schijven. De overeenkomst tussen de
                    menstruatiedisk en de -cup is dat ze beide je menstruatie opvangen en dat je ze 12 uur kan dragen.
                    Maar hoe je ze indoet en waar je ze draagt is anders.
                </p>
            </TextContainer>
            <TwoColumnWithImg img={discs} imgAlt="Verschillende disks"
                              imgCaption="Verschillende disks">
                <h2>Wat zijn Menstruatiedisks?</h2>
                <p>Menstruatiedisks zijn flexibele schijven en lijken meer op een pessarium.</p>

                <p>Je vouwt de menstruatiedisk tot een ovaal en doet hem net als een tampon in je vagina, maar dan wat
                    schuiner. De disc komt tussen de achterwand van de vagina en het schaambeen te liggen, daar bedekt
                    het de hele baarmoedermond. Je klemt hem achter je schaambeen, om hem op z’n plek te laten
                    zitten.</p>
                <p>Eruit halen doe je door met je vinger achter de rand te klemmen. Dan trek je de menstruatiedisk
                    eruit. Je hoeft geen vacuüm te verbreken.</p>
            </TwoColumnWithImg>

            <BookmarkBox verticalText="Inhoud">
                <h3>Hoeveel ml kan er in een disk?</h3>
                <p>Menstruatiediscs verschillen in inhoud, van 30ml tot wel 76ml. </p>
                <p>Al is het wel zo dat ze nooit helemaal gevuld kunnen worden omdat het zachte opvang-gedeelte altijd
                    wat wordt samen gevouwen wanneer je hem draagt.</p>
            </BookmarkBox>
            <TwoColumnWithImg img={discs2} imgAlt="Verschillende disks."
                              imgCaption="Verschillende disks">
                <h2>Welke menstruatiedisc is het beste?</h2>
                <p>Menstruatiedisks zijn flexibele schijven en lijken meer op een pessarium.</p>

                <p>Dat is heel persoonlijk.
                    Als je voor een duurzame variant wilt gaan, neem dan een herbruikbare menstruatiedisc. Daarna kun je
                    kiezen voor een hardere of zachtere variant. De meeste discs hebben maar 1 model/maat. Maar de Lumma
                    Unique is in verschillende maten (S, M en L) te krijgen. Dus ook qua diameter heb je een keuze.</p>
            </TwoColumnWithImg>
        </>
    );
}

export default Information;