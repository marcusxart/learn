import { createBrowserRouter } from "react-router-dom";
import { AppMainLayout } from "l-min-components/src/components";
import Dashboard from "./pages/dashboard";
import Messages from "./pages/messages";
import Profile from "./pages/profile";
import ProfileEdit from "./pages/profile edit";
import OtherProfile from "./pages/other profile";
import ManageCourses from "./pages/manage courses";
import CreateCourse from "./pages/manage courses/create course";
import CourseDraft from "./pages/manage courses/course draft";
import CourseDetails from "./pages/manage courses/course details";
import ManageReport from "./pages/manage report";
import TestReports from "./pages/test reports";
import StudentsReport from "./pages/students report";
import StudentReportDetails from "./pages/student report details";
import StudentScoreAndComment from "./pages/student score and comment";
import ManageStudents from "./pages/manage students";
import StudentEnroll from "./pages/manage students/enroll";
import AddStudent from "./pages/manage students/add student";
import Announcements from "./pages/announcements";
import AnnouncementPermission from "./pages/announcements/permission";
import ArchiveStudents from "./pages/manage students/archive";
import CourseParticipants from "./pages/manage courses/course participants";
import EditCourse from "./pages/manage courses/edit course";
import AddTest from "./pages/manage courses/add test";
import PracticeReading from "./pages/manage courses/practice reading";
import WritingEssay from "./pages/manage courses/writing essay";
import SoundPlay from "./pages/manage courses/sound play";
import WordPlay from "./pages/manage courses/word play";

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
            { path: "permission", element: <AnnouncementPermission /> },
          ],
        },
        {
          path: "messages",
          children: [{ index: true, element: <Messages /> }],
        },
        {
          path: "manage-courses",
          children: [
            { index: true, element: <ManageCourses /> },
            { path: "create-course", element: <CreateCourse /> },
            { path: "edit-course", element: <EditCourse /> },
            { path: "draft", element: <CourseDraft /> },
            { path: "details", element: <CourseDetails /> },
            { path: "participants", element: <CourseParticipants /> },
            {
              path: "test",
              children: [
                { path: "add-test", element: <AddTest /> },
                { path: "writing-essay", element: <WritingEssay /> },
                { path: "sound-play", element: <SoundPlay /> },
                { path: "practice-reading", element: <PracticeReading /> },
                { path: "word-play", element: <WordPlay /> },
              ],
            },
          ],
        },
        {
          path: "manage-students",
          children: [
            { index: true, element: <ManageStudents /> },
            { path: "enroll", element: <StudentEnroll /> },
            { path: "add-student", element: <AddStudent /> },
            { path: "archive", element: <ArchiveStudents /> },
          ],
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
      ],
    },
  ],
  { basename: "/instructor" }
);

export default routes;
