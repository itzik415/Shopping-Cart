import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header_name">YOUR SHOPPING CART </h1>
            <p className="header_emptyCartSentence">If the cart is completely empty then we shall again add back the products for you </p>
        </div>
    );
}

export default Header;