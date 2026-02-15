# Personal Portfolio Website - Data Science

A clean, modern, and responsive personal portfolio website for showcasing your data science projects, skills, and professional profile.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Easy to Customize**: Simple HTML/CSS structure with clear sections
- **GitHub Pages Ready**: Optimized for GitHub Pages hosting
- **Sections Included**:
  - Home (Hero section with introduction)
  - About (Professional background)
  - Projects (Showcase of data science projects)
  - Skills (Technical skills organized by category)
  - Resume (Downloadable PDF link)
  - Contact (Email, GitHub, LinkedIn links)

## 🚀 Getting Started

### View Your Website

Once published to GitHub Pages, your website will be available at:
`https://jayChao2431.github.io`

### Local Development

To test the website locally:

1. Clone this repository
2. Open a terminal in the project directory
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and navigate to `http://localhost:8000`

## ✏️ Customization Guide

### 1. Personal Information

Edit `index.html` and replace the following placeholders:

- **Your Name**: Replace "Your Name" throughout the file
- **Email**: Change `your.email@example.com` to your actual email
- **LinkedIn**: Update the LinkedIn URL to your profile
- **GitHub**: The GitHub link is already set to `jayChao2431`

### 2. Resume PDF

Replace the `resume.pdf` file with your actual resume:
1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Replace the existing placeholder file

### 3. Projects

In the Projects section, customize each project card:
- Update project titles
- Modify descriptions
- Change technology tags
- Add links to your actual projects (replace `#` with project URLs)

### 4. Skills

Update the skills listed in each category to match your expertise:
- Programming Languages
- Machine Learning
- Data Analysis
- Databases & Tools
- Visualization
- Cloud & Big Data

### 5. About Section

Rewrite the About section to reflect your personal background, education, and career goals.

### 6. Colors and Styling

To change the color scheme, edit `styles.css`:
- Find the `:root` section at the top
- Modify CSS variables like `--primary-color`, `--secondary-color`, etc.

### 7. Add Your Photo (Optional)

To add a profile picture:
1. Add your image to the `assets/images/` folder
2. In `index.html`, add an `<img>` tag in the About section

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript for interactivity
├── resume.pdf          # Your resume (replace this)
├── assets/
│   └── images/        # Place images here
└── README.md          # This file
```

## 🎨 Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- No external dependencies or frameworks

## 📱 Mobile Responsive

The website includes:
- Mobile-friendly navigation menu
- Responsive grid layouts
- Optimized font sizes for different screen sizes
- Touch-friendly buttons and links

## 🔧 Customization Tips

1. **Keep it updated**: Regularly update your projects and skills
2. **Add analytics**: Consider adding Google Analytics to track visitors
3. **SEO**: Update meta tags in the `<head>` section for better SEO
4. **Images**: Add project screenshots to make your portfolio more engaging
5. **Links**: Make sure all project links point to actual repositories or demos

## 📝 License

Feel free to use this template for your personal portfolio website.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

---

**Need help?** Check the HTML comments in the code for additional guidance.