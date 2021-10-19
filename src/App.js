import Home from './pages/home';
import About from './pages/About-us';
import Admin from './pages/Admin';
import Student from './pages/Student';
import Teacher from './pages/Teacher'
import Error from './pages/Error'
import AdminLogin from './pages/Login/adminLogin'
import ChatBot from './pages/chatBot';
import StudentLogin from './pages/Login/studentLogin'
import TeacherLogin from './pages/Login/teacherLogin'
import StudentSignup from './pages/SignUp/studentSignUp'
import TeacherSignup from './pages/SignUp/teacherSignUp'
import LoadingScreen from './pages/loading';
import ChatRoom from './pages/chat-room';
import ChatJoin from './pages/chat-join';
import {BrowserRouter as Router , Link , Switch , Route , Redirect} from 'react-router-dom';
import {useState,useEffect} from 'react';
function App() {
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    setTimeout(()=>setLoading(false),3000)
  },[])
  return (
   <>
   {loading===false ? (
<Router>
<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/Admin/:username" component={Admin} />
<Route exact path="/Teacher/:username" component={Teacher}/>
<Route exact path="/Student/:username" component={Student}/>
<Route exact path="/About" component={About}/>
<Route exact path="/AdminLogin" component={AdminLogin}/>
<Route exact path="/StudentLogin" component={StudentLogin}/>
<Route exact path="/TeacherLogin" component={TeacherLogin}/>
<Route exact path="/TeacherSignup" component={TeacherSignup}/>
<Route exact path="/StudentSignup" component={StudentSignup}/>
<Route exact path="/chatBot" component={ChatBot}/>
<Route exact path="/chat-join" component={ChatJoin}/> 
<Route exact path="/chat-room/:username/:room" component={ChatRoom}/>
<Route component={Error}></Route>
</Switch>
  </Router>
  ):(
<LoadingScreen />
  )}
  </>
  );
}

export default App;
