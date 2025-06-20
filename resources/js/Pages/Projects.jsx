import Layout from '../Layouts/Layout';

const projects = [
  {
    title: "Gestor de tareas",
    description: "Aplicación CRUD con React y Laravel.",
    github: "https://github.com/jofreoliveda/gestor-tareas"
  },
  {
    title: "Blog personal",
    description: "Blog con panel de admin hecho en Laravel.",
    github: "https://github.com/jofreoliveda/blog-laravel"
  }
];

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Proyectos</h1>
      <ul>
        {projects.map(({ title, description, github }, i) => (
          <li key={i} className="mb-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>{description}</p>
            <a href={github} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
