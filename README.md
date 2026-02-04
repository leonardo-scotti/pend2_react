# ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) REACT.js


## PESQUISA
### REACT

| Grupo |
|-----|
| Leonardo Scotti |
| Sidney Aragão |
| Pedro Henrique |

### Parte 1 - Perguntas 

> O que é o framework escolhido ?

É uma biblioteca JavaScript de código aberto, criada pelo Facebook (Meta) em 2013, possuindo um foco principal na criação de interfaces de usuário (UI) rápidas, interativas e baseadas em componentes reutilizáveis. Além disso, ele é popularizado no desenvolvimento front-end, utilizando um Virtual DOM para otimizar a renderização e pode ser usado em sites com React DOM ou apps móveis com React Native.

> Por que utilizá-lo ?

Entre as principais razões podemos citar:
- Mercado de Trabalho Aquecido: É a tecnologia líder para front-end, amplamente utilizada por grandes empresas como Netflix, Instagram e Airbnb.
- Componentização e Reutilização: Permite criar componentes modulares (pequenas partes de código) que podem ser reutilizados, facilitando a manutenção e a escalabilidade de aplicações
- Reatividade e Performance: Atualiza automaticamente a interface do usuário quando os dados mudam, sem precisar recarregar a página, proporcionando melhor experiência ao usuário
- Ecossistema Versátil: Com o conhecimento em React, é possível desenvolver aplicações web (React), mobile (React Native) e até desktop (Electron)
- Apoio da Comunidade: Por ser muito popular, há uma vasta quantidade de tutoriais, bibliotecas de terceiros e suporte para tirar dúvidas

> Em quais cenários ele não é indicado

Os cenários onde o React não é indicado:

- Sites Estáticos ou Simples: 
- - Se o objetivo é criar uma página com conteúdo fixo (como uma landing page simples, portfólio ou blog básico), o React é um exagero (overkill). O custo de carregar a biblioteca React, o tamanho do bundle (arquivo JavaScript final) e o processamento para renderizar HTML simples podem tornar o site mais lento do que usando HTML, CSS e JavaScript puros (Vanilla JS).

- Aplicações de Performance Extrema (Baixa latência/Alto volume de dados): 
- - Em cenários que exigem renderização de volumes de dados muito grandes, muito frequentes, ou manipulações complexas do DOM, a "Virtual DOM" do React pode causar gargalos. Frameworks mais leves (como Svelte) ou Vanilla JS podem ser melhores para máxima performance.

### Parte 2 - Instalação e Configuração

#### Requisitos de Ambiente
Basicamente os requisitos de ambiente necessários para utilizar o React são o Node.js e uma ferramenta de build, essa ferramenta é opcional mas é recomendada, no nosso caso usamos o Vite.

#### Comandos para instalação 
Começar a instalação usando o Vite:
```npm
    npm create vite@latest
```
O Vite irá pedir algumas informações sobre o projeto, como: nome, quais linguagens deseja utilizarn.

Para Inicializar o projeto é necessário rodar o comando dentro da pasta do peojeto criado com o Vite:
```npm
    npm run dev
```
