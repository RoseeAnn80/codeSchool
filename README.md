 <title>Projektová Dokumentace: Systém Sběru Dat o Stromech</title>
<h2>Vytvoření Backoffice</h2>

  <ol>
    <li><strong>Přihlašování a Autorizace</strong>
      <ul>
        <li>Implementace bezpečného přihlášení a autorizace.</li>
      </ul>
    </li>

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
