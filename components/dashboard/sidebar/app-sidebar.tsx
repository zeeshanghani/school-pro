import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AudioWaveform,
  BadgeCheck,
  BarChart2,
  Bell,
  BookOpen,
  BookOpenIcon,
  Bot,
  Bus,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  DollarSignIcon,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  GraduationCap,
  LayoutDashboard,
  LayoutDashboardIcon,
  LogOut,
  MessageSquare,
  MoreHorizontal,
  PieChart,
  Settings2,
  Settings2Icon,
  Sparkles,
  SquareTerminal,
  Trash2,
  User2,
  UserCog,
  Users,
} from "lucide-react";
import Logo from "@/components/logo";

export default function AppSidebar() {
  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };
  const  sidebarLinks = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboardIcon,
        isActive: true,
        items: [
            {
                title: "Overview",
                url: "/dashboard/overview",
            },
        ],
    },
            {
                title: "Student Management",
                url: "/students",
                icon: User2,
                items: [
                    {
                        title: "Student Directory",
                        url: "/students/directory",
                    },
                    {
                        title: "Enrollment",
                        url: "/students/enrollment",
                    },
                    {
                        title: "Attendance",
                        url: "/students/attendance",
                    },
                    {
                        title: "Performance",
                        url: "/students/performance",
                    },
                ]
            },
            {
                title: "Academics",
                url: "/academics",
                icon: GraduationCap,
                items: [
                    {
                        title: "Curriculum",
                        url: "/academics/curriculum",
                    },
                    {
                        title: "Timetable",
                        url: "/academics/timetable",
                    },
                    {
                        title: "Examinations",
                        url: "/academics/examinations",
                    },
                    {
                        title: "Assignments",
                        url: "/academics/assignments",
                    },
                    {
                        title: "Reports",
                        url: "/academics/reports",
                    },
                ]
            },
        
    {
        title: "Staff Management",
        url: "/staff",
        icon: UserCog,
        items: [
            {
                title: "Staff Directory",
                url: "/staff/directory",
            },
            {
                title: "Attendance",
                url: "/staff/attendance",
            },
            {
                title: "Leave Management",
                url: "/staff/leave",
            },
            {
                title: "Performance",
                url: "/staff/performance",
            },
        ],
    },
    {
        title: "Communication",
        url: "/communication",
        icon: MessageSquare,
        items: [
            {
                title: "Messages",
                url: "/communication/messages",
            },
            {
                title: "Announcements",
                url: "/communication/announcements",
            },
            {
                title: "Notice Board",
                url: "/communication/notices",
            },
            {
                title: "Emergency Alerts",
                url: "/communication/alerts",
            },
        ]
    },
    {
        title: "Financial Management",
        url: "/finance",
        icon: DollarSignIcon,
        items: [
            {
                title: "Fee Management",
                url: "/finance/fees",
            },
            {
                title: "Payments",
                url: "/finance/payments",
            },
            {
                title: "Scholarships",
                url: "/finance/scholarships",
            },
            {
                title: "Reports",
                url: "/finance/reports",
            },
        ]
    },
    {
        title: "Transport",
        url: "/transport",
        icon: Bus,
        items: [
            {
                title: "Routes",
                url: "/transport/routes",
            },
            {
                title: "Tracking",
                url: "/transport/tracking",
            },
            {
                title: "Drivers",
                url: "/transport/drivers",
            },
            {
                title: "Maintenance",
                url: "/transport/maintenance",
            },
        ]
    },
    {
        title: "Resources",
        url: "/resources",
        icon: BookOpenIcon,
        items: [
            {
                title: "Library",
                url: "/resources/library",
            },
            {
                title: "Inventory",
                url: "/resources/inventory",
            },
            {
                title: "Facilities",
                url: "/resources/facilities",
            },
            {
                title: "Assets",
                url: "/resources/assets",
            },
        ]
    },
    {
        title: "Reports and Analytics",
        url: "/reports",
        icon: BarChart2,
        items: [
            {
                title: "Academic Reports",
                url: "/reports/academic",
            },
            {
                title: "Financial Reports",
                url: "/reports/financial",
            },
            {
                title: "Custom Reports",
                url: "/reports/custom",
            },
            {
                title: "Analytic Dashboard",
                url: "/reports/analytics",
            },
        ]
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings2Icon,
        items: [
            {
                title: "School Profile",
                url: "/settings/profile",
            },
            {
                title: "User Management",
                url: "/settings/users",
            },
            {
                title: "System Settings",
                url: "/settings/system",
            },
            {
                title: "Backup and Security",
                url: "/settings/security",
            },
        ]
    },

]
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarLinks.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
