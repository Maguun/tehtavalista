# Tehtävälista - projektin määrittely

## Käyttäjä, tarve ja hyöty

Sovellus on tarkoitettu opiskelijalle tai muulle käyttäjälle, joka haluaa pitää omat arjen tehtävänsä yhdessä paikassa. Ilman yksinkertaista listaa tehtäviä voi unohtua tai ne voivat hajota eri muistiinpanoihin. Selainpohjainen tehtävälista auttaa kirjaamaan tehtävät, seuraamaan niiden valmistumista ja poistamaan tarpeettomat tehtävät.

Tavoite on toteuttaa pieni, paikallisesti toimiva verkkosovellus, jonka keskeinen käyttötapaus voidaan näyttää ja testata ilman kirjautumista tai ulkoisia palveluja.

## Käyttäjäskenaariot

1. **Tehtävän lisääminen:** Opiskelija muistaa palautettavan harjoitustyön, kirjoittaa tehtävän nimen kenttään ja painaa Lisää. Tehtävä näkyy listassa.
2. **Etenemisen seuranta:** Opiskelija saa tehtävän tehdyksi ja merkitsee sen valmiiksi. Sovellus näyttää tehtävän valmiina, ja tieto säilyy sivun uudelleenlatauksen jälkeen.
3. **Listan siistiminen:** Käyttäjä poistaa tarpeettoman tehtävän. Tehtävä katoaa listasta eikä palaa sivun uudelleenlatauksessa.

## Vaatimukset ja hyväksymiskriteerit

| Tunniste | Vaatimus | Hyväksymiskriteeri | Prioriteetti |
|---|---|---|---|
| V1 | Käyttäjä voi lisätä tehtävän. | Kun kenttään kirjoitetaan `Lue tenttiin` ja painetaan Lisää, tehtävä näkyy listassa. | Pakollinen |
| V2 | Käyttäjä näkee tallennetut tehtävät. | Lisätty tehtävä näkyy listassa ja säilyy sivun päivittämisen jälkeen samassa selaimessa. | Pakollinen |
| V3 | Käyttäjä voi merkitä tehtävän valmiiksi ja keskeneräiseksi. | Tehtävän tilaa voi vaihtaa, muutos näkyy käyttöliittymässä ja säilyy sivun päivittämisen jälkeen. | Pakollinen |
| V4 | Käyttäjä voi poistaa tehtävän. | Poistettu tehtävä ei näy listassa eikä palaudu sivun päivittämisen jälkeen. | Pakollinen |
| V5 | Tyhjää tehtävää ei voi lisätä. | Tyhjällä tai vain välilyöntejä sisältävällä syötteellä ei synny uutta tehtävää; käyttäjä saa ymmärrettävän ilmoituksen. | Pakollinen |
| L1 | Sovellusta voi käyttää ilman tiliä tai verkkoyhteyttä, kun tarvittavat tiedostot ovat paikallisesti käytettävissä. | README:n ohjeella avattu sovellus toimii tavallisessa selaimessa ilman kirjautumista ja ilman ulkoisia ohjelmointikirjastoja. | Pakollinen |

## Rajaus

**Vähimmäiskokonaisuus:** Yksi verkkosivu, jossa on tehtävän syöttökenttä, Lisää-painike ja tehtävälista. Jokaisella tehtävällä on valmistumisen valinta ja poistopainike. Tehtävät tallennetaan selaimen `localStorage`-muistiin.

**Ulkopuolelle jätetään:** Käyttäjätunnukset, tietokanta, palvelin, pilvisynkronointi, tehtävien jakaminen, ilmoitukset, määräpäivät ja monimutkainen ulkoasu. Niitä ei tarvita käyttäjän päätavoitteen toteuttamiseen.

## Toteutuksen rakenne, oletukset ja riskit

- `index.html`: sivun rakenne ja painikkeet.
- `style.css`: yksinkertainen ulkoasu.
- `script.js`: tehtävien lisääminen, näyttäminen, tilan vaihtaminen, poistaminen ja tallentaminen.
- `localStorage`: käyttäjän itse kirjoittamien tehtävien tallennus paikalliseen selaimeen; ulkoista aineistoa ei käytetä.

Oletuksena on ajantasainen selain, jossa JavaScript ja `localStorage` ovat käytössä. Riskinä on, että selaimen tallennustila estetään tai tyhjennetään; silloin tehtävät eivät välttämättä säily. Tehtävät eivät siirry automaattisesti toiseen laitteeseen tai selaimeen. Tallennuksen epäonnistuminen tulee käsitellä käyttäjälle ymmärrettävästi.

Valittu toteutustapa välttää palvelimen ja tietokannan asennuksen. Vaihtoehtona olisi palvelinpohjainen sovellus, mutta se lisäisi asennusta ja testattavia osia ilman olennaista lisähyötyä tässä rajauksessa.

## Merkittävät muutokset ja perustelut

Alkuperäinen rajaus: paikallisesti toimiva tehtävälista, jossa on tehtävän lisäys, näyttö, tilan vaihto, poisto ja säilytys selaimessa. Mahdolliset myöhemmät vaatimus- tai rajausmuutokset kirjataan tähän päivämäärineen ja perusteluineen.

## Liittyvät dokumentit

- [AI-työskentely](02-ai-tyoskentely.md): todellinen alkuprompt, käytetyt työkalut ja yhteistyö.
- [Testaus ja validointi](03-testaus-ja-validointi.md): vaatimusten V1–V5 ja L1 testit ja toteutuneet tulokset.
