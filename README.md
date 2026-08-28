# Landing page — Dra. Raquel C. de Sousa

Landing page institucional em React + Vite para a Dra. Raquel C. de Sousa, médica de
família e paliativista com consulta domiciliar em Rio Preto/SP.

## Estrutura

```
dra-raquel-landing/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # ponto de entrada
    ├── App.jsx                # monta as seções da página
    ├── index.css              # todo o design system (cores, tipografia, animações)
    ├── assets/
    │   ├── hero-portrait.jpg
    │   └── about-portrait.jpg
    ├── data/
    │   └── content.js         # todo o texto, links e dados editáveis do site
    ├── hooks/
    │   └── useReveal.js       # hook de animação ao rolar a página
    └── components/
        ├── Navbar.jsx
        ├── MobileMenu.jsx
        ├── Hero.jsx
        ├── Particles.jsx
        ├── Marquee.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── HowItWorks.jsx
        ├── Philosophy.jsx
        ├── Attendance.jsx
        ├── CTAFinal.jsx
        ├── Footer.jsx
        └── Reveal.jsx          # wrapper de animação reutilizável
```

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## O que ajustar antes de publicar

1. **WhatsApp**: em `src/data/content.js`, troque `WHATSAPP_NUMBER` pelo número real
   (formato `55DDXXXXXXXXX`, sem espaços ou símbolos).
2. **Fotos**: as imagens em `src/assets/` foram recortadas a partir de prints do
   Instagram. Se houver os arquivos originais em alta resolução, substitua os dois
   arquivos mantendo o mesmo nome.
3. **Textos**: todo o conteúdo (serviços, etapas, cidade, CRM/RQE) está centralizado em
   `src/data/content.js` — não precisa mexer nos componentes para editar texto.

## Identidade visual

- Paleta: espresso (`#1c130f`), nogueira (`#3a2a1f`), dourado (`#c9a860`), creme
  (`#f4ead9`), terracota (`#b06a45`) — inspirada na identidade já usada no Instagram
  @draraquelcs.
- Tipografia: Fraunces (títulos), Cormorant Garamond itálico (destaques), Mrs Saint
  Delafield (assinatura/citações), Inter (corpo de texto).
- Elemento de assinatura: a foto do hero fica dentro de uma moldura em arco (formato de
  porta), que se abre com animação ao carregar a página — referência direta ao
  diferencial da consulta domiciliar.
