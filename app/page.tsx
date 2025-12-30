"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard-layout";
import { ProtectedRoute } from "@/components/protected-route";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  FileText,
  Eye,
  Users,
  Calendar,
  MoreVertical,
  Edit,
  Trash2,
} from "lucide-react";
import { useAuth } from "@/contexts/auth-context";

// All posts data (for admin view)
const allPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    author: "John Doe",
    authorId: "3",
    views: 1234,
    status: "published",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    author: "Jane Smith",
    authorId: "4",
    views: 892,
    status: "published",
    date: "2024-01-14",
  },
  {
    id: 3,
    title: "Building Modern UIs with Tailwind",
    author: "Mike Johnson",
    authorId: "5",
    views: 567,
    status: "draft",
    date: "2024-01-13",
  },
  {
    id: 4,
    title: "React Server Components Explained",
    author: "Sarah Williams",
    authorId: "6",
    views: 2341,
    status: "published",
    date: "2024-01-12",
  },
  {
    id: 5,
    title: "State Management Best Practices",
    author: "David Brown",
    authorId: "7",
    views: 678,
    status: "published",
    date: "2024-01-11",
  },
  {
    id: 6,
    title: "My First Blog Post",
    author: "Blog User",
    authorId: "2",
    views: 234,
    status: "published",
    date: "2024-01-10",
  },
  {
    id: 7,
    title: "Understanding React Hooks",
    author: "Blog User",
    authorId: "2",
    views: 456,
    status: "published",
    date: "2024-01-09",
  },
  {
    id: 8,
    title: "Draft: CSS Tips and Tricks",
    author: "Blog User",
    authorId: "2",
    views: 0,
    status: "draft",
    date: "2024-01-08",
  },
];

export default function Dashboard() {
  const { user } = useAuth();

  // Filter posts based on user role
  const userPosts = user?.role === "admin" 
    ? allPosts 
    : allPosts.filter((post) => post.authorId === user?.id);

  // Calculate stats based on role
  const totalPosts = userPosts.length;
  const publishedPosts = userPosts.filter((p) => p.status === "published").length;
  const draftPosts = userPosts.filter((p) => p.status === "draft").length;
  const totalViews = userPosts.reduce((sum, post) => sum + post.views, 0);

  // Admin stats
  const adminStats = [
    {
      title: "Total Posts",
      value: allPosts.length.toString(),
      change: "+12%",
      icon: FileText,
      color: "text-blue-500",
    },
   
    {
      title: "Active Users",
      value: "1,234",
      change: "+5%",
      icon: Users,
      color: "text-purple-500",
    },
    {
      title: "Growth Rate",
      value: "23%",
      change: "+3%",
      icon: TrendingUp,
      color: "text-orange-500",
    },
  ];

  // Blog User stats
  const blogUserStats = [
    {
      title: "My Posts",
      value: totalPosts.toString(),
      change: "+2",
      icon: FileText,
      color: "text-blue-500",
    },
   
    {
      title: "Published",
      value: publishedPosts.toString(),
      change: "+1",
      icon: FileText,
      color: "text-purple-500",
    },
    {
      title: "Drafts",
      value: draftPosts.toString(),
      change: "0",
      icon: FileText,
      color: "text-orange-500",
    },
  ];

  const stats = user?.role === "admin" ? adminStats : blogUserStats;
  const recentPosts = user?.role === "admin" 
    ? allPosts.slice(0, 5) 
    : userPosts.slice(0, 5);

  return (
    <ProtectedRoute>
      <DashboardLayout>
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            {user?.role === "admin" 
              ? `Welcome back${user?.name ? `, ${user.name}` : ""}! Here's an overview of all blog activity.`
              : `Welcome back${user?.name ? `, ${user.name}` : ""}! Here's an overview of your posts.`
            }
          </p>
          {user && (
            <div className="mt-2">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary capitalize">
                {user.role === "blog_user" ? "Blog User" : "Admin"}
              </span>
            </div>
          )}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl sm:text-2xl font-bold">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-green-500">{stat.change}</span> from
                      last month
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                {user?.role === "admin" ? "Recent Posts (All)" : "My Recent Posts"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {recentPosts.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    {user?.role === "admin" 
                      ? "No posts found" 
                      : "You haven't created any posts yet. Create your first post!"}
                  </p>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {recentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <Avatar className="h-10 w-10 shrink-0">
                          <AvatarFallback className="text-xs">
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2">
                            <h3 className="font-semibold text-sm sm:text-base truncate">
                              {post.title}
                            </h3>
                            <Badge
                              variant={
                                post.status === "published"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs shrink-0"
                            >
                              {post.status}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 shrink-0" />
                              <span className="truncate">{post.date}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3 shrink-0" />
                              {post.views} views
                            </span>
                            <span className="truncate">by {post.author}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 self-end sm:self-auto">
                        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                          <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                          <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                          <MoreVertical className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </div>
                    {index < recentPosts.length - 1 && (
                      <Separator className="my-2" />
                    )}
                  </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
