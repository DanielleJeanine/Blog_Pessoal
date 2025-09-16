import Link from "next/link";


interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;    
  author: string;
}


interface PostCardProps {
  post: Post;
}


export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Por {post.author}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          
          <div className="mt-4">
            <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Leia mais →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}


export function getExamplePosts(): Post[] {
  return [
    {
      slug: "bem-vindo-ao-meu-blog",
      title: "Bem-vindo ao Meu Blog!",
      excerpt: "Este é o primeiro post do meu blog pessoal. Aqui vou compartilhar pensamentos, experiências e aprendizados sobre tecnologia, vida e muito mais.",
      date: "2025-09-09",
      author: "Danielle Jeanine"
    },
    {
      slug: "aprendendo-nextjs-15",
      title: "Aprendendo Next.js 15 e App Router",
      excerpt: "Uma jornada pelo novo App Router do Next.js 15. Descubra as diferenças entre Server Components e Client Components e como eles revolucionam o desenvolvimento web.",
      date: "2025-09-10",
      author: "Danielle Jeanine"
    },
    {
      slug: "dicas-de-produtividade",
      title: "5 Dicas de Produtividade para Desenvolvedores",
      excerpt: "Compartilho algumas técnicas que me ajudam a ser mais produtivo no dia a dia como desenvolvedor. Desde organização do código até gestão de tempo.",
      date: "2025-09-11",
      author: "Danielle Jeanine"
    },
    {
      slug: "futuro-do-desenvolvimento-web",
      title: "O Futuro do Desenvolvimento Web",
      excerpt: "Reflexões sobre as tendências emergentes no desenvolvimento web. Server Components, Edge Computing e muito mais estão moldando o futuro da web.",
      date: "2025-09-12",
      author: "Danielle Jeanine"
    }
  ];
}

