# OSCORM Dashboard

A modern, responsive blog content management dashboard built with Next.js. This is a **pure frontend application** that provides an intuitive interface for managing blog posts, categories, and users.

## 🚀 Features

- **Dashboard Overview**: Comprehensive statistics and analytics for blog content
- **Post Management**: Create, view, edit, and manage blog posts
- **Category Management**: Organize content with categories (Admin only)
- **User Management**: Manage users and their roles (Admin only)
- **Role-Based Access Control**: Different views and permissions for Admin and Blog Users
- **Authentication**: Client-side authentication with role-based access
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Smooth Animations**: Enhanced UX with Framer Motion animations

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Icons**: [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

## 🏃 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Login**:
   - **Admin Account**: 
     - Email: `admin@blog.com` (or set `NEXT_PUBLIC_ADMIN_EMAIL`)
     - Password: `admin123` (or set `NEXT_PUBLIC_ADMIN_PASSWORD`)
   - **Blog User Account**:
     - Email: `user@blog.com` (or set `NEXT_PUBLIC_BLOG_USER_EMAIL`)
     - Password: `user123` (or set `NEXT_PUBLIC_BLOG_USER_PASSWORD`)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory to customize authentication credentials:

```env
NEXT_PUBLIC_ADMIN_EMAIL=admin@blog.com
NEXT_PUBLIC_ADMIN_PASSWORD=admin123
NEXT_PUBLIC_BLOG_USER_EMAIL=user@blog.com
NEXT_PUBLIC_BLOG_USER_PASSWORD=user123
```

## 📁 Project Structure

```
oscorm-dashboard/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard home page
│   ├── login/             # Login page
│   ├── posts/             # Posts management pages
│   ├── categories/        # Categories management page
│   └── users/             # Users management page
├── components/            # React components
│   ├── ui/               # Reusable UI components (Radix UI)
│   ├── sidebar.tsx       # Navigation sidebar
│   ├── dashboard-layout.tsx
│   └── protected-route.tsx
├── contexts/             # React contexts
│   ├── auth-context.tsx  # Authentication context
│   └── categories-context.tsx
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 👥 User Roles

### Admin
- Full access to all features
- Can view all posts from all users
- Can manage categories
- Can manage users
- Access to comprehensive analytics

### Blog User
- Can create and manage their own posts
- Can view their own posts and statistics
- Limited access to dashboard features

## 🎨 Key Features

### Dashboard
- Real-time statistics and metrics
- Recent posts overview
- Role-based content filtering
- Responsive grid layout

### Post Management
- Create new blog posts
- View all posts (filtered by role)
- Edit and delete posts
- Post status tracking (Published/Draft)

### Category Management (Admin Only)
- Create and manage categories
- Organize posts by categories

### User Management (Admin Only)
- View all users
- Manage user roles and permissions

## 🚢 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy on Vercel
The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## 📝 Notes

- This is a **pure frontend application** with client-side authentication
- User data is stored in browser localStorage (for demo purposes)
- In production, you would connect this to a backend API for authentication and data persistence
- The application uses mock data for demonstration purposes

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!

## 📄 License

This project is private and proprietary.
