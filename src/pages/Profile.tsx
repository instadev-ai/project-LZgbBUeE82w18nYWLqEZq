import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Medal, Star, Target, Trophy } from "lucide-react";

const Profile = () => {
  const achievements = [
    {
      id: 1,
      title: "Goal Setter",
      description: "Created first 5 goals",
      icon: Target,
      achieved: true,
    },
    {
      id: 2,
      title: "Rising Star",
      description: "Completed 3 goals",
      icon: Star,
      achieved: true,
    },
    {
      id: 3,
      title: "Champion",
      description: "Maintained streak for 30 days",
      icon: Trophy,
      achieved: false,
    },
    {
      id: 4,
      title: "Master Achiever",
      description: "Completed 10 goals",
      icon: Medal,
      achieved: false,
    },
  ];

  const stats = {
    totalGoals: 8,
    completedGoals: 3,
    currentStreak: 5,
    longestStreak: 7,
  };

  return (
    <div className="space-y-6 p-6">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="" />
          <AvatarFallback className="text-2xl">JD</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-500">Goal Tracker since January 2024</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
            <Badge variant="secondary">Achiever</Badge>
            <Badge variant="secondary">5-Day Streak</Badge>
            <Badge variant="secondary">3 Goals Completed</Badge>
          </div>
        </div>
        <Button className="md:ml-auto" variant="outline">
          Edit Profile
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Total Goals</p>
              <p className="text-3xl font-bold">{stats.totalGoals}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-3xl font-bold">{stats.completedGoals}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Current Streak</p>
              <p className="text-3xl font-bold">{stats.currentStreak} days</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Longest Streak</p>
              <p className="text-3xl font-bold">{stats.longestStreak} days</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={`flex items-center gap-4 rounded-lg border p-4 ${
                    achievement.achieved ? "bg-gray-50" : "opacity-50"
                  }`}
                >
                  <div className="rounded-full bg-gray-100 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-gray-500">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Overall Completion Rate</p>
                <p className="text-sm text-gray-500">37.5%</p>
              </div>
              <Progress value={37.5} className="mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;