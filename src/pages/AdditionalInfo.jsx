import React from "react";
import DestinationCard from "../component/DestinationCard";

export default function AdditionalInfo() {
  return (
    <div className="info-container">
      <div className="info-header">
        <h1 className="info-header-title">Let's get to know you!</h1>
      </div>
      <div className="info-body-container">
        <div className="info-bio">
        <div className="info-body-header info-visit">
                <h3 className="info-title">Biography</h3>
            </div>
            <form className="new-post-form">
      <input
        type="text"
        name="content"
        placeholder="Enter a small biography about yourself"
        // value={postData.name}
        required
      />
      </form>
        </div>
        <div className="info-hobby">
          <div className="info-body-header info-visit">
            <h3 className="info-title">What are your hobbies?</h3>
            <h4 className="info-description">Choose one or more</h4>
          </div>
          <div className="info-hobby-body">
          <button className="hobby-btn">Swimming</button>
          <button className="hobby-btn">Photography</button>
          <button className="hobby-btn">Dance</button>
          <button className="hobby-btn">Cooking</button>
          <button className="hobby-btn">Music</button>
          <button className="hobby-btn">Hiking</button>
          </div>
        </div>
        <div className="info-visited info-visit">
            <div className="info-body-header">
                <h3 className="info-title">What places have you visited already?</h3>
            </div>
            <div className="info-body">
              <DestinationCard imageUrl="https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg" title="New York" location="New York City" ></DestinationCard>
              <DestinationCard imageUrl="https://blog.goway.com/globetrotting/wp-content/uploads/2018/03/Two-geishas-at-Sensoji-Temple-in-Asakusa-Tokyo-Japan_667925704.jpg" title="Japan" location="Tokyo" ></DestinationCard>
              <DestinationCard imageUrl="https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/life-in-city-images/paris-france-gallery-2.jpg" title="France" location="Paris" ></DestinationCard>
              <DestinationCard imageUrl="https://static1.squarespace.com/static/55ee34aae4b0bf70212ada4c/57d9829837c5819632bc630b/5e06e89e74877f00dbb21494/1577545446402/keith-zhu-qaNcz43MeY8-unsplash+%281%29.jpg?format=1500w" title="Australia" location="Sydney" ></DestinationCard>
              <DestinationCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/1200px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg" title="Russia" location="Moscow" ></DestinationCard>
              <DestinationCard imageUrl="https://i.natgeofe.com/n/9e138c12-712d-41d4-9be9-5822a3251b5a/brandenburggate-berlin-germany_2x1.jpg" title="Germany" location="Berlin" ></DestinationCard>
              <DestinationCard imageUrl="https://a.cdn-hotels.com/gdcs/production196/d170/348659c0-9beb-11e8-a1b5-0242ac110053.jpg?impolicy=fcrop&w=800&h=533&q=medium" title="Spain" location="Madrid" ></DestinationCard>
              <DestinationCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg" title="United Arab Emirates" location="Dubai" ></DestinationCard>
            </div>
        </div>
        <div className="info-visit">
            <div className="info-body-header">
                <h3 className="info-title">What places would you like to visit?</h3>
            </div>
            <div className="info-body">
            <DestinationCard imageUrl="https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg" title="New York" location="New York City" ></DestinationCard>
              <DestinationCard imageUrl="https://blog.goway.com/globetrotting/wp-content/uploads/2018/03/Two-geishas-at-Sensoji-Temple-in-Asakusa-Tokyo-Japan_667925704.jpg" title="Japan" location="Tokyo" ></DestinationCard>
              <DestinationCard imageUrl="https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/life-in-city-images/paris-france-gallery-2.jpg" title="France" location="Paris" ></DestinationCard>
              <DestinationCard imageUrl="https://static1.squarespace.com/static/55ee34aae4b0bf70212ada4c/57d9829837c5819632bc630b/5e06e89e74877f00dbb21494/1577545446402/keith-zhu-qaNcz43MeY8-unsplash+%281%29.jpg?format=1500w" title="Australia" location="Sydney" ></DestinationCard>
              <DestinationCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/1200px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg" title="Russia" location="Moscow" ></DestinationCard>
              <DestinationCard imageUrl="https://i.natgeofe.com/n/9e138c12-712d-41d4-9be9-5822a3251b5a/brandenburggate-berlin-germany_2x1.jpg" title="Germany" location="Berlin" ></DestinationCard>
              <DestinationCard imageUrl="https://a.cdn-hotels.com/gdcs/production196/d170/348659c0-9beb-11e8-a1b5-0242ac110053.jpg?impolicy=fcrop&w=800&h=533&q=medium" title="Spain" location="Madrid" ></DestinationCard>
              <DestinationCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg" title="United Arab Emirates" location="Dubai" ></DestinationCard>
            </div>
            <button type="submit" className="sign-in-button next-button">Next</button>
        </div>
      </div>
    </div>
  );
}
