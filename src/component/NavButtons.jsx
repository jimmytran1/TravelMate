import React, { useState } from 'react';
import { logoutUser } from '../actions/authActions';
import { connect } from 'react-redux';

function NavButtons({ dispatch, text, defaultButton }) {
    const [selectedButton, setSelectedButton] = useState(defaultButton);

    const handleButtonClick = (buttonText) => {
        if (buttonText === "Sign Out") {
            dispatch(logoutUser());
        }
        else {
            setSelectedButton(buttonText === selectedButton ? defaultButton : buttonText);
        }
    };

    return (
        <div>
            {text.map((buttonText) => (
                <a
                    key={buttonText}
                    className={`nav__link ${defaultButton === buttonText ? 'nav__link--primary' : ''} nav__list`}
                    onClick={() => handleButtonClick(buttonText)}
                    href={buttonText === "Sign Out" ? "/" : `/${buttonText}`}
                >
                    {buttonText}
                </a>
            ))}
        </div>
    );
}

export default connect()(NavButtons);
