import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, Target } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Spanish Lesson",
      time: "10:00 AM",
      duration: "1 hour",
      type: "language",
    },
    {
      id: 2,
      title: "5K Training",
      time: "4:00 PM",
      duration: "45 mins",
      type: "fitness",
    },
    {
      id: 3,
      title: "Reading Session",
      time: "7:00 PM",
      duration: "30 mins",
      type: "personal",
    },
  ];

  return (
    <div className="grid gap-6 p-6 md:grid-cols-[1fr,300px]">
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="rounded-full bg-gray-100 p-2">
                    {event.type === "language" && (
                      <Target className="h-4 w-4 text-blue-500" />
                    )}
                    {event.type === "fitness" && (
                      <CalendarIcon className="h-4 w-4 text-green-500" />
                    )}
                    {event.type === "personal" && (
                      <Clock className="h-4 w-4 text-purple-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{event.time}</span>
                      <span>•</span>
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;