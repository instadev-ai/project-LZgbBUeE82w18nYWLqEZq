import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Target, TrendingUp, Users } from "lucide-react";

const Overview = () => {
  const stats = [
    {
      name: "Total Goals",
      value: "12",
      change: "+2.5%",
      icon: Target,
    },
    {
      name: "In Progress",
      value: "7",
      change: "+18.1%",
      icon: TrendingUp,
    },
    {
      name: "Completed",
      value: "4",
      change: "+8.2%",
      icon: Activity,
    },
    {
      name: "Collaborators",
      value: "3",
      change: "+2.1%",
      icon: Users,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "goal_created",
      title: "Learn Spanish",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "milestone_completed",
      title: "Complete 5K Run",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      type: "goal_updated",
      title: "Read 12 Books",
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-500">{stat.change} from last month</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">
                    {activity.type.split("_").join(" ")}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{activity.timestamp}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;