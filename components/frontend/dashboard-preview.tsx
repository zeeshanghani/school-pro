import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function DashboardPreview() {
  return (
    <div className="bg-white  ">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full">
          <CardContent className="mt-4">
            <Image
              src="/dashboard.jpg"
              alt="Dashboard Preview"
              width={2016}
              height={1210}
              className="w-full rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
