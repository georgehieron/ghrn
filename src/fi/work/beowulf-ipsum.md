---
title: 'Beowulf Ipsum'
summary: 'Ipsum-tyylinen tekstigeneraattori jonka lähde on Beowulf.'
displayOrder: 3
eleventyNavigation:
  key: Beowulf Ipsum
  parent: Töitä
translationKey: "bIpsum"
year: '2019'
hero:
  image: '/images/work/beowulf-ipsum-cover_960x640.webp'
  imageAlt: 'Beowulf Ipsum kansikuva missä näytetään tekstiesimerkkia.'
techStack:
  - "<abbr>HTML5</abbr>"
  - "Tavallinen Sass"
  - "Tavallinen <abbr>JS</abbr>"
visitLink: 'https://www.beowulfipsum.com/'
visitText: Siirry sivustolle
---

Eräänä päivänä, kun olin tekemässä jonkun uuden sivun fronttia, tarvitsin esimerkkisisältöä, että helpottaisin kyseessä olevan komponentin rakentamisen. Tietysti käytin klassinen ratkaisu eli Lorem Ipsum, joka on pitkään ja maailman ympäri ollut tietty mallitekstiä oikean sisällön tilalla leiskojen konteksteissa. Mutta, keskiaikashistoria-nörttinä, luulin että miksi ei viedä konseptin kauempaa ja tee vastaava generaattori historiaalisilla kirjoituksilla? Joka tapauksessa, Lorem Ipsumin lisäksi on nykyään olemassa monta muuta ja usein todella hauskaa mallitekstigeneraattoria, kuten [Pirate Ipsum](https://pirateipsum.me/), [Coffee Ipsum](http://coffeeipsum.com/),ja [Cat Ipsum](http://www.catipsum.com/).

Vaikka nämä ovat hauskaa, käytän niitä harvoin, koska ne generoivat lukevat sanat, joka voi aiheuttaa niin että sen sisältö on vielä vähän häiritsevä kun minä yritän lukea läpi ne höpölauseita. Kuten [lipsum.com](https://lipsum.com/) sanoo:

<figure class="blockquote" lang="en">
    <blockquote>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
    </blockquote>
</figure>

Niin, minulle se idea käyttää muinaista tai keskiaikaista kirjoituksia tämän tarkoituksen varten oli täydellinen; mahtava tapa yhdistää työni web-kehittäjän ja minun rakkaus historiaa ja kieliä kohtaan. Ajattelin myös, että koska se käyttäisi oikeat tekstit lähteenä, olisin tehdä generaattori vähän erilaisella tavalla, että generoidaan tekstit oikeassa järjestyksessä, randomista aloituskohdasta. Lisäksi, kun Beowulf on runo jolla on rivinumerot merkitty, käyttäisin rivinumerot myös mallitekstin tulostuksessa, niin että jos loppukäyttäjä haluaisin, voidaan lukea sieltä kohdalta alkuperäisessä kirjoituksessa.

{% import "macros/picture.html" as pic %}

{{ pic.image(
    picClasses='',
    src='/images/work/beowulf-ipsum-text_960x640.webp',
    imgClasses='',
    alt='Kuvakaappaus Beowulf Ipsumista, josa näytetään rivinumerot.',
    title='Beowulf Ipsum rivimäärä kuvakaappaus',
    caption=''
) }}

Heittää projekti maaliin, päätin että lisäisin valintaruutu jolla teksti voi aloittaa sanalla <span lang="ang">_Hwæt!_</span>, Beowulfin tunnettu epäselvä aloitusdeklaraatio, niin kuin Lorem Ipsumin tunnettu aloituskohta <span lang="la">_Lorem Ipsum dolor sit amet_</span>. Huvin vuoksi kirjoitin sivuston ohjetekstit vähän muinaisenglannin tavalla.

Sivusto on staattinen; vain HTML on käytetty sen ainoan sivun varten, tavallinen Sass tyyleillä ja tavallinen JS generoida sisältöä. Siivosin manuaalisesti noin 600 riviä Beowulfia tämän varten (ehkä myöhemmin lisään enemmän), ja tein lopuksi myös painike, jolla voi helposti kopioida generoitut sisällöt. Minulla oli kyllä hauska tekemään sivuston tyylejä, koska se on varmaan erilainen kuin mitä asiakkaita yleensä haluaa.

Nautin herättää henkiin niin nörttinen konsepti; ole hyvä kokeilla sitä, miksi ei!