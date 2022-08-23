import React, {useEffect, useState} from 'react';
import pageImg
    from '../assets/Cupkiezer-menstruatiedisk-naast-elkaar-softcup-ziggy-cup-en-nixit-cup-mening-vergelijken-20210511.jpg'
import DiscQuizTabel from "../components/tabel/DiscQuizTabel";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import BookmarkBox from "../components/pageItems/pageDesignElements/bookmarkBox/BookmarkBox";
import DiscTabel from "../components/tabel/DiscTabel";
import {Link} from "react-router-dom";


function Compare({headerImageHandler, pageTitleHandler}) {
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
        pageTitleHandler("Vergelijken");
    }, []);


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