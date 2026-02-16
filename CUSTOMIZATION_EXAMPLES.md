# Customization Examples

Quick templates for different developer roles. Copy and paste into `src/data/portfolioData.js`.

## 🎨 Frontend Developer

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "Frontend Developer",
  bio: "Crafting beautiful, responsive user interfaces with modern web technologies. Passionate about creating seamless user experiences.",
  
  skills: {
    frontend: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"],
    backend: ["Node.js", "REST APIs", "GraphQL"],
    tools: ["Git", "Figma", "Webpack", "Vite", "Jest", "Storybook"],
  },
};
```

## ⚙️ Full Stack Developer

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "Full Stack Developer",
  bio: "Building end-to-end web applications with modern technologies. From database design to pixel-perfect UIs.",
  
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes", "Nginx"],
  },
};
```

## 📱 React Native Developer

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "React Native Developer",
  bio: "Creating cross-platform mobile applications that deliver native performance and beautiful user experiences.",
  
  skills: {
    frontend: ["React Native", "React", "TypeScript", "Redux", "Expo"],
    backend: ["Node.js", "Firebase", "REST APIs", "GraphQL"],
    tools: ["Xcode", "Android Studio", "Git", "Fastlane", "TestFlight"],
  },
};
```

## 🎓 Computer Science Student

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "CS Student & Aspiring Developer",
  bio: "Computer Science student passionate about software development and problem-solving. Always learning and building new projects.",
  
  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    backend: ["Python", "Java", "C++", "SQL", "Node.js"],
    tools: ["Git", "VS Code", "Linux", "Docker"],
  },
  
  experience: [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Tech Company",
      duration: "Summer 2025",
      achievements: [
        "Developed features for web application",
        "Collaborated with senior developers",
        "Participated in code reviews",
      ],
    },
    {
      id: 2,
      title: "Computer Science Student",
      company: "University Name",
      duration: "2022 - Present",
      achievements: [
        "GPA: 3.8/4.0",
        "Relevant coursework: Data Structures, Algorithms, Web Development",
        "Member of Computer Science Club",
      ],
    },
  ],
};
```

## 🔧 Backend Developer

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "Backend Developer",
  bio: "Designing and building scalable server-side applications and APIs. Focused on performance, security, and reliability.",
  
  skills: {
    frontend: ["React", "HTML5", "CSS3"],
    backend: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Microservices", "REST APIs", "GraphQL"],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "Jenkins", "Terraform"],
  },
};
```

## 🎨 UI/UX Developer

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "UI/UX Developer",
  bio: "Bridging design and development to create beautiful, intuitive user interfaces. Passionate about accessibility and user experience.",
  
  skills: {
    frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "SASS", "Framer Motion", "GSAP"],
    backend: ["Node.js", "REST APIs"],
    tools: ["Figma", "Adobe XD", "Sketch", "Git", "Storybook", "Chromatic"],
  },
};
```

## 🚀 DevOps Engineer

```javascript
export const portfolioData = {
  name: "Your Name",
  role: "DevOps Engineer",
  bio: "Automating infrastructure and streamlining deployment pipelines. Building reliable, scalable systems.",
  
  skills: {
    frontend: ["React", "JavaScript"],
    backend: ["Python", "Bash", "Go", "Node.js", "Linux"],
    tools: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "GitLab CI", "Ansible", "Prometheus", "Grafana"],
  },
};
```

## 🎯 Project Examples by Type

### E-Commerce Project
```javascript
{
  id: 1,
  title: "E-Commerce Platform",
  description: "Full-featured online store with cart, checkout, payment integration, and admin dashboard.",
  image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
  tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com",
}
```

### Social Media App
```javascript
{
  id: 2,
  title: "Social Connect",
  description: "Social media platform with real-time messaging, posts, likes, and user profiles.",
  image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  tech: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com",
}
```

### Dashboard/Analytics
```javascript
{
  id: 3,
  title: "Analytics Dashboard",
  description: "Real-time analytics dashboard with charts, graphs, and data visualization.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com",
}
```

### Mobile App
```javascript
{
  id: 4,
  title: "Fitness Tracker",
  description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals.",
  image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
  tech: ["React Native", "Expo", "Firebase", "Redux"],
  github: "https://github.com/yourusername/project",
  demo: "https://apps.apple.com/app/yourapp",
}
```

## 🎨 Color Scheme Variations

### Blue & Purple (Default)
```css
.text-gradient {
  @apply bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent;
}
```

### Green & Teal
```css
.text-gradient {
  @apply bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent;
}
```

### Orange & Red
```css
.text-gradient {
  @apply bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent;
}
```

### Purple & Pink
```css
.text-gradient {
  @apply bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent;
}
```

---

Mix and match these examples to create your perfect portfolio!
