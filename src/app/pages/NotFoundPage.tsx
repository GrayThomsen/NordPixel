import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-950 dark:to-neutral-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#F5A623] mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl mb-4">Page Not Found</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="outline" size="lg">
              <Search className="w-5 h-5 mr-2" />
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
