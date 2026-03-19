import { CheckCircle, Compass, Layers, Globe, FileText, Users, CalendarCheck, ShieldCheck, Award, Map } from "lucide-react";
import { Phone, MapPin, Briefcase, Star } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-200 bg-black scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </div>
  );
function About() {
  return (
    <section className="p-12 bg-gray-950 text-center">
      <h2 className="text-4xl font-bold mb-2 text-yellow-400">JBL TOPOGRAFÍA</h2>
      <p className="text-xl mb-6 text-yellow-300">Precisión que construye confianza</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-10">
        <div className="flex-1 bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">¿Quiénes somos?</h3>
          <p className="mb-4 text-gray-300">En JBL Topografía brindamos servicios especializados en topografía convencional, batimetrías y diseños viales, apoyados en tecnología de última generación y metodologías que garantizan alta precisión, confiabilidad y cumplimiento.</p>
          <p className="mb-4 text-gray-300">Nuestra mayor carta de presentación son más de 10 años de experiencia y la satisfacción de clientes y proyectos desarrollados a nivel nacional. Ejecutamos cada trabajo con rigor técnico, optimizando tiempos de campo y entrega, para ofrecer resultados claros, útiles y oportunos para la toma de decisiones.</p>
        </div>
        <div className="flex-1 bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Nuestra propuesta de valor</h3>
          <ul className="text-left mx-auto max-w-md">
            <li className="flex items-center gap-2 mb-2"><CheckCircle className="text-yellow-400" /> Precisión certificada en cada medición</li>
            <li className="flex items-center gap-2 mb-2"><CalendarCheck className="text-yellow-400" /> Cumplimiento estricto de plazos</li>
            <li className="flex items-center gap-2 mb-2"><Globe className="text-yellow-400" /> Tecnología GNSS, RTK y estaciones totales de alta gama</li>
            <li className="flex items-center gap-2 mb-2"><FileText className="text-yellow-400" /> Resultados claros en planos digitales e impresos</li>
            <li className="flex items-center gap-2 mb-2"><Users className="text-yellow-400" /> Acompañamiento técnico durante todo el proyecto</li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Servicios</h3>
          <ul className="text-left mx-auto max-w-md">
            <li className="flex items-center gap-2 mb-2"><Compass className="text-yellow-400" /> Topografía General</li>
            <li className="flex items-center gap-2 mb-2"><Layers className="text-yellow-400" /> Obras Civiles e Infraestructura</li>
            <li className="flex items-center gap-2 mb-2"><Map className="text-yellow-400" /> Topografía Especializada</li>
            <li className="flex items-center gap-2 mb-2"><FileText className="text-yellow-400" /> Gestión de Información</li>
          </ul>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Tecnología y resultados</h3>
          <ul className="text-left mx-auto max-w-md">
            <li className="flex items-center gap-2 mb-2"><Award className="text-yellow-400" /> Estaciones totales de alta precisión</li>
            <li className="flex items-center gap-2 mb-2"><Globe className="text-yellow-400" /> Equipos GNSS geodésicos</li>
            <li className="flex items-center gap-2 mb-2"><ShieldCheck className="text-yellow-400" /> Sistemas RTK</li>
            <li className="flex items-center gap-2 mb-2"><FileText className="text-yellow-400" /> Resultados en planos digitales y físicos (Civil 3D)</li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Misión</h3>
          <p className="text-gray-300">Ofrecer a nuestros clientes un servicio de excelencia y un producto final que responda a sus necesidades técnicas, apoyados en un equipo humano comprometido y en recursos tecnológicos adecuados para ejecutar cada proyecto con responsabilidad y competencia.</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Visión</h3>
          <p className="text-gray-300">Ser una empresa líder a nivel nacional en topografía, geodesia y apoyo a la construcción, reconocida por su cumplimiento, calidad técnica y responsabilidad con la seguridad y el medio ambiente.</p>
        </div>
      </div>
      <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20 mx-auto max-w-2xl">
        <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Políticas de trabajo</h3>
        <ul className="text-left">
          <li className="flex items-center gap-2 mb-2"><CheckCircle className="text-yellow-400" /> Relaciones de largo plazo con clientes</li>
          <li className="flex items-center gap-2 mb-2"><Compass className="text-yellow-400" /> Soluciones específicas para cada proyecto</li>
          <li className="flex items-center gap-2 mb-2"><Users className="text-yellow-400" /> Asesoría desde la planeación hasta la entrega final</li>
          <li className="flex items-center gap-2 mb-2"><CalendarCheck className="text-yellow-400" /> Plazos reducidos de ejecución y entrega</li>
          <li className="flex items-center gap-2 mb-2"><ShieldCheck className="text-yellow-400" /> Precios competitivos sin comprometer la calidad</li>
        </ul>
      </div>
      <p className="mt-8 text-lg text-yellow-300 font-semibold">Medimos con precisión, construimos con confianza.</p>
    </section>
  );
}
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-yellow-500/20 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-yellow-400">J.B.L Topografía</h1>
      <div className="flex gap-6 text-sm text-gray-300">
        <a href="#services" className="flex items-center gap-2 hover:text-yellow-400">
          <Briefcase className="w-5 h-5 text-yellow-400" />
          <span className="hidden md:inline">Servicios</span>
        </a>
        <a href="#projects" className="flex items-center gap-2 hover:text-yellow-400">
          <MapPin className="w-5 h-5 text-yellow-400" />
          <span className="hidden md:inline">Trabajos</span>
        </a>
        <a href="#contact" className="flex items-center gap-2 hover:text-yellow-400">
          <Phone className="w-5 h-5 text-yellow-400" />
          <span className="hidden md:inline">Contacto</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="text-center py-28 bg-gradient-to-br from-black via-gray-900 to-yellow-900">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
        Topografía Profesional en Colombia
      </h2>
      <p className="mb-6 max-w-xl mx-auto text-gray-300">
        Precisión, tecnología y experiencia para proyectos de ingeniería y construcción.
      </p>
      <a
        href="https://wa.me/573001234567"
        target="_blank"
        className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-400 transition"
      >
        Cotizar por WhatsApp
      </a>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "+50", label: "Proyectos" },
    { value: "+5", label: "Años experiencia" },
    { value: "100%", label: "Clientes satisfechos" },
  ];

  return (
    <section className="grid md:grid-cols-3 text-center py-12 bg-gray-900">
      {stats.map((s, i) => (
        <div key={i}>
          <p className="text-3xl font-bold text-yellow-400">{s.value}</p>
          <p className="text-gray-400">{s.label}</p>
        </div>
      ))}
    </section>
  );
}

