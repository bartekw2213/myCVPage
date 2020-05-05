import React from 'react';
import ProfileImg from '../../img/profile-img.jpg';
import classes from './About.module.css';
import SectionHeader from '../Layout/SectionHeader/SectionHeader';
import SkillRow from './SkillRow/SkillRow';
import SkillDesc from './SkillRow/SkillDesc/SkillDesc';
import SkillImg from './SkillRow/SkillImg/SkillImg';
import SkillNumber from './SkillRow/SkillNumber/SkillNumber';

// Importing Images
import HtmlCssJsIcons from '../../img/skills/html-css-js-icons.png';
import ReactLogo from '../../img/skills/react-logo.png';
import NodeJSLogo from '../../img/skills/nodejs-logo.svg';
import MongoDBLogo from '../../img/skills/mongodb-logo.png';
import AdobeIcons from '../../img/skills/adobe-icons.png';

const About = () => {
  return (
    <div className='container container-flex'>
      <div className={classes.AboutIntro}>
        <div className={classes.ProfileImg}>
          <img src={ProfileImg} alt='Moje Zdjęcie' />
        </div>
        <div className={classes.AboutCard}>
          <h1>PARĘ SŁÓW O MNIE</h1>
          <p>
            Cześć! Nazywam się Bartek, mieszkam w Białymstoku i jestem
            programistą JavaScript. Zajmuję się projektowaniem stron
            internetowych, ich tworzeniem oraz dodawaniu im "życia",
            interaktywności.
          </p>
          <p>
            Tworzę wizytówkę strony, jej interfejs graficzny. czyli to co
            widzisz właśnie w tej chwili lub gdy odwiedzasz jakąkolwiek stronę
            internetową, wszystko to przy pomocy HTML, CSS oraz biblioteki
            JavaScript React. Poza tym zajmuję się również pracą samego serwera,
            backend-em witryny dzięki takim narzędziom jak Node.js.
          </p>
          <p>
            W wolnych chwilach uwielbiam bawić się grafiką komputerową używając
            programów Adobe.
          </p>
        </div>
      </div>

      <SectionHeader text={'MOJE UMIEJĘTNOŚCI'} icon={'fas fa-toolbox'} />

      <div className={classes.SkillsSection}>
        <div className={classes.SkillsSectionLeft}>
          <SkillRow>
            <SkillImg img={HtmlCssJsIcons} />
          </SkillRow>
          <SkillRow>
            <SkillDesc
              desc={'Umiejętność pracy z serwerem przy pomocy Node.js'}
            />
          </SkillRow>
          <SkillRow>
            <SkillImg img={ReactLogo} />
          </SkillRow>
          <SkillRow>
            <SkillDesc
              desc={'Obsługa nierelacyjnych baz danych przy użyciu MongoDB'}
            />
          </SkillRow>
          <SkillRow>
            <SkillImg img={AdobeIcons} />
          </SkillRow>
        </div>
        <div className={classes.SkillsSectionLine}>
          <SkillRow>
            <SkillNumber number={1} />
          </SkillRow>
          <SkillRow>
            <SkillNumber number={2} />
          </SkillRow>
          <SkillRow>
            <SkillNumber number={3} />
          </SkillRow>
          <SkillRow>
            <SkillNumber number={4} />
          </SkillRow>
          <SkillRow>
            <SkillNumber number={5} />
          </SkillRow>
        </div>
        <div className={classes.SkillsSectionRight}>
          <SkillRow>
            <SkillDesc desc={'Doskonała znajomość HTML, CSS oraz JavaScirpt'} />
          </SkillRow>
          <SkillRow>
            <SkillImg img={NodeJSLogo} />
          </SkillRow>
          <SkillRow>
            <SkillDesc
              desc={
                'Tworzenie dynamicznych interfejsów użytkownika dzięki bibliotece React'
              }
            />
          </SkillRow>
          <SkillRow>
            <SkillImg img={MongoDBLogo} />
          </SkillRow>
          <SkillRow>
            <SkillDesc
              desc={
                'Projektowanie stron internetowych przy pomocy Adobe Illustrator oraz Adobe Xd'
              }
            />
          </SkillRow>
        </div>
      </div>

      <div className={classes.SkillsSectionMobile}>
        <SkillRow>
          <SkillDesc desc={'Doskonała znajomość HTML, CSS oraz JavaScirpt'} />
          <SkillImg img={HtmlCssJsIcons} />
        </SkillRow>
        <SkillRow>
          <SkillDesc
            desc={'Umiejętność pracy z serwerem przy pomocy Node.js'}
          />
          <SkillImg img={NodeJSLogo} />
        </SkillRow>
        <SkillRow>
          <SkillDesc
            desc={
              'Tworzenie dynamicznych interfejsów użytkownika dzięki bibliotece React'
            }
          />
          <SkillImg img={ReactLogo} />
        </SkillRow>
        <SkillRow>
          <SkillDesc
            desc={'Obsługa nierelacyjnych baz danych przy użyciu MongoDB'}
          />
          <SkillImg img={MongoDBLogo} />
        </SkillRow>
        <SkillRow>
          <SkillDesc
            desc={
              'Projektowanie stron internetowych przy pomocy Adobe Illustrator oraz Adobe Xd'
            }
          />
          <SkillImg img={AdobeIcons} />
        </SkillRow>
      </div>
    </div>
  );
};

export default About;
