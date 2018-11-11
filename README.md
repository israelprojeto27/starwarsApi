# Desafio StarWars Api

API Rest desenvolvida como parte do desafio lançado pela B2W

# Sobre StarWars Api

Esta API Rest foi desenvolvida utilizando tecnologia NodeJs, Javascript e o framework Strongloop back.

Para persistencia dos dados está sendo utilizado o banco de dados MongoDB cujo hosting é fornecido pela empresa 'mlab.com'.

É fornecido uma interface web (StrongLoop API Explorer) onde é possível visualizar e acessar todos os Endpoints disponíveis pela Api.

# Instalação 

1. Clone o projeto da API Rest com o seguinte comando:  git clone https://github.com/israelprojeto27/starwarsApi.git

2. Acesse o diretório do projeto através do comando:  cd starwarsApi


# Execução / Start  da API Rest

1. Após acessar o diretório da API Rest execute o seguinte comando:  node .

2. Será possível visualizar e acessar os Endpoints através do browser a partir da seguinte URL: http://localhost:3000/explorer/

# Principais Endpoints solicitados no Desafio Starwars Api

1. Listar Planetas:  http://localhost:3000/api/planetas   (método: GET)

2. Adicionar Planeta: http://localhost:3000/api/planetas   (método: POST) 

3. Buscar Planeta por Nome: http://localhost:3000/api/planetas?filter[where][nome]=:nome    (método: GET)

4. Buscar Planeta por ID: http://localhost:3000/api/planetas/:id    (método: GET)

5. Remover Planeta: http://localhost:3000/api/planetas/5be62b353ce0a41c30ce242a   (método: DELETE)

# Extra

1. Para este desafio foi construído uma pequena e simples aplicação utilizando a tecnologia Ionic, NodeJS e Javascript.

2. A aplicação possui o simples objetivo de mostrar a interação de uma aplicação com a API Rest. 
Este app não possui muitas validações e/ou uma grande interface gráfico.

3. Para obter este app basta inicialmente cloná-lo através do seguinte comando:  git clone https://github.com/israelprojeto27/starwarsApp.git

4. Acessar o diretório do projeto: cd starwarsApp

5. Para iniciar a app basta executar o seguinte comando:  ionic serve

# Agradecimentos

Gostaria de agradecer à equipe da B2W por eu poder participar deste desafio. E agradecer a Deus acima de tudo.

# Autor

Israel Dias Barreto


