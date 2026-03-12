# Personal Portfolio Website

A production-ready, high-performance portfolio website for a senior Frontend Developer. Built with Next.js, React, TypeScript, and TailwindCSS.

## 🎯 Features

- ✅ **Next.js 14** with App Router and Server Components
- ✅ **React 18** for component building
- ✅ **TypeScript** for type-safe code
- ✅ **TailwindCSS** for utility-first styling
- ✅ **AOS** (Animate On Scroll) for smooth scroll animations
- ✅ **Contentful CMS** integration for easy project management
- ✅ **Responsive Design** - mobile-first approach
- ✅ **SEO Optimized** - XML sitemaps, robots.txt, OpenGraph tags
- ✅ **Performance Optimized** - Image optimization, code splitting, lazy loading
- ✅ **Accessibility** - WCAG compliant, semantic HTML
- ✅ **Custom Cursor Effect** - smooth cursor following animation (desktop only)
- ✅ **Cookie Consent Banner** - GDPR-friendly cookie management
- ✅ **Contact Form** with validation
- ✅ **Modern UI Components** - reusable, scalable architecture

## 📋 Color System

```css
Primary Blue:      #1458e4
Accent Gold:       #efc27e
Black:             #000000
White:             #FFFFFF
Dark Gray:         #2f2e2c
Medium Gray:       #726f6b
Light Gray:        #bdb9b3
```

## 📁 Project Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx              # Root layout with header, footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # SEO sitemap
│   ├── portfolio/
│   │   ├── page.tsx            # Portfolio listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Individual project page
│   ├── about/
│   │   └── page.tsx            # About page with timeline
│   └── contact/
│       └── page.tsx            # Contact page with form
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer with links
│   ├── Hero.tsx                # Hero section
│   ├── TechStack.tsx           # Skills display
│   ├── ProjectCard.tsx         # Project card component
│   ├── LatestProjects.tsx       # Home page projects section
│   ├── ContactForm.tsx         # Contact form with validation
│   ├── CookieBanner.tsx        # Cookie consent banner
│   └── CursorEffect.tsx        # Custom cursor effect
├── lib/
│   └── contentful.ts           # Contentful CMS integration
├── public/
│   ├── robots.txt              # SEO robots file
│   └── images/                 # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
├── .env.example                # Environment variables template
├── .eslintrc.json              # ESLint configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm, pnpm, or yarn package manager

### 1. Installation

```bash
# Navigate to project directory
cd portfolio-next

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Add your Contentful CMS credentials:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=xxxx
CONTENTFUL_ACCESS_TOKEN=xxxxxx
```

### 3. Development

```bash
# Start development server
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 Pages

### Home (`/`)
- Hero section with introduction
- Tech stack display
- Latest projects preview
- All sections with AOS animations

### Portfolio (`/portfolio`)
- Grid of all projects
- Filter by technology
- Responsive layout
- Project cards with images

### Portfolio Detail (`/portfolio/[slug]`)
- Full project case study
- Hero image and description
- Technologies used
- Image gallery
- Links to live site and GitHub

### About (`/about`)
- Profile section
- Career timeline (DTP → Frontend Developer)
- Skills & expertise grid
- Professional background

### Contact (`/contact`)
- Modern contact form with validation
- Direct contact methods
- FAQ section
- Email, GitHub, LinkedIn links

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts`:

```typescript
colors: {
  'primary-blue': '#1458e4',
  'accent-gold': '#efc27e',
  // ... other colors
}
```

### Content
- **Home**: Edit text in `components/Hero.tsx`
- **About**: Update timeline in `app/about/page.tsx`
- **Projects**: Managed via Contentful CMS

### Branding
- Change logo text in `components/Header.tsx`
- Update meta tags in `app/layout.tsx`
- Modify footer content in `components/Footer.tsx`

## 📚 API Integration

### Contentful

The app integrates with Contentful CMS for project management.

