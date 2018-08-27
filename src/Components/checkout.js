import React from 'react';

const checkout = (props) => {
    return (
        <div className="checkout">
            <div className="checkout__giftCard-enter">
                <h2 className="checkout__giftCard-sentence">ENTER PROMOTION CODE OR GIFT<br /> CARD</h2>
                <input
                    className="checkout__giftCard-input" />
                <h2 className="checkout__giftCard-apply">APPLY</h2>
            </div>
            <div className="checkout__price">
                <div className="checkout__subTotal">
                    <h2>SUB TOTAL</h2>
                    <p><span className="item__dollarSign">$&nbsp;</span>{props.change}</p>
                </div>
                <div className="checkout__promotionCode">
                    <h2>PROMOTION CODE BLABLA APPLIED</h2>
                    <p><span className="item__dollarSign">$&nbsp;</span> 0 </p>
                </div>
                <div className="checkout__shipping">
                    <h2>ESTIMATED SHIPPING</h2>
                    <p><span className="item__dollarSign">$&nbsp;</span> price </p>
                </div>
            </div>
            <div className="checkout__estimatedTotal">
                <h2>Estimated total</h2>
                <p><span className="item__dollarSign">$&nbsp;</span>price</p>
            </div>
            <div className="checkout__end">
                <div className="checkout__buttons">
                    <a href="#head" className="checkout__continueShipping">CONTINUE SHIPPING</a>
                    <a href="#head" className="checkout__button">CHECKOUT</a>
                </div>
                <h2 className="checkout__secure-sentence"><img className="lock-icon" src={require('../images/lock-icon.png')} alt="lock-icon"/>Secure checkout. Shopping is always safe & secure</h2>
            </div>
        </div>
    );
}

export default checkout;