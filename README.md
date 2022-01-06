<p align="center">
  <a href="https://www.tqi.com.br">
    <img src="img/logo.png" width="180">
  </a>
</p>

Protótipos para o *back-end* desenvolvido para o **TQI Evolution 2022**, onde foi possivel obter mais conhecimentos na Autenticação de usuarios usando o *Json Web Token* e transferir dados de um elemento DOM - *Document Object Model* para outro (embora este não tenha sido o proposito do desafio).

## Funcionalidades
|        Nome          |    Descrição                                                                                                         |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| Cadastro de Usuario  | Deve ser possivel cadastrar um usuario usando:email, nome, endereço completo, RG, CPF e senha                        | 
| Login                | O usuario deve conseguir logar usando: email e senha                                                                 |
| Solicitação de Empréstimos    | O usuario deve conseguir pedir empréstimos fornecendo o valor do empréstimos, data da primeira parcela e quantidade de parcelas |
| Listar Empréstimos   | Deve ser possivel listar os empréstimos que foram solicitados pelo usuario antes autenticado  |             
| Detalhar Empréstimos | Deve ser possivel detalhar determinado empréstimo                                                                   |  

## Rotas
|      Método      |  Rota                           |
|------------------|---------------------------------|
| `POST`           | `/api/v1/signUp`                |
| `POST`           | `/api/v1/signIn`                |
| `GET`            | `/api/v1/me`                    |
| `POST`           | `/api/v1/loans`                 |
| `GET`            | `/api/v1/loans`                 |
| `GET`            | `/api/v1/loans/{id}`            |

## Uso
Primeiro, clone este repositorio:
```
git clone https://github.com/LeiteSS/tqi_evolution_backend_2021.git
```
Com tudo clonado, va para dentro do projeto `cd tqi_evolution_backend_2021`. Dentro do projeto, já é possivel rodar o *back-end* usando o comando `gradle bootRun`. Depois de instalado as dependências e após a *build* ter sido um sucesso, a aplicação vai estar rodando escutando ao http://localhost:5000. Se você tiver o **Postman** use a [coleção criada para esse *back-end*]() para poder testa-la ou entre em http://localhost:5000/swagger-ui.html e teste o *back-end* através da documentação interativa.

Para rodar o *front-end* navegue até o projeto usando `cd tqi_evolution_frontend_2021`. Dentro do projeto use o comando `yarn run start`. O `front-end` clonado esta definido para se conectar ao *back-end* publicado no *Heroku*, porém para realizar os testes localmente é preciso mudar a `baseUrl` para http://localhost:5000.
```typescript
const api = axios.create({
  baseURL: 'https://tqi-evolution-2022.herokuapp.com'
})
```
## Atribuição
Estes projetos usam [**Gradle**](https://gradle.org), [**Lombok**](https://projectlombok.org), [**Swagger 2**](https://swagger.io), **Spring Boot Data JPA**, **Spring Boot JDBC**, [**PostgreSQL**](https://www.postgresql.org), **Spring Boot Validation**, **Spring Boot Web**, **Spring Boot Security**, [**Json Web Token**](https://jwt.io), [**Typescript**](https://www.typescriptlang.org), [**Yarn**](https://yarnpkg.com), [**Node.Js**](https://nodejs.org/en/), [**Axios**](https://axios-http.com/docs/intro), [**Styled-component**](https://axios-http.com/docs/intro), [**date-fns**](https://date-fns.org), **react Dom** e **React Router Dom**.

*Back-end* gerado no [Spring Initializr]() e *front-end* gerado com [**Create React App**](https://create-react-app.dev/docs/getting-started/).

Desenvolvido com **IntelliJ** e **Visual Studio Code**.



