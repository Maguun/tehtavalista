# Tekoälyavusteinen työskentely

## 1. Tekoälyn käyttötarkoitus

Projektissa hyödynnetään tekoälyä tehtävälistasovelluksen suunnittelussa, määrittelyssä, ohjelmoinnissa, virheiden selvittämisessä ja dokumentoinnissa.

Tavoitteena on hyödyntää tekoälyä työn tukena siten, että molemmat projektin tekijät ymmärtävät toteutetut ratkaisut ja tarkistavat ohjelmiston toimivuuden itse.

Projektin tavoitteet, vaatimukset ja rajaus on kuvattu [projektin määrittelyssä](01-projektikuvaus.md).

## 2. Alkuperäinen tekoälylle annettu tehtävä

Projektin aiheen valinnassa ChatGPT:ltä pyydettiin mahdollisimman helppoa projektia, joka kattaa kurssin vaatimukset.

Käyttäjän alkuperäinen pyyntö:

> Valitse jok meille joka kattaa ja on mahdollisimman helppo

Tekoäly ehdotti yksinkertaista tehtävälistasovellusta. Ehdotuksen perusteella projektin aiheeksi valittiin ToDo-sovellus.

Toteutuksen tarkemmissa tekoälypyynnöissä käytetään projektin määrittelyä, jotta tekoälyn ehdotukset vastaavat sovittuja vaatimuksia.

## 3. Käytetyt tekoälytyökalut

| Työkalu | Malli tai versio | Käyttötarkoitus | Tarkistaminen |
|---|---|---|---|
| ChatGPT | GPT-6 | Projektin aiheen valinta ja dokumenttien valmistelu | Määrittelyä verrataan kurssin ohjeisiin ja tarkistetaan yhdessä |

Taulukkoa päivitetään, jos projektissa käytetään muita tekoälytyökaluja.

## 4. Tekoälyavusteinen työskentelyprosessi

Projektissa noudatetaan seuraavaa toimintatapaa:

1. Määritellään toteutettava ominaisuus projektikuvauksen vaatimusten perusteella.
2. Annetaan tekoälylle selkeä ja rajattu ohjelmointi- tai suunnittelutehtävä.
3. Tutustutaan tekoälyn ehdottamaan ratkaisuun.
4. Tarkistetaan, että ratkaisu vastaa vaatimuksia.
5. Kokeillaan ohjelman toimintaa selaimessa.
6. Korjataan mahdolliset virheet ja testataan uudelleen.
7. Tallennetaan hyväksytyt muutokset GitHubiin.

Tekoälyn tuottamaa koodia ei pidetä automaattisesti oikeana. Ohjelmiston toiminta varmistetaan käytännön testauksella.

## 5. Työnjako ja yhteistyö

Projekti toteutetaan kahden opiskelijan yhteistyönä.

Suunniteltu työnjako:

- **Max Vehman:** Käyttöliittymän toteutukseen ja tehtävien lisäämiseen osallistuminen.
- **Tom Carlas:** Tehtävien valmiiksi merkitsemiseen, poistamiseen ja tallennukseen osallistuminen.
- **Molemmat:** Vaatimusten tarkistaminen, testaus, dokumentointi ja toisen tekemien muutosten katselmointi.

Lopullinen työnjako ja kummankin todelliset työvaiheet dokumentoidaan toteutuksen aikana. Molemmat osallistuvat ohjelmiston suunnitteluun, toteutukseen ja tarkistamiseen.

GitHubissa käytetään yhteistä projektirepoa. Muutokset tallennetaan kuvaavilla commit-viesteillä.

## 6. Tekoälyn ehdotusten arviointi

Aiheen valinnassa tarkasteltiin tekoälyn ehdottamaa tehtävälistasovellusta suhteessa kurssin vaatimuksiin.

Tehtävälista on rajattavissa pieneksi kokonaisuudeksi, jossa käyttäjä voi lisätä, tarkastella, merkitä valmiiksi ja poistaa tehtäviä. Lisäksi tallennuksen toimivuus on testattavissa.

Aiheen valintaperusteena oli toteutuksen yksinkertaisuus sekä mahdollisuus osoittaa vaatimusten ja testauksen välinen yhteys.

Tämä kuvaa aiheen suunnittelussa tehtyä valintaa. Toteutuksen aikana dokumenttiin lisätään vähintään yksi konkreettinen, itse tarkistettu tekoälyn koodiehdotus, sen testihavainto ja perusteltu hyväksyminen, korjaaminen tai hylkääminen.

## 7. Tekoälyn käytön rajoitukset

Tekoäly voi tuottaa virheellistä tai puutteellista koodia ja dokumentaatiota.

Riskien vähentämiseksi:

- Koodi tarkistetaan ennen hyväksymistä.
- Ohjelmisto testataan selaimessa.
- Virhetilanteita kokeillaan erikseen.
- Tekoälyn ehdotuksia verrataan projektin vaatimuksiin.
- Salasanoja tai muita arkaluonteisia tietoja ei syötetä tekoälylle.

## 8. Yhteys testaukseen

Ohjelmiston testit, todelliset tulokset ja käyttäjätarpeen validointi dokumentoidaan tiedostossa [03-testaus-ja-validointi.md](03-testaus-ja-validointi.md).

Dokumenttia täydennetään projektin etenemisen mukaan.
