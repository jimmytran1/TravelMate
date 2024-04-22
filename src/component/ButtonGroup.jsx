import React, { useState } from 'react';

function ButtonGroup({ text }) {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonText) => {
        setSelectedButton((prevSelectedButton) =>
            prevSelectedButton === buttonText ? null : buttonText
        );
    };

    return (
        <div>
            {text.map((buttonText) => (
                <button
                    key={buttonText}
                    style={{
                        backgroundColor: selectedButton === buttonText ? '#f49f0a' : 'transparent',
                        borderColor: selectedButton === buttonText ? '#f49f0a' : '#989898',
                        color: selectedButton === buttonText ? 'white' : '#989898',
                    }}
                    className="category"
                    onClick={() => handleButtonClick(buttonText)}
                >
                    {buttonText}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;
