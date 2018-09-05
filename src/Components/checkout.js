import React from 'react';

const checkout = (props) => {
    let subTotal = props.change;
    let promotionCode = props.change * 0.1;
    let shippping = props.change * 0.2;
    return (
        <div className="checkout">
            <div className="checkout__giftCard-enter">
                <h2 className="checkout__giftCard-sentence">ENTER PROMOTION CODE OR GIFT<br /> CARD</h2>
                <input
                    className="checkout__giftCard-input" 
                    onKeyPress={props.onKeyPress}/>
                <h2 className="checkout__giftCard-apply" onClick={props.onClick}>APPLY</h2>
            </div>
            <div className="checkout__price">
                <div className="checkout__subTotal">
                    <h2>SUB TOTAL</h2>
                    <p><span className="item__dollarSign">$&nbsp;</span>{props.change}</p>
                </div>
                <div className="checkout__promotionCode">
                    {
                        (props.search === 'itzik415') ?
                        <div className="checkout__promotionCode-applied">
                            <h2>PROMOTION CODE 'itzik415' APPLIED</h2>
                            <p><span className="item__dollarSign">$&nbsp;</span> {(props.change * 0.1).toFixed(2)}  </p> 
                        </div> :
                        <div className="checkout__promotionCode-applied">
                            <h2>PROMOTION CODE</h2>
                            <p><span className="item__dollarSign">$&nbsp;</span> {(props.change * 0).toFixed(2)} </p>
                        </div>
                    }
                </div>
                <div className="checkout__shipping">
                    <div className="checkout__shipping--leftSide">
                        <h2>ESTIMATED SHIPPING</h2>
                        {(props.change) > 50?<h5>You qualify for free shipping because your order is over 50$</h5>:null}
                    </div>
                    <p>
                    {
                        (props.change) > 50?
                        <span className="free-sign">FREE</span>:
                        <span className="item__dollarSign">$&nbsp;<span className="shipping-price">{(props.change * 0.2).toFixed(2)}</span></span> 
                    }    
                    </p>
                </div>
            </div>
            <div className="checkout__estimatedTotal">
                <h2>Estimated total</h2>
                <p><span className="item__dollarSign">$&nbsp;</span>
                    {
                        subTotal > 50 && props.getCoupon === true?
                            subTotal - promotionCode:
                            null              
                    }
                    {
                        subTotal > 50 && props.getCoupon === false?
                            subTotal:
                            null
                    }
                    {
                        subTotal < 50 && props.getCoupon === false?
                            subTotal + shippping:
                            null
                    }
                    {
                        subTotal < 50 && props.getCoupon === true?
                            subTotal + shippping - promotionCode:
                            null
                    }
                </p>
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