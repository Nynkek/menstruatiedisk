import React from 'react';
import "./twoColumnBothImg.css";

function ThreeColumImg({img1, imgAlt1, imgCaption1, img2, imgAlt2, imgCaption2}) {
    return (

        <div className="page-two-section page-content">
            <figure className="img">
                <img src={img1} alt={imgAlt1} className="image"/>
                <figcaption>{imgCaption1}</figcaption>
            </figure>
            <figure className="img">
                <img src={img2} alt={imgAlt2} className="image"/>
                <figcaption>{imgCaption2}</figcaption>
            </figure>
        </div>
    );
}

export default ThreeColumImg;