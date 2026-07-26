# Dozvuky prázdnin s Charitou Třeboň — web akce

Statický web k akci **Dozvuky prázdnin** — sobota 12. září 2026, Areál Farská louka (Zámecká 627), Lomnice nad Lužnicí.

## Struktura

```
index.html        – úvodní stránka (hero, odpočet, přehled programu, CTA)
program.html      – časový program dne
interpreti.html   – medailonky účinkujících + odkazy
info.html         – místo, mapa, doprava, parkování, občerstvení
charita.html      – o Charitě Třeboň a výtěžku
vstupenky.html    – ceny, co je v ceně, odkaz na předprodej
assets/styles.css – styly (barvy dle plakátu, elegantnější podání)
assets/main.js    – mobilní menu, odpočet, animace
```

Vstupenky jsou v celém webu prolinkované na předprodej **BOOM Events**:
<https://connect.boomevents.org/cs/encantar-sro-dcrau/dozvukyprazdnin26?fromGuidepost=true>

## Publikace na GitHub Pages

1. Vytvoř nový repozitář na GitHubu (např. `dozvuky-prazdnin`).
2. Nahraj do něj obsah této složky (soubory `.html`, složku `assets/`, tento `README.md`).
   Přes web GitHubu: **Add file → Upload files** → přetáhni soubory → **Commit**.
   Nebo přes příkazovou řádku:
   ```bash
   git init
   git add .
   git commit -m "Web Dozvuky prázdnin"
   git branch -M main
   git remote add origin https://github.com/UZIVATEL/dozvuky-prazdnin.git
   git push -u origin main
   ```
3. V repozitáři jdi do **Settings → Pages**.
4. V sekci *Build and deployment* zvol **Source: Deploy from a branch**, větev **main**, složka **/ (root)**, ulož.
5. Za chvíli bude web dostupný na `https://UZIVATEL.github.io/dozvuky-prazdnin/`.

> Tip: Chceš-li vlastní doménu (např. `dozvukyprazdnin.cz`), přidej ji v **Settings → Pages → Custom domain** a nasměruj DNS dle pokynů GitHubu.

## Úpravy obsahu

- **Datum / místo / ceny**: hledej text v `.html` souborech (jsou na více místech kvůli patičce).
- **Odpočet**: cílové datum je v `assets/main.js` (`2026-09-12T14:00:00+02:00`).
- **Barvy**: proměnné na začátku `assets/styles.css` (`:root`).
- **Interpreti a odkazy**: `interpreti.html`.

## Zdroje informací o interpretech

- Karol a Kvído – <https://karolakvido.cz/>
- František Zeman – <https://frantisekzeman.cz/>
- Epydemye – <https://www.epydemye.cz/>
- Charita Třeboň – <https://trebon.charita.cz/>
