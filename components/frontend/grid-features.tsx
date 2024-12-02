import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import SmallTitle from "./small-title";
import SectionHeader from "./section-head";
import {
  BarChart,
  Globe,
  Layers,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Lightning-Fast Performance",
    description:
      "Experience blazing speeds with our optimized infrastructure, ensuring your website loads in milliseconds.",
    icon: Zap,
    image : "/place1.jpg",
  },
  {
    title: "Intuitive Design Tools",
    description:
      "Create stunning layouts effortlessly with our drag-and-drop interface and customizable templates.",
    icon: Layers,
    image : "/place2.jpg",
  },
  {
    title: "Collaborative Workspaces",
    description:
      "Foster teamwork with real-time editing and seamless project management tools.",
    icon: Users,
    image : "/place3.jpg",
  },
  {
    title: "Global CDN",
    description:
      "Deliver content rapidly worldwide through our extensive content delivery network.",
    icon: Globe,
    image : "/place4.jpg",
  },
  {
    title: "Advanced Security",
    description:
      "Protect your data with enterprise-grade encryption and multi-factor authentication.",
    icon: Shield,
    image : "/place5.jpg",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Gain valuable business intelligence with our machine learning algorithms and predictive analytics.",
    icon: Sparkles,
    image : "/place6.jpg",
  },
  {
    title: "Comprehensive Analytics",
    description:
      "Track and analyze your performance with detailed, real-time metrics and customizable reports.",
    icon: BarChart,
    image : "/place7.jpg",
  },
];

export default function GridFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          title="Features"
          heading="Powerful Features for Your Success"
          description="Discover our comprehensive suite of tools designed to elevate your online presence and streamline your digital operations."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">{features[0].title}</CardTitle>
              <p className="text-muted-foreground">
                {features[0].description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="relative bg-muted p-2 rounded-lg ">
                <div className="absolute left-0 top-0  bottom-0 w-16 bg-background/95 border-r flex flex-col gap-2 p-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-full aspect-square rounded bg-muted-foreground/10 flex item-center justify-center "
                    />
                  ))}
                </div>
                <Image
                  src={features[0].image}
                  alt={features[0].title}
                  width={600}
                  height={400}
                  className="ml rounded"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
          <CardHeader>
              <CardTitle className="text-2xl">{features[1].title}</CardTitle>
              <p className="text-muted-foreground">
                {features[1].description}
              </p>
            </CardHeader>
            <CardContent >
                <div className="p-2">
                <Image
                  src={features[1].image}
                  alt={features[1].title}
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
                </div>
                {/* images */}
                </CardContent>
          </Card>
          <Card>
          <CardHeader>
              <CardTitle className="text-2xl">
                {features[2].title}
                </CardTitle>
              <p className="text-muted-foreground">
                {features[2].description}
              </p>
            </CardHeader>
            <CardContent >
                <div className="p-2">
                <Image
                  src={features[2].image}
                  alt={features[2].title}
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
                </div>
                {/* images */}
                </CardContent>
          </Card>
          <Card>
          <CardHeader>
              <CardTitle className="text-2xl">
                {features[3].title}
                </CardTitle>
              <p className="text-muted-foreground">
                {features[3].description}
              </p>
            </CardHeader>
            <CardContent >
                <div className="p-2">
                <Image
                  src={features[3].image}
                  alt={features[3].title}
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
                </div>
                {/* images */}
                </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
