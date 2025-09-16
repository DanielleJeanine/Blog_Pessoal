import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog da Danny",
  description: "Um blog pessoal simples para me ajudar a testar o Next.js",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b">
            <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo/Título do blog */}
                <Link 
                  href="/" 
                  className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  Meu Blog
                </Link>
                
                <div className="flex space-x-8">
                  <Link 
                    href="/" 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Sobre
                  </Link>
                </div>
              </div>
            </nav>
          </header>
 
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>

          <footer className="bg-white border-t mt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <p className="text-center text-gray-600">
                © 2025 Feito por Danielle Jeanine com ❤️ e Next.js
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
