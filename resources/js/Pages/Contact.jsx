import Layout from '../Layouts/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p>Email: jofre@example.com</p>
      <p>
        GitHub: <a href="https://github.com/jofreoliveda" target="_blank" className="text-blue-600 hover:underline">github.com/jofreoliveda</a>
      </p>
      <p>
        LinkedIn: <a href="https://linkedin.com/in/jofreoliveda" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/jofreoliveda</a>
      </p>
    </Layout>
  );
}