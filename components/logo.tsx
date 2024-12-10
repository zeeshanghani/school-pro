import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Logo({
  variant = "light"}:{
    variant?:   "dark " | "light";
    
  }){
    if (variant == "light") {
  
  return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1">
          <span className="text-white font-bold text-xl">
            <GraduationCap  className="w-6 h-6" />
          </span>
        </div>
        <span className="font-bold text-xl">Ghani Schools</span>
      </Link>
    
  );
}}
