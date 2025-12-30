"use client";

import { Sidebar } from "./sidebar";

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="w-full lg:ml-64 xl:ml-72 flex-1 p-4 sm:p-6 lg:p-8 pt-14 sm:pt-16 lg:pt-8">
        {children}
      </main>
    </div>
  );
}

