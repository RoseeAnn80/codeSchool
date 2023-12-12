# Projektová Dokumentace: Systém Sběru Dat o Stromech

## Vytvoření Backoffice

1. **Přihlašování a Autorizace**
   - Implementace bezpečného přihlášení a autorizace.

2. **Správa Uživatelů**
   - Vytvoření, úprava a odstranění uživatelských účtů s hierarchií oprávnění.

## Správa Stromů

3. **Zobrazování Seznamu Stromů**
   - Možnost vyhledávání a filtrování v seznamu stromů.

4. **Správa Informací o Stromech**
   - Přidání, úprava a odstraňování stromů s detailními informacemi (umístění, druh stromu, stav).

5. **Zobrazení Statistik a Informací o Zdraví Stromů**
   - Vytvoření přehledů statistik a zdravotních informací o stromech.

## Správa Dat

6. **Zobrazení a Úprava Dat spojených s Každým Stromem**
   - Detailní správa dat spojených s každým stromem.

7. **Záznamy a Protokoly**
   - Uchovávání detailních záznamů o akcích provedených v backoffice.

## Nástroje pro Import/Export Dat

8. **Import/Export Funkce pro Data**
   - Možnost načítat a exportovat data ve vhodném formátu pro aplikaci.

## Notifikace a Upozornění

9. **Konfigurace Notifikací pro Administrátory**
   - Možnost nastavit notifikace pro důležité události v backoffice.

## Grafy a Vizualizace

10. **Vytváření Grafů a Vizualizací**
    - Pro lepší porozumění datům, vytvoření grafů a vizualizací.

## Příběhy Stromů

11. **Kombinace Vizuálních Prvků s Příběhy Stromů**
    - Každý strom s vlastní stránkou obsahující historii, zajímavosti a fotografie.

12. **Virtuální Procházka**
    - Virtuální procházka mezi různými druhy stromů s vizuálními, zvukovými nebo video prvky.

## Grafy a Statistiky

13. **Zobrazení Grafů a Statistik o Stromech**
    - V případě dostatečného množství dat, vytvoření grafů a statistik o počtu stromů v různých oblastech.

## Databázová Tabulka  (co by měla obsahovat je ještě předmětem přemýšlení, která data budu sbírat?)

