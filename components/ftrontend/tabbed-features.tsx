import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Users, Users2 } from 'lucide-react';
import React from 'react';
import { TabsContent } from '../ui/tabs';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

const features = [
    {
        icon: Users2,
        tab: "Student",
        title: "Student Management",
        description: "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
        href: "/features/student-management",
        subFeatures: [
            "Student Registration & Enrollment",
            "Student Profiles & Records",
            "Academic History",
            "Health Records",
            "Emergency Contacts",
            "Document Management",
            "Student Performance Analytics",
            "Behavioral Records",
        ],
        image: "/studentmanagement.jpg",
    },
    {
        icon: Users,
        tab: "Academic",
        title: "Academic Management Module",
        description: "Streamline curriculum planning, consultations, grading, and report card generation in one unified system",
        href: "/features/academic-management",
        subFeatures: [
            "Curriculum Planning",
            "Class Scheduling & Timetables",
            "Attendance Tracking",
            "Examination Management",
            "Grading System",
            "Report Card Generation",
            "Assignment Management",
            "Online Assessment Tools",
            "Academic Calendar",
        ],
        image: "/acadamicmanagement.jpg",
    },
    {
        icon: Users,
        tab: "Staff Management",
        title: "Staff Management Module",
        description: "Efficient management of staff profiles, records, and schedules with comprehensive features and tools",
        href: "/features/academic-management",
        subFeatures: [
            "Staff Profiles & Records",
            "Attendance Tracking",
            "Performance Evaluation",
            "Leave Management",
            "Document Management",
            "Payroll Integration",
            "Professional Development",
            "Substitute Management",
        ],
        image: "/staffmanagement.jpg",
    },
];

export default function TabbedFeatures() {
    return (
        <div className="container mx-auto px-4">
            <Tabs className="space-y-8" defaultValue={features[0].tab.toLowerCase()}>
                {/* Tabs List */}
                <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <TabsTrigger
                                key={feature.tab}
                                value={feature.tab.toLowerCase()}
                                className="inline-flex items-center gap-2 border-b-2 border-transparent px-4 pb-4 pt-2 data-[state=active]:border-primary"
                            >
                                <Icon className="h-5 w-5" />
                                {feature.tab}
                            </TabsTrigger>
                        );
                    })}
                </TabsList>

                {/* Tabs Content */}
                {features.map((feature) => (
                    <TabsContent
                        key={feature.tab}
                        value={feature.tab.toLowerCase()}
                        className="space-y-8"
                    >
                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Text Content */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight">{feature.title}</h2>
                                <p className="text-lg text-muted-foreground">{feature.description}</p>
                                <Card>
                                    <CardContent className="grid gap-4 p-6">
                                        {feature.subFeatures.map((subFeature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    {index + 1}
                                                </div>
                                                <span>{subFeature}</span>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                                <Button asChild>
                                    <Link href={feature.href}>Learn More About {feature.title}</Link>
                                </Button>
                            </div>

                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted lg:aspect-square">
                                <Image
                                    src={feature.image}
                                    alt={`${feature.title} illustration`}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
