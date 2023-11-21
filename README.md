Databázová tabulka 
create table stromy (
TreeID int,
TreeName varchar(60),
LocationN double(60),
LocationE double(60),
Years varchar(4),
Width double(3),
Height double(8),
Invasive varchar 
Non-Invasive  

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
