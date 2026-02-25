import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-extrabold text-2xl tracking-tighter text-blue-600">
            OJ.
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-32 md:py-48 flex flex-col items-start text-left">
          <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900">
            Omkar Shrikant Jore.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
            I build scalable web applications.
          </h2>
          <p className="max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
            I'm a Full Stack Java Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using Java, React, and Next.js.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/Omkar-Jore-CV.pdf" 
              download 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all focus:ring-4 focus:ring-blue-200"
            >
              Download CV
            </a>
            <a 
              href="mailto:jore.omkar@outlook.com" 
              className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="mt-12 flex space-x-6 text-slate-500 font-medium">
            <a href="https://linkedin.com/in/omkar-jore-981a2b334" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="https://github.com/Omkar5848" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
            <span className="text-slate-300">|</span>
            <span>Pune, Maharashtra</span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-24 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>
            <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
              <p>
                As a Full Stack Java Developer, I have hands-on experience building secure and scalable web applications. My technical journey has given me a strong foundation in Core Java, OOP, SQL, and RESTful API development, paired with modern frontend frameworks like React and Next.js.
              </p>
              <p>
                I thrive in environments where I can develop end-to-end features, implement robust authentication and authorization systems, and design responsive UI components. Whether in a fast-paced startup or adhering to MNC standards, my focus remains on clean architecture, performance optimization, and writing maintainable code.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Technical Arsenal</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Languages', skills: 'Java (Primary), JavaScript, TypeScript, SQL, Python, C/C++/C#' },
              { title: 'Java Tech', skills: 'Core Java, JDBC, Servlets, JSP, Collections, Multithreading' },
              { title: 'Frontend', skills: 'React.js, Next.js, HTML5, CSS3, Tailwind CSS' },
              { title: 'Backend & DB', skills: 'Node.js, REST APIs, PostgreSQL, MongoDB, SQLite' },
            ].map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-default">
                <h3 className="font-bold text-lg text-slate-900 mb-3">{category.title}</h3>
                <p className="text-slate-600 leading-relaxed">{category.skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-slate-100 py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Where I've Worked</h2>
              <div className="h-px bg-slate-300 flex-grow"></div>
            </div>
            
            <div className="space-y-12">
              {/* Job 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="mb-4 md:mb-0 md:col-span-1 text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Aug 2025 - Present
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-slate-900">Full Stack Developer (Intern)</h3>
                    <p className="text-blue-600 font-medium mb-4">Zplus Cyber Secure Technologies Pvt Ltd</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-3 leading-relaxed">
                      <li>Building secure web applications using React.js, Next.js, Node.js, Java, PostgreSQL, and TypeScript.</li>
                      <li>Developed modular UI components, integrated RESTful APIs, and implemented JWT-based authentication with RBAC.</li>
                      <li>Contributing to secure data validation, performance optimization, and CI/CD-driven deployments.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="mb-4 md:mb-0 md:col-span-1 text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Oct 2022 - Aug 2023
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-slate-900">Full Stack Developer (Intern)</h3>
                    <p className="text-blue-600 font-medium mb-4">Technobrilliant Learning Solutions</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-3 leading-relaxed">
                      <li>Leveraged Core Java, OOP, Multithreading, Hibernate, and Spring Boot to build scalable web apps.</li>
                      <li>Developed RESTful APIs, implemented secure authentication, and optimized database queries.</li>
                      <li>Collaborated in an agile environment using Git to deliver stable, production-ready features.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Project 1 */}
            <div className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">Live Project</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Jeevak - Hospital Management System</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A full-stack system built for secure hospital workflow management. Features responsive UI with TSX, React Hooks, and Tailwind CSS, backed by RESTful APIs with role-based authentication.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                <span className="px-2 py-1 bg-slate-100 rounded">Next.js</span>
                <span className="px-2 py-1 bg-slate-100 rounded">Node.js</span>
                <span className="px-2 py-1 bg-slate-100 rounded">PostgreSQL</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Emotion Detection System</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Real-time voice-based emotion detection system utilizing Python. Trained CNN and KNN models for performance comparison, alongside a Java-based version for architectural evaluation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                <span className="px-2 py-1 bg-slate-100 rounded">Python</span>
                <span className="px-2 py-1 bg-slate-100 rounded">Java</span>
                <span className="px-2 py-1 bg-slate-100 rounded">CNN/KNN</span>
              </div>
            </div>
          </div>

          <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">Other Notable Projects</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-600">
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">Student Management System</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">Banking System</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">Senior Citizen Care System</span>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="bg-slate-900 py-24 text-slate-300">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="h-px bg-slate-700 flex-grow"></div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-2">Bachelor of Engineering</h3>
                <p className="text-blue-400 font-medium mb-2">Computer Engineering</p>
                <p className="mb-4">RMD Sinhgad Technical Institute Campus, Pune</p>
                <div className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs font-mono text-slate-400">
                  2021 - 2025
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Certifications</h2>
                <div className="h-px bg-slate-700 flex-grow"></div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-2">Full Stack Java Developer</h3>
                <p className="text-blue-400 font-medium mb-4">Technobrilliant Learning Solutions</p>
                <div className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs font-mono text-slate-400">
                  Completed
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center border-t border-slate-800">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Omkar Shrikant Jore. Built with Next.js & Tailwind.
        </p>
      </footer>
    </div>
  );
}