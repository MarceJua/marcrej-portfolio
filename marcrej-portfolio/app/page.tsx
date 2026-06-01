'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Portfolio() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <main className="w-full font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-[#344E41] px-6 z-0">
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="w-full max-w-4xl text-center"
        >
          <span className="text-[#A3B18A] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            Systems Engineering Student @ USAC
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#F2F2E2] mb-6">
            Marcelo Juárez
          </h1>
          <p className="text-[#DAD7CD] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            On my way to becoming a Full-stack Developer. <br/>
            <span className="text-[#A3B18A] font-medium">Passionate about Cloud Computing & clean code.</span>
          </p>
          
          {/* TERMINAL CI/CD */}
          <div className="bg-[#1e1e1e] border border-gray-700/50 rounded-xl p-4 text-left font-mono text-sm max-w-sm mx-auto shadow-2xl">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <p className="text-[#27c93f] mb-1">&gt; Pipeline CI/CD Status: <span className="text-[#F2F2E2]">Active</span></p>
            <p className="text-gray-400">&gt; Server: <span className="text-[#F2F2E2]">DigitalOcean Droplet</span></p>
          </div>
        </motion.div>
      </section>

      {/* --- CONTENEDOR CREMA --- */}
      <div className="relative z-10 bg-[#F2F2E2] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        
        {/* --- SKILLS & INFRASTRUCTURE SECTION --- */}
        <section className="w-full px-6 pt-24 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Título de la sección agregado */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black tracking-tight mb-3 text-[#344E41]">Tech Stack & Infrastructure</h2>
              <p className="text-[#344E41]/70 text-sm font-light">Las herramientas, lenguajes y arquitecturas con las que construyo.</p>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                
                {/* Backend & Cloud */}
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-xl font-black mb-4 text-[#344E41]">Backend & Cloud</h3>
                  <p className="text-[#344E41]/70 mb-6 text-sm font-light">Lógica de servidor, APIs y bases de datos.</p>
                  <ul className="space-y-2 text-[#344E41] font-medium text-sm">
                    <li>Python (Flask / Django)</li>
                    <li>Go</li>
                    <li>SQL (PostgreSQL) & MongoDB</li>
                    <li>AWS Cloud Foundations</li>
                  </ul>
                </div>

                {/* Frontend Dev */}
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-xl font-black mb-4 text-[#344E41]">Frontend Dev</h3>
                  <p className="text-[#344E41]/70 mb-6 text-sm font-light">Interfaces modernas, dinámicas y accesibles.</p>
                  <ul className="space-y-2 text-[#344E41] font-medium text-sm">
                    <li>React & Next.js</li>
                    <li>JavaScript / TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML5 & CSS3</li>
                  </ul>
                </div>

                {/* Infra & Engineering (Aquí entra tu VPS) */}
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-xl font-black mb-4 text-[#344E41]">Infra & Engineering</h3>
                  <p className="text-[#344E41]/70 mb-6 text-sm font-light">Despliegue, seguridad y arquitectura interna.</p>
                  <ul className="space-y-2 text-[#344E41] font-medium text-sm">
                    <li>Ubuntu Droplet (VPS)</li>
                    <li>Nginx & SSL Certs</li>
                    <li>UFW & Basic Security</li>
                    <li>Git / GitHub CI-CD</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* --- THE JOURNEY (Educación y Certificaciones) --- */}
        <section className="py-16 w-full px-6">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
              <h2 className="text-3xl font-black tracking-tight mb-3 text-[#344E41]">The Journey</h2>
              <p className="text-[#344E41]/70 text-sm">Mi educación y validación técnica.</p>
            </div>
            
            <div className="space-y-6">
               <TimelineItem 
                title="Systems Engineering Degree (8th Semester)" 
                entity="Universidad de San Carlos de Guatemala (USAC)" 
                date="Present" 
                icon="🎓" 
              />
              <TimelineItem 
                title="Full Stack Fundamentals & React" 
                entity="Frontend Masters" 
                date="2026" 
                icon="💻" 
              />
              <TimelineItem 
                title="SQL Associate Certification" 
                entity="DataCamp" 
                date="2025 - 2027" 
                icon="🗄️" 
              />
              <TimelineItem 
                title="AWS Academy Cloud Foundations" 
                entity="Amazon Web Services" 
                date="2025" 
                icon="☁️" 
              />
            </div>
          </div>
        </section>

        {/* --- PROYECTOS SECTION --- */}
        <section className="py-16 w-full px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black tracking-tight mb-3 text-[#344E41]">My Recent Work</h2>
              <p className="text-[#344E41]/70 text-sm">Proyectos destacados de mi trayectoria académica y personal.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* 1. SaludPlus (Dark Green) - Tiene Demo */}
              <ProjectCard 
                title="SaludPlus" 
                tech="JavaScript, Full-stack" 
                repoUrl="https://github.com/MarceJua/AYD1-Fase1S2026_SeccionB_G2" 
                demoUrl="https://saludplus360.tech"
                bgClass="bg-[#344E41]" 
                textClass="text-[#F2F2E2]" 
              />

              {/* 2. Habit Tracker API (Light Green) - Tiene Demo */}
              <ProjectCard 
                title="Habit Tracker API" 
                tech="TypeScript, Node.js, Backend" 
                repoUrl="https://github.com/MarceJua/API_Design" 
                demoUrl="https://api-design-habbit.onrender.com/health"
                bgClass="bg-[#A3B18A]" 
                textClass="text-[#344E41]" 
              />
              
              {/* 3. Golampi (Beige) */}
              <ProjectCard 
                title="Golampi" 
                tech="PHP, ANTLR4" 
                repoUrl="https://github.com/MarceJua/P1-F2-202010367" 
                bgClass="bg-[#DAD7CD]" 
                textClass="text-[#344E41]" 
              />
              
              {/* 4. DriveTest-API (Beige) */}
              <ProjectCard 
                title="DriveTest-API" 
                tech="JavaScript, Docker, Backend" 
                repoUrl="https://github.com/MarceJua/DriveTest-API" 
                bgClass="bg-[#DAD7CD]" 
                textClass="text-[#344E41]" 
              />

              {/* 5. Pizza Order App (Dark Green) */}
              <ProjectCard 
                title="Pizza Order App" 
                tech="JavaScript, Frontend" 
                repoUrl="https://github.com/MarceJua/pizza-order-app" 
                bgClass="bg-[#344E41]" 
                textClass="text-[#F2F2E2]" 
              />
              
              {/* 6. DataCenter FIUSAC (Light Green) */}
              <ProjectCard 
                title="DataCenter FIUSAC" 
                tech="Python" 
                repoUrl="https://github.com/supagc/GRUPO14-Proyecto1-DataCenterFIUSAC" 
                bgClass="bg-[#A3B18A]" 
                textClass="text-[#344E41]" 
              />

              {/* 7. EXT2 Simulator (Beige - CENTRADO) */}
              <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
                <ProjectCard 
                  title="EXT2 Simulator" 
                  tech="Go" 
                  repoUrl="https://github.com/MarceJua/EXT2_File_System_Simulator" 
                  bgClass="bg-[#DAD7CD]" 
                  textClass="text-[#344E41]" 
                />
              </div>

            </div>
          </div>
        </section>
        {/* --- BEYOND THE CODE --- */}
        <section className="py-24 w-full px-6 bg-[#344E41] text-[#F2F2E2] rounded-t-[3rem] mt-16">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl font-black tracking-tight mb-4 text-[#A3B18A]">Beyond the Code</h2>
            
            {/* COMPONENTE DE CITA DINÁMICA */}
            <DynamicQuote />

            {/* PÁRRAFO UNIFICADO Y FUN FACT */}
            <div className="bg-[#1e1e1e]/40 p-8 md:p-12 rounded-3xl border border-white/10 text-center mb-16 max-w-3xl mx-auto shadow-xl">
              <p className="text-[#F2F2E2] text-base md:text-lg font-light leading-relaxed mb-4">
                Cuando no estoy frente a la pantalla programando o estudiando, probablemente me encuentres con audífonos escuchando música, aprendiendo nuevas canciones en la guitarra, en el gimnasio o paseando con Max 🐕.
              </p>
              <p className="text-[#A3B18A] text-sm md:text-base font-bold mb-6 italic">
                (Fun fact: realmente solo voy al gym para poder conciliar el sueño :P ).
              </p>
              <p className="text-[#DAD7CD] text-sm md:text-base font-light leading-relaxed mb-8">
                Más allá de eso, trato de ser muy disciplinado. La constancia es algo que me define y busco aplicarlo en todo: desde resolver ejercicios de lógica hasta mejorar mis hábitos diarios.
              </p>
              
              <div className="w-full h-px bg-white/10 my-8"></div>
              
              <p className="text-[#A3B18A] text-xs font-bold tracking-widest uppercase animate-pulse mb-4">
                ↻ Refresca la página para descubrir otra frase y más de mi música
              </p>

              {/* COMPONENTE DE MÚSICA DINÁMICA */}
              <DynamicMusic />
              
            </div>
            
            <h3 className="text-xl font-bold mb-6">Let's connect!</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <SocialLink href="https://www.linkedin.com/in/marcelo-juarez-is/" label="LinkedIn ↗" />
              <SocialLink href="https://github.com/MarceJua" label="GitHub ↗" />
              <SocialLink href="mailto:mjuarez2017ig@gmail.com" label="Email ↗" />
              <SocialLink href="https://www.instagram.com/marc.drej" label="Instagram ↗" />
              <SocialLink href="https://www.tiktok.com/@marc.drej" label="TikTok (Covers) ↗" bg="bg-[#F2F2E2]" text="text-[#344E41]" />
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

// Componentes Auxiliares
function TimelineItem({ title, entity, date, icon }: any) {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="text-2xl mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-lg text-[#344E41]">{title}</h3>
        <p className="text-[#344E41]/80 text-sm font-medium">{entity}</p>
        <p className="text-[#A3B18A] text-xs font-bold mt-1">{date}</p>
      </div>
    </div>
  );
}

function ProjectCard({ title, tech, repoUrl, demoUrl, bgClass, textClass }: any) {
  return (
    <div className={`${bgClass} rounded-[2rem] aspect-[4/3] flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl`}>
      
      <div className="flex flex-col items-center mb-4 text-center">
        <h3 className={`${textClass} text-2xl font-black tracking-tight mb-1`}>{title}</h3>
        <p className={`${textClass} text-xs opacity-80`}>{tech}</p>
      </div>
      
      {/* Botones de acción siempre visibles (Ideales para Móvil y Desktop) */}
      <div className="flex items-center justify-center gap-3 mt-2 flex-wrap z-10">
        
        {/* Renderizado Condicional: SOLO sale si existe 'demoUrl' */}
        {demoUrl && (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#F2F2E2] text-[#344E41] px-5 py-2 rounded-full font-bold text-xs hover:scale-105 transition-transform shadow-md"
          >
            View Demo
          </a>
        )}
        
        {/* Botón de View Code: Sale en todos porque todos tienen 'repoUrl' */}
        {repoUrl && (
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`border ${textClass === 'text-[#F2F2E2]' ? 'border-[#F2F2E2]' : 'border-[#344E41]'} ${textClass} px-5 py-2 rounded-full font-bold text-xs hover:opacity-70 transition-opacity`}
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, label, bg = "bg-transparent", text = "text-[#F2F2E2]" }: any) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bg} ${text} border border-[#A3B18A] px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform`}
    >
      {label}
    </a>
  );
}

