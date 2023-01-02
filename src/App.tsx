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
          
        <Route  path="/career" element={<CareerPage/>}/>

        <Route  path="/contact" element={<ContactPage/>}/>

        <Route  path="/login" element={<Login/>}/>

        <Route  path="/forgotpassword" element={<ForgotPassword/>}/>

        <Route  path="/billpage" element={<BillPage/>}/>

        <Route  path="/billentry" element={<BillEntryPage/>}/>

        <Route  path="/studentaddmissionentry" element={<StudentAdmissionEntryBillPage/>}/>

      </Routes>
      
    </BrowserRouter>
       
    </IonApp>
  );
};

export default App;
