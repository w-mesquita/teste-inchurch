
# AppInchurch

![Preview](app-preview.gif)

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
npm run server
```
A aplicação vai inicar em `http://localhost:3000/`. 

Em um novo terminal execute o comando abaixo para iniciar o servidor de desenvolvimento FrontEnd:
```bash
ng serve
```
Acesse a aplicação em `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você alterar os arquivos de origem.

## Compilação

Execute o comando abaixo para compilar o projeto (só necessário se desejar fazer deploy do projeto):
```bash
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/`.

## Acessar a aplicação

A aplicação está com mock simulando usuario e senha pré definida para validação
Use o email: 
```bash
admin@email.com.br
```
e a senha :
```bash
123456
```
para acessar.

## Funcionalidades implementadas

- Criado sistema de simulação de login simulando rota autenticada e rota para autenticação.

- O sistema salva um token fictício para simular a sessão do usuário. Caso esse token seja removido, o usuário é direcionado para login.

- Criado uma página para exibir, cadastrar, editar e excluir um evento.

- Criado funcionalidade de exibir tabela em cards ou em lista, salvando a escolha em um estado no storage.

- Criado modal para criar e editar um evento.

- Criado método para excluir evento com confirmação, para o usuário não excluir por acidente.

- As imagens no componente de criação inicialmente seguem mockadas. Assim que adicionadas, elas são salvas como base64 no servidor.

- Criado filtro para pesquisar por palavra-chave, tanto em lista quanto em cards.

- Criados componentes de header, footer e sidebar apenas para estética.

- O sistema de login foi pensado com responsividade. Porém, o restante do sistema não foi focado em responsividade devido ao prazo, então priorizei as funcionalidades principais.



## Mais Ajuda

Para obter mais ajuda sobre o Angular CLI, use o comando `ng help` ou consulte a página de [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).
