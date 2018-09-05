import React from 'react';

const editPage = (props) => {
    return (
        <div className="editPage">
            <div className="editPage__centerDiv">
                <div className="x-button">
                    <img onClick={props.exitButton} className="closing-button" src={require('../images/closing-button.png')} alt="closing-button" />
                </div>    
                <div className="editPage__centerDiv-content">
                    <div className="editPage__content">
                        <p className="editPage__itemName">{props.name}</p>
                        <p className="editPage__itemPrice"><span className="item__dollarSign">$&nbsp;</span>{props.price}</p>
                        <p className="editPage__itemstyle">{props.style}</p>
                        <p className="editPage__colorText">Color: {props.color}</p>
                        <div className="editPage__sizeAmount">
                            <select name="size" onChange={props.changingSize}>
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                            </select>
                            <input
                                className="editPage__itemAmount" 
                                onChange={props.changingQuantity}
                            />
                        </div>
                        <p className="editPage__editButton" onClick={props.editButton}>EDIT</p>
                        <a href="#head" className="editPage__productDetail">Check product detail</a>                        
                    </div>
                    <div className="editPage__image-div">
                        <img className="editPage__image"src={props.image} alt="Item" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default editPage;