import { Button } from "@/components/ui/button";
import { Plus, Search, Grid2x2, List, Bell, BarChart2, Settings2, User } from "lucide-react";
import { Input } from "@/components/ui/input";
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
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentView, setCurrentView] = useState<"overview" | "analytics" | "settings" | "profile">("overview");
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-4 md:gap-6">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
              <span className="font-semibold">GoalTracker</span>
            </motion.div>
            <nav className="flex items-center gap-4 md:gap-6">
              <motion.a 
                href="#" 
                className={`text-sm font-medium ${currentView === 'overview' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setCurrentView('overview')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Overview
              </motion.a>
              <motion.a 
                href="#" 
                className={`text-sm font-medium ${currentView === 'analytics' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setCurrentView('analytics')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Analytics
              </motion.a>
              <motion.a 
                href="#" 
                className={`text-sm font-medium ${currentView === 'settings' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setCurrentView('settings')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Settings
              </motion.a>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </motion.div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setCurrentView('profile')}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentView('settings')}>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main 
          className="p-4 md:p-6"
          key={currentView}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={fadeIn}
        >
          {currentView === 'overview' && (
            <div className="mx-auto max-w-7xl">
              {/* Search and Actions Bar */}
              <motion.div 
                className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex w-full max-w-sm items-center gap-2">
                  <Input
                    placeholder="Search goals..."
                    className="h-9"
                    type="search"
                    icon={<Search className="h-4 w-4 text-gray-400" />}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <motion.div className="flex items-center rounded-md border p-1">
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
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button onClick={() => setIsCreateDialogOpen(true)} className="h-9">
                      <Plus className="mr-2 h-4 w-4" />
                      New Goal
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Goals Grid */}
              <div className={`grid gap-4 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="transition-all hover:shadow-md">
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
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {currentView === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Analytics />
            </motion.div>
          )}

          {currentView === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <UserProfile />
            </motion.div>
          )}

          {currentView === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-auto max-w-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              <Card>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Notifications</h3>
                    <p className="text-sm text-gray-500">Configure how you receive notifications</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Appearance</h3>
                    <p className="text-sm text-gray-500">Customize the look and feel of your dashboard</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Account</h3>
                    <p className="text-sm text-gray-500">Manage your account settings and preferences</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.main>
      </AnimatePresence>

      <GoalCreationDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onGoalCreate={handleGoalCreate}
      />
    </div>
  );
};

export default Index;