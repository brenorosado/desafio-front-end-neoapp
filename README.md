# Desafio Front-end NeoApp
- O desafio consiste em criar uma loja de HQs fictícia para a Marvel Comics.

# Deploy:
- https://marvelcomics-desafio-brenorosado.vercel.app/

# API:
- https://developer.marvel.com/

# Stacks utilizadas: 
- Next/React
- Styled-components

# Instruções
- Clone esse repositório, execute `npm install` para baixar as dependências da aplicação. Em seguida, execute `npm run dev` para rodar a aplicação. O projeto irá rodar em `http://localhost:3000`;

# Passos da criação:
- 1_ Criar a parte de API da aplicação
    - 1.1_ Ler a documentação da API da marvel e testar os end points interativos para saber o formato dos dados que a API retorna
    - 1.2_ Estruturar o fetch da aplicação na API (a API limita o número de HQs no fetch de 100, porém por algum motivo desconhecido ela passou a retornar apenas 80, por isso a aplicação retorna também a quantidade de itens do fetch além dos dados das HQs em si para melhor previsibilidade da páginação)
- 2_ Obter os dados da aplicação e modificar os dados realizando o 'sorteio' das HQ's raras e comuns
- 3_ Criar todas as páginas da aplicação e funcionalidades
- 4_ Realizar os teste E2E com cypress
- 5_ Realizar o deploy da aplicação

# CUPONS:
- HQCOMUM (20% de desconto em HQ's de tipo comum)
- HQRARA (10% de desconto em HQ's de tipo raro)