# Tekoälyavusteinen työskentely

## 1. Tekoälyn käyttötarkoitus

Projektissa hyödynnettiin tekoälyä tehtävälistasovelluksen suunnittelussa, määrittelyssä, ohjelmoinnissa ja dokumentoinnissa.

Tavoitteena oli käyttää tekoälyä työn tukena siten, että molemmat projektin tekijät ymmärtävät toteutetut ratkaisut ja tarkistavat ohjelmiston toimivuuden itse.

Projektin tavoitteet, vaatimukset ja rajaus on kuvattu [projektin määrittelyssä](01-projektikuvaus.md).

## 2. Tekoälylle annetut tehtävät

### Prompti 1 – Projektin aiheen valinta

Projektin alussa ChatGPT:ltä pyydettiin mahdollisimman helppoa ohjelmistoprojektia, joka täyttää kurssin vaatimukset.

Alkuperäinen pyyntö:

> Valitse meille sellaine joka kattaa kriteerit ja on mahdollisimman helppo toteutuksessa ja testauksessa

ChatGPT ehdotti yksinkertaista tehtävälistasovellusta. Valitsimme tämän aiheen, koska se on helposti toteutettavissa ja sen toiminnallisuus voidaan testata selkeästi.

### Prompti 2 – Tehtävälistasovelluksen toteuttaminen

Projektin aiheen ja vaatimusten määrittelyn jälkeen ChatGPT:tä pyydettiin auttamaan sovelluksen toteuttamisessa.

**Toteutusta kuvaava tarkennettu prompti:**

> Toteuta yksinkertainen tehtävälistasovellus käyttäen HTML-, CSS- ja JavaScript-tekniikoita.
>
> Sovelluksessa käyttäjän pitää voida lisätä tehtäviä, nähdä tehtävälista, merkitä tehtäviä valmiiksi ja poistaa tehtäviä.
>
> Tehtävien pitää tallentua selaimen lokaaliseen muistiin, jotta ne säilyvät sivun päivittämisen jälkeen.
>
> Estä tyhjien ja pelkkiä välilyöntejä sisältävien tehtävien lisääminen.
>
> Toteuta sovellus kolmeen tiedostoon: index.html, style.css ja script.js. Käyttöliittymän tulee olla selkeä ja helppokäyttöinen.
>
> Sovelluksen on toimittava ilman tietokantaa, palvelinta tai kirjautumista.

ChatGPT:n avulla tuotettiin sovelluksen toteutustiedostot. Tiedostot lisättiin GitHub-repoon ja sovellus julkaistiin GitHub Pagesissa.(Lisättiin julkiseen githubiin, että pystyttiin tekemään testaus suoraan githubissa.)

Toteutuksen jälkeen sovelluksen toimivuus tarkistettiin käytännössä. Kaikki kahdeksan suoritettua testiä hyväksyttiin, ja tulokset kirjattiin [testausdokumenttiin](03-testaus-ja-validointi.md).

## 3. Käytetyt tekoälytyökalut

| Työkalu | Malli tai versio | Käyttötarkoitus | Tarkistaminen |
|---|---|---|---|
| ChatGPT | GPT-6 | Aiheen valinta, projektin määrittely, ohjelmakoodin tuottaminen ja dokumentoinnin rakenteen selventäminen ja validointi | Sovellusta kokeiltiin selaimessa ja sen ominaisuudet testattiin. Dokumentteja verrattiin kurssin ohjeisiin. |

Tekoälyä käytettiin apuvälineenä, mutta projektin tekijät vastasivat lopullisen toteutuksen tarkistamisesta.

## 4. Tekoälyavusteinen työskentelyprosessi

Projektissa käytettiin seuraavaa toimintatapaa:

1. Valittiin projektin aihe ja määriteltiin keskeiset vaatimukset.
2. Pyydettiin ChatGPT:ltä apua sovelluksen suunnitteluun ja toteuttamiseen.
3. Tutustuttiin tekoälyn ehdottamaan ratkaisuun.
4. Lisättiin sovelluksen tiedostot yhteiseen GitHub-repoon.
5. Kokeiltiin ohjelman toimintaa verkkoselaimessa.
6. Testattiin sovelluksen keskeiset ominaisuudet ja virhetilanteet.
7. Kirjattiin testitulokset ja päivitettiin projektin dokumentaatio GitHubiin.

