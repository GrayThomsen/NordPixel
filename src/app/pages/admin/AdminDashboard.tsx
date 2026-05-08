'use client';

import { useState } from 'react';
import {
  Users, BookOpen, FileText, Calendar, TrendingUp, Settings,
  BarChart3, Plus, Edit, Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useLanguage } from '../../components/LanguageProvider';

export function AdminDashboard() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'users' | 'materials' | 'bookings' | 'settings'>('overview');
  const [adminMessage, setAdminMessage] = useState('');
  const [userSearch, setUserSearch] = useState('');

  const stats = [
    { label: language === 'da' ? 'Elever i alt' : 'Total Students', value: '5,234', change: '+12%', icon: Users, color: 'text-blue-500' },
    { label: language === 'da' ? 'Aktive kurser' : 'Active Courses', value: '24', change: '+3', icon: BookOpen, color: 'text-green-500' },
    { label: language === 'da' ? 'Materialer' : 'Materials', value: '156', change: '+8', icon: FileText, color: 'text-purple-500' },
    { label: language === 'da' ? 'Workshopbookinger' : 'Workshop Bookings', value: '42', change: '+15', icon: Calendar, color: 'text-[#F5A623]' },
  ];

  const [recentCourses, setRecentCourses] = useState([
    { id: 1, title: 'HTML & CSS Fundamentals', students: 1243, status: 'Published' },
    { id: 2, title: 'AI Literacy Basics', students: 892, status: 'Published' },
    { id: 3, title: 'JavaScript Advanced', students: 234, status: 'Draft' },
  ]);

  const [recentUsers, setRecentUsers] = useState([
    { id: 1, name: 'Maria Jensen', email: 'maria@example.com', joined: '2026-05-01', courses: 3 },
    { id: 2, name: 'Lars Nielsen', email: 'lars@example.com', joined: '2026-05-03', courses: 2 },
    { id: 3, name: 'Anna Sørensen', email: 'anna@example.com', joined: '2026-05-05', courses: 5 },
  ]);

  const filteredUsers = recentUsers.filter((user) => {
    const query = userSearch.toLowerCase();
    return user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query);
  });

  const getCourseTitle = (title: string) => {
    if (language !== 'da') {
      return title;
    }

    if (title === 'HTML & CSS Fundamentals') {
      return 'HTML & CSS Grundlæggende';
    }

    if (title === 'AI Literacy Basics') {
      return 'AI-forståelse Grundforløb';
    }

    if (title === 'JavaScript Advanced') {
      return 'JavaScript Avanceret';
    }

    if (title === 'New Course Draft') {
      return 'Nyt kursusudkast';
    }

    return title;
  };

  const addCourse = () => {
    const nextId = recentCourses.length ? Math.max(...recentCourses.map((course) => course.id)) + 1 : 1;
    setRecentCourses([
      { id: nextId, title: 'New Course Draft', students: 0, status: 'Draft' },
      ...recentCourses,
    ]);
    setAdminMessage(language === 'da' ? 'Tilføjede et nyt kursusudkast.' : 'Added a new draft course.');
  };

  const toggleCourseStatus = (courseId: number) => {
    setRecentCourses(recentCourses.map((course) => {
      if (course.id !== courseId) {
        return course;
      }

      return {
        ...course,
        status: course.status === 'Published' ? 'Draft' : 'Published',
      };
    }));
    setAdminMessage(language === 'da' ? 'Opdaterede kursusstatus.' : 'Updated course status.');
  };

  const deleteCourse = (courseId: number) => {
    setRecentCourses(recentCourses.filter((course) => course.id !== courseId));
    setAdminMessage(language === 'da' ? 'Fjernede kurset fra listen.' : 'Removed the course from the list.');
  };

  const promoteUser = (userId: number) => {
    setRecentUsers(recentUsers.map((user) => {
      if (user.id !== userId) {
        return user;
      }

      return {
        ...user,
        courses: user.courses + 1,
      };
    }));
    setAdminMessage(language === 'da' ? 'Opdaterede brugerens kursusantal.' : 'Updated user course count.');
  };

  const deleteUser = (userId: number) => {
    setRecentUsers(recentUsers.filter((user) => user.id !== userId));
    setAdminMessage(language === 'da' ? 'Fjernede brugeren fra listen.' : 'Removed the user from the list.');
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 p-6">
          <h2 className="text-2xl mb-8">{language === 'da' ? 'Adminpanel' : 'Admin Panel'}</h2>
          <nav className="space-y-2">
            {[
              { id: 'overview', label: language === 'da' ? 'Oversigt' : 'Overview', icon: BarChart3 },
              { id: 'courses', label: language === 'da' ? 'Kurser' : 'Courses', icon: BookOpen },
              { id: 'users', label: language === 'da' ? 'Brugere' : 'Users', icon: Users },
              { id: 'materials', label: language === 'da' ? 'Materialer' : 'Materials', icon: FileText },
              { id: 'bookings', label: language === 'da' ? 'Bookinger' : 'Bookings', icon: Calendar },
              { id: 'settings', label: language === 'da' ? 'Indstillinger' : 'Settings', icon: Settings },
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
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {adminMessage && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-300">
              {adminMessage}
            </div>
          )}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl mb-2">{language === 'da' ? 'Dashboardoversigt' : 'Dashboard Overview'}</h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Velkommen tilbage. Her er status på NordPixel i dag.' : "Welcome back! Here's what's happening with NordPixel today."}
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
                      <h3 className="text-xl">{language === 'da' ? 'Seneste kurser' : 'Recent Courses'}</h3>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab('courses')}>{language === 'da' ? 'Se alle' : 'View All'}</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentCourses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800">
                          <div>
                            <p className="font-medium">{getCourseTitle(course.title)}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {course.students} {language === 'da' ? 'elever' : 'students'}
                            </p>
                          </div>
                          <Badge variant={course.status === 'Published' ? 'success' : 'warning'}>
                            {course.status === 'Published' ? (language === 'da' ? 'Publiceret' : 'Published') : (language === 'da' ? 'Udkast' : 'Draft')}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl">{language === 'da' ? 'Seneste brugere' : 'Recent Users'}</h3>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab('users')}>{language === 'da' ? 'Se alle' : 'View All'}</Button>
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
                              {user.courses} {language === 'da' ? 'kurser' : 'courses'}
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
                <h1 className="text-4xl">{language === 'da' ? 'Administrér kurser' : 'Manage Courses'}</h1>
                <Button variant="primary" onClick={addCourse}>
                  <Plus className="w-4 h-4 mr-2" />
                  {language === 'da' ? 'Tilføj nyt kursus' : 'Add New Course'}
                </Button>
              </div>

              <Card>
                <CardContent className="py-6">
                  <div className="space-y-4">
                    {recentCourses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{getCourseTitle(course.title)}</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {course.students} {language === 'da' ? 'tilmeldte elever' : 'students enrolled'}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={course.status === 'Published' ? 'success' : 'warning'}>
                            {course.status === 'Published' ? (language === 'da' ? 'Publiceret' : 'Published') : (language === 'da' ? 'Udkast' : 'Draft')}
                          </Badge>
                          <Button variant="ghost" size="sm" onClick={() => toggleCourseStatus(course.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteCourse(course.id)}>
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
                <h1 className="text-4xl">{language === 'da' ? 'Brugeradministration' : 'User Management'}</h1>
                <Input
                  placeholder={language === 'da' ? 'Søg brugere...' : 'Search users...'}
                  className="w-64"
                  value={userSearch}
                  onChange={(event) => setUserSearch(event.target.value)}
                />
              </div>

              <Card>
                <CardContent className="py-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-neutral-200 dark:border-neutral-800">
                          <th className="text-left py-3 px-4">{language === 'da' ? 'Navn' : 'Name'}</th>
                          <th className="text-left py-3 px-4">{language === 'da' ? 'E-mail' : 'Email'}</th>
                          <th className="text-left py-3 px-4">{language === 'da' ? 'Oprettet' : 'Joined'}</th>
                          <th className="text-left py-3 px-4">{language === 'da' ? 'Kurser' : 'Courses'}</th>
                          <th className="text-left py-3 px-4">{language === 'da' ? 'Handlinger' : 'Actions'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map((user) => (
                          <tr key={user.id} className="border-b border-neutral-200 dark:border-neutral-800">
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{user.email}</td>
                            <td className="py-3 px-4 text-neutral-600 dark:text-neutral-400">{user.joined}</td>
                            <td className="py-3 px-4">{user.courses}</td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm" onClick={() => promoteUser(user.id)}>
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => deleteUser(user.id)}>
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

          {activeTab === 'materials' && (
            <div className="space-y-6">
              <h1 className="text-4xl">{language === 'da' ? 'Materialer' : 'Materials'}</h1>
              <Card>
                <CardContent className="py-6 text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Download af undervisningsmaterialer er live på den offentlige side og kan gennemgås fra siden med undervisningsmaterialer.' : 'Teaching material downloads are live on the public site and can be reviewed from the teaching materials page.'}
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h1 className="text-4xl">{language === 'da' ? 'Bookinger' : 'Bookings'}</h1>
              <Card>
                <CardContent className="py-6 text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Workshopformularer sender nu bekræftelser på klientsiden. Tilslut et backend-endpoint her, når forespørgsler skal gemmes permanent.' : 'Workshop booking forms now submit client-side confirmation states. Connect a backend endpoint here when you are ready to persist enquiries.'}
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h1 className="text-4xl">{language === 'da' ? 'Indstillinger' : 'Settings'}</h1>
              <Card>
                <CardContent className="py-6 text-neutral-600 dark:text-neutral-400">
                  {language === 'da' ? 'Præferencer som sprog og tema håndteres på de offentlige sider og gemmes i browserens lokale lagring.' : 'Site preferences such as language and theme are handled on the public-facing pages and stored in browser storage.'}
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
