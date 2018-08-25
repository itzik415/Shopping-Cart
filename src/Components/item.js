import React from 'react';
import ItemOptions from './itemOptions';

const item = (props) => {
    return (
        <div className="item" >
            <div className='item__image-container'>
                <img className='item__image' src={props.image} alt='TShirt' />
            </div>
            <div className='item__description-container'>
                <div className='item__properties'>
                    <h2 className='item__name'>{props.name}</h2>
                    <h2 className='item__size'>{props.size[1]}</h2>
                    <h2 className='item__quantity'>{props.quantity}</h2>
                    {
                        (props.price) === (props.oldPrice) ? 

                        <h2 className='item__price'><span className="item__dollarSign">$&nbsp;</span> {props.price}</h2> :
                        
                        <div className='item__priceWithOld'>
                            <h2 className='item__priceNotRelevant'><span className="item__dollarSign">$&nbsp;</span>{props.oldPrice}</h2>
                            <h2 className='item__price'><span className="item__dollarSign">$&nbsp;</span>{props.price}</h2>
                        </div> 
                    }
                </div>
                <h2 className='item__style'>Style #: {props.style1}</h2>
                <h2 className='item__color'>Color: {props.color}</h2>
                <ItemOptions shirt={props.shirt} onClick={props.onClick}/>
            </div>
        </div>
    );
}

export default item;