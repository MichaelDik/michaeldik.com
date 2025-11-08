# Quick Start Guide

Welcome to your new website! This guide will help you get up and running quickly.

## ✅ What's Been Built

Your website now has a complete structure inspired by Eugene Yan's clean, professional design:

### Pages Created:

- **index.html** - Home page with hero section, recent posts, and about preview
- **thoughts.html** - Example blog post about Deep Work
- **writing-faq.html** - FAQ-style article about writing and learning online
- **reading.html** - Book reviews with beautiful cards for Deep Work and Singularity
- **about.html** - Professional about page with bio, interests, and contact
- **navbar.html** - Shared navigation component (auto-loads on all pages)

### Design Features:

- ✨ Clean, minimal design with professional typography
- 📱 Fully responsive (looks great on mobile, tablet, desktop)
- 🎨 Light theme with excellent readability
- 🚀 Fast loading (static HTML, no frameworks)
- 📝 Article metadata (tags, reading time)
- 📚 Book review cards with covers and ratings
- 💌 Newsletter signup sections
- 🔗 Footer with social links

## 🚀 View Your Site

### Option 1: Open Directly in Browser

Simply double-click `index.html` to open it in your browser.

### Option 2: Run a Local Server (Recommended)

This ensures all features work correctly (like the navbar loading):

**Using Python:**

```bash
cd /Users/mdik/michaeldik.com-5
python3 -m http.server 8000
```

**Using Node.js:**

```bash
cd /Users/mdik/michaeldik.com-5
npx http-server
```

Then open: `http://localhost:8000`

## 📝 Customize Your Site

### 1. Update Personal Information

Replace placeholder information with your real details:

**In all HTML files, update:**

- Email: `mwdik@comcast.net` → your email
- Twitter: `https://x.com/mikedik_` → your Twitter handle
- LinkedIn: `https://www.linkedin.com/in/michael-dik-b01512109/` → your LinkedIn URL
- GitHub: `https://github.com/MichaelDik` → your GitHub URL

**Quick find & replace:**

```bash
# Update email
find . -name "*.html" -exec sed -i '' 's/mwdik@comcast.net/YOUR_EMAIL/g' {} \;

# Update Twitter
find . -name "*.html" -exec sed -i '' 's/x.com\/mikedik_/x.com\/YOUR_HANDLE/g' {} \;
```

### 2. Update Content

**about.html:**

- Replace the bio text with your own story
- Update "What I Do" section
- Modify "Current Interests"
- Update "Outside of Work" section

**index.html:**

- Update the hero tagline
- Modify the about section
- Add/remove recent writing entries

**reading.html:**

- Update "Currently Reading" section
- Keep or remove existing book reviews
- Add your own book reviews

### 3. Change Colors (Optional)

Edit `app.css` and modify the CSS variables at the top:

```css
:root {
  --bg-primary: #ffffff; /* Main background */
  --text-primary: #222222; /* Main text color */
  --link-color: #0366d6; /* Link color */
  --accent-color: #0366d6; /* Accent color for tags, etc. */
}
```

## 📸 Update Your Profile Picture

Replace `profile.jpeg` with your own photo:

- Recommended size: 400x400px or larger
- Format: JPEG or PNG
- Keep the filename as `profile.jpeg` (or update all references)

## ✍️ Add New Content

### Add a Blog Post

1. Copy `thoughts.html` to a new file (e.g., `my-new-post.html`)
2. Update the title, metadata, and content
3. Add a link to it from `index.html` in the "Recent Writing" section

### Add a Book Review

1. Open `reading.html`
2. Copy one of the existing `.book-review` sections
3. Update the book info, rating, and review text
4. Paste it above or below existing reviews

### Create More Pages

Copy any existing HTML file as a template and modify it for your needs.

## 🌐 Deploy Your Site

### GitHub Pages (Free & Easy)

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch and click Save
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Other Options

- **Netlify**: Drag and drop your folder at netlify.com
- **Vercel**: Connect your GitHub repo at vercel.com
- **Any web host**: Upload via FTP/SFTP

## 🎯 Next Steps

1. [ ] Test the site locally (open `index.html` in browser)
2. [ ] Update all personal information (name, email, social links)
3. [ ] Replace profile picture
4. [ ] Update about.html with your bio
5. [ ] Update or remove existing blog posts
6. [ ] Update or remove book reviews
7. [ ] Customize colors if desired
8. [ ] Add your own content
9. [ ] Deploy to GitHub Pages or another host
10. [ ] Share your new site!

## 💡 Tips

- **Content is king**: Focus on writing good content, not perfecting the design
- **Start simple**: Begin with a few pages and expand over time
- **Be consistent**: Update regularly (weekly or monthly)
- **Make it yours**: Don't be afraid to customize and experiment
- **Have fun**: This is your digital home—enjoy building it!

## 🆘 Need Help?

- Check the main `README.md` for detailed documentation
- Look at the existing pages as examples
- The structure is simple HTML/CSS—easy to understand and modify
- All styles are in one file (`app.css`) for easy customization

## 📊 Site Structure

```
Home (index.html)
├── Writing (thoughts.html)
│   └── Writing FAQ (writing-faq.html)
├── Reading (reading.html)
└── About (about.html)
```

---

**You're all set! Open `index.html` in your browser to see your new site.** 🎉
