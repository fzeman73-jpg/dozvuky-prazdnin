# Dozvuky prázdnin 2027 s Charitou Třeboň — web festivalu

Statický web benefičního festivalu **Dozvuky prázdnin 2027** — sobota 18. září 2027, Areál Farská louka (Zámecká 627), Lomnice nad Lužnicí. Celý výtěžek podpoří Charitu Třeboň. Nasazeno přes GitHub Pages na doméně **https://dozvukyprazdnin.cz**.

Vzhled 2027: pozdně letní soumrak nad jihočeským rybníkem; „dozvuky“ jako soustředné vlny kolem zapadajícího slunce. Písma Lora (nadpisy) a Inter (text).

## Struktura

```
index.html           – úvod (hero se scénou, line-up, charita, kdy/kde, FAQ)
interpreti.html      – potvrzení interpreti + místa pro další jména
info.html            – místo, mapa, doprava, parkování
charita.html         – o Charitě Třeboň a výtěžku
404.html             – stránka „nenalezeno“
program.html         – přesměrování na interpreti.html (staré odkazy)
vstupenky.html       – přesměrování na úvod (staré odkazy)
styles.css           – styly (barvy v :root na začátku souboru)
main.js              – mobilní menu, odpočet dní, animace
og-image.png         – náhled při sdílení (1200×630)
favicon.svg, apple-touch-icon.png – ikony
logo-charita-trebon.jpg
sitemap.xml, robots.txt, CNAME
```

Prodej vstupenek na webu záměrně není.

## Úpravy obsahu

- **Nový interpret**: v `interpreti.html` zkopíruj blok `<article class="artist">` a jednu kartu „Další interpret“ nahraď; na úvodu (`index.html`) uprav sekci *Line-up 2027*. Doplň jméno i do strukturovaných dat (`"performer"` v `index.html`).
- **Datum / místo**: je na více místech (hlavička, patička, FAQ, strukturovaná data) — uprav všude. Odpočet je v `main.js`.
- **Barvy**: proměnné na začátku `styles.css`.

## Publikace

Repozitář `fzeman73-jpg/dozvuky-prazdnin`, větev `main`. Po každé změně se web sám přebuduje, za ~1 minutu je živý.

## Odkazy

- František Zeman – <https://frantisekzeman.cz/>
- Charita Třeboň – <https://trebon.charita.cz/>
