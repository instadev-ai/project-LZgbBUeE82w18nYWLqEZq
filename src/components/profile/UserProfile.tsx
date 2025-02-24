import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Calendar,
  Medal,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";

const UserProfile = () => {
  // Mock data - will be replaced with real data later
  const userStats = {
    totalGoals: 8,
    completedGoals: 3,
    inProgressGoals: 4,
    upcomingGoals: 1,
    completionRate: 75,
  };

  const achievements = [
    {
      id: 1,
      title: "Goal Setter",
      description: "Created first 5 goals",
      icon: <Target className="h-6 w-6 text-blue-500" />,
      achieved: true,
    },
    {
      id: 2,
      title: "Consistent Achiever",
      description: "Completed 3 goals on time",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      achieved: true,
    },
    {
      id: 3,
      title: "Progress Master",
      description: "Maintained progress for 30 days",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      achieved: false,
    },
  ];

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
          JD
        </div>
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-500">Goal Tracker since Jan 2024</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Total Goals</p>
                <p className="text-2xl font-bold">{userStats.totalGoals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <p className="text-2xl font-bold">{userStats.completedGoals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">In Progress</p>
                <p className="text-2xl font-bold">{userStats.inProgressGoals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Upcoming</p>
                <p className="text-2xl font-bold">{userStats.upcomingGoals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Information */}
      <Tabs defaultValue="progress" className="w-full">
        <TabsList>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        <TabsContent value="progress" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">Completion Rate</p>
                    <p className="text-sm text-gray-500">{userStats.completionRate}%</p>
                  </div>
                  <Progress value={userStats.completionRate} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements" className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`transition-all ${
                  achievement.achieved ? "bg-gray-50" : "opacity-50"
                }`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    {achievement.icon}
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-gray-500">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;