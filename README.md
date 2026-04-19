# Martin Slíva | osobní web

Tahle složka obsahuje hotový statický web bez build kroku.

## Co je uvnitř

- `index.html` – hlavní stránka
- `styles.css` – kompletní styly
- `favicon.svg` – favicon
- `presentations/` – detailní podstránky prezentací
- `presentations/assets/` – zdrojové soubory prezentací (`.pdf`, `.pptx`)
- `codex_handoff/` – původní podklady z ChatGPT

## Jak web otevřít

Stačí otevřít `index.html` v prohlížeči.

## Co je hotové

- převedení z JSX preview do reálného projektu
- silnější hero sekce s konkrétními důkazy
- mobilní rychlá navigace
- opravené odkazy a názvy vybraných certifikací
- sekce prezentací napojená na tři skutečné materiály
- sjednocení prezentací přes detailní HTML podstránky
- responsivní layout pro desktop i mobil

## Jak fungují prezentace

Na homepage vede každá karta na vlastní detailní stránku v `presentations/`.
Tam je:

- stručný popis tématu
- komu je přednáška určená
- odkaz na původní soubor prezentace

Zdrojové formáty zůstávají původní:

- `Specifika vývoje AI pro zdravotnictví` – PDF
- `Screening chronických nemocí s využitím umělé inteligence` – PPTX
- `Bezpečný návrh a vývoj softwaru pro zdravotnické účely` – PPTX

## Jak to napojit na GitHub

V tomhle prostředí teď není dostupný `git`, takže to nešlo propojit automaticky přímo ode mě.

### Varianta A: GitHub Desktop

1. Otevři GitHub Desktop
2. Zvol `Add an Existing Repository` nebo `Create a New Repository`
3. Vyber složku:

`C:\Users\marti\OneDrive\Dokumenty\Codex\stranka`

4. Pokud repo ještě neexistuje, nech ho vytvořit
5. Klikni na `Publish repository`

### Varianta B: Git příkazem

Po instalaci Gitu spusť ve složce projektu:

```powershell
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/TVUJ-UCET/TVUJ-REPO.git
git push -u origin main
```

## Doporučený další krok

- doplnit finální portrétní fotku nebo samostatnou bio sekci
- připravit social preview obrázek pro sdílení na LinkedInu
- případně přidat anglickou variantu webu
