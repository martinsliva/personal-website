# Codex handoff: osobní profilový web Martina Slívy

## Cíl webu
Vytvořit čistou osobní/profesní profilovou stránku, která bude fungovat jako prezentace pro získání seniorní role v AI leadershipu.

Profil má cílit na role typu:
- Head of AI
- AI Lead / AI Engineering Lead
- CTO / Fractional CTO
- AI Product / Technical Consultant

Stránka má komunikovat zejména:
- seniorní technicko-produktový profil,
- zkušenost napříč obory,
- silnou doménu ve zdravotnictví a AI,
- schopnost propojovat strategii, delivery, regulaci a reálné nasazení,
- výuku, odborné publikace a přednášky jako reputační důkaz.

## Aktuální stav
Připraven je jeden React komponent s Tailwind třídami:
- `MartinSlivaWebPreview.jsx`

Komponent obsahuje tyto sekce:
- hero / header,
- O mně,
- Praxe napříč vertikálami,
- Výuka a mentoring,
- AI certifikace,
- Prezentace,
- Publikace,
- Kontakt.

## Aktuální obsahové rozhodnutí
### Hero
- badge: `AI Leader s praxí napříč obory`
- headline zdůrazňuje propojení zkušenosti ze zdravotnictví, startupů, telekomunikací a financí
- důraz na technický, obchodní, regulatorní i etický rozměr AI produktů

### Profilový framing
Profil není psaný jako klasické CV. Má působit jako:
- stručný executive profile,
- osobní landing page,
- věrohodný podklad pro seniorní AI roli.

### Vertikály
Aktuálně jsou použity tyto 4 bloky:
- Zdravotnictví a medtech
- Telekomunikace
- Finance a bankovnictví
- Startupy a produktové prostředí

### Výuka
Aktuálně zahrnuto:
- ČVUT — Jak se staví startup
- robot_dreams — AI produkt ve zdravotnictví

### Certifikace
Aktuálně jsou v kódu uvedeny konkrétní odkazy na certifikáty Coursera.
Pozor: dvě položky jsou zatím jen obecně pojmenované jako „Další ověřený certifikát“ a je vhodné je přejmenovat přesně podle skutečného názvu kurzu.

### Prezentace
Sekce je připravena jako placeholder.
Aktuálně obsahuje 3 karty:
- AI ve zdravotnictví
- Jak se staví startup
- AI produkt ve zdravotnictví

Každá karta má zatím placeholder CTA `Doplnit PDF` a `href: "#"`.

### Publikace
Aktuálně jsou doplněny 2 články s odkazy na PubMed.

## Co už bylo vědomě upraveno během iterací
- odstraněna slabá badge/reference sekce s logy bez kontextu,
- přepsaná hero badge, aby nezněla technokraticky,
- přidána sekce vertikál,
- přidána sekce prezentací,
- přidány certifikáty s přímými odkazy,
- zlepšeno zalamování textu v kartách,
- nahrazen název `Reputační profil` za `Profil v kostce`,
- formulace certifikační sekce zjednodušeny do méně marketingového tónu.

## Známé nedostatky
1. **Certifikace nejsou úplně vyčištěné**
   - dvě položky mají generický název,
   - jedna položka `Machine Learning A-Z™` je obsahově nejistá vzhledem k URL a je vhodné ji ověřit.

2. **Sekce Prezentace je zatím placeholder**
   - chybí skutečné PDF odkazy,
   - chybí názvy konkrétních přednášek podle reality.

3. **MiniLogo komponenta používá stylizované pseudo-logo varianty**
   - nejsou to oficiální brand assety,
   - pokud bude potřeba vyšší vizuální kvalita, nahradit SVG logy nebo úplně odstranit logo bloky.

4. **Komponent je zatím jen preview**
   - není napojen na konkrétní app/router/layout,
   - není připravený jako finální produkční page v rámci projektu.

## Doporučené další kroky pro Codex
### Priorita A — obsahová čistota
- projít sekci certifikací a nechat jen opravdu silné položky,
- přesně pojmenovat všechny kurzy podle certifikátů,
- případně zredukovat počet certifikací na 4–6 nejsilnějších.

### Priorita B — sekce prezentací
- doplnit konkrétní přednášky a PDF odkazy,
- změnit CTA z `Doplnit PDF` na reálné akce typu `Otevřít PDF` / `Stáhnout PDF`.

### Priorita C — vizuální polish
- zkontrolovat rytmus nadpisů,
- ověřit mobilní layout,
- zredukovat délku hero headline, pokud bude na desktopu působit příliš těžce,
- případně přidat fotku nebo decentní portrait block.

### Priorita D — produkční integrace
- převést komponentu do cílové struktury projektu,
- doplnit metadata (`title`, `description`, Open Graph),
- doplnit favicon / social preview,
- případně připravit EN variantu.

## Obsahové preference uživatele, které je dobré zachovat
- čeština,
- střízlivý tón,
- méně marketingu,
- důraz na věrohodnost a senioritu,
- akcent na praxi napříč obory,
- akcent na AI leadership, ale bez přepáleného self-promotion stylu.

## Doporučený prompt pro Codex
Použij přiložený React komponent jako základ a uprav ho do finální produkční profilové stránky. Zachovej střízlivý, věrohodný a seniorní tón. Vyčisti sekci certifikací, doplň realistickou sekci prezentací s PDF odkazy, zkontroluj mobilní layout a připrav komponent tak, aby byl snadno nasaditelný v moderním React/Next.js projektu s Tailwind CSS.
