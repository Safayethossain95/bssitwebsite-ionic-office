import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


import Page from './pages/Page';


// import '@ionic/react/css/core.css';


// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';


// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';

// react bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import AboutUsPage from './pages/AboutUsPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NoticePage from './pages/NoticePage';
import Scroll from './components/subComponents/ScrollToTop';
import CareerPage from './pages/CareerPage';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import BillPage from './pages/BillPage';
import BillEntryPage from './pages/BillEntryPage';
import StudentAdmissionEntryBillPage from './pages/StudentAdmissionEntryBillPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import StudentAgeCheckPage from './pages/StudentAgeCheckPage';
import SchoolTimingPage from './pages/SchoolTimingPage';
import TrackAdmissionPage from './pages/TrackAdmissionPage';
import KarateCoursePage from './pages/KarateCoursePage';
import FeeStructurePage from './pages/FeeStructurePage';
import NoticePageSingleDetail from './pages/NoticePageSingleDetail';
import UpcomingPageSingledetail from './pages/UpcomingPageSingledetail';
import OlderNoticeSingleDetailPage from './pages/OlderNoticeSingleDetailPage';
import CareerDetailsPage from './pages/CareerDetailsPage';
import StudentDashboardPage from './pages/dashboard/StudentDashboardPage';
import UsernameORPassCouldnotMatch from './components/subComponents/UsernameORPassCouldnotMatch';
import TeacherDashboardPage from './pages/dashboard/TeacherDashboardPage';
import StudentTeacherChattingPage from './pages/dashboard/StudentTeacherChattingPage';
import StudentDashHelpSupportPage from './pages/dashboard/StudentDashHelpSupportPage';
import StudentPhotoGallaryPage from './pages/dashboard/StudentPhotoGallaryPage';


setupIonicReact();

const App: React.FC = () => {
  
  return (
    <IonApp>
      
      <BrowserRouter>
      <Scroll/>
      <Routes>
        <Route  path="/" element={<Homepage />}/>
          
        <Route  path="/aboutus" element={<AboutUsPage />}/>
          
        <Route  path="/notice" element={<NoticePage/>}/>
        
        <Route  path="/notice/latest/:id" element={<NoticePageSingleDetail/>}/>
        
        <Route  path="/notice/upcoming/:id" element={<UpcomingPageSingledetail/>}/>
        
        <Route  path="/notice/older/:id" element={<OlderNoticeSingleDetailPage/>}/>
          
        <Route  path="/career" element={<CareerPage/>}/>
        
        <Route  path="/career/careerdetails/:id" element={<CareerDetailsPage/>}/>

        <Route  path="/contact" element={<ContactPage/>}/>

        <Route  path="/admission" element={<AdmissionPage/>}/>

        <Route  path="/studentagecheck" element={<StudentAgeCheckPage/>}/>
        
        <Route  path="/schooltiming" element={<SchoolTimingPage/>}/>
        
        <Route  path="/trackadmission" element={<TrackAdmissionPage/>}/>

        <Route  path="/karatecourse" element={<KarateCoursePage/>}/>
        
        <Route  path="/feestructure" element={<FeeStructurePage/>}/>

        <Route  path="/login" element={<Login/>}/>

        <Route  path="/forgotpassword" element={<ForgotPassword/>}/>

        <Route  path="/billpage" element={<BillPage/>}/>

        <Route  path="/billentry" element={<BillEntryPage/>}/>
        
        <Route  path="/studashboard" element={<StudentDashboardPage/>}/>            
        
        <Route  path="/studashboard/classteacher" element={<StudentTeacherChattingPage/>}/>            
                  
        <Route  path="/studashboard/helpandsupport" element={<StudentDashHelpSupportPage/>}/>            

        <Route  path="/teacherdashboard" element={<TeacherDashboardPage/>}/>
        
        <Route  path="/studentphotogallery" element={<StudentPhotoGallaryPage/>}/>

        <Route  path="/studentaddmissionentry" element={<StudentAdmissionEntryBillPage/>}/>
        
        <Route  path="/userpassnotmatched" element={<UsernameORPassCouldnotMatch/>}/>

      </Routes>
      
    </BrowserRouter>
       
    </IonApp>
  );
};

export default App;