```sql
CREATE TABLE stromy (
  TreeID INT,
  TreeName VARCHAR(60),
  LocationN DOUBLE(60),
  LocationE DOUBLE(60),
  Years VARCHAR(4),
  Width DOUBLE(3),
  Height DOUBLE(8),
  Invasive VARCHAR,
  NonInvasive VARCHAR
);

### Položky Menu:

- **Najdi Strom**
- **Vlož Strom**
- **Seznam Stromů**

### Registrace a Přihlášení

- **Registrace:** Jméno, Příjmení, Email
- **Přihlášení:** Email, Heslo, Zapomenuté Heslo

### Funkce "Najdi Strom"

- **Vyhledávání podle Názvu a Lokality**
- **Výsledek:** Seznam stromů s detaily (Název, Lokalita, Souřadnice)

### Funkce "Vlož Strom"

- Možnost vložení nového stromu s detaily (Stáří, Výška, Šířka kmene, Souřadnice, Typ)

### Karta Uživatele

- **Status Uživatele:** Neználek, Objevovatel, Průzkumník, Dendrolog
- **Jeho Stromy:** Seznam stromů vložených uživatelem.

## Mapa S Umístěním Stromů

- Možnost vyhledávání v mapě s kontrolou VOP mapy.cz a využitím API.

## Rozcestník Nejčastějších Stromů

- Tvořeno z listů nejčastějších stromů s odkazy na seznamy stromů.











<h2>Projektová Dokumentace: Systém Sběru Dat o Stromech</h2>
<h3>Vytvoření Backoffice</h3>
<li>Správa Uživatelů</li>
Vytvoření, úprava a odstranění uživatelských účtů s hierarchií oprávnění.
<li>Přihlašování a Autorizace</li>
<li>Implementace bezpečného přihlášení a autorizace.</li>
<li><strong>Správa Uživatelů</strong>
 
      <ul>
        <li>Vytvoření, úprava a odstranění uživatelských účtů s hierarchií oprávnění.</li>
      </ul>
    </li>
  </ol>

Přihlašování a autorizace<br>
Správa uživatelů<br>
Vytvoření, úprava a odstranění uživatelských účtů s různými úrovněmi oprávnění.<br>
Správa stromů:<br>
Zobrazování seznamu stromů s možností vyhledávání a filtrování.<br>
Možnost přidávat nové stromy, upravovat existující a odstraňovat stromy.<br>
Přidání informací jako umístění, druh stromu, stav apod.<br>
Zobrazení statistik nebo informací o zdraví stromů.<br>
Správa dat:<br>
Možnost zobrazení a úpravy dat spojených s každým stromem.<br>
Přidávání a upravování záznamů o monitorování (např. údaje o růstu, zdraví, apod.).<br>
Záznamy a protokoly:<br>
Uchovávání záznamů o akcích provedených v backoffice (např. kdo co upravil, kdy a proč).<br>
Nástroje pro import/export dat:<br>
Možnost načítat nebo exportovat data ve formátu vhodném pro vaši aplikaci.<br>
Notifikace a upozornění:<br>
Možnost nastavit notifikace pro administrátory o důležitých událostech (např. nový záznam o stromu, úprava).<br>
Grafy a vizualizace:<br>
Vytváření grafů nebo vizualizací pro lepší porozumění datům (např. růst stromů v čase).**


**Příběhy Stromů:
Kombinace vizuálních prvků s příběhy stromů.<br> Každý strom může mít vlastní stránku s detaily o jeho historii, zajímavostech a fotografiích, cílem je osobnější přístup a zajímavější zážitek pro návštěvníky.
Virtuální Procházka:<br>
Virtuální procházku mezi různými druhy stromů.<br>Uživatelé by mohli procházet stránky jako by to bylo ve skutečnosti, s obrázky, zvuky nebo dokonce krátkými videi představujícími různé oblasti.**


**Grafy nebo Statistiky:**

Pokud bude dostatek dat, může být i  zobrazení grafů nebo statistik o počtu stromů v různých oblastech, druzích atd.

Databázová tabulka <br>
create table stromy (<br>
TreeID int,<br>
TreeName varchar(60),<br>
LocationN double(60),<br>
LocationE double(60),<br>
Years varchar(4),<br>
Width double(3),<br>
Height double(8),<br>
Invasive varchar <br>
Non-Invasive  <br>

# codeSchool
Závěrečná práce  Coding School
https://www.figma.com/file/i6nx3oOcujKqn5ICD6gDJH/WireGen---AI-GPT-wireframe-generation-(Community)?type=design&node-id=0-1&mode=design&t=HVNwcSEBUq7inaBT-0 
Závěrečná práce Coding School Popis projektu:

webová appka využívaná k nalezení stromů :) HP

Položky menu:

Najdi strom Vlož strom Seznam stromů

Z HP - Registrace a přihlášení

Najdi strom: Inputy: Název stromu, Lokalita

Vlož strom: (název = dropdown) - vložit nový strom Stáří stromu Výška stromu Šířka kmenu Souřadnice: Invazivní/neinvazivní typ Vlož fotografii (povinné i nepovinné údaje)

Najdi strom:

Co se stane když: dám název stromu, lokalitu Zobrazí se seznam stromů v požadované lokalitě Strom - lokalita - souřadnice(?) dám jen název: Zobrazí se všechny stromy toho názvu Strom - lokalita - souřadnice(?)

Jak bude vypadat karta stromu pro zadání: Název, česky, latinsky Stáří stromu Výška stromu Šířka kmenu (obvod? průměr? v cm) Souřadnice: Kraj: Invazivní/neinvazivní typ Fotogalerie stromu
Každý strom (druh stromu) bude mít stručný popis o výskytu, atp. : Název, česky, latinsky Stáří stromu Výška stromu Šířka kmenu (obvod? průměr? v cm)  Invazivní/neinvazivní, fotogalerie (?)


Mapa + body kde jsou stromy Možnost vyhledávání v mapě (?) kontrola VOP mapy.cz - moožnost využití API pro neziskové organizace Poloha dle zaměření
získaná API ** const API_KEY = 'eyJpIjoyNTcsImMiOjE2Njc0ODU2MjN9.c_UlvdpHGTI_Jb-TNMYlDYuIkCLJaUpi911RdlwPsAY';**

Rozcestník nejčastějších stromů:

Tvořeno z listů nejčastějších stromů

Po kliknutí na jednotlivé lístky bude odkazovat na seznam stromů.

Registrace uživatele:

Jméno, příjmení, mail,

Přihlášení uživatele: mail, heslo, zapomenuté heslo

Karta uživatele

Status uživatele: Neználek, Objevovatel, Průzkumník, Dendrolog Jeho stromy (co vložil)
