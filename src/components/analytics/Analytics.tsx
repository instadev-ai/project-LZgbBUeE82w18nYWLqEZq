import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart, PieChart, TrendingUp } from "lucide-react";

const Analytics = () => {
  // Mock data - will be replaced with real data later
  const categoryDistribution = [
    { category: "Health", percentage: 40 },
    { category: "Career", percentage: 25 },
    { category: "Education", percentage: 20 },
    { category: "Personal", percentage: 15 },
  ];

  const monthlyProgress = [
    { month: "Jan", completed: 2 },
    { month: "Feb", completed: 3 },
    { month: "Mar", completed: 1 },
  ];

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics & Insights</h2>
          <p className="text-gray-500">Track your goal progress and patterns</p>
        </div>
        <Select defaultValue="thisMonth">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="thisWeek">This Week</SelectItem>
            <SelectItem value="thisMonth">This Month</SelectItem>
            <SelectItem value="lastMonth">Last Month</SelectItem>
            <SelectItem value="last3Months">Last 3 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Category Distribution */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-normal">
              Goals by Category
            </CardTitle>
            <PieChart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryDistribution.map((item) => (
                <div key={item.category}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{item.category}</span>
                    <span className="text-sm text-gray-500">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Progress */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-normal">
              Monthly Progress
            </CardTitle>
            <BarChart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-end gap-2">
              {monthlyProgress.map((item) => (
                <div
                  key={item.month}
                  className="flex-1 group relative"
                >
                  <div
                    className="absolute bottom-0 w-full bg-blue-500 rounded-t transition-all duration-300 group-hover:opacity-80"
                    style={{ height: `${(item.completed / 3) * 100}%` }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">
                      {item.completed}
                    </span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                    {item.month}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trends Card */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-normal">Goal Trends</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm font-medium">Most Active Category</span>
                <span className="text-sm text-gray-500">Health & Fitness</span>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm font-medium">Average Completion Time</span>
                <span className="text-sm text-gray-500">28 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Success Rate</span>
                <span className="text-sm text-gray-500">75%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;