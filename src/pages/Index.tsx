import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import { useState } from "react";
import GoalCreationDialog from "@/components/goals/GoalCreationDialog";

const Index = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  // Temporary mock data for demonstration
  const goals = [
    {
      id: 1,
      title: "Learn Spanish",
      category: "Education",
      progress: 45,
      dueDate: "2024-06-30",
    },
    {
      id: 2,
      title: "Run a Marathon",
      category: "Health",
      progress: 30,
      dueDate: "2024-12-31",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">My Goals</h1>
            <p className="mt-1 text-sm text-gray-500">Track and achieve your personal goals</p>
          </div>
          <Button onClick={() => setIsCreateDialogOpen(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            New Goal
          </Button>
        </div>

        {/* Goals Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {goals.map((goal) => (
            <Card key={goal.id} className="transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold">{goal.title}</CardTitle>
                    <p className="text-sm text-gray-500">{goal.category}</p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    {goal.progress}%
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={goal.progress} className="h-2" />
                <p className="mt-2 text-xs text-gray-500">
                  Due: {new Date(goal.dueDate).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Goal Creation Dialog */}
        <GoalCreationDialog
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
        />
      </div>
    </div>
  );
};

export default Index;