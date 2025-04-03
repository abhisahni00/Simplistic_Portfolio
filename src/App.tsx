import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Brain, Database, Code, BookOpen } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Exploratory Data Analysis on BlinkIt Sales Dataset",
      description: "Performed EDA on 4,568 BlinkIt sales data to uncover patterns in product performance and identify key drivers influencing sales. Leveraged Python (Pandas) for dataset cleaning and preparation, along with Matplotlib and Seaborn for analysis.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab"],
      github: "https://github.com/abhisahni00/EDA-on-Blinkit-Sales",
      demo: "https://github.com/abhisahni00/EDA-on-Blinkit-Sales"
    },
    {
      title: "Wine Quality Analysis Using Machine Learning",
      description: "Conducted comprehensive wine quality analysis using Random Forest algorithm, achieving 93% accuracy in predicting wine quality based on chemical and sensory attributes. Performed data preprocessing and feature selection.",
      tech: ["Python", "Scikit-learn", "Random Forest", "Google Colab"],
      github: "https://github.com/abhisahni00/Wine-Prediction",
      demo: "https://github.com/abhisahni00/Wine-Prediction"
    }
  ];

  const skills = [
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"] },
    { category: "Data Science", items: ["Python", "R", "Pandas", "NumPy", "SQL"] },
    { category: "Web Development", items: ["React", "Node.js", "TypeScript", "FastAPI"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Linux"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">AS.</span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Abhishek Sahni</span>
              </h1>
              <p className="text-xl text-gray-400 mb-6">
                Computer Science student specializing in AI, ML, and Data Science
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors">
                  Get in touch
                </a>
                <a href="#projects" className="border border-gray-700 hover:border-blue-400 px-6 py-3 rounded-lg transition-colors">
                  View projects
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/Sahni.jpg"
                alt="Abhishek Sahni"
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student with a focus on Artificial Intelligence, Machine Learning, and Data Science. 
                My journey in tech has been driven by a fascination with how AI can solve real-world problems and transform industries.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Currently pursuing my degree, I've worked on various projects involving deep learning, computer vision, and data analysis. 
                I'm particularly interested in the intersection of AI with healthcare and sustainable technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Brain className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-2">AI Enthusiast</h3>
                <p className="text-gray-400 text-sm">Passionate about neural networks and deep learning</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Database className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-2">Data Scientist</h3>
                <p className="text-gray-400 text-sm">Experienced in data analysis and visualization</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <Code className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-2">Developer</h3>
                <p className="text-gray-400 text-sm">Full-stack development with modern technologies</p>
              </div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <BookOpen className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-2">Researcher</h3>
                <p className="text-gray-400 text-sm">Active in ML research and paper publications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a href="mailto:abhisheksahni011@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                  abhisheksahni011@gmail.com
                </a>
                <a href="https://github.com/abhisahni00" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                  GitHub
                </a>
                <a href="http://www.linkedin.com/in/abhishek-sahni" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 Abhishek Sahni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;