import ImgGallery from "../pageItems/pageDesignElements/columns/ImgGallery";
import { insertDisc, removeDisc, foldDisc } from "../../gallerys/insertDisc";
import { renderToString } from "react-dom/server";

export const discCleanData = {
  title: "Disk gebruiken",
  rows: [
    {
      title: "Hoe gebruik je een menstruatiedisk?",

      content: `
            <ul>
                    <li><strong>Kook je disk</strong> 5 minuten uit voor gebruik.</li>
                    <li><strong>Vouw de disk</strong> tot een platte ovaal door hem aan de zijkanten in te drukken.</li>
                    <li>Spreid je benen. <strong>Schuif de disk, licht gekanteld, voorzichtig in je vagina</strong>, terwijl je de
                        zijkanten samengeknepen
                        houdt.
                        De disk moet je niet, zoals bij een tampon, recht omhoog inbregen.
                        Maar juist een beetje schuin. Richt tijdens het inbregen met de disk naar je middenrug.
                        Dit zorgt ervoor dat de disk onder je baarmoedermond gaat zitten, in plaats van er tegenaan.
                        Je kan glijmiddel op waterbasis gebruiken om het soepeler te laten gaan.
                    </li>
                    <li>Duw de disk-rand omhoog, en <strong>klem zo de disk vast achter je schaambeen.</strong> Dit bot zit aan het
                        begin van je vagina bij je buik. Elk lichaam is anders, dus hoe ver dit precies zit, ligt aan jouw bouw.
                        Duw de disk zo ver dat hij niet meer verder naar achter kan. Nu kun je
                        hem <strong>loslaten!</strong>
                    </li>
                    <li>Als de disk goed is ingebracht, voel je hem niet zitten. Voel je hem toch? Dan heb je hem waarschijnlijk niet
                        ver genoeg ingebracht. Probeer het dan opnieuw.</li>
                    <li><strong>tot 12 uur lang chillen!</strong></li>
                    <li>Om de disk eruit te halen spreid je weer je benen en breng je een schone vinger in je vagina. Haak
                        een vinger achter de rand van de disk of pak de rand met twee vingers vast, en <strong>haal de disk eruit</strong>.
                        Heeft je disk een speciaal haakje of steeltje, dan kun je die gebruiken om de disk eruit te halen.
                    </li><li>Zorg er wel voor dat
                        je de disk horizontaal houdt, zodat je niet morst. Dit kan in het begin nog even lastig zijn,
                        dus neem er rustig de tijd voor en doe dit in een vertrouwde omgeving.
                        Er is een grote kans dat er menstruatie op je vingers komt. Daarom raad ik aan dit de eerste keer onder de douche te doen.
                    </li>
                    <li>Heb je de disk eruit? Leeg hem dan in de wc en <strong>spoel hem met water af</strong>.</li>
                    <li>Nog ongesteld? Begin weer bij stap 2, en blijf dit <strong>herhalen</strong> tot je menstruatie voorbij is. :)
                    </li>
                    <li>Menstruatie voorbij? <strong>Kook je disk even uit</strong> en bewaar hem in de tussentijd in
                        een ademend tasje op een droge locatie. Dus liever niet in de
                        badkamer en zeker niet in een luchtdichte container.
                    </li>
                </ul>
                             
                `,
    },
    {
      title: "Hoe vouw je een menstruatiedisk?",
      content: `Je vouwt de disk, tot een platte ovaal door hem aan de zijkanten in te drukken.
            ${renderToString(<ImgGallery imageList={foldDisc} />)}
            `,
    },
    {
      title: "Hoe breng je een menstruatiedisk in?",
      content: `


                 <ul>
            <li><strong>Vouw de disk</strong> tot een platte ovaal door hem aan de zijkanten in te drukken.</li>
                    <li>Spreid je benen. <strong>Schuif de disk, licht gekanteld, voorzichtig in je vagina</strong>, terwijl je de
                        zijkanten samengeknepen
                        houdt.
                        De disk moet je niet, zoals bij een tampon, recht omhoog, inbregen.
                        Maar juist een beetje schuin. Richt tijdens het inbregen met de disk naar je middenrug.
                        Dit zorgt ervoor dat de disk onder je baarmoedermond gaat zitten, in plaats van er tegenaan.
                        Je kan glijmiddel op waterbasis gebruiken om het soepeler te laten gaan.
                    </li>
                    <li>Duw de disk-rand omhoog, en <strong>klem zo de disk vast achter je schaambeen.</strong> Dit bot zit aan het
                        begin van je vagina bij je buik. Elk lichaam is anders, dus hoe ver dit precies zit ligt aan jouw bouw.
                        Duw de disk zo ver dat hij niet meer verder naar achter kan. Nu kun je
                        hem <strong>loslaten!</strong>
                    </li>
                    <li>Als de disk goed is ingebracht voel je hem niet zitten. Voel je hem toch? Dan heb je hem waarschijnlijk niet
                        ver genoeg ingebracht. Probeer het dan opnieuw.</li>
</ul>                           ${renderToString(
        <ImgGallery imageList={insertDisc} />
      )}


            
            
            `,
    },
    {
      title: "Hoe haal je een disk er weer uit?",
      content: `<p>Om de disk eruit te halen spreid je weer je benen en breng je een schone vinger in je vagina. Pers een beetje, zoals bij het poepen, om de disk binnen handbereik te krijgen.
Haak een vinger achter de rand van de disk, en <strong>haal de disk eruit</strong>. Zorg er wel voor
                        dat je de disk horizontaal houdt, zodat je niet morst. Dit kan in het begin nog even lastig zijn,
                        dus neem er rustig de tijd voor en doe dit in een vertrouwde omgeving. En bij voorkeur onder de douche.</p>
            <p>Er is een grote kans dat er wat menstruatiebloed op je vingers komt. Dat was je er met water en zeep gewoon weer af. Maar wel fijn om op voorbereid te zijn.</p>
            
             ${renderToString(<ImgGallery imageList={removeDisc} />)}
            `,
    },
  ],
};
