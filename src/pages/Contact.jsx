import { useEffect } from "react";
import { Link } from "react-router-dom";
import pageImg from "../assets/headers/menstruatiedisk.nl-cups-en-disks-kiezen-quiz-1.jpg";
import TextContainer from "../components/pageItems/pageDesignElements/textContainer/TextContainer";
import TwoColumnWithImg from "../components/pageItems/pageDesignElements/columns/TwoColumnWithImg";
import nynkeWithDiscs from "../assets/img/Nynke-gooit-met-cups-en-disks.jpg";

function Contact({ headerImageHandler, pageTitleHandler }) {
  useEffect(() => {
    headerImageHandler(pageImg);
    pageTitleHandler("Contact met Nynke");
  }, [headerImageHandler, pageTitleHandler]);

  return (
    <>
      <TextContainer>
        <h1>Contact</h1>
        <p>
          Hoi! Heb je vragen? Lees eerst de{" "}
          <Link to="/faq">veelgesteldevragen-pagina</Link>, misschien staat je
          vraag daar wel tussen.{" "}
        </p>
        <p>
          Anders kun je me via social media bereiken via{" "}
          <a
            href="http://instagram.com/cupkiezer/"
            target="_blank"
            rel="noreferrer"
          >
            @Cupkiezer's accounts
          </a>
          . Ik kan je helaas niet helpen met persoonlijke vragen, aangezien ik
          dit allemaal vrijwillig en onbetaald doe. Daar heb ik helaas geen tijd
          voor.
        </p>
        <h3>Persoonlijke vragen?</h3>
        <p>
          We hebben ook een{" "}
          <a
            href="https://www.facebook.com/groups/menstruatiecupclub/"
            target="_blank"
            rel="noreferrer"
          >
            gezellige besloten Facebookgroep
          </a>{" "}
          waar je vragen kan stellen. Je hoeft alleen een paar vragen te
          beantwoorden bij het lid worden, zodat we zeker weten dat er alleen
          echte mensen lid worden.
        </p>
      </TextContainer>

      <TwoColumnWithImg
        img={nynkeWithDiscs}
        imgAlt="alt text"
        imgCaption="Foto: 'Met Francis'"
      >
        <h2>Onafhankelijk en genderneutraal</h2>
        <p>
          {" "}
          Wat menstruatiedisk.nl bijzonder maakt is dat het een{" "}
          <span className="highlighter">onafhankelijke site</span> is; ik word
          niet betaald door fabrikanten. Ik krijg de meeste producten wel gratis
          opgestuurd.
        </p>
        <p>
          Ook vind ik het belangrijk dat alles{" "}
          <span className="highlighter">genderneutraal</span> gecommuniceerd
          wordt. Menstruatiedisk.nl is gericht op elk persoon met interesse in
          een menstruatiedisk. Niet iedereen die menstrueert is een vrouw en
          niet iedere vrouw menstrueert. Ik wil de site zo inclusief mogelijk
          houden, zodat iedereen zich welkom voelt.
        </p>
      </TwoColumnWithImg>
    </>
  );
}

export default Contact;
