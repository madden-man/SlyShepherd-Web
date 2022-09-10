import { Container } from '../components/Container';
import snakeLogoEdited from '../assets/snake-logo-edited.png';
import soundCloudPng from '../assets/soundcloud.png';
import instagramPng from '../assets/instagram.png';

import './home.css'

export const Home = () =>
    <Container className="home">
        <div className="home__header">
            <a href="https://slyshepherd.com">
                <img src={snakeLogoEdited} className="home__logo" alt="sly shepherd logo" />
            </a>
            <div className="home__links">
                <a href="https://on.soundcloud.com/zX89dzsnoT68FiL57">
                    <img src={soundCloudPng} alt="sound cloud link" width="50" height="50"/>
                </a>
                <a href="https://www.instagram.com/slyshepherd/">
                    <img src={instagramPng} alt="instagram link" width="50" height="50" />
                </a>
            </div>
        </div>
        {/* <p style={{fontSize: '2rem'}} className="home__headline">
            Sly Shepherd
        </p>
        <hr className="home__hr" /> */}
    </Container>;