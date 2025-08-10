# Desafio Técnico Mosten 2025/2

Teste técnico para seguir na candidatura da trilha de desenvolvimento Front-End na Mosten no 2º semestre de 2025.

<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/38a1c173-4cfe-48a3-9ac7-4c0554fe1911" />



## Tecnologias utilizadas:
- Angular v20.1.5
- Typescript 5.8.3
- TailwindCSS v3.4.17
- Sass v1.90.0

## Deploy do projeto:
https://mosten-tomatoes.vercel.app/

## Comandos para rodar o projeto na sua máquina:
(Certifique-se que o node, angular e git estejam instalados na sua máquina!)


## 1º
```bash
npm i
```

## 2º 

```bash
ng s -o
```

## Critérios de aceite do teste técnico:

🎬 Sistema de Votação de Filmes e Séries

✅ Objetivo do Projeto
Desenvolver um sistema completo (front-end e back-end) que permita aos usuários visualizarem, votarem (positivamente ou negativamente) e cadastrarem filmes ou séries, com persistência de dados e atualização em tempo real dos votos.

## Funcionalidades Principais:
## 1. Exibição de Filmes/Séries
Exibir ao menos 5 itens inicialmente.

Cada item deve conter:

Título

Gênero

Descrição

Imagem (URL ou placeholder)

Botões: “Gostei” e “Não Gostei”

## 2. Sistema de Votação
Atualização imediata dos votos ao clicar em “Gostei” ou “Não Gostei”.

Exibir:

Votos positivos e negativos por item.

Totais gerais de votos positivos e negativos.

## 3. Cadastro de Novos Itens
Formulário com campos:

Obrigatórios: Título, Gênero, Imagem (URL)

Opcional: Descrição

Itens cadastrados devem aparecer imediatamente com votos zerados e prontos para votação.

## 4. Persistência de Dados
Todos os dados (itens, votos, cadastros) devem ser armazenados de forma persistente (não se perdem ao recarregar).

## O sistema deve ser estilizado e garantir uma experiência amigável ao usuário.
