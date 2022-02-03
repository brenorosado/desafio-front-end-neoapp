# Desafio Front-end NeoApp
- O desafio consiste em criar uma loja de HQs fictícia para a Marvel Comics.

# Deploy:
- https://marvelcomics-desafio-brenorosado.vercel.app/

# Stacks utilizadas: 
- Next/React
- Styled-components

# API:
- https://developer.marvel.com/

# Passos da criação:
- 1. Criar a parte de API da aplicação
    - 1.1. Ler a documentação da API da marvel e testar os end points interativos para saber o formato dos dados que a API retorna
    - 1.2. Estruturar o fetch da aplicação na API (a API limita o número de HQs no fetch de 100, porém por algum motivo desconhecido ela passou a retornar apenas 80, por isso a aplicação retorna também a quantidade de itens do fetch além dos dados das HQs em si para melhor previsibilidade da páginação)
- 2. Obter os dados da aplicação e modificar os dados realizando o 'sorteio' das HQ's raras e comuns
- 3. Criar todas as páginas da aplicação e funcionalidades
- 4. Realizar os teste E2E com cypress
- 5. Realizar o deploy da aplicação

# CUPONS
- HQCOMUM (20% de desconto em HQ's de tipo comum)
- HQRARA (10% de desconto em HQ's de tipo raro)