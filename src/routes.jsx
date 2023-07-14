import { createBrowserRouter } from "react-router-dom";
import { AppMainLayout } from "l-min-components/src/components";
import Dashboard from "./pages/dashboard";
import Messages from "./pages/messages";
import Profile from "./pages/profile";
import ProfileEdit from "./pages/profile edit";
import OtherProfile from "./pages/other profile";
import ManageCourses from "./pages/manage courses";
import CreateCourse from "./pages/create course";
import CourseDraft from "./pages/course draft";
import CourseDetails from "./pages/courseDetails";
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppMainLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        {
          path: "profile",
          children: [
            { index: true, element: <Profile /> },
            { path: ":id", element: <OtherProfile /> },
            { path: "edit", element: <ProfileEdit /> },
          ],
        },
        {
          path: "messages",
          children: [{ index: true, element: <Messages /> }],
        },
        {
          path: "manage-courses",
          children: [{ index: true, element: <ManageCourses /> }],
        },
        {
          path: "courses",
          children: [
            { path: "create-course", element: <CreateCourse /> },
            { path: "draft", element: <CourseDraft /> },
            { path: "details", element: <CourseDetails /> },
          ],
        },
      ],
    },
  ],
  { basename: "/instructor" }
);

export default routes;