**Content Type: Project**

Fields:
- `title` (Text)
- `slug` (Slug)
- `description` (Text)
- `thumbnail` (Asset)
- `technologies` (Array)
- `liveUrl` (URL)
- `githubUrl` (URL)
- `galleryImages` (Assets)
- `content` (Rich Text)

### Setting up Contentful

1. Sign up at [contentful.com](https://contentful.com)
2. Create a new space
3. Create the "Project" content type
4. Add sample projects
5. Generate API tokens
6. Add credentials to `.env.local`

## 🎬 Animations

### AOS (Animate On Scroll)
Used throughout the site for smooth scroll animations:
- `fade-up` - Fade in while moving up
- `fade-in` - Simple fade in
- `slide-up` - Slide up animation
- `fade-left/right` - Directional fades

### Custom Cursor
- Desktop-only smooth cursor effect
- Semi-transparent blue dot
- Disabled on mobile devices

## ⚡ Performance

### Optimizations
- ✅ Next.js Image optimization
- ✅ Lazy loading images
- ✅ Code splitting per route
- ✅ CSS minification
- ✅ JavaScript compression
- ✅ Critical CSS inlining

### Target Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Testing Performance

```bash
# Build for production
npm run build

# Start production server
npm start

# Use Google PageSpeed Insights, Lighthouse, or WebPageTest
```

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA labels and roles
- Keyboard navigation
- Color contrast compliance
- Focus indicators

## 🔍 SEO

### Features
- XML Sitemap (auto-generated)
- robots.txt
- Meta tags (title, description)
- OpenGraph tags (social sharing)
- Twitter cards
- Canonical URLs
- Structured data ready

### Meta Tags
Update in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
  openGraph: {
    title: 'Your Name',
    description: 'Your description',
    url: 'https://yourportfolio.com',
  },
}
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - `sm` (640px)
  - `md` (768px)
  - `lg` (1024px)
  - `xl` (1280px)
  - `2xl` (1536px)

## 🛠️ Development

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Code Quality

- TypeScript strict mode
- ESLint configuration
- Pre-configured husky (optional)

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Other Platforms

Works with:
- Netlify
- AWS Amplify
- GitHub Pages
- Traditional Node.js hosting

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` | Yes | Contentful space ID |
| `CONTENTFUL_ACCESS_TOKEN` | Yes | Contentful API token |

## 📞 Contact Form Integration

The contact form currently logs submissions to the console. To enable email sending:

1. Install email service (Resend, SendGrid, etc.)
2. Update `components/ContactForm.tsx`
3. Add API route for handling submissions

Example with Resend:

```typescript
// Install: npm install resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In form handler
await resend.emails.send({
  from: 'contact@yourportfolio.com',
  to: 'your.email@example.com',
  subject: `New message from ${formData.name}`,
  html: contactFormTemplate(formData),
});
```

## ❓ FAQ

**Q: Can I use a different CMS?**
A: Yes. Replace `lib/contentful.ts` with your CMS integration.

**Q: How do I add blog functionality?**
A: Add a `/blog` route and extend Contentful with Blog content type.

**Q: Can I customize animations?**
A: Yes. Modify `tailwind.config.ts` keyframes and AOS settings.

**Q: Is this production-ready?**
A: Yes, fully. Add your actual data (Contentful, email service, links).

## 🚀 Next Steps

1. ✅ Install dependencies
2. ✅ Set up Contentful CMS
3. ✅ Add your content/projects
4. ✅ Customize branding
5. ✅ Set up email service
6. ✅ Deploy to Vercel or your host
7. ✅ Set up analytics
8. ✅ Configure custom domain

## 📄 License

MIT License - feel free to use for personal projects.

## 🤝 Support

For issues or questions:
- Check the code comments
- Review Next.js documentation
- Check Contentful API docs
- Explore component implementations

---

**Built with ❤️ by a Senior Frontend Developer**
