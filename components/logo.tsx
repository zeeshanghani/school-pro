import { GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Logo({variant="light"}:
  {variant?:"dark"| "light"}) {
    if(variant==="light"){
      return (
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="flex items-center space-x-2">
            <div className="bg-blue-500 rounded-full p-1">
              <span className="text-white font-bold text-xl">
                <GraduationCap />
              </span>
            </div>
            <span className="font-bold text-xl">Ghani <span className="text-blue-500">School</span> </span>
          </Link>
        </div>
      );
    }else{
      return (
        <div className="flex items-center space-x-4">
          <Link href={"/"} className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-1">
              <span className="text-blue-800 font-bold text-xl">
                <GraduationCap />
              </span>
            </div>
            <span className="font-bold text-xl">Ghani <span className="text-blue-100">School</span> </span>
          </Link>
        </div>
      );
    }  
}
