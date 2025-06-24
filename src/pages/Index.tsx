import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, Smartphone } from "lucide-react";

const Index = () => {
  const skills = {
    frontend: ["React", "JavaScript", "HTML5", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "npm", "Webpack"]
  };

  const projects = [
    {
      title: "Tourify Listing App",
      description: "A comprehensive tour listing application built with the MERN stack, featuring user authentication, tour management, and booking capabilities.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      image: "/lovable-uploads/7067697e-fa4d-44a5-86f8-e8929c2e1e75.png",
      demo: "https://tourify-listing-app.onrender.com/",
      github: "https://github.com/Priyanshu-Mac/Tourify-booking-app.git"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Priyanshu</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Hi, I'm <span className="text-blue-600">Priyanshu</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-700 mb-6">
                Full Stack Web Developer
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                Passionate 1st-year Computer Science student at Delhi Technological University, 
                specializing in MERN stack development. I create modern, responsive web applications 
                that deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={scrollToContact}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/Priyanshu-Mac" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-lg text-slate-600">Get to know more about my journey and passion</p>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-slate-600 mb-6">
              Currently pursuing my Bachelor's degree in Computer Science at Delhi Technological University, 
              I'm deeply passionate about web development and creating innovative solutions. My journey in 
              programming began with curiosity and has evolved into a strong foundation in full-stack development.
            </p>
            <p className="text-slate-600 mb-8">
              I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy building 
              applications that solve real-world problems. I'm always eager to learn new technologies 
              and take on challenging projects that push my boundaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="font-semibold text-slate-900 text-lg">Frontend</p>
                <p className="text-slate-600">React & Modern CSS</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Server className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <p className="font-semibold text-slate-900 text-lg">Backend</p>
                <p className="text-slate-600">Node.js & Express</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600">Technologies I work with</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-green-600" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Project</h2>
            <p className="text-lg text-slate-600">My latest work</p>
          </div>
          <div className="max-w-2xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-300">Let's discuss your next project</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>priyanshu.getintouch@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+91-9318439101</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Delhi, India</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center mt-8">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-slate-900" asChild>
                  <a href="https://github.com/Priyanshu-Mac" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-slate-900" asChild>
                  <a href="https://www.linkedin.com/in/priyanshu1808/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 text-slate-300 text-center">
        <p>&copy; 2024 Priyanshu. All rights reserved. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
