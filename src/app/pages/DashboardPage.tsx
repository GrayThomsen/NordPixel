import { Link } from 'react-router';
import { BookOpen, Award, Clock, TrendingUp, Star, Play } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Progress';
import { Button } from '../components/ui/Button';

export function DashboardPage() {
  const stats = [
    { label: 'Courses In Progress', value: '3', icon: BookOpen, color: 'text-blue-500' },
    { label: 'Completed Courses', value: '5', icon: Award, color: 'text-[#F5A623]' },
    { label: 'Learning Hours', value: '42', icon: Clock, color: 'text-green-500' },
    { label: 'Streak Days', value: '7', icon: TrendingUp, color: 'text-purple-500' },
  ];

  const activeCourses = [
    {
      id: 'html-css',
      title: 'HTML & CSS Fundamentals',
      progress: 65,
      nextLesson: 'CSS Grid Layouts',
      totalLessons: 24,
      completedLessons: 16,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    },
    {
      id: 'javascript-intro',
      title: 'Introduction to JavaScript',
      progress: 30,
      nextLesson: 'Functions and Scope',
      totalLessons: 40,
      completedLessons: 12,
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400',
    },
    {
      id: 'ai-literacy',
      title: 'AI Literacy for Beginners',
      progress: 85,
      nextLesson: 'AI in the Real World',
      totalLessons: 16,
      completedLessons: 14,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    },
  ];

  const achievements = [
    { title: 'First Steps', description: 'Completed your first lesson', earned: true },
    { title: 'Quick Learner', description: 'Complete 5 lessons in one day', earned: true },
    { title: 'Committed', description: '7-day learning streak', earned: true },
    { title: 'Course Master', description: 'Complete 5 courses', earned: true },
    { title: 'HTML Expert', description: 'Complete HTML & CSS course', earned: false },
    { title: 'AI Enthusiast', description: 'Complete all AI courses', earned: false },
  ];

  const recommendedCourses = [
    {
      id: 'creative-coding',
      title: 'Creative Coding with p5.js',
      difficulty: 'Intermediate',
      duration: '7 hours',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    },
    {
      id: 'responsive-design',
      title: 'Responsive Web Design',
      difficulty: 'Intermediate',
      duration: '5 hours',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="bg-gradient-to-br from-neutral-50 to-[#FFF5E6] dark:from-neutral-900 dark:to-neutral-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-2">My Dashboard</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Welcome back! Continue your learning journey
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl">Continue Learning</h2>
            <Link to="/courses">
              <Button variant="outline">Browse All Courses</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id} hover>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <CardHeader>
                  <h3 className="text-xl mb-2">{course.title}</h3>
                  <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    Next: {course.nextLesson}
                  </p>
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="primary" className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-6">Your Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`text-center ${achievement.earned ? '' : 'opacity-40'}`}
              >
                <CardContent className="py-6">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                    achievement.earned
                      ? 'bg-gradient-to-br from-[#F5A623] to-[#E09612]'
                      : 'bg-neutral-200 dark:bg-neutral-800'
                  }`}>
                    <Award className={`w-8 h-8 ${achievement.earned ? 'text-white' : 'text-neutral-400'}`} />
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-6">Recommended For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map((course) => (
              <Link key={course.id} to={`/courses/${course.id}`}>
                <Card hover className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full sm:w-48 h-48 object-cover"
                    />
                    <div className="flex-1">
                      <CardHeader>
                        <h3 className="text-xl mb-2">{course.title}</h3>
                        <div className="flex gap-2">
                          <Badge variant="primary">{course.difficulty}</Badge>
                          <Badge>{course.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">
                          View Course
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
