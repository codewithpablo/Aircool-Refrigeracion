"use client";

import { useState } from "react";
import { tabs } from "@/constants";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from '@/components/mine/Logo'


export default function DashboardSidebar() {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="flex sticky top-0 p-2 h-[100vh]  ">
      {/* Sidebar */}
      <aside className="w-64 h-full  rounded-2xl  px-10 py-5 flex flex-col border beige">
        <div className="flex items-center">
          <div className="flex gap-2 text-lg text-center items-center font-bold mx-auto mb-5">
           
            <h1 className="text-2xl font-bold ">UTN FRRE</h1>
            </div>
         
        </div>
        <nav className="flex flex-col">
          {tabs.map((tab) => {
            const Icon = tab.icon as LucideIcon;
            const isActive = activeTab === tab.value;
            return (
              <Link href={tab.path} key={tab.value}>
                  <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-3 p-2 rounded-lg transition-colors w-full ${
                  isActive
                    ? "marron-suave"
                    : "text-gray-700 "
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
              </Link>
            );
          })}
        </nav>
      </aside>

     
    </div>
  );
}
