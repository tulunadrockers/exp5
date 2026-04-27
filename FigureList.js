import React, { useState } from "react"; 
 
// BasicFigure Component (Child) 
function BasicFigure({ image, caption, onRemove }) { 
    return ( 
        <div className="basic-figure"> 
            <img src={image} alt={caption} className="figure-image" /> 
            <figcaption className="figure-caption">{caption}</figcaption> 
            <button className="remove-button" onClick={onRemove}> 
                Remove 
            </button> 
        </div> 
    ) 
} 
 
// FigureList Component (Parent) 
function FigureList() { 
    const [figures, setFigures] = useState([ 
        { id: 1, image: "https://www.w3schools.com/w3images/lights.jpg", caption: "Beautiful 
Lights" }, 
        { id: 2, image: "https://www.w3schools.com/w3images/nature.jpg", caption: "Nature" }, 
    ]); 
 
    const [newImage, setNewImage] = useState(""); 
 
    function addFigure() { 
        if (newImage) { 
            setFigures([...figures, 
            { 
                id: Date.now(), 
                image: newImage, 
                caption: "New Image" 
            } 
            ]); 
            setNewImage(""); 
        } 
    } 
 
    const removeFigure = (id) => { 
        setFigures(figures.filter(figure => figure.id !== id)) 
    } 
 
    return ( 
        <div className="figure-list"> 
            <input 
                type="text" 
                placeholder="Image URL" 
                value={newImage} 
                onChange={(e) => setNewImage(e.target.value)} 
            /> 
 
            <button onClick={addFigure}>Add Image</button> 
 
            <div className="grid"> 
                { 
                    figures.map(figure => ( 
                        <BasicFigure 
                            image={figure.image} 
                            caption={figure.caption} 
                            onRemove={() => removeFigure(figure.id)} 
                        /> 
                    )) 
                } 
            </div> 
        </div> 
    ) 
} 
 
export default FigureList;
