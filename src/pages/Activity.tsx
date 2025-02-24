import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity as ActivityIcon, Calendar, Target, User } from "lucide-react";

const Activity = () => {
  const activities = [
    {
      id: 1,
      type: "goal_created",
      title: "Learn Spanish",
      description: "Created a new goal for language learning",
      timestamp: "2 hours ago",
      icon: Target,
    },
    {
      id: 2,
      type: "milestone_completed",
      title: "5K Training",
      description: "Completed Week 1 of marathon training",
      timestamp: "5 hours ago",
      icon: ActivityIcon,
    },
    {
      id: 3,
      type: "goal_updated",
      title: "Reading Challenge",
      description: "Updated progress to 5 books read",
      timestamp: "1 day ago",
      icon: User,
    },
    {
      id: 4,
      type: "reminder_set",
      title: "Daily Meditation",
      description: "Set up daily reminder for meditation practice",
      timestamp: "2 days ago",
      icon: Calendar,
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Activity Feed</h2>
        <p className="text-gray-500">Track your recent goal-related activities</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <Card key={activity.id}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="rounded-full bg-gray-100 p-2">
                  <Icon className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.timestamp}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Activity;