import { Button } from "@/components/ui/button";
import { Plus, Search, Grid2x2, List, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoalCreationDialog from "@/components/goals/GoalCreationDialog";
import UserProfile from "@/components/profile/UserProfile";
import Analytics from "@/components/analytics/Analytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn Spanish",
      category: "education",
      progress: 45,
      dueDate: "2024-06-30",
      description: "Achieve conversational fluency in Spanish",
    },
    {
      id: 2,
      title: "Run a Marathon",
      category: "health",
      progress: 30,
      dueDate: "2024-12-31",
      description: "Complete a full marathon",
    },
  ]);

  const handleGoalCreate = (newGoal: any) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const getCategoryLabel = (category: string) => {
    const categories: { [key: string]: string } = {
      health: "Health & Fitness",
      career: "Career & Work",
      education: "Education",
      finance: "Finance",
      personal: "Personal Development",
      relationships: "Relationships",
      other: "Other",
    };
    return categories[category] || category;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
              <span className="font-semibold">GoalTracker</span>
            </div>
            <nav className="flex items-center gap-4 md:gap-6">
              <a href="#" className="text-sm font-medium text-gray-900">Overview</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Analytics</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Settings</a>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
      </header>

      <main className="p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          {/* Search and Actions Bar */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input
                placeholder="Search goals..."
                className="h-9"
                type="search"
                icon={<Search className="h-4 w-4 text-gray-400" />}
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-md border p-1">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid2x2 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button onClick={() => setIsCreateDialogOpen(true)} className="h-9">
                <Plus className="mr-2 h-4 w-4" />
                New Goal
              </Button>
            </div>
          </div>

          {/* Goals Grid */}
          <div className={`grid gap-4 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
            {goals.map((goal) => (
              <Card key={goal.id} className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">{goal.title}</CardTitle>
                      <p className="text-sm text-gray-500">{getCategoryLabel(goal.category)}</p>
                    </div>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      {goal.progress}%
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={goal.progress} className="h-2" />
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{goal.description}</p>
                  <p className="mt-2 text-xs text-gray-500">
                    Due: {new Date(goal.dueDate).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <GoalCreationDialog
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onGoalCreate={handleGoalCreate}
        />
      </main>
    </div>
  );
};

export default Index;