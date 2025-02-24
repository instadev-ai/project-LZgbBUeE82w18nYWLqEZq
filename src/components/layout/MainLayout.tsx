import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Activity,
  BarChart2,
  Bell,
  Calendar,
  Home,
  Settings2,
  Target,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar } from "@/components/ui/sidebar";

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
    <div className="relative flex min-h-screen">
      <Sidebar className="border-r">
        <div className="flex h-[60px] items-center gap-2 border-b px-6">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
          <span className="font-semibold">GoalTracker</span>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="border-t" />

          <nav className="flex flex-col gap-1">
            {secondaryNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t p-4">
          <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-secondary">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john@example.com</span>
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="flex-1">
        <header className="flex h-[60px] items-center justify-between border-b px-6">
          <h1 className="text-xl font-semibold">
            {navigation.find((item) => item.href === location.pathname)?.name ||
              "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-secondary">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;