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
import ManageReport from "./pages/manage report";
import TestReports from "./pages/test reports";
import StudentsReport from "./pages/students report";
import StudentReportDetails from "./pages/student report details";
import StudentScoreAndComment from "./pages/student score and comment";
import Announcements from "./pages/announcements";
import CreateAnnouncement from "./pages/announcements/createAnnouncement";

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
          path: "announcements",
          children: [
            { index: true, element: <Announcements /> },
            { path: "create-announcement", element: <CreateAnnouncement /> },
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
          path: "reports",
          children: [
            { index: true, element: <ManageReport /> },
            { path: "test", element: <TestReports /> },
            {
              path: "students",
              children: [
                { index: true, element: <StudentsReport /> },
                { path: "details", element: <StudentReportDetails /> },
                {
                  path: "add-score-and-comment",
                  element: <StudentScoreAndComment />,
                },
              ],
            },
          ],
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
