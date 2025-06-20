import Layout from '../Layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-center mt-12">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-600">Hola, soy Jofre Oliveda</h1>
        <p className="text-lg text-gray-700">Desarrollador web con CFGS DAW y pasión por crear soluciones modernas.</p>
      </div>
    </Layout>
  );
}