import React from 'react';
import "./textContainer.css";


function TextContainer({children}) {
    return (
            <section className="page-content">
                {children}
            </section>
    );
}

export default TextContainer;