function Services() {
  const services = [
    "Levantamientos topográficos",
    "Replanteo de obras",
    "Georreferenciación GPS",
    "Nivelaciones de terreno",
  ];

  return (
    <section id="services" className="p-12 bg-black">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        Servicios
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900 border border-yellow-500/20 rounded-xl hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition"
          >
            <Briefcase className="mb-2 text-yellow-400" />
            <p className="font-medium">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="p-12 bg-gray-950">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
        Trabajos Realizados
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((p) => (
          <div
            key={p}
            className="rounded-xl overflow-hidden border border-yellow-500/10 hover:scale-105 transition"
          >
            <img
              src={`/proyectos/${p}.jpeg`}
              alt={`proyecto ${p}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-gray-900">
              <p className="font-semibold text-yellow-300">Proyecto {p}</p>
              <p className="text-sm text-gray-400">
                Levantamiento topográfico
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="p-12 text-center bg-black">
      <h2 className="text-3xl font-bold mb-8 text-yellow-400">Clientes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {["Excelente servicio", "Muy profesional", "Recomendado 100%"].map(
          (t, i) => (
            <div key={i} className="p-6 bg-gray-900 border border-yellow-500/20 rounded-xl">
              <Star className="mx-auto mb-2 text-yellow-400" />
              <p className="text-gray-300">"{t}"</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="p-12 bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
        Contáctanos
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input placeholder="Nombre" className="p-3 bg-black border border-gray-700 rounded" />
          <input placeholder="Teléfono" className="p-3 bg-black border border-gray-700 rounded" />
          <textarea placeholder="Mensaje" className="p-3 bg-black border border-gray-700 rounded" />
          <button className="bg-yellow-500 text-black p-3 rounded hover:bg-yellow-400 transition">
            Enviar
          </button>
        </form>

        <div className="text-gray-300">
          <p className="flex items-center gap-2 mb-2">
            <Phone /> +57 310 419 21 30
          </p>
          <p className="flex items-center gap-2">
            <MapPin /> Colombia
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573104192130"
      target="_blank"
      className="fixed bottom-6 right-6 bg-yellow-500 text-black px-5 py-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      WhatsApp
    </a>
  );
}
