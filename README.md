
# AppInchurch

Este projeto foi gerado com a versão [Angular CLI](https://github.com/angular/angular-cli) 18.2.14.

## Início

1. Clone o repositório usando o comando abaixo:
   ```bash
   git clone https://github.com/w-mesquita/teste-inchurch.git

2. Navegue para o diretório do projeto:
   ```bash
   cd teste-inchurch

3. Instale as dependências do projeto:
   ```bash
   npm install

## Servidor de Desenvolvimento

Primeiro execute o comando abaixo para iniciar o servidor backend fake com JSON-SERVER:
```bash
npm run watch

A aplicação vai inicar em `http://localhost:3000/`. 

Em um novo terminal execute o comando abaixo para iniciar o servidor de desenvolvimento FrontEnd:
```bash
ng serve

Acesse a aplicação em `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você alterar os arquivos de origem.

## Compilação

Execute o comando abaixo para compilar o projeto:
```bash
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/`.

## Acessar a aplicação

A aplicação está com mock simulando usuario e senha pré definida para validação
Use o email: admin@email.com.br e a senha : 123456 para acessar

## Funcionalidades implementadas

Criado sistema de simulação de login simulando rota autenticada e rota para autenticação.
O sistema salva um token ficticio para simular a seção do usuário caso esse token seja removido o usuario é direcionado para login.
Criado uma pagina para exibir, cadastrar, editar e excluir um evento.
Criado funcionalidade de exibir tabela em cards ou em lista salvando a escolha em um estado em storage
Criado modal para criar e editar um evento.
Criado metodo para excluir evento com confirmação para o usuario não excluir por acidente
As imagens no componente de criação incialmente seguem mockadas assim que adicionadas elas são salvas como base64 no server
.
Criado filtro para pesquisar por palavra chave tanto em lista quando em cards.
Criado componentes de header e footer e sidebar apenas para estética.
O sistema de login foi pensado com responsividade porem o restante do sistema optei por não focar em responsividade devido ao prazo para criar então foquei nas funcionalidades principais.


## Mais Ajuda

Para obter mais ajuda sobre o Angular CLI, use o comando `ng help` ou consulte a página de [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).
