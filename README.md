# 📝 Blog Pessoal Simples - Next.js 15

Um blog pessoal minimalista construído com **Next.js 15** e **App Router**, demonstrando os conceitos fundamentais de Server Components, Client Components e roteamento dinâmico.

![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como uma demonstração prática dos conceitos aprendido durante o curso de Desenvolvedor Full-Stack do Grupo Boticário, aplicando Next.js 15, incluindo o novo App Router. É um blog pessoal completo e funcional que serve como exemplo de como estruturar uma aplicação React moderna com foco em performance, SEO e experiência do usuário.

### ✨ Funcionalidades Principais

- **📱 Design Responsivo**: Layout que se adapta perfeitamente a dispositivos móveis e desktop
- **🏠 Página Inicial**: Lista de posts com cards informativos e navegação intuitiva
- **📄 Posts Individuais**: Páginas dinâmicas para cada post com roteamento baseado em slug
- **👤 Página Sobre**: Informações pessoais e profissionais do autor
- **❤️ Sistema de Likes**: Interatividade com Client Components e estado local
- **🎨 Design Moderno**: Interface limpa e profissional com Tailwind CSS
- **⚡ Performance Otimizada**: Server Components para renderização eficiente

## 🏗️ Arquitetura e Conceitos

### App Router Structure

O projeto utiliza a nova estrutura do App Router do Next.js 15:

```
app/
├── layout.tsx          # Layout global com navegação
├── page.tsx           # Página inicial (lista de posts)
├── globals.css        # Estilos globais personalizados
├── about/
│   └── page.tsx       # Página sobre (estática)
├── posts/
│   └── [slug]/
│       └── page.tsx   # Posts individuais (dinâmicos)
└── components/
    ├── PostCard.tsx   # Card do post (Server Component)
    └── LikeButton.tsx # Botão curtir (Client Component)
```

### Server Components vs Client Components

#### 🖥️ Server Components (Padrão)
- **Layout Global**: Navegação e estrutura compartilhada
- **Página Inicial**: Lista de posts renderizada no servidor
- **PostCard**: Cards dos posts sem necessidade de JavaScript no cliente
- **Páginas de Posts**: Conteúdo estático renderizado no servidor

#### 🖱️ Client Components
- **LikeButton**: Interatividade com estado local e eventos de clique

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18.17 ou superior)
- **npm** (geralmente vem com o Node.js)
- **Git** (para clonar o repositório)

Você pode verificar se tem essas ferramentas instaladas executando:

```bash
node --version
npm --version
git --version
```

### Passo a Passo para Instalação

#### 1. Clone o Repositório

```bash
# Clone o projeto para sua máquina
git clone <url-do-repositorio>
```

#### 2. Instale as Dependências

```bash
# Instala todas as dependências necessárias
npm install
```

Este comando irá instalar:
- **Next.js 15**: Framework React com App Router
- **React 18**: Biblioteca para interfaces de usuário
- **TypeScript**: Superset do JavaScript com tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **ESLint**: Ferramenta de linting para qualidade do código

#### 3. Execute o Projeto em Modo de Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

#### 4. Acesse a Aplicação

Abra seu navegador e acesse:

```
http://localhost:3000
```

Você verá a página inicial do blog com a lista de posts de exemplo.


## 🔧 Tecnologias Utilizadas


| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 15.x | Framework React com App Router |
| **React** | 18.x | Biblioteca para interfaces de usuário |
| **TypeScript** | 5.x | JavaScript com tipagem estática |
| **Tailwind CSS** | 3.x | Framework CSS utilitário |

### Dependências de Desenvolvimento

| Ferramenta | Propósito |
|------------|-----------|
| **ESLint** | Linting e qualidade de código |
| **Prettier** | Formatação automática de código |
| **PostCSS** | Processamento de CSS |
| **Autoprefixer** | Prefixos CSS automáticos |

### Recursos do Next.js Utilizados

- **App Router**: Nova estrutura de roteamento
- **Server Components**: Renderização no servidor
- **Client Components**: Interatividade no cliente
- **Dynamic Routes**: Rotas com parâmetros
- **Layouts**: Estruturas compartilhadas
- **Metadata API**: SEO e metadados
- **TypeScript**: Tipagem nativa

## 📚 Conceitos Aprendidos

### 1. App Router vs Pages Router

**Antes (Pages Router):**
```
pages/
├── index.js          # /
├── about.js          # /about
└── posts/
    └── [slug].js     # /posts/[slug]
```

**Agora (App Router):**
```
app/
├── page.tsx          # /
├── layout.tsx        # Layout compartilhado
├── about/
│   └── page.tsx      # /about
└── posts/
    └── [slug]/
        └── page.tsx  # /posts/[slug]
```

### 2. Server vs Client Components

**Server Components:**
- Renderizados no servidor
- Não enviam JavaScript para o cliente
- Ideais para conteúdo estático
- Podem acessar APIs e bancos de dados diretamente

**Client Components:**
- Renderizados no navegador
- Permitem interatividade (useState, useEffect)
- Necessários para eventos e estado local
- Marcados com `"use client"`

### 3. Roteamento Dinâmico

```typescript
// app/posts/[slug]/page.tsx
export default function Post({ params }: { params: { slug: string } }) {
  // params.slug contém o valor da URL
  return <h1>Post: {params.slug}</h1>;
}
```

### 4. Layouts Aninhados

```typescript
// app/layout.tsx - Layout raiz
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>Navegação Global</nav>
        {children}
      </body>
    </html>
  );
}

// app/blog/layout.tsx - Layout específico do blog
export default function BlogLayout({ children }) {
  return (
    <div>
      <aside>Sidebar do Blog</aside>
      <main>{children}</main>
    </div>
  );
}
```

## 📖 Recursos Adicionais

### Documentação Oficial

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Tutoriais e Guias

- [Next.js Learn Course](https://nextjs.org/learn)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Ferramentas Úteis

- [Next.js DevTools](https://chrome.google.com/webstore/detail/nextjs-devtools) - Extension do Chrome
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Extension do VSCode
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Snippets para React


## 👨‍💻 Autor

**Danielle Jeanine** - Desenvolvedor Full-Stack

- 📧 Email: danielle.jeanine92@gmail.com
- [💼 LinkedIn:](https://linkedin.com/in/danielle-jeanine-da-silva)
- [🐙 GitHub: ](https://github.com/DanielleJeanine)

---

⭐ **Se este projeto te interessou, considere dar uma estrela no repositório!**

Feito com ❤️ e Next.js 15
