import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CarDropDown({location}) {
    const handleChange = (event) => {
        const selectedLocation = event.target.value;
        window.location.href = `/home/${selectedLocation}`;
    };

    return (
        <div className='location'>
            <FontAwesomeIcon icon="fa-location-dot" /> 
            <select id="locations" name="locations" onChange={handleChange} className="custom-select">
                <option value="">{location}</option>
                <option value="France">France</option>
                <option value="New York">New York</option>
            </select>
        </div>
    );
}
