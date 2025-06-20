import { Link } from '@inertiajs/react';

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <Link href="/" className="hover:underline">Inicio</Link>
        <Link href="/about" className="hover:underline">Sobre mí</Link>
        <Link href="/projects" className="hover:underline">Proyectos</Link>
        <Link href="/contact" className="hover:underline">Contacto</Link>
      </nav>
      <main className="p-8 max-w-4xl mx-auto">{children}</main>
    </div>
  );
}