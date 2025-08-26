# Namit Kharade - Portfolio Website

A modern, responsive portfolio website showcasing my experience as an AI Engineer and Data Scientist. Built with Vue.js 3, Vite, and Tailwind CSS with a focus on performance, accessibility, and user experience.

![Portfolio Preview](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🌟 Features

### Core Features
- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Dynamic theme switching with system preference detection
- **Smooth Animations**: Page transitions and hover effects for enhanced UX
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

### Sections
- **Home**: Interactive introduction with animated profile image and skill showcase
- **Resume**: Comprehensive professional experience with timeline layout
- **Projects**: Showcase of personal and professional projects
- **Contact**: Direct contact information with social media links

### Technical Features
- **Vue 3 Composition API**: Modern Vue.js development patterns
- **TypeScript Support**: Type-safe development environment
- **FontAwesome Integration**: Professional icon library
- **SEO Optimized**: Meta tags and proper semantic HTML structure
- **Progressive Web App Ready**: Optimized for web app installation

## 🚀 Tech Stack

- **Frontend Framework**: Vue.js 3
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 3.x
- **Icons**: FontAwesome 6.x
- **Deployment**: GitHub Pages
- **Package Manager**: npm
- **Node.js**: v20.19.0+ (required for Vite 7.x)

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js**: Version 20.19.0 or higher (required for Vite 7.x)
- **npm**: Version 10.x or higher
- **Git**: For cloning the repository

### Node.js Version Management

If you need to install the correct Node.js version, you can use Node Version Manager (nvm):

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install and use Node.js 20.19.0
nvm install 20.19.0
nvm use 20.19.0
```

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/namitkharade/namitkharade.github.io.git
cd namitkharade.github.io
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### 4. Build for Production

Create an optimized production build:

```bash
npm run build
```

### 5. Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
namitkharade.github.io/
├── public/                 # Static assets
│   └── favicon/           # Favicon files
├── src/
│   ├── assets/            # Images and static files
│   │   └── imgs/         # Profile images and company logos
│   ├── components/        # Reusable Vue components
│   │   ├── CardHeader.vue # Navigation header
│   │   ├── CardFooter.vue # Footer with social links
│   │   ├── Loader.vue     # Loading component
│   │   └── ModeToggler.vue # Dark mode toggle
│   ├── router/            # Vue Router configuration
│   │   └── index.js
│   ├── views/             # Page components
│   │   ├── HomeView.vue   # Landing page
│   │   ├── ResumeView.vue # Professional experience
│   │   ├── ProjectView.vue # Projects showcase
│   │   └── ContactView.vue # Contact information
│   ├── App.vue            # Root component
│   ├── main.js            # Application entry point
│   └── style.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Color Scheme
The website uses a modern blue and purple gradient theme. You can customize colors in:
- `tailwind.config.js` - Tailwind CSS configuration
- `src/style.css` - Global CSS variables
- Individual Vue components - Component-specific styling

### Content Updates
- **Personal Information**: Update in `src/views/HomeView.vue` and `src/views/ResumeView.vue`
- **Projects**: Modify `src/views/ProjectView.vue`
- **Contact Details**: Update `src/views/ContactView.vue` and `src/components/CardFooter.vue`
- **Images**: Replace files in `src/assets/imgs/`

### Adding New Sections
1. Create a new Vue component in `src/views/`
2. Add the route in `src/router/index.js`
3. Update navigation in `src/components/CardHeader.vue`

## 🚀 Deployment

### GitHub Pages (Automatic)
The site is automatically deployed to GitHub Pages when you push to the main branch.

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Custom Domain
To use a custom domain:
1. Add a `CNAME` file in the `public` directory with your domain
2. Configure DNS settings with your domain provider


## 🐛 Troubleshooting

### Common Issues

**Vite Error: Node.js version incompatibility**
- Solution: Upgrade to Node.js 20.19.0+ using nvm

**Build Errors**
- Clear node_modules: `rm -rf node_modules package-lock.json && npm install`
- Check for syntax errors in Vue components

**Dark Mode Not Working**
- Ensure Tailwind CSS is properly configured for dark mode
- Check localStorage theme persistence

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Namit Bhalendra Kharade**
- Email: namit.b.kharade@gmail.com
- LinkedIn: [linkedin.com/in/namit-k](https://www.linkedin.com/in/namit-k/)
- GitHub: [github.com/namitkharade](https://github.com/namitkharade)
- Portfolio: [namitkharade.github.io](https://namitkharade.github.io/)

---

*Built with ❤️ using Vue.js and Tailwind CSS*
