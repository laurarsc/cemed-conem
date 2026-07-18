# XII CEMED — site do congresso

Site estático (HTML + CSS + JS puro, sem backend) para o XII CEMED — Congresso dos
Estudantes de Medicina da PUCPR.

## Estrutura de arquivos

```
cemed/
├── index.html          → estrutura da página
├── css/styles.css       → todo o visual (tema claro/escuro, cards, formulário...)
├── js/script.js         → toggle de tema, cards com popup, envio do formulário
├── assets/
│   ├── logo-light.png   → logo verde (fundo transparente) — usada no modo claro
│   └── logo-dark.png    → logo branca (fundo transparente) — usada no modo escuro
└── README.md
```

Para publicar, basta subir essa pasta inteira em qualquer hospedagem estática
(GitHub Pages, Netlify, Vercel, ou até o próprio servidor da faculdade). Não precisa
de PHP, Node ou banco de dados.

## O que você precisa substituir

Tudo que precisa de edição está marcado com o comentário `SUBSTITUA AQUI` direto no
código, e também centralizado nos dois lugares abaixo para facilitar:

### 1. `js/script.js` → objeto `CONFIG` (topo do arquivo)
- `REGISTRATION_URL`: link real da plataforma de inscrição (Sympla, Even3, Eventbrite
  etc). É para onde o botão "Inscrever-se agora" vai redirecionar.
- `SUBMISSION_ENDPOINT`: já está configurado para enviar os trabalhos científicos para
  **cientifico.conem@gmail.com** através do serviço gratuito [FormSubmit](https://formsubmit.co).
  **Importante:** no primeiro envio de teste, o FormSubmit manda um e-mail de confirmação
  única para essa caixa de entrada — é só clicar em "ativar" no e-mail para os próximos
  envios passarem a chegar direto, sem precisar de mais nenhuma configuração.

### 2. `js/script.js` → array `PROGRAM_DATA`
Cada objeto da lista gera um card na seção "Programação" e o conteúdo do popup
("Ver mais"). Edite `title`, `teaser`, `meta` (data/local) e `body` (texto completo)
com a programação real do congresso. Pode adicionar ou remover quantos itens quiser.

## Parceria com o CONEM

O XII CEMED é realizado em parceria com o CONEM (Congresso Nacional dos Estudantes de
Medicina). Por isso, a logo do CONEM (`assets/logo-conem.png`) aparece ao lado da logo
do CEMED no cabeçalho, no hero e no rodapé. Se adicionar a logo do CEMED em algum outro
lugar do site, lembre-se de colocar a do CONEM ao lado também.

### 3. `index.html`
Possível encontrar:
- Data e local do evento (seção Hero)
- Texto institucional "Sobre" da edição XII
- E-mail e telefone de contato geral (rodapé)
- Links de redes sociais (Instagram, Facebook, WhatsApp) no rodapé

### 4. `js/script.js` → objeto `CALENDAR_EVENTS`
Calendário em visão de semana (estilo Apple Calendar), agora com os três dias do
congresso: **14, 15 e 16 de outubro de 2026**. Cada chave é uma data
(`"2026-10-14"`) e contém a lista de atividades daquele dia (horário, título, tag,
local e descrição). Toque em um dia com bolinhas para ver a lista de atividades; toque
em uma atividade para abrir o popup com detalhes e o botão de inscrição. As setas
navegam semana a semana. A semana inicial exibida é controlada por
`calState = { weekStart: new Date(2026, 9, 11) }` (mês é indexado a partir de 0 — 9 =
outubro); ajuste essa data para mudar qual semana aparece ao carregar a página.

### 5. `js/script.js` → array `PARTNERS` + pasta `assets/partners/`
Cada item da lista `PARTNERS` vira um espaço na seção "Parceiros". Enquanto `file` for
`null`, aparece um espaço reservado com o nome do parceiro. Para colocar a logo de
verdade: salve o arquivo de imagem dentro de `assets/partners/`, e no `PARTNERS` troque
`file: null` por `file: "nome-do-arquivo.png"`. Se o parceiro tiver site, preencha o
campo `url` (como já está feito para a ALMED-BR, que leva a https://www.aemedbr.com.br/)
para a logo virar um link clicável — deixe `url: null` para os que não têm link.

## Submissão de trabalhos — arquivo obrigatoriamente em .docx

O formulário agora exige que o anexo esteja no formato **.docx**. Antes de enviar, o
site confere a extensão do arquivo: se não for `.docx` (ou se nada for anexado), aparece
uma mensagem de erro clara e o envio não é feito. Se o arquivo estiver correto e o envio
for concluído, aparece a confirmação de sucesso. Ambas as mensagens aparecem tanto no
texto abaixo do formulário quanto em um aviso (toast) no canto da tela.

## Sobre o formulário de trabalhos científicos

O formulário não usa backend próprio — ele envia os dados diretamente para o e-mail
configurado usando o FormSubmit, um serviço gratuito de encaminhamento de formulários.
O participante só vê a mensagem "Seu trabalho foi enviado com sucesso!" na tela, sem
ver o e-mail de destino. Se preferir usar outro serviço (Formspree, Web3Forms) ou um
backend próprio no futuro, basta trocar a URL em `CONFIG.SUBMISSION_ENDPOINT`.
