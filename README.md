# Coffee-Delivery

**Nome do projeto:** Coffee-Delivery

## Descrição

Aplicação front-end em React + TypeScript criada com Vite que simula um serviço de delivery de cafés. A interface permite navegar por uma lista de cafés, escolher quantidades, adicionar ao carrinho, preencher dados de entrega e finalizar o pedido — com páginas de Home, Checkout e Sucesso.

O objetivo é demonstrar componentização, uso de Context API para estado global, rotas com `react-router-dom` e estilização com `Tailwind CSS`.

## O que o projeto faz

- Lista cafés com imagem, tags, descrição e preço (dados em `src/data.json`).
- Permite selecionar a quantidade de cada café e adicioná-los ao carrinho.
- Tela de checkout com formulário de endereço e seleção de pagamento.
- Tela de confirmação (sucesso) com resumo do pedido e tempo estimado de entrega.

## Qual problema resolve

Fornece um exemplo de fluxo de compra em um pequeno e-commerce, útil para estudar padrões de frontend, acessibilidade básica e gerenciamento de estado no cliente.

## Objetivo principal

Construir uma SPA responsiva demonstrando boas práticas com React + TypeScript, mostrando um fluxo típico de seleção de produtos e checkout.

## 🚀 Tecnologias utilizadas
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Context API
- React Hook Form + Zod
- Axios

Dependências relevantes (ver `package.json`): `react`, `react-dom`, `react-router-dom`, `axios`, `react-hook-form`, `zod`.

DevDependencies principais: `vite`, `typescript`, `tailwindcss`, `postcss`, `autoprefixer`, `@vitejs/plugin-react`.

## Funcionalidades

- Listagem de produtos (coffees) a partir de `src/data.json`.
- Contador por produto para selecionar quantidade (`CoffeeCounter`).
- Adição de itens ao carrinho via `CoffeeContext`.
- Checkout com campos de endereço e escolha de pagamento.
- Página de sucesso com informações de entrega e método de pagamento.

## O que o usuário consegue fazer

- Navegar pela lista de cafés.
- Ajustar quantidades e adicionar ao carrinho.
- Preencher dados de entrega e escolher método de pagamento.
- Finalizar pedido e visualizar tela de confirmação.

## Como executar o projeto

Pré-requisitos:

- Node.js (recomenda-se v18+)
- npm (ou yarn)

Passos:

1. Clonar o repositório

```powershell
git clone https://github.com/ValdeciNovak/Coffee-Delivery.git
cd Coffee-Delivery
```

2. Instalar dependências

```powershell
npm install
```

3. Rodar em desenvolvimento

```powershell
npm run dev
```

4. Build para produção / preview

```powershell
npm run build
npm run preview
```

Observação: os scripts disponíveis no `package.json` são `dev`, `build` e `preview`.

## Pré-requisitos adicionais

- Não há banco de dados integrado — os dados dos cafés estão no arquivo `src/data.json` e as imagens em `public/images`.

## Estrutura do projeto (resumo)

- `index.html` - template base
- `src/main.tsx` - ponto de entrada
- `src/router.tsx` - rotas da aplicação
- `src/components/` - componentes (Home, CheckOut, Success, Header, Card, layouts, contexts)
- `src/assets/` - imagens e ícones em SVG
- `src/data.json` - dados de exemplo dos cafés
- `public/images` - imagens públicas usadas na aplicação

## Arquitetura / Padrões

- SPA (Single Page Application) com `react-router-dom`.
- Estado compartilhado via Context API (`src/components/contexts/CoffeeContext.tsx`).
- Componentização por responsabilidade (pastas por funcionalidade).
- Estilização utilitária com Tailwind CSS.

## Screenshots / Demonstração

Adicione prints da aplicação em `README.md` colocando as imagens na pasta `public/images` e referenciando-as com o caminho `/images/...`. Se houver deploy (Vercel/Netlify), coloque o link aqui.

Exemplo de imagem local no README:

```markdown
![Home](/images/screenshots/home.png)
```

## Aprendizados

- Integração de `React` com `TypeScript` e `Vite`.
- Gerenciamento de estado simples com Context API.
- Uso de `react-hook-form` e `zod` para validação.
- Criação de componentes reutilizáveis e responsivos com Tailwind.

## Desafios enfrentados

- Tipagem correta ao passar dados pelo contexto e handlers de componentes.
- Ajustes finos de layout responsivo entre breakpoints.

## Próximos passos / Melhorias

- Persistência do carrinho no `localStorage`.
- Implementar backend (API) para persistir pedidos.
- Autenticação de usuários e histórico de pedidos.
- Testes unitários e de integração.
- Internacionalização (i18n).

## Autor

- Valdeci Novak Junior
- GitHub: https://github.com/ValdeciNovak
- LinkedIn - https://www.linkedin.com/in/valdecijuniordev/

---


