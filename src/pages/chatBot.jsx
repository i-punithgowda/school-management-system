import HeaderComponent from "./headerComponent";
import ChatUi from 'react-simple-chatbot';
import BotImg from '../images/chatBot.png';
import { ThemeProvider } from "styled-components";
import Attendance from './chatBot-components/attendance';
import Marks from './chatBot-components/Marks';
import Fees from './chatBot-components/fees';
import Appointment from './chatBot-components/appointment';
import { Link } from 'react-router-dom';
const ChatBot = () => {

  const theme = {
    background: '#f4f4f4',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'crimson',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#ffffff',
    botFontColor: '#000',
    botFontWeight: 'bold',
    userBubbleColor: '#106bde',
    userFontColor: '#fff',
  };


  return (
    <div className="chatBot" style={{height:'790px'}}>
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="Chatimg">
        <img src={BotImg} alt="" />
      </div>
      <div className="chatImgfooter">
        <p>Hello, Im Jarvis</p>
      </div>
      <div className="chatBotUi">
        <ThemeProvider theme={theme}>
          <ChatUi
            headerTitle="School Management System"
            botDelay={1000}

            enableSmoothScroll={true}
            steps={[
              {
                id: 'hello',
                message: 'Hello, Im Jarvis!',
                trigger: 'info',
              },
              {
                id: 'info',
                message: 'Select any one of following options :',
                trigger: 'options',
              },
              {
                id: 'options',
                options: [
                  { value: 1, label: 'New admission', trigger: 'new' },
                  { value: 2, label: 'Apply for job', trigger: 'job' },
                  { value: 3, label: 'Student attendance', trigger: 'attendance'},
                  { value: 4, label: 'Student fees', trigger: 'fees' },
                  { value: 5, label: 'Marks details', trigger: 'marks' },
                  { value: 6, label: 'Request for an appointment', trigger: 'appointment'},
                ],
              },
              {
                id: 'new',
                component: <div> <Link to="/StudentSignup" style={{ textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}>Click here for admissions</Link> </div>,
                trigger: "cancel",
              },
              {
                id: 'job',
                component: <div> <Link to="/TeacherSignup" style={{ textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }}>Click here to apply</Link> </div>,
                trigger: "cancel",
              },
              {
                id: 'attendance',
                message: 'Enter your register number',
                trigger: "regNo"
              },
              {
                id: "regNo",
                user: true,
                trigger: "fetch",
              }, {
                id: "fetch",
                component: <Attendance />,
                trigger: 'info',
              },
              {
                id: 'fees',
                message: 'Enter your register number',
                trigger: "getReg",
              },
              {
                id: 'getReg',
                user: true,
                trigger: 'fetchFees'
              },
              {
                id: 'fetchFees',
                component: <Fees />,
                trigger: 'info',
              },
              {
                id: 'marks',
                message: 'Enter your register number',
                trigger: 'regMarks'
              }, {
                id: 'regMarks',
                user: true,
                trigger: 'fetchMarks'
              }, {
                id: 'fetchMarks',
                component: <Marks />,
                trigger: 'info',
              },{
                id:'appointment',
                message:'Enter your email id',
                trigger:'getEmail',
              },{
                id:'getEmail',
                user: true,
                trigger:'setAppointment'
              },{
                id:'setAppointment',
                component: <Appointment />,
                trigger:'cancel'
              },
              {
                id: 'cancel',
                message: 'select other options ?',
                trigger: 'cancelYes',
              },
              {
                id: 'cancelYes',
                options: [
                  { value: 1, label: 'Yes', trigger: 'options' },
                ],
              },{
                id:'end',
                message:"...",
                end:true,
              }
            ]}
          />
        </ThemeProvider>
      </div>
    </div>

  );
}

export default ChatBot;