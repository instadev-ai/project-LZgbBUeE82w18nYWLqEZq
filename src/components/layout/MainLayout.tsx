import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart2,
  Bell,
  Calendar,
  Home,
  LayoutDashboard,
  Settings2,
  Target,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Overview", href: "/", icon: Home },
    { name: "Goals", href: "/goals", icon: Target },
    { name: "Activity", href: "/activity", icon: Activity },
    { name: "Analytics", href: "/analytics", icon: BarChart2 },
    { name: "Calendar", href: "/calendar", icon: Calendar },
  ];

  const secondaryNavigation = [
    { name: "Settings", href: "/settings", icon: Settings2 },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <div className="fixed inset-y-0 z-50 flex w-64 flex-col border-r bg-white">
        {/* Logo */}
        <div className="border-b px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
            <span className="font-semibold">GoalTracker</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                  location.pathname === item.href
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}

          <div className="my-6 border-t" />

          {secondaryNavigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                  location.pathname === item.href
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="border-t p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto w-full justify-start gap-2 px-2 py-1.5"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">John Doe</span>
                  <span className="text-xs text-gray-500">john@example.com</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Top bar */}
        <header className="border-b">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <div className="text-xl font-semibold">
              {navigation.find((item) => item.href === location.pathname)?.name ||
                "Dashboard"}
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;