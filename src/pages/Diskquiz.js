import React, {useEffect, useState} from 'react';
import pageImg
    from '../assets/Cupkiezer-Bamboozy-menstruatiedisk-en-cup-vergelijken-in-twee-maten-4356.jpg'
import DiscQuizTabel from "../components/tabel/DiscQuizTabel";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";



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

            <div className="page-content">

                <p>Menstruatiedisks komen in verschillende breedtes, hardheden en modellen.
                    Er is niet één "one size fits all"-disk, helaas.</p>
                <p>
                    <strong>Wil je weten welke disk bij jouw lichaam past?</strong> Beantwoord onderstaande vragen en
                    dan verschijnen de disks die geschikt zijn voor jou in de tabel daaronder!
                </p>
            </div>

            <DiscQuizTabel/>
            <TextContainer>

                <h3>Baarmoedermondhoogte</h3>
                <p>Dit bepaalt de breedte van de disk. Als je nog niet weet hoe hoog je baarmoedermond zit, raad ik je
                    wel aan dit eerst op te meten.</p>
                <p><strong>Je baarmoedermond opmeten</strong> doe je door tijdens je menstruatie met een schone vinger
                    in je vagina te voelen.
                    De hoogte kan veranderen tijdens je cyclus, daarom is het belangrijk dat je het echt tijdens je
                    menstruatie doet.
                    Aangezien je dan de disk gaat dragen.</p><p>
                Je baarmoedermond voelt als een kleine, beetje harde donutvormige bobbel die terugveert bij aanraking.
                Het zal wat
                harder voelen dan de rest van je vaginawand. Wanneer je hem voelt houd dan met een andere vinger bij hoe
                diep je zit. Meet daarna op hoeveel mm dat ongeveer was.</p>
                <p>
                    De baarmoederhals vormt de verbinding van de baarmoeder met de vagina.
                </p>

                <h3>Herbruikbaar</h3>
                <p>Dit bepaalt of je een siliconen herbruikbare disk te zien krijgt, of wegwerp exemplaren van
                    polymeer.</p>

                <h3>Steeltje</h3>
                <p>De eerste menstruatiedisks waren een ronde schijf zonder poespas.
                    Een aantal nieuwere modellen hebben een touwtje of lusje aan de disk zitten. Dit helpt je met de
                    disk eruit halen.</p><p>
                Wat jij fijner vindt, moet je natuurlijk nog uitvinden.
                Maar weet wel dat je het touwtje er altijd weer af kan knippen als het toch niet bevalt. Het nadeel is
                dan weer dat de disks met touwtje/lusje minder goed in NL te verkrijgen zijn.</p>

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