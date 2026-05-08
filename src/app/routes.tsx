import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { DashboardPage } from "./pages/DashboardPage";
import { TeachingMaterialsPage } from "./pages/TeachingMaterialsPage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { index: true, Component: HomePage },
          { path: "courses", Component: CoursesPage },
          { path: "courses/:id", Component: CourseDetailPage },
          { path: "dashboard", Component: DashboardPage },
          { path: "teaching-materials", Component: TeachingMaterialsPage },
          { path: "workshops", Component: WorkshopsPage },
          { path: "about", Component: AboutPage },
          { path: "login", Component: LoginPage },
          { path: "signup", Component: SignupPage },
          { path: "admin", Component: AdminDashboard },
          { path: "*", Component: NotFoundPage },
        ],
      },
    ],
  },
]);
