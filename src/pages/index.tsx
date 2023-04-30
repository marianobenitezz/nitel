import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import WhatsappButtonFixed from "~/components/WhatsappButtonFixed";
import Content from "~/components/content/Content";
import Hero from "~/components/hero/Hero";

const Home: NextPage = () => {

  return (
    <>
      <Head>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="theme-color" content="#111827" />

        <title>Nitel te conecta</title>
        <meta
          name="description"
          content="Conectá todos tus dispositivos y disfrutá tus actividades con el plan de internet que más te convenga. Mirá contenido, hacé videollamadas, jugá online, ¡sin límites!"
        />

        <link rel="icon" type="image/png" href="/favicon-nitel.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon-nitel.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon-nitel.png" />

        {/* FACEBOOK / WHATSAPP */}
        <meta property="og:url" content="https://nitel.com.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nitel, internet para tu hogar" />
        <meta
          property="og:description"
          content="Conectá todos tus dispositivos y disfrutá tus actividades con el plan de internet que más te convenga. Mirá contenido, hacé videollamadas, jugá online, ¡sin límites!"
        />
        <meta property="og:image" content="/social-media-card.png" />
        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/social-media-card.png" />
        <meta property="twitter:domain" content="nitel.com.ar" />
        <meta property="twitter:url" content="https://nitel.com.ar" />
        <meta name="twitter:title" content="Nitel, internet para tu hogar" />
        <meta
          name="twitter:description"
          content="Conectá todos tus dispositivos y disfrutá tus actividades con el plan de internet que más te convenga. Mirá contenido, hacé videollamadas, jugá online, ¡sin límites!"
        />


      </Head>
      <div className="bg-gray-900 relative">

        {/* GRID QUE CUBRE TODO EL SITIO */}
        <svg className="absolute inset-0  h-full w-full stroke-white/25 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="150" height="150" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
        </svg>

        <div className="overflow-hidden relative">

          {/* COLOR CLARO DE FONDO */}
          <div
            className=" absolute left-[calc(50%-4rem)] top-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true">
            <div 
              className=" aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
              }}>
            </div>
          </div>

          <WhatsappButtonFixed />
          <Hero />
          <Content />
        </div>

      </div>
    </>
  );
};

export default Home;