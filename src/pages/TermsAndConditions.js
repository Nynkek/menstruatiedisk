import React, {useEffect} from 'react';
import pageImg from "../assets/headers/menstruatiedisk.nl-kiezen-quiz-7.jpg";

function TermsAndConditions({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Privacy policy");
    }, []);
    return (
        <div></div>
    );
}

export default TermsAndConditions;