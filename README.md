# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features dark/light mode toggle and smooth animations.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js 15 for optimal performance
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- 🔧 **TypeScript**: Full TypeScript support for better development experience

## Sections

1. **Hero Section**: Animated introduction with rotating text and call-to-action buttons
2. **Skills Section**: Interactive skill cards with progress bars and hover effects
3. **Experience Section**: Timeline layout for work experience and education
4. **Contact Section**: Contact form with validation and contact information
5. **Header**: Navigation with theme toggle and mobile menu
6. **Footer**: Social links and additional information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the rotating text array with your roles
   - Modify the description text
   - Update social media links

2. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove skills from the `skills` array
   - Update skill levels (0-100)
   - Change skill icons and colors
   - Modify skill categories

3. **Experience Section** (`src/components/Experience.tsx`):
   - Update work experience in the `workExperience` array
   - Modify education information
   - Add your achievements and technologies used

4. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Modify social media links
   - Customize the contact form

5. **Header & Footer** (`src/components/Header.tsx`, `src/components/Footer.tsx`):
   - Update your name
   - Modify navigation links if needed
   - Update social media links

6. **Layout** (`src/app/layout.tsx`):
   - Update metadata (title, description, keywords)
   - Change author information

### Styling

The portfolio uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the color scheme in the components
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Animations**: Adjust animation durations and effects
- **Layout**: Modify spacing and layout in the components

### Theme Customization

The dark/light mode is implemented using CSS classes. You can customize the theme colors by modifying the `dark:` prefixed classes in the components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: State management and side effects
- **CSS Animations**: Smooth transitions and animations

## File Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   └── ThemeContext.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me.

---

Built with ❤️ using Next.js & Tailwind CSS
