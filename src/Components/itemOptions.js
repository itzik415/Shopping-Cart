import React from 'react';
// import EditPage from './editPage';

const itemOptions = (props) => {
    return (
        <div className="itemOptions">
            <p className="itemOptions__edit" onClick={props.edit}>EDIT |&nbsp;</p>
            <p className="itemOptions__remove" onClick={props.remove}>X REMOVE |&nbsp;</p>
            <p className="itemOptions__saveForLater">SAVE FOR LATER</p>
        </div>
    );
}

export default itemOptions;
