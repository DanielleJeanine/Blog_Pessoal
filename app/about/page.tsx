import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Cabeçalho da página */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h1>
        <p className="text-xl text-gray-600">
          Desenvolvedora apaixonado por tecnologia e compartilhamento de
          conhecimento
        </p>
      </div>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0">
            <div className=" flex items-center justify-center">
              <Image
                src="/Meu_cartoon_chapeu.jpeg"
                alt="Foto de Perfil"
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Danielle Jeanine
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              👋 Olá, eu sou uma Lufana que se formou em Administração e acabou
              se apaixonando por tecnologia, me tornando uma Javeira de coração.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Neste blog, compartilho minha jornada de aprendizado e reflexões
              sobre o meu futuro com a tecnologia. Acredito que o conhecimento
              deve ser compartilhado e que todos podem aprender algo novo a cada
              dia.
            </p>
            <h4 className="text-gray-600 font-semibold mb-4 leading-relaxed">
              ⚡ Valores que me movem:
            </h4>
            <ul className="text-gray-600 mb-4 leading-relaxed">
              <li>🤝 Justiça – agir sempre com equilíbrio e integridade.</li>
              <li>🌟 Empatia – entender o outro para construir juntos.</li>
              <li>💛 Lealdade – essencial em cada escolha, pessoal e profissional.</li>
              <li>🌱 Aprendizado Contínuo – nunca parar de evoluir.</li>
              <li>🌍 Inclusão – abrir caminhos para todos terem as mesmas oportunidades.</li>
              <li>✨ Criatividade – transformar ideias em impacto real.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Tecnologias que Uso
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Java",
            "Spring Boot",
            "Next.js",
            "Low-Code",
            "PostgreSQL",
            "Tailwind CSS",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Experiência
        </h3>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900">
              Desenvolvedora Full Stack Júnior
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              Biomob • Jan/2024 - Out/2024
            </p>
            <p className="text-gray-600 text-sm">
              Atuava no desenvolvimento de aplicações web com Next.js,
              TypeScript, Tailwind CSS no front-end, e Java com Spring Boot no
              back-end, com banco de dados PostegreSQL, utilizando a metodologia
              ágil com Kanban.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-900">
              Desenvolvedora de Software Trainee
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              Tic.Social • Fev/2022 - Mai/2023
            </p>
            <p className="text-gray-600 text-sm">
              Alocada como prestadora de serviços na empresa SulAmérica Seguros.
              Atuando na plataforma Salesforce desenvolvendo funcionalidades em
              programação Low-Code integrada Apex e Lightning e realização de
              testes automatizados, utilizando a metodologia ágil do Scrum.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Vamos Conversar?
        </h3>
        <p className="text-gray-600 mb-6">
          Estou sempre aberta para discutir projetos interessantes,
          oportunidades de colaboração ou simplesmente trocar ideias sobre
          tecnologia.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:danielle.jeanine92@gmail.com"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>📧</span>
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/danielle-jeanine-da-silva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/DanielleJeanine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <span>🐙</span>
            <span>GitHub</span>
          </a>

        </div>
      </section>

      {/* Seção sobre o blog */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Sobre Este Blog
        </h3>
        <p className="text-gray-600 mb-4">
          Este blog foi criado como um projeto de demonstração de aprendizado dos conceitos do
          Next.js com App Router, como parte do curso Desenvolvedor Full-Stack do Grupo Boticário em parceria com a Koru.
           Aqui você pode ver na prática:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Server Components para renderização no servidor</li>
          <li>Client Components para interatividade</li>
          <li>Roteamento dinâmico com parâmetros</li>
          <li>Layouts compartilhados</li>
          <li>Design responsivo com Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
}