// Componente de Frase Dinámica
function DynamicQuote() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    const quotes = [
      { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant" },
      { text: "I refuse to accept other people's ideas of happiness for me.", author: "Kanye West" },
      { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
      { text: "I have nothing in common with lazy people who blame others for their lack of success.", author: "Kobe Bryant" },
      { text: "If you have the opportunity to play this game of life you need to appreciate every moment.", author: "Kanye West" },
      { text: "La disciplina es el puente entre las metas y los logros.", author: "Jim Rohn" }
    ];
    
    // Selecciona una frase al azar al cargar la página
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="mb-12 h-24 flex flex-col items-center justify-center">
      {quote.text && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="text-xl md:text-2xl font-serif italic text-[#DAD7CD]">"{quote.text}"</p>
          <p className="text-[#A3B18A] text-xs font-bold mt-4 tracking-widest uppercase">— {quote.author}</p>
        </motion.div>
      )}
    </div>
  );
}

// Componente de Música Dinámica
function DynamicMusic() {
  const [music, setMusic] = useState({ artist: "", album: "", id: "" });

  useEffect(() => {
    const albums = [
  // Alice In Chains
  { artist: "Alice In Chains", album: "MTV Unplugged", id: "5PdgIAHzwDvTZRjIGSQGtN" },
  { artist: "Alice In Chains", album: "Jar Of Flies", id: "4FCoFSNIFhK36holxHWCnc" },
  { artist: "Alice In Chains", album: "Facelift", id: "5LbHbwejgZXRZAgzVAjkhj" },

  { artist: "Ivan Cornejo", album: "MIRADA", id: "4QwYcMNFzIhUctirR6XKDM" },

  { artist: "Kanye West", album: "Graduation", id: "6Xlizz8T58l4Qhq85Lgou7" },
  { artist: "Kanye West", album: "Donda", id: "5CnpZV3q5BcESefcB3WJmz" },
  { artist: "Kanye West", album: "BULLY", id: "5poA9SAx0Xiz1cf17fWBLS" },
  { artist: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", id: "20r762YmB5HeofjMCiPMLv" },
  { artist: "Kanye West", album: "The Life of Pablo", id: "7gsWAHLeT0w7es6FofOXk1" },

  { artist: "Metro Boomin", album: "HEROES & VILLAINS", id: "7txGsnDSqVMoRl6RQ9XyZP" },
  { artist: "Future & Metro Boomin", album: "WE DON'T TRUST YOU", id: "4iqbFIdGOTzXeDtt9owjQn" },
  { artist: "Future & Metro Boomin", album: "WE STILL DON'T TRUST YOU", id: "3bSNhnaQQXpC639OQ4pMyP" },

  { artist: "Bad Bunny", album: "nadie sabe lo que va a pasar mañana", id: "4FftCsAcXXD1nFO9RFUNFO" },
  { artist: "Bad Bunny", album: "DeBÍ TiRAR MáS FOToS", id: "5K79FLRUCSysQnVESLcTdb" },
  { artist: "J Balvin & Bad Bunny", album: "OASIS", id: "6ylFfzx32ICw4L1A7YWNLN" },

  { artist: "Pantera", album: "Vulgar Display of Power", id: "7kW0cpKgSVsEqcc8xgbSb0" },
  { artist: "Pantera", album: "The Great Southern Trendkill", id: "4LdquqwQoyu1pE6Vq8PIha" },

  { artist: "Korn", album: "Korn", id: "7D3XFJlfZIkmGWqZXm2X8z" },
  { artist: "Korn", album: "Life Is Peachy", id: "2b813fSxxzp9lcOfnLrrTH" },
  { artist: "Korn", album: "Follow the Leader", id: "0gsiszk6JWYwAyGvaTTud4" },

  { artist: "Travis Scott", album: "UTOPIA", id: "18NOKLkZETa4sWwLMIm0UZ" },
  { artist: "Travis Scott", album: "ASTROWORLD", id: "41GuZcammIkupMPKH2OJ6I" },

  { artist: "Kendrick Lamar", album: "To Pimp a Butterfly", id: "7ycBtnsMtyVbbwTfJwRjSP" },
  { artist: "Kendrick Lamar", album: "Mr. Morale & The Big Steppers", id: "79ONNoS4M9tfIA1mYLBYVX" },
  { artist: "Kendrick Lamar", album: "GNX", id: "0hvT3yIEysuuvkK73vgdcW" },

  { artist: "Nirvana", album: "MTV Unplugged In New York", id: "1To7kv722A8SpZF789MZy7" },

  { artist: "Denzel Curry", album: "Melt My Eyez See Your Future", id: "7KtyUeiJidoZO0ybxBXw0Q" },

  { artist: "Junior H", album: "$AD BOYZ 4 LIFE II", id: "7Lv6VzSqIz1sAssK2JUskG" },

  { artist: "Red Hot Chili Peppers", album: "Californication", id: "0fLhefnjlIV3pGNF9Wo8CD" },
  { artist: "Red Hot Chili Peppers", album: "By the Way", id: "1jWKVgnHX8nwR551hQNx5K" },
  { artist: "Red Hot Chili Peppers", album: "Stadium Arcadium", id: "7xl50xr9NDkd3i2kBbzsNZ" },

  { artist: "Soda Stereo", album: "Comfort y Música Para Volar", id: "5RJLKN7ucuVaRAUzNKtKB8" },

  { artist: "Radiohead", album: "OK Computer", id: "6dVIqQ8qmQ5GBnJ9shOYGE" },

  { artist: "Fleetwood Mac", album: "Rumours", id: "1bt6q2SruMsBtcerNVtpZB" },

  { artist: "Black Sabbath", album: "Paranoid", id: "7LGVdC9fFwgWYaIrZwsSv6" },

  { artist: "Pink Floyd", album: "The Dark Side of the Moon", id: "4LH4d3cOWNNsVw41Gqt2kv" },

  { artist: "Metallica", album: "Metallica (The Black Album)", id: "6QdCohkHKNTVoaSx1ZzitH" },
];
    
    // Seleccionar un álbum al azar
    const randomAlbum = albums[Math.floor(Math.random() * albums.length)];
    setMusic(randomAlbum);
  }, []);

  // Prevenir renderizado hasta que el cliente tenga el ID
  if (!music.id) return <div className="h-[152px] w-full bg-[#1e1e1e]/50 rounded-xl animate-pulse mt-8"></div>;

  return (
    <div className="w-full flex flex-col items-center">
      <iframe 
        style={{ borderRadius: '12px' }} 
        src={`https://open.spotify.com/embed/album/${music.id}?utm_source=generator&theme=0`} 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    </div>
  );
}