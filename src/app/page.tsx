"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Mail, ExternalLink, Code, Database, Brain, Users, Lightbulb, Target, MessageSquare } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");

  const projects = [
    {
      title: "VectorDB Visualizer",
      description: "Interactive web application to visualize AI-powered semantic search workflows",
      technologies: ["React", "TypeScript"],
      highlights: [
        "Implemented user-friendly visualizations for machine learning concepts",
        "Designed modular components for embedding generation and vector comparison",
        "Enhanced learning outcomes with step-by-step insights"
      ]
    },
    {
      title: "Airline Flight Price Analysis and Prediction",
      description: "Comprehensive analysis and prediction of airline ticket prices using machine learning",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      highlights: [
        "Analyzed 138k+ records to identify key price factors",
        "Built data preprocessing pipelines with outlier detection",
        "Achieved 0.91 R² score with SVM model"
      ]
    },
    {
      title: "DevFlow",
      description: "Collaborative code editor with real-time synchronization",
      technologies: ["TypeScript"],
      highlights: [
        "Implemented live cursors and syntax highlighting",
        "Created minimalist developer-first interface",
        "Enabled seamless pair programming workflows"
      ]
    },
    {
      title: "Student Performance Prediction",
      description: "Predictive model for analyzing and forecasting student performance",
      technologies: ["Python", "Scikit-learn"],
      highlights: [
        "Applied feature engineering and data preprocessing",
        "Implemented classification and regression algorithms",
        "Enhanced prediction accuracy through optimization"
      ]
    },
    {
      title: "E-commerce Recommendation System",
      description: "Product recommendation system based on user preferences",
      technologies: ["Python", "Pandas"],
      highlights: [
        "Utilized collaborative filtering techniques",
        "Tested with e-commerce transaction datasets",
        "Implemented data manipulation and analysis"
      ]
    }
  ];

  const technicalSkills = [
    { category: "Web Development", skills: ["TypeScript", "JavaScript", "HTML/CSS", "React"] },
    { category: "Data & Machine Learning", skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA", "Data Preprocessing", "Feature Engineering", "Classification", "Regression", "Semantic Search"] },
    { category: "Other Technologies", skills: ["C++", "GitHub", "Java", "DBMS", "Computer Networks", "SQL"] }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Target },
    { name: "Team Collaboration", icon: Users },
    { name: "Adaptability", icon: Lightbulb },
    { name: "Effective Communication", icon: MessageSquare }
  ];

  const education = [
    {
      degree: "B.E. in Information Science and Engineering",
      institution: "JSS Science and Technology University, Mysore",
      period: "2022 - 2025",
      grade: "CGPA: 6.66 (Until 7th semester)"
    },
    {
      degree: "12th / 2nd PUC",
      institution: "Gurukula PU College, Mysore",
      period: "2019 - 2022",
      grade: "Percentage: 69.17"
    },
    {
      degree: "10th / SSLC",
      institution: "VVS School, Mysore",
      period: "2019",
      grade: "Percentage: 72.80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text">Aprameya Rangashayana</h1>
            <div className="flex gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" onClick={() => setActiveTab("about")} className="text-xs sm:text-sm">About</Button>
              <Button variant="ghost" size="sm" onClick={() => setActiveTab("projects")} className="text-xs sm:text-sm">Projects</Button>
              <Button variant="ghost" size="sm" onClick={() => setActiveTab("skills")} className="text-xs sm:text-sm">Skills</Button>
              <Button variant="ghost" size="sm" onClick={() => setActiveTab("contact")} className="text-xs sm:text-sm">Contact</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-16 fade-in">
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold pulse-dot">
              AR
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Aprameya Rangashayana S
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 px-4">
              Pre Final-year B.E. Information Science and Engineering student with a strong foundation in web development, 
              machine learning, and data-driven solutions. Enthusiastic about leveraging technology to solve practical problems effectively.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg" className="text-sm sm:text-base">
                <a href="mailto:aprameya.r@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-sm sm:text-base">
                <a href="https://github.com/ashrith-sudo" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="about" className="text-xs sm:text-sm">About</TabsTrigger>
            <TabsTrigger value="projects" className="text-xs sm:text-sm">Projects</TabsTrigger>
            <TabsTrigger value="skills" className="text-xs sm:text-sm">Skills</TabsTrigger>
            <TabsTrigger value="contact" className="text-xs sm:text-sm">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8 fade-in">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  About Me
                </CardTitle>
                <CardDescription>
                  Learn more about my background and education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  I am a passionate and dedicated student pursuing my B.E. in Information Science and Engineering. 
                  With a strong interest in technology and innovation, I have been actively working on projects that 
                  combine web development, machine learning, and data analysis to create meaningful solutions.
                </p>
                
                <h3 className="text-lg font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{edu.degree}</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">{edu.institution}</p>
                      <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mt-1">
                        <span>{edu.period}</span>
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index} className="card-hover fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg sm:text-xl">{project.title}</span>
                      <ExternalLink className="w-4 h-4 text-slate-500" />
                    </CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 pulse-dot"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="card-hover fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Technical Skills
                  </CardTitle>
                  <CardDescription>
                    Technologies and tools I work with
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {technicalSkills.map((category, index) => (
                      <div key={index} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <h4 className="font-semibold mb-2 text-slate-900 dark:text-white text-sm sm:text-base">{category.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Soft Skills
                  </CardTitle>
                  <CardDescription>
                    Personal attributes and strengths
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {softSkills.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          <Icon className="w-5 h-5 text-blue-500" />
                          <span className="font-medium text-slate-900 dark:text-white text-sm">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <Card className="card-hover fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Feel free to reach out for collaborations or opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors slide-in" style={{ animationDelay: "0.1s" }}>
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white text-sm">Email</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm break-all">aprameya.r@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors slide-in" style={{ animationDelay: "0.2s" }}>
                      <Github className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white text-sm">GitHub</p>
                        <p className="text-slate-600 dark:text-slate-300 text-sm break-all">github.com/ashrith-sudo</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors slide-in" style={{ animationDelay: "0.3s" }}>
                    <span className="w-5 h-5 text-blue-500">📱</span>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Phone</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">+91 84314 18201</p>
                    </div>
                  </div>

                  <div className="text-center slide-in" style={{ animationDelay: "0.4s" }}>
                    <Button asChild size="lg" className="text-sm sm:text-base">
                      <a href="mailto:aprameya.r@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send me an email
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            © 2024 Aprameya Rangashayana S. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
