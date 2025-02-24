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
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-20 flex h-full w-[270px] flex-col border-r bg-white">
        <div className="flex h-[60px] items-center gap-2 border-b px-6">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
          <span className="font-semibold">GoalTracker</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex h-[38px] items-center gap-2 rounded-md px-3 text-[14px] font-medium transition-colors",
                  isActive
                    ? "bg-[#F5F5F5] text-black"
                    : "text-[#666666] hover:bg-[#FAFAFA]"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}

          <div className="my-4 border-t" />

          {secondaryNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex h-[38px] items-center gap-2 rounded-md px-3 text-[14px] font-medium transition-colors",
                  isActive
                    ? "bg-[#F5F5F5] text-black"
                    : "text-[#666666] hover:bg-[#FAFAFA]"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-[#FAFAFA]">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-gray-500">john@example.com</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[270px]">
        {/* Top Navigation */}
        <header className="flex h-[60px] items-center justify-between border-b bg-white px-6">
          <h1 className="text-xl font-semibold">
            {navigation.find((item) => item.href === location.pathname)?.name ||
              "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="min-h-[calc(100vh-60px)]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;