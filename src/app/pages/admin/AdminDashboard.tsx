import { useState } from 'react';
import {
  Users, BookOpen, FileText, Calendar, TrendingUp, Settings,
  BarChart3, Plus, Edit, Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'users' | 'materials' | 'bookings'>('overview');

  const stats = [
    { label: 'Total Students', value: '5,234', change: '+12%', icon: Users, color: 'text-blue-500' },
    { label: 'Active Courses', value: '24', change: '+3', icon: BookOpen, color: 'text-green-500' },
    { label: 'Materials', value: '156', change: '+8', icon: FileText, color: 'text-purple-500' },
    { label: 'Workshop Bookings', value: '42', change: '+15', icon: Calendar, color: 'text-[#F5A623]' },
  ];

  const recentCourses = [
    { id: 1, title: 'HTML & CSS Fundamentals', students: 1243, status: 'Published' },
    { id: 2, title: 'AI Literacy Basics', students: 892, status: 'Published' },
    { id: 3, title: 'JavaScript Advanced', students: 234, status: 'Draft' },
  ];

  const recentUsers = [
    { id: 1, name: 'Maria Jensen', email: 'maria@example.com', joined: '2026-05-01', courses: 3 },
    { id: 2, name: 'Lars Nielsen', email: 'lars@example.com', joined: '2026-05-03', courses: 2 },
    { id: 3, name: 'Anna Sørensen', email: 'anna@example.com', joined: '2026-05-05', courses: 5 },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 p-6">
          <h2 className="text-2xl mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'courses', label: 'Courses', icon: BookOpen },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'materials', label: 'Materials', icon: FileText },
              { id: 'bookings', label: 'Bookings', icon: Calendar },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as typeof activeTab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#F5A623]/10 text-[#F5A623]'
                    : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors mt-8">
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl mb-2">Dashboard Overview</h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Welcome back! Here's what's happening with NordPixel today.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="py-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                            {stat.label}
                          </p>
                          <p className="text-3xl">{stat.value}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        {stat.change}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl">Recent Courses</h3>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentCourses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800">
                          <div>
                            <p className="font-medium">{course.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {course.students} students
                            </p>
                          </div>
                          <Badge variant={course.status === 'Published' ? 'success' : 'warning'}>
                            {course.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl">Recent Users</h3>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {user.email}
                            </p>
                          </div>
                          <div className="text-right text-sm">
                            <p className="text-neutral-600 dark:text-neutral-400">
                              {user.courses} courses
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl">Manage Courses</h1>
                <Button variant="primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Course
                </Button>
              </div>

              <Card>
                <CardContent className="py-6">
                  <div className="space-y-4">
                    {recentCourses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {course.students} students enrolled
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={course.status === 'Published' ? 'success' : 'warning'}>
                            {course.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl">User Management</h1>
                <Input placeholder="Search users..." className="w-64" />
              </div>

              <Card>
                <CardContent className="py-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-neutral-200 dark:border-neutral-800">
                          <th className="text-left py-3 px-4">Name</th>
                          <th className="text-left py-3 px-4">Email</th>
                          <th className="text-left py-3 px-4">Joined</th>
                          <th className="text-left py-3 px-4">Courses</th>
                          <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-b border-neutral-200 dark:border-neutral-800">
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{user.email}</td>
                            <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{user.joined}</td>
                            <td className="py-3 px-4">{user.courses}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
