# Michael Dik's Personal Website



## 📁 Structure

```
michaeldik.com/
├── index.html          # Home page with recent writing and intro
├── thoughts.html       # Blog post/article page (example: Deep Work)
├── writing-faq.html    # FAQ-style article (example structure)
├── reading.html        # Book reviews and reading list
├── about.html          # About page with bio and contact info
├── navbar.html         # Shared navigation component
├── app.css            # All styles in one file
├── profile.jpeg       # Profile picture
└── README.md          # This file
```

## 🚀 Key Features

### Navigation
- Sticky header that stays visible while scrolling
- Clean, minimal design with active page highlighting
- Profile picture integrated into nav
- Fully responsive on mobile

### Article Pages
- Article metadata (category tags, reading time)
- Clean typography optimized for reading
- Code blocks with syntax highlighting styles
- Blockquote styling
- Citation boxes for references
- Tag system for categorization
- Newsletter signup section

### Book Reviews
- Dedicated book review cards with cover images
- Star ratings and links to Goodreads
- Clean layout for multiple reviews
- Currently reading section

### Footer
- Social media links (Twitter, LinkedIn, GitHub, etc.)
- Short bio
- Copyright and contact information
- Consistent across all pages

## 🎯 How to Add New Content

### Adding a New Blog Post

1. Copy `thoughts.html` or `writing-faq.html` as a template
2. Update the `<title>` and meta tags
3. Change the article title (`<h1>`)
4. Update the article metadata (tags, reading time)
5. Replace content with your own
6. Update tags at the bottom
7. Save and test locally

### Adding a New Book Review

Edit `reading.html` and add a new `.book-review` div:

```html
<div class="book-review">
    <div class="book-header">
        <div class="book-cover">
            <a href="GOODREADS_LINK" target="_blank">
                <img src="BOOK_COVER_URL" alt="BOOK_TITLE" />
            </a>
        </div>
        <div class="book-info">
            <h3><a href="GOODREADS_LINK">BOOK_TITLE</a></h3>
            <div class="author">by <a href="AUTHOR_LINK">AUTHOR_NAME</a></div>
            <div class="rating">★★★★★ 5 of 5 stars</div>
        </div>
    </div>
    
    <div class="book-review-text">
        <p>Your review text here...</p>
    </div>
    
    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <a href="REVIEW_LINK" target="_blank" style="font-size: 0.9rem;">View on Goodreads →</a>
    </div>
</div>
```

### Updating the Home Page

Edit `index.html` to:
- Add new posts to the "Recent Writing" section
- Update your bio and description
- Modify the hero section

## 🎨 Customization

### Colors

All colors are defined as CSS variables in `app.css`:

```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #222222;
    --text-secondary: #666666;
    --link-color: #0366d6;
    --accent-color: #0366d6;
    /* ... more variables */
}
```

Simply change these values to customize the color scheme.

### Typography

The site uses the system font stack for optimal performance:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Helvetica, Arial, sans-serif;
```

### Max Width

Content width is controlled by the `--max-width` variable (default: 720px):

```css
--max-width: 720px;
```

## 📱 Responsive Design

The site includes responsive breakpoints for mobile devices:
- Desktop: Full width up to 720px
- Tablet/Mobile: Adjusted font sizes and spacing
- Mobile navigation: Simplified layout

## 🔧 Development

### Local Development

Simply open any HTML file in a browser. The site is static HTML/CSS with no build process required.

For a local server (optional):

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000`

### Deployment

This site is designed to work perfectly with:
- **GitHub Pages** (recommended)
- **Netlify**
- **Vercel**
- Any static hosting service

For GitHub Pages:
1. Push to GitHub
2. Go to Settings → Pages
3. Select your branch (usually `main`)
4. Your site will be live at `https://username.github.io/repo-name`



Some ideas for content you can add:
- **Writing**: Blog posts, essays, tutorials
- **Projects**: Side projects, open source work
- **Notes**: Learning notes, book summaries
- **Now**: What you're currently working on 
- **Uses**: Tools and setup you use
- **Speaking**: Talks and presentations

## ⚡ Performance

The site is built for speed:
- No JavaScript frameworks
- Minimal JavaScript (only for navbar loading)
- Single CSS file
- No external dependencies
- Static HTML cached by browsers
- Typically loads in under 100ms

## 📄 License

Feel free to use this template for your own site! No attribution required, but always appreciated.

---


