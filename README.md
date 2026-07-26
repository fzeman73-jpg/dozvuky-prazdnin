# Dozvuky prázdnin s Charitou Třeboň — web akce

Statický web k akci **Dozvuky prázdnin** — sobota 12. září 2026, Areál Farská louka (Zámecká 627), Lomnice nad Lužnicí. Nasazeno přes GitHub Pages na doméně **https://dozvukyprazdnin.cz**.

## Struktura

```
index.html         – úvodní stránka (hero, odpočet, program, FAQ, CTA)
program.html       – časový program dne
interpreti.html    – medailonky účinkujících + odkazy
info.html          – místo, mapa, doprava, parkování, občerstvení
charita.html       – o Charitě Třeboň a výtěžku
vstupenky.html     – ceny, co je v ceně, odkaz na předprodej
styles.css         – styly (festivní paleta dle plakátu, letní ilustrace)
main.js            – mobilní menu, odpočet, animace
og-image.png       – náhledový obrázek pro sdílení (Open Graph, 1200×630)
favicon.svg        – ikona webu (sluníčko)
apple-touch-icon.png – ikona pro iOS
sitemap.xml        – mapa webu pro vyhledávače
robots.txt         – pravidla pro roboty + odkaz na sitemapu
CNAME              – vlastní doména (dozvukyprazdnin.cz)
```

Vstupenky jsou v celém webu prolinkované na předprodej **BOOM Events**:
<https://connect.boomevents.org/cs/encantar-sro-dcrau/dozvukyprazdnin26?fromGuidepost=true>

## SEO a AI vyhledávání

- Kompletní meta tagy: title, description, keywords, canonical, robots, geo (lokální SEO).
- Open Graph + Twitter karty s vlastním náhledovým obrázkem (hezký náhled při sdílení).
- Strukturovaná data JSON-LD: Event/Festival (datum, místo, GPS, účinkující, cena, vstupenky, dílčí vystoupení), FAQPage, BreadcrumbList, WebSite — pro Google i AI vyhledávače (ChatGPT, Perplexity, Google AI).
- sitemap.xml + robots.txt, favicon, apple-touch-icon.

## Úpravy obsahu

- **Datum / místo / ceny**: hledej text v `.html` souborech (jsou na více místech kvůli patičce a strukturovaným datům — uprav všude).
- **Odpočet**: cílové datum je v `main.js` (`2026-09-12T14:00:00+02:00`).
- **Barvy a ilustrace**: proměnné na začátku `styles.css` (`:root`) a hero ilustrace v `index.html`.
- **Interpreti a odkazy**: `interpreti.html`.

## Publikace / aktualizace na GitHub Pages

Repozitář: `fzeman73-jpg/dozvuky-prazdnin`. Web se po každé změně sám přebuduje.

1. Na GitHubu otevři repozitář → **Add file → Upload files** → přetáhni upravené soubory → **Commit changes** (do větve `main`).
2. Za ~1 minutu je změna živá na https://dozvukyprazdnin.cz.

## Zdroje informací o interpretech

- Karol a Kvído – <https://karolakvido.cz/>
- František Zeman – <https://frantisekzeman.cz/>
- Epydemye – <https://www.epydemye.cz/>
- Charita Třeboň – <https://trebon.charita.cz/>
