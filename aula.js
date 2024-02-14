// 📘 Aula - Deploy: Build, Start e Migrate
// Baixar Código Fonte do Conteúdo
// Tópicos do conteúdo
// 1 Introdução
// Nesta aula, estaremos aprendendo a criar "scripts" essenciais para deploy em nossos projetos de NodeJS e Express.

// 2 Transpilando Typescript em Javascript
// Typescript é uma excelente línguagem para desenvolvimento de aplicações, no entanto, não é a linguagem mais adequada para projetos rodarem em produção. Por isso, quando estamos subindo para o ar nossos projetos, é necessário a criação de um comando de transpilação.

// No arquivo "package.json", criamos um script "build".

// "scripts": {
//   "build": "npx tsc",
//   "dev": "dotenv -e .env.develop -- tsnd --respawn src/server.ts",
//   "migrate:dev": "dotenv -e .env.develop -- npx prisma migrate dev",
//   "studio:dev": "dotenv -e .env.develop -- npx prisma studio"
// },

// Este script executará o comando npx tsc, que transpila o código Typescript em Javascript com base no que estiver estabelecido em "compilerOptions" no arquivo tsconfig.json. Por conta disso, será necessário habilitar algumas opções essenciais:

// rootDir: diretório raiz do projeto. Seguindo o modelo de arquitetura apresentado até agora, deverá apontar para pasta "src".
// outDir: diretório de saída, onde o código transpilado será alocado. Por convenção, é criada uma pasta dist ou app.
// 3 Iniciando a build
// Após a transpilação, é necessário um comando de inicialização do projeto. Para isso, será criado mais um "script" no arquivo "package.json".

// "start": "node dist/server.js",

// Algumas plataformas deploy precisam do "app" como arquivo principal, outros "server". No caso do Render, o arquivo correto é o "server.js".

// Quando estivermos lidando com banco de dados, será necessário modelar as tabelas do banco a necessidade da aplicação. Como estamos utilizando o Prisma, podemos criar um comando utilizando a migração de deploy do mesmo.

// "migrate:deploy": "npx prisma migrate deploy",

// Observe, que ao invés do valor da migração ser dev, como acontece no desenvolvimento, o valor fornecido é deploy, configuração adequada para este procedimento.

// 5 Conclusão
// Nesta aula, aprendemos sobre os "scripts" essenciais para o procedimento de deploy, na próxima aula, estaremos subindo o projeto para o ar no Render. Bons estudos!