import React from 'react';

const customerHelp = () => {
    return (
        <div className="customerHelp" >
            <h3 className="customerHelp__mainLine">Need help or have questions?</h3>
            <p className="customerHelp__customerServiceLine">Call Customer Service at</p>
            <p className="customerHelp__customerServiceLine">1800-555-555</p>
            <p className="customerHelp__chatLine"><a href="#head">Chat with one of our stylist</a></p>
            <p className="customerHelp__chatLine"><a href="#head">See return or exchange policy</a></p>
        </div>
    );
}

export default customerHelp;