import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  BarChart,
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  const stats = [
    {
      name: "Active Goals",
      value: "8",
      change: "+2",
      changeLabel: "from last month",
      icon: Target,
    },
    {
      name: "Completed",
      value: "12",
      change: "+8.2%",
      changeLabel: "completion rate",
      icon: CheckCircle2,
    },
    {
      name: "In Progress",
      value: "5",
      change: "2 due soon",
      changeLabel: "this week",
      icon: TrendingUp,
    },
    {
      name: "Upcoming",
      value: "3",
      change: "Next 7 days",
      changeLabel: "starting soon",
      icon: Calendar,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "Marathon Training",
      type: "progress_update",
      progress: 65,
      timestamp: "2 hours ago",
      icon: Activity,
    },
    {
      id: 2,
      title: "Learn Spanish",
      type: "milestone_completed",
      progress: 40,
      timestamp: "5 hours ago",
      icon: CheckCircle2,
    },
    {
      id: 3,
      title: "Read 12 Books",
      type: "goal_created",
      progress: 25,
      timestamp: "1 day ago",
      icon: Target,
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "Spanish Lesson",
      time: "Today, 3:00 PM",
      duration: "1 hour",
    },
    {
      id: 2,
      title: "5K Training Run",
      time: "Tomorrow, 6:00 AM",
      duration: "45 minutes",
    },
    {
      id: 3,
      title: "Book Reading Session",
      time: "Tomorrow, 8:00 PM",
      duration: "30 minutes",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Welcome Section */}
      <div className="border-b bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome back, John</h2>
            <p className="text-gray-500">Track your progress and achieve your goals</p>
          </div>
          <Button onClick={() => navigate("/goals")} size="lg">
            <Target className="mr-2 h-4 w-4" />
            New Goal
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name} className="hover:border-blue-100">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    {stat.name}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-gray-500">
                    {stat.change} {stat.changeLabel}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-7">
          {/* Recent Activity */}
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 rounded-lg border p-4"
                    >
                      <div className="rounded-full bg-gray-100 p-2">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{activity.title}</h3>
                          <span className="text-sm text-gray-500">
                            {activity.timestamp}
                          </span>
                        </div>
                        <div className="mt-2">
                          <Progress value={activity.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Coming Up</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="rounded-full bg-gray-100 p-2">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                        <span>{task.time}</span>
                        <span>•</span>
                        <span>{task.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Progress */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-sm text-gray-500">Task Completion</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-gray-500">Active Days</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-500">Goals Achieved</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;