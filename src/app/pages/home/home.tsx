import image1 from '../../assets/image-1.jpeg';
import image2 from '../../assets/image-2.jpeg';
import image3 from '../../assets/image-3.jpeg';
import image4 from '../../assets/image-4.jpeg';
import image5 from '../../assets/image-5.jpeg';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <p>
        Forgotten Forest is a Puerto Rican specialty coffee brand in service of
        the great Puerto Rican coffee tradition and the vitality of Puerto
        Rico’s agrarian society.
      </p>
      <div className="home__card">
        <img
          src={image1}
          alt="Farmer with boots and bucket hat walking through tropical forest"
        />
        <div className="home__card--text">
          <h4>A Young Man and a Wise Sage Make a Discovery</h4>
          <p>
            In the aftermath of Hurricane Maria, a young Nuyorican named
            Domenico Borrero Celli and a wise old farmer named Israel Gonzalez
            Hernandez discover heirloom coffee varietals, including Typica 401,
            growing wild in a Forgotten Forest.
          </p>
          <p>
            They hatch a vision to re-populate shaded Puerto Rican micro-lots
            with specialty varietals and re-claim the glory of Puerto Rican
            coffee.
          </p>
        </div>
      </div>

      <div className="home__card">
        <div className="home__card--text">
          <h4>A Magical Terroir</h4>
          <p>
            We sit in the Cordillera of the Puerto Rican Highlands, where the
            tradewinds blow Saharan Dust onto the volcanic soil of the Forgotten
            Forest, creating a lush tropical microclimate, allowing Typica 401
            and other heirloom plants to thrive.
          </p>
        </div>
        <img
          src={image2}
          alt="Farmer with boots and bucket hat walking through tropical forest"
        />
      </div>

      <div className="home__card">
        <img
          src={image3}
          alt="Farmer with boots and bucket hat walking through tropical forest"
        />
        <div className="home__card--text">
          <h4>Integrity from Seed to Cup</h4>
          <p>
            We bring integrity and craft from seed to cup via a virtuous,
            sustainable circle, in which we invest in equity and empowerment at
            every step of the value chain.
          </p>
        </div>
      </div>

      <div className="home__card">
        <div className="home__card--text">
          <h4>Puerto Rican Farmers are the Heart of Forgotten Forest</h4>
          <p>
            In collaboration with the Peter Alfond foundation, Technoserve, and
            Para La Naturaleza, Forgotten Forest supports dozens of farmers as
            they transition their low-value agribusiness crops to sustainably
            grown specialty micro-lots.
          </p>
        </div>
        <img
          src={image4}
          alt="Farmer with boots and bucket hat walking through tropical forest"
        />
      </div>

      <div className="home__card">
        <img
          src={image5}
          alt="Farmer with boots and bucket hat walking through tropical forest"
        />
        <div className="home__card--text">
          <h4>Flavor Unique to Puerto Rico</h4>
          <p>
            Forgotten Forest coffee traces its genetic link to the early 1800s
            and the first coffee brought from Yemen to the Caribbean. The unique
            Puerto Rican highland microclimate creates a natural mutation that
            produces an elevated and original profile distinguished by its ripe
            tropical fruit notes, velvety mouthfeel, harmonious acidity, and
            deep, resonant finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
