# GAC116-Jogo_da_Memoria
Jogo da Memória desenvolvido para a disciplina de Programação Web da UFLA - Prof. Jesimar da Silva Arantes.

# 🧠 Jogo da Memória Interativo

Bem-vindo a uma versão moderna e interativa do clássico Jogo da Memória, desenvolvida com **HTML5, CSS3 e JavaScript puro**. Este projeto foi criado para demonstrar conceitos avançados de desenvolvimento front-end em um pacote divertido e funcional.

## 🚀 Como Executar

O projeto não requer um build ou instalação. Basta abrir o arquivo principal no seu navegador.

Você tem duas opções para fazer isso: **Clonando o Repositório** ou **Acessando o link do GitHub Pages**.

### Clonando o Repositório

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `page/index.html` em um navegador moderno (Chrome, Firefox, Edge).
3.  Pronto! O jogo iniciará com o menu de seleção de dificuldade.

### Acessando o link do GitHub Pages

Você pode jogar a versão mais recente diretamente no seu navegador através do link abaixo:

➡️ **[Acesse o Jogo Online Aqui!](https://gilmar-filho.github.io/GAC116-Jogo_da_Memoria/page)** ⬅️

## ✨ Funcionalidades Principais

-   **🎮 Múltiplos Níveis de Dificuldade:** Escolha entre 4x4 (Fácil), 6x6 (Médio), 8x8 (Difícil) e 10x10 (Insano).
-   **⏱️ Timer e Contador de Movimentos:** Acompanhe seu desempenho em tempo real. O timer inicia no primeiro clique!
-   **🃏 Animação de Flip 3D:** As cartas viram com um efeito 3D suave.
-   **🏆 Ranking Persistente:** Seus melhores scores (tempo e movimentos) são salvos no `localStorage`!
-   **📊 Painel de Ranking:** Visualize o Top 5 de scores para cada dificuldade, com um painel lateral elegante.
-   **🎨 Design Moderno e Responsivo:** Tema escuro (dark mode) com uma paleta de cores vibrante e layout que se adapta a qualquer tela, do celular ao desktop.
-   **🎉 Modais Interativos:** Menus e telas de vitória que melhoram a experiência do usuário.
-   **🚀 Zero Dependências:** Construído inteiramente com tecnologias web nativas, sem frameworks ou bibliotecas externas.

## 📁 Estrutura

```
GAC116-Jogo_da_Memoria/
└── page/
    ├── index.html      # A estrutura principal do jogo e da interface
    ├── styles.css      # Estilização, animações e responsividade
    ├── script.js       # Toda a lógica do jogo, estado e manipulação do DOM
    └── brain.png       # Ícone da página (favicon)
```

## 🏗️ Arquitetura do Código

O projeto foi estruturado para ser modular e de fácil manutenção.

### JavaScript (`script.js`)

-   **`CONFIG`:** Um objeto de configuração para centralizar parâmetros como dificuldades e emojis.
-   **`gameState`:** Um único objeto que gerencia todo o estado do jogo (cartas viradas, tempo, movimentos, etc.), facilitando o debug e a manutenção.
-   **`DOM`:** Um objeto que armazena referências para os elementos do DOM, otimizando a performance ao evitar buscas repetidas.
-   **Funções com Responsabilidade Única:** O código é dividido em funções claras como `generateCards`, `checkMatch`, `updateDisplay`, `renderRankingContent`, etc.

### CSS (`styles.css`)

-   **Variáveis CSS (`:root`):** A paleta de cores, sombras e espaçamentos são centralizados, permitindo uma fácil customização do tema.
-   **CSS Grid & Flexbox:** Utilizados para criar layouts complexos e responsivos, como o painel de estatísticas e o tabuleiro de jogo.
-   **Seletores de Atributo (`data-size`):** O tabuleiro se adapta dinamicamente ao tamanho do grid usando seletores de atributo, mantendo o CSS limpo.
-   **Animações e Transições:** Animações de `flip`, `pulse` e transições de painel são feitas puramente com CSS para melhor performance.

---
Desenvolvido como parte da disciplina de Programação Web.