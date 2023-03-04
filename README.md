# JSExpertMax Gesture Controller - Semana JS Expert 7.0

Seja bem vindo(a) à sétima Semana Javascript Expert. Este é o código inicial para iniciar nossa jornada.

Marque esse projeto com uma estrela 🌟

## Preview

<img width=100% src="./assets/demo-template-lg.gif">

## Pre-reqs

- Este projeto foi criado usando Node.js v19.6

## Running

- Execute `npm ci` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

## Checklist Features

- Titles List
  - [X] - Campo para pesquisa não deve travar ao digitar termo de pesquisa
  - [X] - Deve desenhar mãos na tela e fazer com que elementos em segundo plano continuem sendo clicáveis  🙌
  - [X] - Deve disparar scroll up quando usar a palma das mãos abertas 🖐
  - [X] - Deve disparar scroll down quando usar a palma das mãos fechadas ✊
  - [X] - Deve disparar click no elemento mais próximo quando usar  gesto de pinça 👌
  - [X] - Ao mover elementos na tela, deve disparar evento **:hover** em elementos em contexto

- Video Player
  - [X] - Deve ser possivel de reproduzir ou pausar videos com o piscar de olhos 😁
  - [X] - Todo processamento de Machine Learning deve ser feito via Web worker

### Desafios

- [] - Aula 01 - Diferenciar piscada de olhos entre olho direito e esquerdo e atualizar log para mostrar qual olho que piscou.
- [] - Aula 02 - Reconhecer gestos de mãos individuais e printar no log
- [X] - Aula 03 - Corrigir Banner de titulo de video, para ficar atrás do desenho das mãos e se tornar clicável
- [] - Aula 04 - Usar as mãos virtuais também no Video Player

- Desafio plus: implementar testes unitários e alcançar 100% de coverage (avançado)

### Considerações

- Tire suas dúvidas sobre os desafios em nossa comunidade, o objetivo é você aprender de forma divertida. Surgiu dúvidas? Pergunte por lá!

- Ao completar qualquer um dos desafios, envie no canal **#desafios** da comunidade no **Discord**

### FAQ

- browser-sync está lançando erros no Windows e nunca inicializa:
  - Solução: Trocar o browser-sync pelo http-server.
    1. instale o **http-server**  com `npm i -D http-server`
    2. no package.json apague todo o comando do `browser-sync` e substitua por `npx http-server .`
    3. agora o projeto vai estar executando na :8080 então vá no navegador e tente acessar o <http://localhost:8080/>
  
  A unica coisa, é que o projeto não vai reiniciar quando voce alterar algum código, vai precisar dar um F5 na página toda vez que alterar algo
- Erro no navegador de Webgl is not supported on this device
  - Digite chrome://gpu/ no Chrome para verificar se o webgl está habilitado.
    - Possíveis soluções:
      1. Opção 1: Habilitar a aceleração de hardware quando dispponível
    - Chrome => Settings > System > Use hardware acceleration when available
    - Firefox => Browser options > Performance > Use hardware acceleration when available
      2. Opção 2: Atualizar driver da placa de vídeo
    - Veja detalhes no [webgl-is-not-supported-on-chrome-firefox](https://www.thewindowsclub.com/webgl-is-not-supported-on-chrome-firefox)
      3. Opção 3: Trocar de WebGL para CPU (mais lento) ou Web Assembly
      - <https://blog.tensorflow.org/2020/03/introducing-webassembly-backend-for-tensorflow-js.html>
    - (agradecimentos ao usuario Volpin em nossa comunidade do Discord)

### Créditos ao Layout

- Interface baseada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)
