import { notFound } from "next/navigation";
import LikeButton from "../../components/LikeButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Post {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

interface PageProps {
  params: {
    slug: string;
  };
}

function getAllPosts(): Post[] {
  return [
    {
      slug: "bem-vindo-ao-meu-blog",
      title: "Bem-vindo ao Meu Blog!",
      excerpt:
        "Este é o primeiro post do meu blog pessoal. Aqui vou compartilhar pensamentos, experiências e aprendizados sobre tecnologia, vida e muito mais.",
      content: `
# Bem-vindo ao Meu Blog!

Olá e bem-vindos ao meu cantinho na internet! 🎉

Este é o primeiro post do meu blog pessoal, e estou muito animada para compartilhar esta jornada com vocês. Aqui, pretendo documentar meus aprendizados, experiências e reflexões sobre o mundo da tecnologia e desenvolvimento web.


### O que você pode esperar encontrar aqui:

- **Dicas e truques** que aprendi ao longo da minha carreira
- **Reflexões** sobre tendências e o futuro da tecnologia
- **Projetos pessoais** e experimentos interessantes
- **Lições aprendidas** com erros e sucessos

## Sobre a tecnologia deste blog

Este blog foi construído com as seguintes tecnologias:

- **Next.js**
- **TypeScript** 
- **Tailwind CSS** 


É um exemplo prático de como essas tecnologias trabalham juntas para criar uma experiência web moderna e eficiente.

## Vamos juntos nessa jornada!

Espero que este espaço se torne um local de aprendizado mútuo. Sinta-se à vontade para deixar comentários, sugestões ou entrar em contato comigo através das redes sociais.

Obrigado por estar aqui, e vamos começar essa aventura! 🚀
      `,
      date: "2025-09-09",
      author: "Danielle Jeanine",
      readTime: "3 min",
      tags: ["blog", "bem-vindo", "tecnologia"],
    },
    {
      slug: "aprendendo-nextjs-15",
      title: "Aprendendo Next.js 15 e App Router",
      excerpt:
        "Uma jornada pelo novo App Router do Next.js 15. Descubra as diferenças entre Server Components e Client Components e como eles revolucionam o desenvolvimento web.",
      content: `
# Aprendendo Next.js 15 e App Router

O Next.js 15 trouxe mudanças revolucionárias com o **App Router**, uma nova forma de estruturar aplicações React que promete melhor performance e experiência de desenvolvimento.

## O que mudou?

### Pages Router vs App Router

O tradicional **Pages Router** usava a pasta \`pages/\` para definir rotas:

\`\`\`
pages/
├── index.js          # /
├── about.js          # /about
└── posts/
    └── [slug].js     # /posts/[slug]
\`\`\`

O novo **App Router** usa a pasta \`app/\` com uma estrutura mais flexível:

\`\`\`
app/
├── page.tsx          # /
├── layout.tsx        # Layout compartilhado
├── about/
│   └── page.tsx      # /about
└── posts/
    └── [slug]/
        └── page.tsx  # /posts/[slug]
\`\`\`

## Server Components vs Client Components

### Server Components (Padrão)

Por padrão, todos os componentes no App Router são **Server Components**:

\`\`\`tsx
// Este é um Server Component
export default function BlogPost() {
  // Pode acessar banco de dados diretamente
  const posts = await db.posts.findMany();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

**Vantagens:**
- Renderização no servidor
- Melhor SEO
- Menor bundle JavaScript
- Acesso direto a APIs e banco de dados

### Client Components

Para interatividade, use a diretiva \`"use client"\`:

\`\`\`tsx
"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  
  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes}
    </button>
  );
}
\`\`\`

**Quando usar:**
- Estado local (useState, useReducer)
- Efeitos (useEffect)
- Event listeners
- APIs do navegador

## Layouts Compartilhados

O App Router permite layouts aninhados e compartilhados:

\`\`\`tsx
// app/layout.tsx - Layout raiz
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>/* Navegação global */</nav>
        {children}
        <footer>/* Footer global */</footer>
      </body>
    </html>
  );
}
\`\`\`

## Roteamento Dinâmico

Criar rotas dinâmicas é simples com colchetes:

\`\`\`tsx
// app/posts/[slug]/page.tsx
export default function Post({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>;
}
\`\`\`

## Conclusão

O App Router representa uma evolução natural do Next.js, oferecendo:

- **Melhor performance** com Server Components
- **Flexibilidade** na estrutura de layouts
- **Experiência de desenvolvimento** aprimorada
- **Preparação para o futuro** do React

Se você ainda não experimentou, recomendo fortemente dar uma chance ao App Router em seu próximo projeto!
      `,
      date: "2025-09-10",
      author: "Danielle Jeanine",
      readTime: "8 min",
      tags: ["nextjs", "react", "app-router", "tutorial"],
    },
    {
      slug: "dicas-de-produtividade",
      title: "5 Dicas de Produtividade para Desenvolvedores",
      excerpt:
        "Compartilho algumas técnicas que me ajudam a ser mais produtiva no dia a dia como desenvolvedora. Desde organização do código até gestão de tempo.",
      content: `
# 5 Dicas de Produtividade para Desenvolvedores

Ao longo dos anos como desenvolvedora, aprendi algumas técnicas que me ajudam a ser mais produtivo e eficiente. Hoje compartilho 5 dicas que fazem diferença no meu dia a dia.

## 1. 🎯 Use a Técnica Pomodoro

A **Técnica Pomodoro** é perfeita para desenvolvimento:

- **25 minutos** de foco total em uma tarefa
- **5 minutos** de pausa
- A cada 4 pomodoros, pausa de **15-30 minutos**

### Por que funciona para devs?

- Evita burnout mental
- Mantém o foco em problemas complexos
- Cria senso de urgência saudável
- Permite reflexão durante as pausas

### Ferramentas recomendadas:

- **Forest** (mobile)
- **Toggl Track** (desktop)
- **Be Focused** (Mac)

## 2. 📝 Mantenha um "Dev Journal"

Documente diariamente:

\`\`\`markdown
## 15/01/2024

### O que fiz hoje:
- Implementei autenticação JWT no backend
- Corrigi bug no componente de upload
- Code review do PR #123

### Problemas encontrados:
- CORS issue com API externa
- Solução: configurar proxy no Next.js

### Aprendizados:
- Como usar React.memo() efetivamente
- Diferença entre useMemo e useCallback

### Amanhã:
- Implementar testes para auth
- Otimizar queries do banco
\`\`\`

### Benefícios:

- **Reflexão** sobre o progresso
- **Documentação** de soluções
- **Planejamento** do próximo dia
- **Histórico** de aprendizados

## 3. 🔧 Configure seu Ambiente de Desenvolvimento

### VS Code Extensions essenciais:

\`\`\`json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
\`\`\`

### Snippets personalizados:

\`\`\`json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "interface Props {",
      "  $1",
      "}",
      "",
      "export default function $TM_FILENAME_BASE({ $2 }: Props) {",
      "  return (",
      "    <div>$3</div>",
      "  );",
      "}"
    ]
  }
}
\`\`\`

### Aliases úteis no terminal:

\`\`\`bash
# .bashrc ou .zshrc
alias ll="ls -la"
alias gs="git status"
alias gp="git push"
alias gl="git log --oneline"
alias nr="npm run"
alias ys="yarn start"
\`\`\`

## 4. 🧠 Aplique o Princípio "Eat the Frog"

**Faça a tarefa mais difícil primeiro!**

### Por que funciona?

- **Energia mental** está no máximo pela manhã
- **Senso de conquista** para o resto do dia
- **Evita procrastinação** em tarefas complexas

### Como aplicar:

1. **Identifique** a tarefa mais desafiadora
2. **Bloqueie** 2-3 horas pela manhã
3. **Elimine distrações** (Celular, email, etc.)
4. **Foque** apenas nessa tarefa

### Exemplo de cronograma:

\`\`\`
09:00 - 11:00: Tarefa complexa (refatoração, arquitetura)
11:00 - 11:15: Pausa
11:15 - 12:00: Code review e emails
12:00 - 13:00: Almoço
13:00 - 17:00: Tarefas menores e reuniões
\`\`\`

## 5. 🔄 Automatize Tarefas Repetitivas

### Scripts úteis:

\`\`\`bash
#!/bin/bash
# setup-project.sh

echo "🚀 Configurando novo projeto..."

# Criar estrutura de pastas
mkdir -p src/{components,pages,hooks,utils,types}
mkdir -p public/{images,icons}

# Instalar dependências
npm install
npm install -D @types/node typescript

# Configurar Git
git init
git add .
git commit -m "Initial commit"

echo "✅ Projeto configurado!"
\`\`\`

### Git hooks para qualidade:

\`\`\`json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
\`\`\`

### Makefile para comandos comuns:

\`\`\`makefile
.PHONY: dev build test deploy

dev:
	npm run dev

build:
	npm run build

test:
	npm test

deploy:
	npm run build && npm run deploy
\`\`\`

## Conclusão

Produtividade não é sobre trabalhar mais horas, mas sobre **trabalhar de forma mais inteligente**. Essas técnicas me ajudam a:

- Manter **foco** em tarefas importantes
- **Documentar** aprendizados e soluções
- **Otimizar** o ambiente de trabalho
- **Automatizar** processos repetitivos

Experimente uma técnica por vez e adapte ao seu estilo de trabalho. O importante é encontrar o que funciona para você!

**Qual dessas dicas você vai experimentar primeiro?** 🤔
      `,
      date: "2024-09-11",
      author: "Danielle Jeanine",
      readTime: "6 min",
      tags: ["produtividade", "dicas", "desenvolvimento", "workflow"],
    },
    {
      slug: "futuro-do-desenvolvimento-web",
      title: "O Futuro do Desenvolvimento Web",
      excerpt:
        "Reflexões sobre as tendências emergentes no desenvolvimento web. Server Components, Edge Computing e muito mais estão moldando o futuro da web.",
      content: `
# O Futuro do Desenvolvimento Web

O desenvolvimento web está em constante evolução, e as mudanças dos últimos anos têm sido particularmente empolgantes. Vamos explorar as tendências que estão moldando o futuro da nossa área.

## 🚀 Server Components: O Novo Paradigma

### O que são Server Components?

Server Components representam uma mudança fundamental na arquitetura React:

\`\`\`tsx
// Server Component - roda no servidor
async function BlogPosts() {
  const posts = await db.posts.findMany();
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

### Vantagens:

- **Zero JavaScript** enviado ao cliente
- **Acesso direto** a banco de dados
- **Melhor SEO** e performance
- **Segurança** aprimorada

### O impacto:

Esta tecnologia está mudando como pensamos sobre aplicações web, trazendo o melhor dos dois mundos: a interatividade do SPA com a performance do SSR.

## ⚡ Edge Computing: Mais Próximo do Usuário

### O que é Edge Computing?

Executar código em servidores geograficamente próximos aos usuários:

\`\`\`typescript
// Middleware no Edge
export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  
  // Personalizar conteúdo por localização
  if (country === 'BR') {
    return NextResponse.rewrite('/br/home');
  }
  
  return NextResponse.next();
}
\`\`\`

### Benefícios:

- **Latência reduzida**
- **Melhor experiência** do usuário
- **Personalização** geográfica
- **Escalabilidade** global

### Plataformas líderes:

- **Vercel Edge Functions**
- **Cloudflare Workers**
- **AWS Lambda@Edge**
- **Deno Deploy**

## 🤖 IA Generativa no Desenvolvimento

### Assistentes de Código

A IA está revolucionando como escrevemos código:

\`\`\`typescript
// GitHub Copilot sugere automaticamente:
function calculateTax(income: number, country: string) {
  // Copilot completa a lógica baseada no contexto
  switch (country) {
    case 'BR':
      return income * 0.275;
    case 'US':
      return income * 0.22;
    default:
      return income * 0.20;
  }
}
\`\`\`

### Ferramentas emergentes:

- **GitHub Copilot** - Autocompletar inteligente
- **ChatGPT** - Explicações e debugging
- **Tabnine** - Sugestões contextuais
- **Replit Ghostwriter** - Programação colaborativa

### Impacto na profissão:

- **Maior produtividade**
- **Foco em problemas complexos**
- **Aprendizado acelerado**
- **Democratização** do desenvolvimento

## 🎨 CSS Moderno: Além do Tailwind

### Container Queries

Responsividade baseada no container, não na viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

### CSS Layers

Controle fino sobre especificidade:

\`\`\`css
@layer reset, base, components, utilities;

@layer components {
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
}
\`\`\`

### Subgrid

Layouts complexos simplificados:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\`

## 🔒 Segurança: Prioridade Máxima

### Zero Trust Architecture

Nunca confie, sempre verifique:

\`\`\`typescript
// Middleware de autenticação
export async function authMiddleware(req: Request) {
  const token = req.headers.get('authorization');
  
  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  const user = await verifyToken(token);
  if (!user) {
    return new Response('Invalid token', { status: 403 });
  }
  
  // Continuar com a requisição
  return NextResponse.next();
}
\`\`\`

### Content Security Policy (CSP)

Proteção contra XSS:

\`\`\`typescript
const cspHeader = \`
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
\`;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('Content-Security-Policy', cspHeader);
  return response;
}
\`\`\`

## 🌐 Web Assembly (WASM): Performance Nativa

### Casos de uso:

- **Processamento de imagem/vídeo**
- **Jogos web**
- **Simulações científicas**
- **Criptografia**

### Exemplo com Rust:

\`\`\`rust
// lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
\`\`\`

\`\`\`typescript
// JavaScript
import init, { fibonacci } from './pkg/my_wasm_lib.js';

async function run() {
  await init();
  const result = fibonacci(40); // Muito mais rápido que JS puro
  console.log(result);
}
\`\`\`

## 📱 Progressive Web Apps (PWA) 2.0

### Novas capacidades:

- **File System Access API**
- **Web Share API**
- **Background Sync**
- **Push Notifications**

### Service Worker moderno:

\`\`\`typescript
// sw.ts
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
\`\`\`

## 🔮 Previsões para os Próximos Anos

### 2024-2025:

- **Adoção massiva** de Server Components
- **Edge Computing** se torna padrão
- **IA assistentes** em todos os editores
- **WebAssembly** para aplicações complexas

### 2026-2027:

- **Realidade aumentada** na web
- **Computação quântica** acessível
- **Interfaces neurais** experimentais
- **Sustentabilidade** como prioridade

### 2028-2030:

- **Web totalmente descentralizada**
- **IA que escreve aplicações completas**
- **Interfaces adaptativas** por IA
- **Computação distribuída** global

## 🎯 Como se Preparar

### 1. Mantenha-se Atualizado

- **Newsletters**: Bytes, React Status, JavaScript Weekly
- **Podcasts**: Syntax, React Podcast, JS Party
- **Conferências**: React Conf, Next.js Conf, JSConf

### 2. Experimente Novas Tecnologias

- **Crie projetos** com tecnologias emergentes
- **Contribua** para projetos open source
- **Compartilhe** aprendizados no blog/redes

### 3. Foque nos Fundamentos

- **Algoritmos** e estruturas de dados
- **Arquitetura** de software
- **Princípios** de design

## Conclusão

O futuro do desenvolvimento web é incrivelmente promissor. Estamos vivendo uma era de inovação acelerada, onde novas tecnologias surgem constantemente para resolver problemas reais.

**A chave é manter a curiosidade**, experimentar novas ferramentas e, principalmente, **focar em resolver problemas** dos usuários de forma eficiente e elegante.

O que você acha dessas tendências? Qual tecnologia te empolga mais para o futuro? 🚀
      `,
      date: "2024-09-12",
      author: "Danielle Jeanine",
      readTime: "10 min",
      tags: ["futuro", "tendências", "web-development", "tecnologia"],
    },
  ];
}

function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <div className="flex items-center space-x-2">
            <span>👤</span>
            <span>Por {post.author}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span>📅</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <div className="flex items-center space-x-2">
            <span>⏱️</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Gostou deste post?
            </h3>
            <p className="text-gray-600">
              Deixe seu like e compartilhe com outros desenvolvedores!
            </p>
          </div>

          <LikeButton initialLikes={Math.floor(Math.random() * 50) + 10} />
        </div>
      </div>

      <nav className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Outros Posts
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="/"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <span className="text-sm text-gray-500">← Voltar para</span>
            <div className="font-medium text-gray-900">Lista de Posts</div>
          </a>

          <a
            href="/about"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <span className="text-sm text-gray-500">Conheça o autor →</span>
            <div className="font-medium text-gray-900">Sobre Mim</div>
          </a>
        </div>
      </nav>
    </article>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} | Meu Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
