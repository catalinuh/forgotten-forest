import { Link } from 'react-router-dom'

import image3 from '../../assets/image-3.jpeg'

import './mission.scss'

const Mission = () => {
    return (
        <div className="mission">
            <header className="mission__header">
                <h1 className="mission__header--title">Mission</h1>
                <h5 className="mission__header--subtitle">
                    <Link to="/" className="mission__header--subtitle">
                        Home
                    </Link>{' '}
                    - Mission
                </h5>
            </header>
            <body>
                <div className="home__card" data-aos="fade-up">
                    <img
                        src={image3}
                        alt="Farmer with boots and bucket hat walking through tropical forest"
                    />
                    <div className="home__card--text">
                        <h4>Integrity from Seed to Cup</h4>
                        <p>
                            We bring integrity and craft from seed to cup via a
                            virtuous, sustainable circle, in which we invest in
                            equity and empowerment at every step of the value
                            chain.
                        </p>
                    </div>
                </div>
                <div className="home__card" data-aos="fade-up">
                    <img
                        src={image3}
                        alt="Farmer with boots and bucket hat walking through tropical forest"
                    />
                    <div className="home__card--text">
                        <h4>Integrity from Seed to Cup</h4>
                        <p>
                            We bring integrity and craft from seed to cup via a
                            virtuous, sustainable circle, in which we invest in
                            equity and empowerment at every step of the value
                            chain.
                        </p>
                    </div>
                </div>
                <div className="home__card" data-aos="fade-up">
                    <img
                        src={image3}
                        alt="Farmer with boots and bucket hat walking through tropical forest"
                    />
                    <div className="home__card--text">
                        <h4>Integrity from Seed to Cup</h4>
                        <p>
                            We bring integrity and craft from seed to cup via a
                            virtuous, sustainable circle, in which we invest in
                            equity and empowerment at every step of the value
                            chain.
                        </p>
                    </div>
                </div>
                <div className="home__card" data-aos="fade-up">
                    <img
                        src={image3}
                        alt="Farmer with boots and bucket hat walking through tropical forest"
                    />
                    <div className="home__card--text">
                        <h4>Integrity from Seed to Cup</h4>
                        <p>
                            We bring integrity and craft from seed to cup via a
                            virtuous, sustainable circle, in which we invest in
                            equity and empowerment at every step of the value
                            chain.
                        </p>
                    </div>
                </div>
                <div className="home__card" data-aos="fade-up">
                    <img
                        src={image3}
                        alt="Farmer with boots and bucket hat walking through tropical forest"
                    />
                    <div className="home__card--text">
                        <h4>Integrity from Seed to Cup</h4>
                        <p>
                            We bring integrity and craft from seed to cup via a
                            virtuous, sustainable circle, in which we invest in
                            equity and empowerment at every step of the value
                            chain.
                        </p>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Mission
