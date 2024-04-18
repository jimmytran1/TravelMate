import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LocationDropDown({ location }) {
    return (        
        <p className="location"><FontAwesomeIcon icon="fa-location-dot" /> {location}  <FontAwesomeIcon icon="fa-chevron-down" /></p>
    )}