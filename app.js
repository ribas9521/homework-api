const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())
//importo o arquivo que simula o banco de dados
const { performance, username } = require("./database");

/**
 * Endpoit para testar se a API está funcionando
 * exemplo da requisição: http://localhost:8080/
 */
app.get("/", (req, res) => {
  return res.send("It's working!");
});

/**
 * Endpoint para descobrir a performance do usuário
 * requisição get passando o usernameId como parametro
 * exemplo da requisição: http://localhost:8080/performance/1
 */
app.get("/performance/:usernameId", (req, res) => {
  //extraio o usernameId do parametro
  const { usernameId } = req.params;

  //Função que filtra os usuários que possuem o usernameId informado
  const usernameExists = username.filter(
    u => u.usernameId === parseInt(usernameId)
  );

  //Verifica se foram encontrados usuários com o Id informado
  if (usernameExists.length <= 0)
    //retorna um json com a mensagem de erro
    return res.status(404).json({ message: "USER_NOT_FOUND" });

  //função que filtra as performances deixando apenas aquelas
  //que possuem o usernameId informado
  const performanceOfUser = performance.filter(
    p => p.usernameId === parseInt(usernameId)
  );

  //retorna um json com a resposta
  return res.status(200).json(performanceOfUser);
});

/**
 * Endpoint para mostrar o portfolio do usuário
 * requisição get passando o usernameId como parametro
 * exemplo da requisição: http://localhost:8080/portfolio/1
 */
app.get("/portfolio/:usernameId", (req, res) => {
/**TODO */
});

app.listen(process.env.PORT || 8080);
