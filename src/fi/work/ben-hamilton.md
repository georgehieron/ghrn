---
socialImage: '/images/work/benham-cover_960x640.webp'
title: 'Ben Hamilton portfolio'
summary: "Graafisen suunnittelijan portfoliosivusto, keskitetty hauskuuteen ja visuaaliseen innostukseen ilman, että saavutettavuus jää unohtamatta."
displayOrder: 1
eleventyNavigation:
  key: Ben Hamilton
  parent: Töitä
translationKey: "benham"
year: '2021'
hero:
  image: '/images/work/benham-cover_960x640.webp'
  imageAlt: "Kuvakaappaus Benin sivustosta, jossa käytössä korkeakontrastinen väriteeema."
techStack:
  - "Eleventy staattinen sivustogeneraattori"
  - "Netlify CMS sisällönhallintajärjestelmä"
  - "<abbr>HTML5</abbr>"
  - "Nunjucks"
  - "<abbr>SCSS</abbr>"
  - "Gorko Sass token-generaattori"
  - "Vanilla <abbr>JS</abbr>"
  - "<abbr>GSAP</abbr> animaatio"
visitLink: 'https://www.ben-hamilton.co.uk/'
visitText: Siirry sivustolle
---

Koska tein hyvä yhteistöitä Benin kanssa kun olin töissä [Atomic Smashissa](https://www.atomicsmash.co.uk/) Bristolissa, olin todella iloinen kun hän pyysi, voisiko minä rakentaa hänen uusi portfoliosivusto. Olin ollut oppimassa Jamstack kehityskeinoja, ja olin äskettäin tehnyt loppuun [Andy Bellin](https://piccalil.li/) kurssi <span lang="en">_'Learn Eleventy from Scratch'_</span>, siksi ajattelin, että tämä olisi täydellinen mahdollisuus ottaa käyttöön, mitä opin.

Suunnittelijana, joka oli tekemässä oman sivuston, Benillä oli totaalista vapautta luoda jotain ylellistä ja omituista, jolla ei oli rajoitusta normaalilla asiakkaiden pyynnöillä, ja minäkin nautin mahdollisuudesta tehdä sellainen sivusto. Esimerkiksi, heti alusta Benillä oli idea, että sivustolla pitäisi olla painike jolla käyttäjä voi vaihtaa sivuston väriteema, ei siis tumma/vaalea -tyyppinen vaan niin kuin vaatevaihto. Painikkeen keskellä on animoitu SVG versio hänen vaateripustin-tatuoinnista. Osaa teemojen väriyhdistelmät eivät riittäneet <span lang="en">Web Content Accessibility Guidelines</span> eli <abbr>WCAG</abbr>:in AA-standardiin, mutta koska olemme molemmat hyvin tutustuneet saavutettavuus-standardeihin, päätimme toteuttaa kolmas, riittävä teema mustavalkoisena. Tämä korkeakontrastinen teema otetaan käyttöön erikseen alkuperäisestä väriteema-napista, ja se myös keskeyttää kaikki liikuvat elementit sivustolle niille käyttäjille, jotka suosivat vähemmän liikettä.

{% import "macros/pictures-mobile.html" as mobpics %}

{{ mobpics.images(
    pic1Classes='',
    src1='/images/work/benham-mobile-pink_432x768.webp',
    img1Classes='',
    alt1='Kuvakaappaus Ben Hamilton sivustosta mobiilissa, jolla on käytössä pinkki väriteema.',
    title1='Benin sivusto mobiilissa, jolla on käytössä pinkki väriteema',
    pic2Classes='',
    src2='/images/work/benham-mobile-blue_432x768.webp',
    img2Classes='',
    alt2='Kuvakaappaus Ben Hamilton sivustosta mobiilissa, jolla on käytössä sininen väriteema.',
    title2='Benin sivusto mobiilissa, jolla on käytössä sininen väriteema',
    caption='Sivustolla on ominaisuus, jossa on 3 valittavaa väriteemaa, että voidaan käyttää vaihtoehdoista lempiteema sivuston läpi.'
) }}

Koska tiesin, että julkaisisin sivusto Netlify:llä, päätin käyttää sisällönhallintajärjestelmänä Netlify CMS. Tällä voi luoda Benille siisti ja yksinkertainen tapa hallita sivuston sisältöä. Käytin Netlify CMS:in 'vimpaimet' ominaisuutta rakentaa uudelleenkäytettäviä komponenttia töitä-sivuille, että Ben voi luoda vaihtelevia mutta johdonmukaisia sivuja. Vielä yksi asia tällä sivustolla oli Benin halu, että töitä-sivuja skrollataan vaakasuorasti isoilla näytönkoilla. Kulutin paljon aikaa tähän, että saisin toiminnan juuri oikein. Se oli toteutettu GreenSockin <abbr>GSAP</abbr>-animaatiolla. Varmistaa, että olisi mahdollisimman käytettävä, tein niin ettö vaakasuora skrollaus toimii normaalilla pystysuoralla hiiren-skrollauksella, mutta voi myös klikata ja vetää, kuten käsikursori indikoi. Varmistin myös, että näppäimistöllä vielä onnistui sivujen navigointi, esimerkiksi <kbd>Tab</kbd>-näppäimillä, skrollaussuunnan huolimatta.

<figure class="blockquote">
    <blockquote lang="en">
        <p>
        George handled this project with an attention to detail that I've rarely encountered when working with a front-end developer. I was absolutely delighted with the care he took to realise my vision, no matter how challenging the requirements I threw at him.
        </p>
    </blockquote>
    <figcaption>Ben Hamilton</figcaption>
</figure>

Toinen merkittävä ominaisuus tästä sivustosta on millainen töitä-sivut menevät toisestä toiseen. Kun saapuu töitä-sivun loppuun, Ben halusi että uudelleenohjataan käyttäjä seuraavalle projektille lyhyn lähtölaskennan jälkeen. Tällä käytin aria-live ilmoitusta, niin että tarkoitus on mahdolisimman selkeä ruudunlukijakäyttäjille. Lähtölaskenta voi myös keskeyttää kun skrollataan sivun lopusta pois.

Erityisesti visuaalisia mielenkiintoisia elementtejä on niin sanottu 'marquee' komponentit, jotka tein käyttämällä <code lang="en">text-shadow</code> ja <abbr>CSS</abbr>-animaatio. Myös linkkit, jotka muuttaa lihavointi huomattavasti hiiren ollessa päällä, ilman mahdollista välkyntää. Tein tämä käyttämässä linkeissä toinen, epäsaavutettava ja näkymätön teksti alkuperäisellä lihavoinnilla, että tällä pysyy linkin koko sillä aikaa kun näkyvä teksti muuttaa.

Lyhyt aikaa sivuston julkaisun jälkeen maaliskuussa 2021, Ben esitti sivuston [awwwards](https://www.awwwards.com/):ille, ja sai kunniallinen maininta, josta banneri on kiinteä keskellä sivuston vasen-reunalla. Olen kyllä ylpeä lopputuloksesta; oli valtava ilo tehdä töitä Benin kanssa sillä, ja vastineeksi tehdä yhteistöitä hänen kanssa juuri tämän sivun suunnittelulla.

{% import "macros/picture.html" as pic %}

{{ pic.image(
    picClasses='',
    src='/images/work/benham-work-end_960x640.webp',
    imgClasses='',
    alt='Kuvakaappaus Ben Hamiltonin töitä-sivun loppuosasta, jossa näytetään lähtölaskenta seuraavalle projektille.',
    title='Ben Hamilton töitä-sivun loppuosa',
    caption=''
)}}