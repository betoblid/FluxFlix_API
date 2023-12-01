# Api FluxFLix Movies

Api que retorna filmes, cadastra filmes, deleta filmes e atualiza os filmes, O intuito desse *projeto é criar uma plataforma full-stack,* onde é possível adicionar filmes e consumi-los por via do Youtube, tudo isso com a interação do próprio usuário.

## Documentação da API

Endpoint da api para cunsumo:

```sh
    https://flux-api-beta.vercel.app/movies
```

#### Method GET

O *Verbo GET* podemos receber todos os filmes de nossa API para consumo ou com limites, onde podemos escolher se ela vai ser de Ordem DESC ou ASC e a quantidade de ROWS de retorno.

```sh
    https://flux-api-beta.vercel.app/movies
```

Esse EndPoint retorna todos os filmes da nossa Api na ordem que foi adicionado, e por se tratar de uma grande quantidade de dados, terá uma latência alta:

```sh
[
    {
        "id": 1,
        "id_filme": "S8_YwFLCh4U",
        "nome": "One Piece",
        "plataforma": "Netflix,crunchyroll",
        "categoria": "Anime"
    },
    {
        "id": 2,
        "id_filme": "KePpQ8kAJnI",
        "nome": "Naruto Shippunden",
        "plataforma": "Netflix,crunchyroll",
        "categoria": "Anime"
    },
    {
        "id": 3,
        "id_filme": "9hmnCP336EA",
        "nome": "Shaman",
        "plataforma": "Netflix,crunchyroll",
        "categoria": "Anime"
    }
    .....
]
```

Já o Endpoint com tratamento de dados, podemos manipular o jeito que receberemos os dados, se é de limitações com baixa latência de recebimento:

```sh
    https://flux-api-beta.vercel.app/movieslist
```

passamos o atributo via URL:

```sh
    ROW= Numeros
```

Esses são os atributos que podemos usar: *ROW* especifica em números quantas linhas irá retornar.

#### Method POST

Endpoint da api para cunsumo:

```sh
    https://flux-api-beta.vercel.app/movie
```

Para todos os Methodos que envolve modificar dados é necessário um Token, no momento ele não é gerado aleatoriamente, para usar o token devemos colocar ele na URL exemplo:

Token no momento é esse: ASGrfSDFDetrg233466767SDDF
```sh
    https://flux-api-beta.vercel.app/movie?key=exmplo
```

Com esse Endpoint podemos postar o filme que queremos para que nossa API possa salvá-lo.
```sh
    https://flux-api-beta.vercel.app/movie
```
Para que isso aconteça, devemos passar um body com as informações necessárias para salvar, por Exemplo:

```sh
{ 
    "id": "exemplo id filme",
    "nome": "explo nome",
    "plataforma": "exemplo, plataforma, tal",
    "categoria": "exemplo de categoria, ação" 
}
```

Com o exemplo acima podemos adicionar o nosso filme à nossa api para consumo, e devemos especificar o Token para que seja adicionado com sucesso. Caso não haja Token, um erro será gerado com o código de status 400 "erro Token inválido", Caso um parâmetro não seja passado no body, um erro também será retornado "por favor envie o body como esperado" com status 400.

#### Method DELETE

Endpoint da api para cunsumo:

```sh
    https://flux-api-beta.vercel.app/
```
Para todos os métodos que envolve modificar dados é necessário um Token, no momento ele não é gerado aleatoriamente, para usar o token devemos colocar ele na URL exemplo:

Token no momento é esse: ASGrfSDFDetrg233466767SDDF
```sh
    https://flux-api-beta.vercel.app/movie?key=exmplo
```

Como iremos modificar um arquivo, o Token é obrigatório para consumo. Para deletar um arquivo devemos especificar o id do item que queremos apagar, ele é passado na URL exemplo:
```sh
    https://flux-api-beta.vercel.app/?id=exmplo passar o id em numero
```
Assim, é só adicionar um número que exista no id para que seja possível apagar o arquivo que deseja.