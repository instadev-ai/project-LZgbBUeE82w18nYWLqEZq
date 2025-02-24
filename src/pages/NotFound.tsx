import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg text-gray-600">Page not found</p>
      <p className="mt-1 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
      <Button
        onClick={() => navigate("/")}
        className="mt-6"
      >
        Go back home
      </Button>
    </div>
  );
};

export default NotFound;