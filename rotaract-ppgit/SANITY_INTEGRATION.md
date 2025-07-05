# Rotaract PPGIT Website with Sanity CMS

A modern React website for Rotaract Club of PPGIT with integrated Sanity Studio CMS for dynamic content management.

## 🚀 Features

- **React + Vite** - Fast development and build
- **Tailwind CSS** - Modern, responsive design
- **React Router** - Client-side routing
- **Sanity Studio** - Headless CMS for content management
- **Responsive Design** - Mobile-first approach
- **Dark Mode Support** - Theme switching
- **SEO Optimized** - Meta tags and structured data

## 📁 Project Structure

```
rotaract-ppgit/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AdminAuth.jsx    # Admin authentication guard
│   │   ├── Footer.jsx       # Footer component
│   │   └── Navbar.jsx       # Navigation bar
│   ├── pages/              # Page components
│   │   ├── About.jsx       # About page
│   │   ├── Board.jsx       # Board members (Sanity integrated)
│   │   ├── Contact.jsx     # Contact page
│   │   ├── Gallery.jsx     # Gallery (Sanity integrated)
│   │   ├── Home.jsx        # Homepage
│   │   ├── Join.jsx        # Join page
│   │   ├── Projects.jsx    # Projects (Sanity integrated)
│   │   └── StudioPage.jsx  # Sanity Studio embedded page
│   ├── sanity/             # Sanity configuration
│   │   ├── client.js       # Sanity client setup
│   │   └── schemas/        # Content type schemas
│   │       ├── index.js    # Schema exports
│   │       ├── boardMember.js
│   │       ├── project.js
│   │       ├── galleryItem.js
│   │       ├── event.js
│   │       ├── page.js
│   │       ├── member.js
│   │       └── gallery.js
│   └── ...
├── sanity.config.js        # Sanity Studio configuration
├── .env.local              # Environment variables
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Git

### 1. Clone & Install
```bash
git clone <repository-url>
cd rotaract-ppgit
npm install
```

### 2. Environment Setup
Create `.env.local` file:
```bash
VITE_SANITY_PROJECT_ID=6rxvlrf8
VITE_SANITY_DATASET=development
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_ADMIN_PASSWORD=admin123
```

### 3. Development
```bash
# Start React development server
npm run dev

# Start Sanity Studio (separate terminal)
npm run sanity:dev
```

### 4. Production Build
```bash
npm run build
```

## 📝 Content Management

### Accessing Admin Panel
1. Visit `/admin` route on your website
2. Enter admin password (default: `admin123`)
3. Access Sanity Studio interface

### Content Types

#### 📋 Board Members
- **Fields**: Name, Position, Image, Bio, Order
- **Usage**: Displays on `/board` page
- **Features**: Automatic image optimization, custom ordering

#### 🎯 Projects
- **Fields**: Title, Description, Type (Online/Offline), Image, Date, Status
- **Usage**: Displays on `/projects` page
- **Features**: Category filtering, status tracking

#### 📸 Gallery Items
- **Fields**: Title, Description, Image, Category, Date
- **Usage**: Displays on `/gallery` page
- **Features**: Category-based organization

#### 📅 Events
- **Fields**: Title, Description, Date, Location, Image, Category, Status, Registration Link
- **Usage**: Future event management
- **Features**: Status tracking, registration integration

#### 📄 Pages
- **Fields**: Title, Slug, Content (Rich Text), Featured Image
- **Usage**: Dynamic page creation
- **Features**: SEO-friendly URLs, rich content editing

#### 👥 Members
- **Fields**: Name, Email, Phone, Image, Bio, Join Date, College, Year, Interests
- **Usage**: Member directory
- **Features**: Active/inactive status, detailed profiles

#### 🖼️ Gallery Collections
- **Fields**: Title, Description, Cover Image, Image Array, Category
- **Usage**: Organized photo collections
- **Features**: Batch image management

## 🔧 Development Scripts

```bash
npm run dev          # Start React dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run sanity:dev   # Start Sanity Studio
npm run sanity:build # Build Sanity Studio
npm run sanity:deploy # Deploy Sanity Studio
```

## 🌐 Deployment

### React App (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in deployment platform

### Sanity Studio
1. Build: `npm run sanity:build`
2. Deploy: `npm run sanity:deploy`
3. Access at: `https://your-project.sanity.studio`

## 🔒 Security

- Admin panel protected by password authentication
- Environment variables for sensitive data
- Session-based authentication storage
- Image optimization and hotspot support

## 🎨 Customization

### Styling
- Tailwind CSS for utility-first styling
- Dark mode support via CSS classes
- Responsive design breakpoints
- Custom color scheme

### Adding New Content Types
1. Create schema in `src/sanity/schemas/`
2. Add to `src/sanity/schemas/index.js`
3. Create/update React components to use new content
4. Deploy Sanity Studio changes

### Page Integration Example
```jsx
import { useState, useEffect } from 'react'
import { client, urlFor } from '../sanity/client'

const MyPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "myContentType"] {
          _id,
          title,
          description,
          image
        }`
        const result = await client.fetch(query)
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {item.image && (
            <img 
              src={urlFor(item.image).width(400).url()} 
              alt={item.title} 
            />
          )}
        </div>
      ))}
    </div>
  )
}
```

## 📧 Support

For technical issues or questions:
- Check the console for error messages
- Verify environment variables are set correctly
- Ensure Sanity project ID and dataset are correct
- Contact the development team

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for Rotaract Club of PPGIT**
