import React, {useEffect} from 'react';
import pageImg from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-11.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";

function Donate({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Doneren om deze website te onderhouden");
    } ,[]);

    return (
       <TextContainer>
            <h3>Wil je doneren? Heel graag!</h3>
            <p>Gemaakt door Nynke (van Cupkiezer) omdat er nog bijna geen informatie over menstruatiedisk in het Nederlands te vinden was. Terwijl het zo’n geweldig duurzaam product is.</p>
           <button>Ik help graag mee!</button>
            <p>Menstruatiedisk.nl - deelt onafhankelijke informatie over duurzaam menstrueren visueel en behapbaar.</p>
            <h2>Waar draag je aan bij?</h2>
            <p>Ik onderhoud deze website en content zelf. Dat vind ik heel leuk om te doen, maar het kost altijd meer tijd dan je denkt. En het kost ook nog eens gewoon geld.
            </p>
            <p>De volgende dingen kosten geld: Hosting, fotografie, stroom, laptop.</p>
            <h2>Samen zorgen we dat onafhankelijke informatie beschikbaar is!</h2>
           <p>Binnenkort komen hier de mogelijkheden om te doneren.</p>
        </TextContainer>
    );
}

export default Donate;