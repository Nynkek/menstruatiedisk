import React, {useEffect, useState} from 'react';
import "./imgGallery.css";


function ImgGallery({imageList}) {
    const [classNames, setClassNames] = useState("two");

    function countImagesInGallery(imageList) {
        switch (imageList.length) {
            case 1:
                setClassNames("one");
                break;
            case 2:
                setClassNames("two");
                break;
            case 3:
                setClassNames("three");
                break;
            case 4:
                setClassNames("four");
                break;
        }
    }

    useEffect(() => {
            countImagesInGallery(imageList)
        },
        []);

    return (
        <div className="page-two-section gallery">
            {imageList.map((imgList, index) => {
                return (
                   <figure className={classNames} key={index}>
                        <img src={imgList.image} alt={imgList.alt}/>
                        <figcaption className="caption">{imgList.caption}</figcaption>
                       {index > 1 && <span className="number">{index+1}</span>  }

                    </figure>
                )
            })}
        </div>
    );
}

export default ImgGallery;