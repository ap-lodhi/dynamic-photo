
import React, { useState } from 'react';
import Card from "./Card";
import './image.css';

const Images = () => {
    const [images, setImages] = useState([{
        url: 'https://source.unsplash.com/random/1'
    },
    {
        url: 'https://source.unsplash.com/random/2'
    },
    {
        url: 'https://source.unsplash.com/random/3'
    },


    ])
    console.log(images);
    const addImage = () => {
        setImages([...images, {
            url: `https://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`
        }])

    }

    const removeImage = () => {
        setImages(images.slice(0, -1))
    }
    return (
        <div className="container" >
            <div className="cardContainer" >
                <Card images={images} />
            </div>
            <div  >
                <button onClick={removeImage}> Remove </button>

                <button onClick={addImage} > Add </button>
            </div>
        </div>
    );
}

export default Images;