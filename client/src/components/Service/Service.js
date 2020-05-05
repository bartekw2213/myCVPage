import React from 'react';
import classes from './Service.module.css';
import ServiceCard from './ServiceCard/ServiceCard';
import Painter from '../../img/service-cards/Painter.svg';
import BuisnessGuy from '../../img/service-cards/BuisnessGuy.svg';
import TVGuy from '../../img/service-cards/TVGuy.svg';
import SectionHeader from '../Layout/SectionHeader/SectionHeader';

const listItems = [
  [
    'strona reprezentacyjna twojej działalności',
    'zdobądź nowych klientów, rozwijaj się',
    'wyprzedź konkurencję',
    'bądź zauważalny w sieci',
  ],
  [
    'twój własny nieszablonowy blog',
    'dziel się swoją pasją w sieci',
    'urządź swoją stronę jak tylko chcesz',
    'stwórz swój wizerunek na szeroką skalę',
  ],
  [
    'przekuj swój pomysł w stronę internetową',
    'własne forum internetowe, portal?',
    'stwórz COŚ swojego w sieci',
  ],
];
const Service = () => {
  return (
    <div className={`${classes.ServiceContainer} container`}>
      <div className={classes.ServiceGrid}>
        <ServiceCard
          titleIcon={'fas fa-user-tie'}
          title={'STRONA TWOJEJ FIRMY DZIAŁALNOŚCI'}
          img={BuisnessGuy}
          listItems={listItems[0]}
        />
        <ServiceCard
          titleIcon={'fas fa-align-center'}
          title={'TWÓJ BLOG / FANPAGE'}
          img={Painter}
          listItems={listItems[1]}
        />
        <ServiceCard
          titleIcon={'fas fa-brain'}
          title={'WSZYSTKO CO PRZYJDZIE CI DO GŁOWY'}
          img={TVGuy}
          listItems={listItems[2]}
        />
      </div>

      <SectionHeader text={'FAQ'} icon={'fas fa-toolbox'} />

      <div className={classes.FAQChat}>
        <p className={`${classes.ChatMsg} ${classes.Question}`}>
          Jaka jest cena danego pakietu? Czy wycenę otrzymam na początku oraz
          czy może ona ulec zmianie w trakcie tworzenia strony?
        </p>
        <p className={`${classes.ChatMsg} ${classes.Answer}`}>
          Cena zależy od tego jak duża ma być strona i jakie są indywidualne
          oczekiwania klienta wobec niej. Wycena strony zostaje zrobiona na
          początku i nie ulega zmianie do samego końca
        </p>
        <p className={`${classes.ChatMsg} ${classes.Question}`}>
          Jak można się skontaktować w celu omówienia współpracy? Jak długo będę
          czekać na odpowiedź?
        </p>
        <p className={`${classes.ChatMsg} ${classes.Answer}`}>
          W celu kontaktu proszę o skorzystanie z zakładki Kontakt u góry
          strony. Odpowiedź zostanie nadana w przeciągu najbliższych paru
          godzin.
        </p>
        <p className={`${classes.ChatMsg} ${classes.Question}`}>
          Czy będę mieć wpływ na ostateczny wygląd strony oraz czy nie będzie
          ona sztywnym szablonem?
        </p>
        <p className={`${classes.ChatMsg} ${classes.Answer}`}>
          Przed rozpoczęciem pracy konsultuję z klientem jak on chce by strona
          ostatecznie wyglądała . Każda witryna jest tworzona indywidualnie pod
          kupującego
        </p>
        <p className={`${classes.ChatMsg} ${classes.Question}`}>
          Czy jest możliwość zaprojektowanie grafik / loga? Czy można zamówić to
          bez jednoczesnego zamawiania witryny internetowej?
        </p>
        <p className={`${classes.ChatMsg} ${classes.Answer}`}>
          Jak najbardziej podejmę się również wykonania grafik na potrzebę
          klienta, również bez konieczności wykupywania opcji strony
          internetowej
        </p>
        <p className={`${classes.ChatMsg} ${classes.Question}`}>
          Czy strona jest responsywna - odpowiednia dostosowuję do ekranów
          tabletów / urządzeń mobilnych?
        </p>
        <p className={`${classes.ChatMsg} ${classes.Answer}`}>
          Każda z tworzonych stron jest w 100% responsywna i wygląda świetnie na
          urządzeniach elektronicznych o różnej rozdzielczości
        </p>
      </div>
    </div>
  );
};

export default Service;
