import React, {useEffect, useState} from 'react';
import pageImg
    from '../assets/headers/menstruatiedisk.nl-verschillende-disks-kiezen-quiz-3.jpg'
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import DiscTabel from "../components/tabel/DiscTabel";
import {Link} from "react-router-dom";


function Compare({headerImageHandler, pageTitleHandler}) {
    const [menstrualDiscs] = useState([]);




    function showDisks(array) {
        let newArray = array.map(({id, name, brand}) => {
            return <li key={id}>{brand} {name}</li>;
        });
        return newArray;
    }

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Vergelijken");
    }, [headerImageHandler, pageTitleHandler]);


    return (
        <>

            <div className="page-content">

                <p>Menstruatiedisks komen in verschillende breedtes, hardheden en modellen.
                    Er is niet één "one size fits all"-disk, helaas.</p>
                <p>
                    <strong>Wil je weten welke disk bij jouw lichaam past?</strong> Beantwoord dan de vragen van <Link to="/diskquiz">de diskquiz</Link>. De tabel hieronder is om nog specifieker op zoek te gaan naar een disk.
                </p>
            </div>

            <DiscTabel/>
            <TextContainer>

                {showDisks(menstrualDiscs)}
            </TextContainer>



        </>
    );
}

export default Compare;