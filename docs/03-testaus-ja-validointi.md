# Testaus ja validointi – Tehtävälista

## 1. Testauksen tavoite

Testauksen tavoitteena on varmistaa, että tehtävälistasovellus toimii projektin määrittelyn mukaisesti.

Testauksessa tarkistetaan sovelluksen keskeiset toiminnot sekä tärkeimmät virhetilanteet.

Testit perustuvat tiedostossa [01-projektikuvaus.md](01-projektikuvaus.md) määriteltyihin vaatimuksiin.

## 2. Testausympäristö

Sovellus on tarkoitus testata tavallisessa verkkoselaimessa.

Suunniteltu testausympäristö:

- Käyttöjärjestelmä: Windows
- Selain: Google Chrome, Microsoft Edge tai Firefox
- Ohjelmointitekniikat: HTML, CSS ja JavaScript
- Tallennus: selaimen localStorage

Toteutuneet testausympäristöt kirjataan testauksen yhteydessä.

## 3. Testitapaukset

| Testi | Vaatimus | Testitapa | Odotettu tulos |
|---|---|---|---|
| T1 | V1 | Kirjoitetaan "Tee koulutehtävä" ja lisätään se | Tehtävä ilmestyy listaan |
| T2 | V2 | Lisätään kolme erilaista tehtävää | Kaikki kolme näkyvät |
| T3 | V3 | Merkitään tehtävä valmiiksi | Tehtävän tila muuttuu valmiiksi |
| T4 | V4 | Poistetaan yksi tehtävä | Valittu tehtävä katoaa listalta |
| T5 | V5 | Lisätään tehtävä ja päivitetään sivu | Tehtävä säilyy |
| T6 | V6 | Yritetään lisätä tyhjä tehtävä | Tyhjää tehtävää ei lisätä |
| T7 | V6 | Syötetään vain välilyöntejä | Tehtävää ei lisätä |
| T8 | V7 | Avataan sovellus ilman kirjautumista | Sovellusta voi käyttää |

## 4. Testitulokset

Tehtävälistasovellusta testattiin GitHub Pagesissa julkaistulla versiolla:

https://maguun.github.io/tehtavalista/

Testauksessa tarkistettiin tehtävien lisääminen, näyttäminen, valmiiksi merkitseminen, tallennuksen säilyminen, poistaminen sekä virheellisten syötteiden käsittely.

### Suoritetut testit

| Testi | Vaatimus | Testitapa | Odotettu tulos | Havaittu tulos | Tila |
|---|---|---|---|---|---|
| T1 | V1 | Lisättiin tehtävä | Tehtävä ilmestyy listaan | Tehtävä ilmestyi listaan | Hyväksytty |
| T2 | V2 | Lisättiin toinen tehtävä | Molemmat tehtävät näkyvät | Molemmat näkyivät listassa | Hyväksytty |
| T3 | V3 | Merkittiin tehtävä valmiiksi | Tehtävän tila muuttuu valmiiksi | Tila muuttui onnistuneesti | Hyväksytty |
| T4 | V5 | Päivitettiin sivu | Tehtävät ja niiden tilat säilyvät | Tehtävät ja tilat säilyivät | Hyväksytty |
| T5 | V4 | Poistettiin tehtävä | Tehtävä poistuu listalta | Tehtävä poistui | Hyväksytty |
| T6 | V6 | Yritettiin lisätä tyhjä tehtävä | Tyhjää tehtävää ei lisätä | Tyhjää tehtävää ei lisätty | Hyväksytty |
| T7 | V6 | Syötettiin vain välilyöntejä ja painettiin Lisää | Tehtävää ei lisätä | Tehtävää ei lisätty | Hyväksytty |
| T8 | V4, V5 | Lisättiin tehtävä, poistettiin se ja päivitettiin sivu | Poistettu tehtävä ei ilmesty takaisin | Tehtävä pysyi poistettuna | Hyväksytty |

### Testauksen yhteenveto

- Suoritettuja testejä: **8**
- Hyväksyttyjä testejä: **8**
- Hylättyjä testejä: **0**
- Testauksen onnistumisprosentti: **100 % suoritetuista testeistä**

Kaikki kahdeksan suoritettua testiä vastasivat odotettua toimintaa.

Erityisesti T7 vahvisti, että sovellus estää pelkistä välilyönneistä koostuvien tehtävien lisäämisen. T8 puolestaan osoitti, että poistettu tehtävä pysyy poistettuna myös sivun päivittämisen jälkeen.

