# 🚀 Modern Portfolio Website

A fully responsive, modern portfolio website built with React, Vite, and TailwindCSS. Features dark/light mode, smooth animations, dynamic project filtering, and live GitHub statistics.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with mobile-first responsive design
- **👤 About Section**: Comprehensive about section with stats and features
- **🎯 Dynamic Project Filtering**: Filter projects by technology tags (MERN, React, Python, etc.)
- **✨ Scroll Animations**: Smooth fade-in and slide-in animations using Framer Motion
- **📊 Live GitHub Stats**: Real-time GitHub statistics via API integration
- **🛠️ Interactive Skills**: Hover effects reveal experience details
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Markdown**: React Markdown + Remark GFM

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Project Structure

```
portfolio-react/
├── public/
│   └── images/          # All images and assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   ├── GitHubStats.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx
│   ├── data/            # Data files
│   │   └── projects.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.js` to add your projects:

```javascript
{
  id: 1,
  title: "Your Project",
  description: "Project description",
  image: "/images/project.jpg",
  tags: ["React", "Node.js"],
  github: "https://github.com/username/repo",
  demo: "https://demo-link.com",
  featured: true,
}
```

### Updating Personal Info

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Contact Info**: Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`
- **GitHub Username**: Update in `src/components/GitHubStats.jsx`
- **Social Links**: Update in `src/components/Hero.jsx` and `src/components/Footer.jsx`

### Theme Colors

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Your brand color
  },
}
```

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Aman Yadav**
- GitHub: [@amanydv777](https://github.com/amanydv777)
- LinkedIn: [Aman Yadav](https://www.linkedin.com/in/aman-yadav-a01367283/)

---

Made with ❤️ by Aman Yadav
