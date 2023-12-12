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
- **Registrace**
- **Přihlášení**

### Registrace a Přihlášení

- **Registrace:** Jméno, Příjmení, Email
- **Přihlášení:** Email, Heslo, Zapomenuté Heslo

### Funkce "Najdi Strom"

- **Vyhledávání podle Názvu a Lokality**
- **Výsledek:** Seznam stromů s detaily (Název, Lokalita, Souřadnice)

### Funkce "Vlož Strom"

- Možnost vložení nového stromu s detaily (jméno česky, latinsky, Stáří, Výška, Šířka kmene, Souřadnice, Typ)
- invazivita ANO/NE

### Karta Uživatele

- **Status Uživatele:** Neználek, Objevovatel, Průzkumník, Dendrolog
- **Jeho Stromy:** Seznam stromů vložených uživatelem.

## Mapa S Umístěním Stromů

- Možnost vyhledávání v mapě s kontrolou VOP mapy.cz a využitím API.
- povolený API klíč - ** const API_KEY = 'eyJpIjoyNTcsImMiOjE2Njc0ODU2MjN9.c_UlvdpHGTI_Jb-TNMYlDYuIkCLJaUpi911RdlwPsAY';**

## Rozcestník Nejčastějších Stromů

- Tvořeno z listů nejčastějších stromů s odkazy na seznamy stromů. (nápad, jak jinak udělat seznam stromů aby to nebyla jen čistá popiska?)


## Příběhy Stromů:
- Kombinace vizuálních prvků s příběhy stromů.<br> Každý strom může mít vlastní stránku s detaily o jeho historii, zajímavostech a fotografiích, cílem je osobnější přístup a zajímavější zážitek pro návštěvníky.
- Virtuální Procházka:<br>
- Virtuální procházku mezi různými druhy stromů.<br>Uživatelé by mohli procházet stránky jako by to bylo ve skutečnosti, s obrázky, zvuky nebo třeba krátkými videi představujícími různé oblasti.

## Podpora Pro Jazyky:
- Podpora a lokalizace jazyků (ENG).

## Zálohování A Obnova Dat:
- Popis postupů pro pravidelné zálohování dat a plány obnovy v případě havárie nebo ztráty dat.
## Monitoring A Analýza Chyb:
- Implementace nástrojů pro sledování chyb, logování a analýzu výkonu aplikace. (Sentry?)

## kontrola přihlášení js
// Simulace úspěšného přihlášení
        const validEmail = 'vasemail@example.com';
        const validPassword = 'vaseheslo';



-----------------------------------------------------------
## 404 - pokácený strom (tudy cesta nevede)
## HP - grafika pro přihlášeného/nepřihlášeného uživatele (jak bude vypadat)
- obecná karta stromu - popis, invazivita, typicky kde se nejvíce vyskytuje apod., druhá část by měla být dynamická (mapa + seznam lokalit kde se vyskytuje)
- detailní karta stromu - popisuje už aktuální strom, dle zadání ř.92
## Jak na stylizace karet? Využít CSS pro každou kartu ->? 
- #generalCard {
    /* Stylizace obecné karty */
}

- #detailsCard {
    /* Stylizace karty s podrobnostmi */
}
