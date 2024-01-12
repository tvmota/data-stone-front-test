# 🛒 [data-stone-front-test](https://app.com)

Projeto para o teste de frontend da data-stone criado com o scafolding padrão do vue [Create Vue](https://github.com/vuejs/create-vue).

### Instruções para execução

##### Download do projeto e instalação das dependências

```bash
$ git clone https://github.com/tvmota/data-stone-front-test
$ cd data-stone-front-test
#----------Execução_Com_NPM---------
$ npm i
#----------Execução_Com_YARN---------
$ yarn
```

##### Execução do servidor de desenvolvimento

```bash
#----------Execução_Com_NPM---------
$ npm run dev
#----------Execução_Com_YARN---------
$ yarn dev
```

Após executar o comando será possível acessar o projeto no browser no endereço: [http://localhost:5173/](http://localhost:5173/)

##### Geração do build para deploy

```bash
#----------Execução_Com_NPM---------
$ npm run build
#----------Execução_Com_YARN---------
$ yarn build
```

Após executar o comando será criada uma pasta na raíz do projeto chamda **dist** contendo os arquivos finais para deploy do projeto

### Libs utilizadas

- **Framework UI**: [Vue v3](https://vuejs.org/).
- **Roteamento**: [Vue router](https://router.vuejs.org/)
- **Gerenciador de estado(State Manager)** : [Pinia](https://pinia.vuejs.org/)
- **Toolkit CSS**: [Tailwind](https://tailwindcss.com/)
  Biblioteca utilitária que prove classes básicas para construções de componentes, assim trabalhando muito bem com frameworks UI(angular, react, vue, etc)
- **Empacotador(Module Bundler)**: [Vitejs](https://vitejs.dev/)
  Opção padrão para criação de novos projetos com vue v3 também mantida pelos criadores do vuejs
- **Processador CSS**: [Postcss](https://postcss.org/)
  Processador css que utiliza plugins para processar o css, como exemplo neste projeto foi utilizado para compilar o tailwind e também o purgecss para otimizar o css removendo css inutilizado