Tekoälyn tuottamaa koodia ei pidetty automaattisesti oikeana, vaan sen toimivuus varmistettiin käytännön testauksella.

## 5. Työnjako ja yhteistyö

Projektin toteuttivat Max Vehman ja Tom Carlas.

Molemmat osallistuivat projektin suunnitteluun, dokumentointiin ja sovelluksen testaamiseen suunnilleen yhtä paljon.

Sovelluksen ominaisuuksia kokeiltiin itsenäisesti. Molemmat tarkistivat tehtävien lisäämisen, poistamisen, valmiiksi merkitsemisen ja tallentamisen toimivuuden.

Projektin dokumentaatiota laadittiin ja tarkistettiin yhdessä. GitHubia käytettiin tiedostojen ja muutosten tallentamiseen.

Yhteistyön tavoitteena oli varmistaa, että molemmat ymmärtävät sovelluksen toiminnan ja pystyvät selittämään tehdyt ratkaisut.

## 6. Tekoälyn ehdotusten arviointi

ChatGPT:n avulla suunniteltiin ja tuotettiin tehtävälistasovelluksen ohjelmakoodia.

Emme hyväksyneet tekoälyn tuottamaa ratkaisua pelkästään sen perusteella, että koodi näytti oikealta, vaan kokeilimme sovellusta käytännössä.

Testasimme itsenäisesti tehtävien lisäämisen, poistamisen, valmiiksi merkitsemisen sekä tehtävien säilymisen sivun päivittämisen jälkeen. Lisäksi tarkistimme, ettei tyhjiä tai pelkkiä välilyöntejä sisältäviä tehtäviä voinut lisätä.

Kaikki kahdeksan suoritettua testiä onnistuivat. Havaintojen perusteella hyväksyimme tekoälyn tuottaman toteutuksen, koska sen keskeiset ominaisuudet toimivat projektin vaatimusten mukaisesti.

Tekoäly nopeutti toteutusta, mutta ohjelmiston toimivuus varmistettiin omilla testeillä.

Tarkemmat testitulokset löytyvät [testausdokumentista](03-testaus-ja-validointi.md).

## 7. Tekoälyn käytön rajoitukset

Tekoäly voi tuottaa virheellistä tai puutteellista koodia ja dokumentaatiota.

Tämän vuoksi projektissa kiinnitettiin huomiota seuraaviin asioihin:

- Ohjelmiston keskeiset ominaisuudet testattiin käytännössä.
- Virhetilanteita kokeiltiin erikseen.
- Tekoälyn ehdotuksia verrattiin projektin vaatimuksiin.
- Dokumentaatiota tarkistettiin kurssin ohjeiden perusteella.
- Salasanoja tai muita arkaluonteisia tietoja ei käytetty tekoälylle annetuissa pyynnöissä.

Vaikka suoritetut testit onnistuivat, ne eivät takaa ohjelmiston virheetöntä toimintaa kaikissa mahdollisissa tilanteissa.

## 8. Yhteys testaukseen

Ohjelmistolle suoritettiin kahdeksan toiminnallista testiä, jotka kaikki hyväksyttiin.

Testauksessa tarkistettiin tehtävien lisääminen, näyttäminen, valmiiksi merkitseminen, poistaminen ja tallennuksen säilyminen. Lisäksi testattiin tyhjien syötteiden estäminen ja poistetun tehtävän pysyvyys sivun päivittämisen jälkeen.

Projektin testitulokset, käyttäjätarpeen validointi ja tunnetut rajoitukset on dokumentoitu tiedostossa [03-testaus-ja-validointi.md](03-testaus-ja-validointi.md).

Testauksen perusteella sovelluksen keskeiset ominaisuudet toimivat suunnitellusti kokeilluissa tilanteissa.
