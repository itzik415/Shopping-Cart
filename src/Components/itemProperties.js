import React from 'react';

const itemProperties = (props) => {
    return (
        <div className="itemProperties">
            <h4 className="itemProperties_itemsAmount">{props.itemsAmout} ITEMS</h4>  
            <h4 className="itemProperties_size">SIZE</h4>  
            <h4 className="itemProperties_quantity">QTY</h4>  
            <h4 className="itemProperties_price">PRICE</h4>  
        </div>
    );
}

export default itemProperties;