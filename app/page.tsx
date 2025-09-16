import PostCard, { getExamplePosts } from "./components/PostCard";

export default function Home() {
  
  const posts = getExamplePosts();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo ao Meu Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Aqui compartilho pensamentos, experiências e aprendizados sobre 
          tecnologia, desenvolvimento web e vida em geral.
        </p>
      </div>

    
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Posts Recentes
        </h2>
        
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <PostCard 
              key={post.slug} 
              post={post} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