### Testauksen kattavuus

Testit kattavat projektin keskeiset toiminnalliset vaatimukset V1–V6. Vaatimuksen V7 (käyttö ilman kirjautumista) erillistä hyväksymistestiä ei ole vielä kirjattu.

Testit eivät yksin osoita sovelluksen toimivuutta kaikilla selaimilla tai laitteilla.

## 5. Testauksen johtopäätökset

Suoritettujen testien perusteella tehtävälistasovelluksen keskeiset ominaisuudet toimivat odotetusti.

Käyttäjä pystyy lisäämään tehtäviä, tarkastelemaan niitä, merkitsemään niitä valmiiksi ja poistamaan tarpeettomia tehtäviä.

Selaimen paikallinen tallennus säilyttää tehtävät ja niiden tilat sivun päivittämisen jälkeen. Lisäksi ohjelmisto estää tyhjät ja pelkkiä välilyöntejä sisältävät syötteet.

Kaikki kahdeksan suoritettua testiä hyväksyttiin. Testaus tukee johtopäätöstä, että sovelluksen toteutus vastaa sen keskeisiä toiminnallisia vaatimuksia kokeilluissa tilanteissa.

Käyttäjätarpeen validointi käsitellään erikseen käytännön käyttökokeilun perusteella.

## 6. Virhe- ja rajatapausten testaus

Sovellukselle on suunniteltu seuraavat rajatapaustestit:

**Tyhjän tehtävän lisääminen**

Käyttäjä yrittää lisätä tehtävän ilman tekstiä. Sovelluksen tulee estää tyhjän tehtävän lisääminen.

**Pelkkien välilyöntien lisääminen**

Käyttäjä kirjoittaa pelkkiä välilyöntejä ja yrittää lisätä tehtävän. Sovelluksen tulee estää lisäys.

**Sivun päivittäminen**

Käyttäjä lisää tehtävän ja päivittää selaimen sivun. Tallennettujen tehtävien tulee näkyä edelleen.

**Poistetun tehtävän säilyvyys**

Käyttäjä poistaa tehtävän ja päivittää sivun. Poistettu tehtävä ei saa ilmestyä takaisin.

Näistä kirjataan toteutuneet havainnot, kun testaus suoritetaan.

## 7. Käyttäjätarpeen validointi

Projektin alkuperäisenä tavoitteena on auttaa käyttäjää muistamaan ja hallitsemaan päivittäisiä tehtäviään.

Validointi suunnitellaan seuraavasti:

1. Käyttäjä lisää kolme koulutehtävää listalle.
2. Hän merkitsee yhden tehtävän valmiiksi.
3. Hän poistaa tarpeettoman tehtävän.
4. Hän päivittää selaimen sivun.
5. Hän tarkistaa, että jäljellä olevat tehtävät ja niiden tilat ovat oikein.

Validoinnissa arvioidaan, onnistuuko käyttäjän tavoite ja helpottaako sovellus tehtävien seuraamista.

Kokeilu tehdään sovelluksen valmistuttua. Kokeilun tekijä, havainnot ja johtopäätökset kirjataan tähän dokumenttiin.

Käytännön kokeilu:

Sovellusta kokeiltiin käytännössä lisäämällä, merkitsemällä valmiiksi ja poistamalla tehtäviä. Lisäksi tarkistettiin tehtävien säilyminen sivun päivittämisen jälkeen.

Kaikki kahdeksan testiä onnistuivat. Sovellus mahdollistaa tehtävien hallinnan ja niiden valmistumisen seuraamisen yhdessä paikassa.

Johtopäätös: Sovellus vastaa alkuperäiseen käyttäjätarpeeseen kokeiltujen toimintojen osalta. Testaus tehtiin itse, joten pidempiaikaista hyötyä tai muiden käyttäjien kokemuksia ei vielä arvioitu.

## 8. Tunnetut rajoitukset

Suunnitellun toteutuksen rajoituksia ovat:

- Sovellus toimii paikallisesti selaimessa.
- Tehtävät eivät synkronoidu eri laitteiden välillä.
- Käyttäjä ei voi jakaa tehtäviä muiden kanssa.
- Selaimen paikallisten tietojen poistaminen voi hävittää tehtävät.
- Sovellus ei sisällä käyttäjätunnuksia tai tietokantaa.

Toteutuksen aikana havaitut muut puutteet ja virheet dokumentoidaan testauksen yhteydessä.
