import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './component/login/SignUp';
import Login from './component/login/Login';
import Sidebar from './component/sidebar/Sidebar';
import Afterlogin from './pages/Afterlogin';
import JobDetails from './pages/Jobs/jobs components/JobDetails';
import PostJobForm from './pages/adminPanel/jobs/PostJob';
import UserList from './pages/adminPanel/user/userList';
import JobManagement from './pages/adminPanel/jobs/JobManagement';
import AdminPanel from './pages/adminPanel/AdminPanel';
import ChatBot from './pages/ChatBot/ChatBot';
import ChatIcon from './pages/ChatBot/ChatIcon';
import PostResources from './pages/adminPanel/resources/PostResources';
import BookForm from './pages/adminPanel/resources/Bookform';
import CourseForm from './pages/adminPanel/resources/Courseform';
import BannerForm from './pages/adminPanel/resources/BannerForm';
import ResourceManagement from './pages/adminPanel/resources/ResourceMangement';
import SelfAssessment from './pages/SelfAssessment/SelfAssessment';
import SkillLevelContent from './pages/SelfAssessment/components/skillLevel/SkillLevel';

function App() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const location = useLocation();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const hideChatBotRoutes = ['/signup', '/login', '/ad'];
  const hideChatBot = hideChatBotRoutes.includes(location.pathname);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/after" element={<Afterlogin />} />
        <Route exact path="/job/:id" element={<JobDetails />} />
        <Route exact path="/ad" element={<AdminPanel />} />
        <Route exact path="/postJob" element={<PostJobForm />} />
        <Route exact path="/userList" element={<UserList />} />
        <Route exact path="/jobManage" element={<JobManagement />} />
        <Route exact path="/postRes" element={<PostResources />} />
        <Route exact path="/postBook" element={<BookForm />} />
        <Route exact path="/postCourse" element={<CourseForm />} />
        <Route exact path="/postBan" element={<BannerForm />} />
        <Route exact path="/ResManage" element={<ResourceManagement />} />
        <Route exact path="/self" element={<SelfAssessment />} />
        <Route path="/skill/:card" element={<SkillLevelContent />} />
      </Routes>
      {!hideChatBot && (
        <>
          {isChatOpen && <ChatBot isOpen={isChatOpen} toggleChat={toggleChat} />}
          <ChatIcon toggleChat={toggleChat} />
        </>
      )}
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
