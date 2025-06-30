import React, { useState, useEffect } from 'react';
import { 
  Code, 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Zap,
  Monitor,
  Database,
  Cpu,
  Wifi,
  Award,
  Calendar,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// PERSONAL DATA - CUSTOMIZE THIS SECTION WITH YOUR INFORMATION
const PERSONAL_DATA = {
  // Basic Information
  name: "Vimala Illgunoori",
  title: "BTech Computer Science Engineering",
  subtitle: "Full Stack Developer & Software Engineer",
  location: "Machilipatnam,Andhra Pradesh, India",
  
  // Contact Information
  email:"vimala20030@gmail.com",
  phone: "+91 9502809139",
  
  // Social Links
  github: "https://github.com/vimala2309",
  linkedin: "https://www.linkedin.com/in/vimalaillgunoori2309/",
  resume: "/vimala.pdf", // Add your resume link here
  
  // About Section
  aboutText: [
    "I am a passionate and dedicated BTech Computer Science Engineering student, currently in my final year at Seshadri Rao Gudlavalleru Engineering College. With a strong foundation in core computing principles and hands-on experience in full stack development, I thrive on building robust, scalable, and user-friendly applications. My academic journey has not only honed my technical skills but also nurtured my analytical thinking and problem-solving abilities."
  ],
  
  // Quick Facts
  quickFacts: {
    projectsCompleted: "2",
    technologiesLearned: "5+",
    // yearsOfExperience: "3+",
    // openSourceContributions: "50+"
  },
  
  // Education
  education: {
    degree: "BTech Computer Science Engineering",
    university: "Seshadri Rao Gudlavalleru Engineering College",
    duration: "2022 - 2026",
    cgpa: "9.08/10",
    status: "Final Year Student",
    coursework: "Data Structures, Algorithms, Database Systems, Software Engineering, Machine Learning, Web Development",
    
    highSchool: {
      school: "BGHZP HIGH SCHOOL",
      year: "2020",
      percentage: "95%",
      stream: "Science Stream (PCM)"
    }
  },
  
  // Certifications
  certifications: [
    "AWS Certified Developer Associate",
    //"Google Cloud Professional Developer", 
    "MongoDB Certified Developer",
    //"Meta React Developer Certificate"
  ]
};

// SKILLS DATA - CUSTOMIZE YOUR SKILLS AND PROFICIENCY LEVELS
const SKILLS_DATA = [
  {
    icon: Code,
    title: "Frontend Development",
    level: 90,
    description: "React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3"
  },
  {
    icon: Database,
    title: "Backend Development", 
    level: 85,
    description: "Node.js, Express, Python, Django, REST APIs, GraphQL"
  },
  {
    icon: Database,
    title: "Database Management",
    level: 80,
    description: "MongoDB, PostgreSQL, MySQL, Firebase, Supabase"
  },
  {
    icon: Cpu,
    title: "Programming Languages",
    level: 88,
    description: "JavaScript, Python, Java, C++, TypeScript"
  },
  {
    icon: Wifi,
    title: "Cloud & DevOps",
    level: 75,
    description: "AWS, Docker, Kubernetes, CI/CD, Git, Linux"
  },
  {
    icon: Monitor,
    title: "Mobile Development",
    level: 70,
    description: "React Native, Flutter, Android Development"
  }
];
// PROJECTS DATA - ADD YOUR ACTUAL PROJECTS HERE
const PROJECTS_DATA = [
  {
    title: "Phishing Url Detection",
    description: "Phishing URLs are malicious web addresses designed to trick users into revealing sensitive information, such as login credentials or financial information. Detecting phishing URLs is crucial to prevent cyber attacks.",
    tech: ['Python', 'Node.js', 'ML'],
    demo: "https://drive.google.com/file/d/10HoonkaFsQvItjkaWcguRqTinftMZnl2/view?usp=sharing",
    github: "https://github.com/Vimala2309/Phishing-Url-Detection"
  },
  {
    title: "ShopEZ:One-Stop Shop for Online Purchases", 
    description: "An e-commerce website is an online platform that allows businesses to sell products or services to customers over the internet.",
    tech: ['Node.js', 'React.js', 'MongoDB', 'Express.js'],
    demo: "https://drive.google.com/file/d/11O3LLKHdPyNrHFao4uFqVSvt2nLooegM/view?usp=sharing",
    github: "https://github.com/Vimala2309/e-commerce"
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const LightningButton = ({ children, onClick, variant = 'primary', className = '' }) => {
    return (
      <button
        onClick={onClick}
        className={`
          relative group overflow-hidden px-8 py-3 rounded-lg font-semibold transition-all duration-300
          ${variant === 'primary' 
            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white' 
            : 'bg-gray-800 text-emerald-400 border border-emerald-600'
          }
          hover:scale-105 transform hover:shadow-2xl hover:shadow-emerald-500/25
          ${className}
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Lightning effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-300 to-transparent transform skew-x-12 animate-pulse delay-150"></div>
        </div>
      </button>
    );
  };

  const SkillCard = ({ icon: Icon, title, level, description }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-600/50 transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-emerald-600/20 rounded-lg group-hover:bg-emerald-600/30 transition-colors">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex items-center mt-1">
            <div className="flex-1 bg-gray-700 rounded-full h-2 mr-2">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${level}%` }}
              ></div>
            </div>
            <span className="text-emerald-400 text-sm font-medium">{level}%</span>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );

  const ProjectCard = ({ title, description, tech, demo, github }) => (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-600/50 transition-all duration-300 group">
      <div className="h-48 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 flex items-center justify-center">
        <Monitor className="w-16 h-16 text-emerald-400/50" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, index) => (
            <span key={index} className="px-3 py-1 bg-emerald-600/20 text-emerald-400 text-xs rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <LightningButton variant="secondary" onClick={() => window.open(demo, '_blank')}>
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </LightningButton>
          <LightningButton variant="secondary" onClick={() => window.open(github, '_blank')}>
            <Github className="w-4 h-4" />
            Code
          </LightningButton>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-emerald-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)] animate-pulse"></div>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="w-8 h-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {PERSONAL_DATA.name}
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                      activeSection === item 
                        ? 'text-emerald-400 bg-emerald-400/10' 
                        : 'text-gray-300 hover:text-emerald-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 p-1">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg">
                <img src="/myportfolio/mine.jpg" className="w-full h-full object-cover"/>
              </div>
              </div>
            {/* <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-30 animate-pulse"></div> */}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {PERSONAL_DATA.name}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-4">{PERSONAL_DATA.title}</p>
          <p className="text-lg text-emerald-400 mb-8">{PERSONAL_DATA.subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LightningButton onClick={() => scrollToSection('projects')}>
              <Briefcase className="w-5 h-5" />
              View My Work
            </LightningButton>
            <LightningButton variant="secondary" onClick={() => scrollToSection('contact')}>
              <Mail className="w-5 h-5" />
              Get In Touch
            </LightningButton>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
          <a href={PERSONAL_DATA.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
  <Github className="w-6 h-6" />
  </a>
          <a href={PERSONAL_DATA.linkedin} target="_blank" rel="noopener noreferrer"className="text-gray-400 hover:text-emerald-400 transition-colors">
  <Linkedin className="w-6 h-6" />
</a>
 <a href={`mailto:${PERSONAL_DATA.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {PERSONAL_DATA.aboutText.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">{PERSONAL_DATA.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">{PERSONAL_DATA.education.status}</span>
                </div>
              </div>
                 <a href="/myportfolio/vimala.pdf" download className="inline-block">
                   <LightningButton>
                   <Download className="w-5 h-5" />
                      Download Resume
                  </LightningButton>
               </a>

            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-emerald-400 mr-2" />
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="text-emerald-400 font-semibold">{PERSONAL_DATA.quickFacts.projectsCompleted}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Technologies Learned</span>
                  <span className="text-emerald-400 font-semibold">{PERSONAL_DATA.quickFacts.technologiesLearned}</span>
                </div>
                {/* <div className="flex justify-between items-center">
                  <span className="text-gray-400">Years of Experience</span>
                  <span className="text-emerald-400 font-semibold">{PERSONAL_DATA.quickFacts.yearsOfExperience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Open Source Contributions</span>
                  <span className="text-emerald-400 font-semibold">{PERSONAL_DATA.quickFacts.openSourceContributions}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                level={skill.level}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                demo={project.demo}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </section>

    {/* Experience Section
      <section id="experience" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Briefcase className="w-6 h-6 text-emerald-400 mr-2" />
                Experience
              </h3>
              <div className="space-y-6">
                {EXPERIENCE_DATA.map((exp, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-emerald-400">{exp.title}</h4>
                    <p className="text-gray-400 mb-2">{exp.company} • {exp.duration}</p>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Award className="w-6 h-6 text-emerald-400 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-emerald-400">{PERSONAL_DATA.education.degree}</h4>
                  <p className="text-gray-400 mb-2">{PERSONAL_DATA.education.university} • {PERSONAL_DATA.education.duration}</p>
                  <p className="text-gray-300 text-sm">
                    CGPA: {PERSONAL_DATA.education.cgpa} • {PERSONAL_DATA.education.status}
                    <br />
                    Relevant Coursework: {PERSONAL_DATA.education.coursework}
                  </p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-emerald-400">Higher Secondary (12th)</h4>
                  <p className="text-gray-400 mb-2">{PERSONAL_DATA.education.highSchool.school} • {PERSONAL_DATA.education.highSchool.year}</p>
                  <p className="text-gray-300 text-sm">
                    Percentage: {PERSONAL_DATA.education.highSchool.percentage} • {PERSONAL_DATA.education.highSchool.stream}
                    <br />
                    Specialized in Physics, Chemistry, Mathematics with Computer Science
                  </p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-emerald-400">Certifications</h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    {PERSONAL_DATA.certifications.map((cert, index) => (
                      <div key={index}>• {cert}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect!</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborations, or just chat about technology. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-600/20 rounded-lg">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">{PERSONAL_DATA.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-600/20 rounded-lg">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">{PERSONAL_DATA.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-600/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">{PERSONAL_DATA.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                <LightningButton className="w-full justify-center">
                  <Mail className="w-5 h-5" />
                  Send Message
                </LightningButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
          <a href={PERSONAL_DATA.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
  <Github className="w-6 h-6" />
</a>
<a href={PERSONAL_DATA.linkedin} target="_blank" rel="noopener noreferrer"className="text-gray-400 hover:text-emerald-400 transition-colors">
  <Linkedin className="w-6 h-6" />
</a>

            <a href={`mailto:${PERSONAL_DATA.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 {PERSONAL_DATA.name}. 
            {/* <span className="text-emerald-400"> Made with ❤️ in India</span> */}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
