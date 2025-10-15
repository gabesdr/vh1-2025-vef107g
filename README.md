# Vefforritun 1, 2025, hópverkefni 1

## Hópur

- Verkefnastjóri (**JS/HTML**) Gabríel del Rosario - gdr5@hi.is [gabesdr](https://github.com/gabesdr)
- Aðal UI/UX-Forritari (**CSS/HTML**) Gabríel Óðinn Shurack - gos30@hi.is [GabrielSchurack07](https://github.com/GabrielSchurack07)
- HTML-Forritari (**HTML**) Alans Trejis - alt@hi.is [ThaBlanky](https://github.com/ThaBlanky)

## Lýsing á verkefni

Verkefnið felst í því að smíða vef eftir forskrift í [Figma](https://www.figma.com/design/4BvcCrMKEQ9MHQw1xd4W5J/vef1-2025-h%C3%B3pverkefni-1).

Verkefnið er skipt í tvö mismunandi möppur, `efni` og `styles`, sem innihalda alla mikilvægustu skrárnar.

"Styles"-mappan inniheldur `components` og `sites`, í þeim eru SCSS skrárnar fyrir tilteknar síður og html-kóðar, þar á meðal basic scss configs.

Hægt að keyra verkefnið með `npm run dev` eða `npm start`.
Hægt að nota `npm run lint` til að skoða villur á S/CSS skrárnar.

Í main directory er gefið `.gitignore` og `.stylelintignore`.

## Efni

Allt efni er í Figma hönnun en endurtekið hér.

### Síður

Efni fyrir síður eru í markdown skrám í `efni` möppu. Það sem er innan sviga eru leiðbeiningar:

- [Forsíða, `index.md`](efni/index.md)
- [Um okkur, `um-okkur.md`](efni/um-okkur.md)
- [Lausnayfirlit, `lausnir.md`](efni/lausnir.md)
- [Lausn, `lausn.md`](efni/lausn.md)

### Haus og valmynd

Haus samanstendur af merki, heiti og valmynd.

Merkið er einfaldlega lambda táknið: `λ`.

Heitið er „Forritarafjelagið“.

Valmynd skal innihalda tengla á:

- Forsíðu (tengill á forsíðu)
- Lausnir (tengill á lausnayfirlitssíðu)
- Um okkur (tengill á um okkur síðu)
- Starfsfólk (tengill á forsíðu)

### Fótur

Fótur skal innihalda fjóra flokka:

- Merki og tengingar á samfélagsmiðla í formi merkja þeirra. Þurfa ekki að vera virkir tenglar.
- „Verkefni“ sem fyrirsögn og síðan listi með tenglum á fjögur verkefni sem eru nefnd „Verkefni 1“ og svo framvegis. Tenglar á forsíðu.
- „Lausnir“ sem fyrirsögn og síðan listi með tenglum á fimm lausn sem eru nefndar „Lausn 1“ og svo framvegis. Tenglar á lausnasíðu (alltaf sami).
- „Síður“ sem fyrirsögn og síðan listi með tenglum á forsíðu, lausnayfirlit, um okkur og starfsfólk. (tenglar eins og í valmynd)

### Myndir

- [Ales Nesetril](https://unsplash.com/@alesnesetril?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) á [Unsplash](https://unsplash.com/photos/gray-and-black-laptop-computer-on-surface-Im7lZjxeLhg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Max Duzij](https://unsplash.com/@max_duz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) á [Unsplash](https://unsplash.com/photos/man-facing-three-computer-monitors-while-sitting-qAjJk-un3BI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Michael Dziedzic](https://unsplash.com/@lazycreekimages?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) á [Unsplash](https://unsplash.com/photos/clear-glass-ball-with-box-gEN5Btvf2Eg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- Avatar mynd úr Figma hönnun

>  Útgáfa v.0.4

## Útgáfusaga

| Útgáfa | Lýsing                             |
| ------ | ---------------------------------- |
| 0.1    | Fyrsta útgáfa verkefnisins         |
| 0.1.1  | Stylelint, SCSS, aðalmöppur og "sub"-möppur voru settar up |
| 0.2    | HTML og SCSS-branch á Github búnar til |
| 0.2.1  | HTML Blueprint |
| 0.2.2  | SCSS Blueprint |
| 0.2.3  | HTML og SCSS útfært, þarf samt að fínpússa verkefnið |
| 0.3    | "Big Merge" - update, HTML og SCSS-branch komið í Main Branch + Package.JSON edits |
| 0.3.1  | Read-Me Update |
| 0.4    | Header toggle-button update |

