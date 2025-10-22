import { ReactNode } from "react";
import DashboardSidebar from "@/components/mine/DashboardSidebar";
import LoggedInNavbar from "@/components/mine/LoggedInNavbar";
import "../globals.css"

export default function InLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
          <div className="flex  h-[100vh] max-w-[100vw] ">
        <DashboardSidebar />
        <main className="flex-1">
          {children}
          </main>
    </div>
      </body>
    </html>
    
  )
}