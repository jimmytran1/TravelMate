import React, { useState, useEffect } from 'react';

function ButtonGroup({ text, onSelect }) {
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (buttonText) => {
        setSelectedButtons(prevSelectedButtons => {
            if (prevSelectedButtons.includes(buttonText)) {
                // Deselect the button
                return prevSelectedButtons.filter((btn) => btn !== buttonText);
            } else {
                // Select the button
                return [...prevSelectedButtons, buttonText];
            }
        });
    };

    useEffect(() => {
        onSelect(selectedButtons);
    }, [selectedButtons, onSelect]);

    return (
        <div>
            {text.map((buttonText) => (
                <button
                    key={buttonText}
                    onClick={() => handleButtonClick(buttonText)}
                    className={`category ${selectedButtons.includes(buttonText) ? 'selected' : ''}`}
                >
                    {buttonText}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;
