const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const multer = require('multer');


function emailSender(send_to, subject, message) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        pool: true,
        auth: {
            user: 'impuni007@gmail.com',
            pass: 'Deactivsoon007#2#'
        }
    });

    var mailOptions = {
        from: 'impuni007@gmail.com',
        to: send_to,
        subject: subject,
        html: `
   <div className="container">
   <h1>Hello</h1>
   <p>${message}<p/>
   <h4>-regards XYZ school</h4>
   </div>
   `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            //console.log('Email sent: ' + info.response);
            transporter.close();
        }
    });
}



function emailSenderAll(send_to, subject, message) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        pool: true,
        auth: {
            user: 'impuni007@gmail.com',
            pass: 'Deactivsoon007#2#'
        }
    });

    var mailOptions = {
        from: 'impuni007@gmail.com',
        to: send_to,
        subject: subject,
        html: `
   <div className="container">
   <h1>Hello</h1>
   <p>${message}<p/>
   <h4>-regards XYZ school</h4>
   </div>
   `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            //console.log('Email sent: ' + info.response);
        }
    });
}

function emailSenderFile(send_to, subject, message) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        pool: true,
        auth: {
            user: 'impuni007@gmail.com',
            pass: 'Deactivsoon007#2#'
        }
    });



    var mailOptions = {
        from: 'impuni007@gmail.com',
        to: send_to,
        subject: subject,
        attachments: [{
            filename: 'enc.pdf',
            path: __dirname + "/enc.pdf",
        }

        ],
        html: `
       <h3>${message}</h3>
       `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            //console.log('Email sent: ' + info.response);
        }
    });
}




const app = express();
app.use(express.json());
app.use(cors());
let date = new Date()
let timestamp = date.getTime()

//pdf 



const HummusRecipe = require('hummus-recipe');
var fs = require('fs');
let options = { format: 'A4', margin: '200px' };
var html_to_pdf = require('html-pdf-node');
const { send } = require('process');
var schPath = 'school.jpg';




var files = ['some.pdf', 'enc.pdf'];

function deleteFiles(files) {
    for (const file of files) {
        fs.unlink((file), err => {
            if (err) throw err;
        });
    };
}


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "punith123",
    database: "school_db"
})

app.post('/adminLogin', (req, res) => {                 //adminLogin
    let username = req.body.username
    let password = req.body.password
console.log(req.body);
    db.query('select * from admin_db where username=?', [username], (err, result) => {
        if (err) {
            res.send(err);
        } else if (result.length > 0) {
            if (result[0].password === password) {
                res.send(true);
            } else {
                res.send("Incorrect password!, try again")
            }
        } else {
            res.send("Username doesnt exist!, try again");
        }
        req.body = "";
    })
})


app.post('/teacher-signup', (req, res) => {
    let name = req.body.name;                                                         //teacher Signup
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let dob = req.body.dob;
    let experience = req.body.experience;
    let subject = req.body.subject;
    let phone = req.body.phone
    let approve = "No"
    let Esubject = "Applied succesfully"
    let message = `
Hey ${name} you have applied succesfully for ${subject} teacher, You will hear from us once your account has been approved
`

    db.query('insert into teacher_db (name,username,password,email,subject,experience,dob,phone,approve) values (?,?,?,?,?,?,?,?,?)', [name, username, password, email, subject, experience, dob, phone, approve], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(true)
            emailSender(email, Esubject, message)
        }
    })

})

app.post('/check-teacher-username', (req, res) => {
    let username = req.body.username;                                                             //check whether username exists or not
    db.query('select * from teacher_db where username= ?', [username], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            if (result.length > 0) {
                res.send(true)
            } else {
                res.send(false)
            }
        }
    })
})


app.post('/teacher-login', (req, res) => {                          //teacher-login
    let username = req.body.username;
    let password = req.body.password;

    db.query('select * from teacher_db where username=?', [username], (err, result) => {
        if (err) {
            res.send(err);
        } else if (result.length > 0) {
            if (result[0].approve === "No") {
                res.send("Your account has not been approved yet! , wait for some try before trying");
            } else if (result[0].approve === "Yes") {
                if (result[0].password != password) {
                    res.send("Incorrect password!, try again")
                } else {
                    res.send(true)
                }
            }
        } else {
            res.send("Username doesnt exist!, try again");
        }
        req.body = "";
    })
})


app.post('/teacher-name', (req, res) => {
    let username = req.body.username                                                                         //getTeacherdata for cards
    db.query('select * from teacher_db where username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured try after some time')
        } else {
            let data = [
                {
                    name: result[0].name,
                    phone: result[0].phone,
                    salary: result[0].salary,
                    joindate: result[0].joindate,
                    subject: result[0].subject
                }
            ]
            res.send(data);
        }
    })
})

app.post('/check-student-username', (req, res) => {
    username = req.body.username;                                                                 // check student username
    db.query('select * from student_db where username= ?', [username], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            if (result.length > 0) {
                res.send(true)
            } else {
                res.send(false)
            }
        }
    })
})



app.post('/student-signup', (req, res) => {
    const name = req.body.name
    const fathername = req.body.fathername
    const username = req.body.username
    const password = req.body.password
    const caste = req.body.caste
    const dob = req.body.dob
    const studentClass = req.body.studentClass
    const phone = req.body.phone
    const religion = req.body.religion
    const percent = req.body.percent
    const email = req.body.email
    const approve = 'No'
    const subject = "Applied succesfully"
    const message = `Hey ${name}, you have succefully applied for ${studentClass}th standard.. You will hear from us once your application has been approved`
    db.query('insert into student_db (name,username,password,email,class,percent,dob,phone,approve,fathername,religion,caste) values (?,?,?,?,?,?,?,?,?,?,?,?)',
        [name, username, password, email, studentClass, percent, dob, phone, approve, fathername, religion, caste], (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(true)
                emailSender(email, subject, message)
            }
        })


})

app.post('/student-login', (req, res) => {
    const username = req.body.username;                                                      //Student login
    const password = req.body.password;

    db.query('select * from student_db where username=?', [username], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length > 0) {
            if (result[0].approve === "No") {
                res.send("your account hasn't been approved yet! please try again after sometime.")
            } else if (result[0].password === password) {
                res.send(true)
            } else {
                res.send("Wrong password! Please try again")
            }
        } else {
            res.send('account not found');
        }
    })
})


app.post('/student-name', (req, res) => {
    let username = req.body.username                                                                         //getTeacherdata for cards
    db.query('select * from student_db where username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured try after some time')
        } else {
            let data = [
                {
                    name: result[0].name,
                    phone: result[0].phone,
                    fee: result[0].fee,
                    roll: result[0].rollno,
                    paid: result[0].paid,
                    class: result[0].class
                }
            ]
            res.send(data);
        }
    })
})


//adminThings 



app.post('/fetch-all-details', (req, res) => {                                                         //dashboard
    let sql1 = 'SELECT count(id) as teacher_total from teacher_db where approve="Yes"'
    let sql2 = 'SELECT count(id) as student_total from student_db where approve="Yes"'
    let sql3 = 'SELECT count(id) as teacher_pending from teacher_db where approve="NO" '
    let sql4 = 'SELECT count(id) as student_pending from student_db where approve="NO" '
    let result1 = ''
    let result2 = ''
    let results3 = ''
    let result4 = ''

    db.query(sql1, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            result1 = result;
        }
    })

    db.query(sql2, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            result2 = result;
        }
    })

    db.query(sql3, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            result3 = result;
        }
    })


    db.query(sql4, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            result4 = result;
            let response = [result1[0], result2[0], result3[0], result4[0]];
            res.send(response)
        }
    })

})


app.post('/get-pendingTeacher', (req, res) => {                                         // fetch for teacher approval
    let userdata = []
    db.query('select * from teacher_db where approve="NO"', (err, result) => {
        if (err) {
            console.log(err)
        }

        if (result.length > 0) {
            res.send(result);

        } else {
            res.send("false");
        }
    })
})

app.post('/get-pendingStudent', (req, res) => {                                         // fetch for teacher approval
    let userdata = []
    db.query('select * from student_db where approve="NO"', (err, result) => {
        if (err) {
            console.log(err)
        }

        if (result.length > 0) {
            res.send(result);

        } else {
            res.send("false");
        }
    })
})

app.put('/approve-teacher', (req, res) => {                     //admin approves teacher
    let username = req.body.username;
    let salary = req.body.salary
    let email = req.body.email
    let subject = 'Application approved'
    let message = `
    hey ${username} your application has been approved by XYZ  school. please visit our branch with your Id proof within a week 
    `
    db.query('update teacher_db set approve="Yes", joindate=' + timestamp + ', salary=' + salary + '  where username=?', [username], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
            emailSender(email, subject, message)
        }
    })
})

app.delete('/reject-teacher/:id', (req, res) => {                           //admin rejects teacher
    let username = req.params.id
    let email = req.body.email
    let subject = 'Application rejected'
    let message = `
    Hey ${username} your application has been rejected by XYZ school due to unknown reasons. please visit branch  id proofs to apply for the job.
    `
    db.query('delete from teacher_db  where username=?', [username], (err, result) => {
        if (err) {
            res.send('unexpected error occured');
        } else {
            res.send(true)
            emailSender(email, subject, message);
        }
    })
})

app.delete('/delete-teacher/:id', (req, res) => {                           //admin deletes teacher
    let username = req.params.id
    db.query('delete from teacher_db  where username=?', [username], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(true)
        }
    })
})



app.post('/get-lastRoll', (req, res) => {                                               //get roll no 
    db.query('select * from student_db order by rollno desc limit 1', (err, result) => {
        if (err) {
            res.send("Unexpected error occured, please try again")
        } else {
            res.send(result[0].rollno);
        }
    })
})


app.put('/approve-student', (req, res) => {                     //admin approves teacher
    let username = req.body.username;
    let fees = req.body.fees;
    let rollno = req.body.rollno
    let paid = 0
    let email = req.body.email
    let subject = "Appplication approved"
    let message = `
    Hey your application has been approved! now you have joined XYZ school.. your annual fees is ${fees}. please pay before 15 days. you can login using your username and password
    `
    db.query('update student_db set approve="Yes", rollno=' + rollno + ', fee=' + fees + ', paid=' + paid + '  where username=?', [username], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
            emailSender(email, subject, message)
        }
    })
})

app.delete('/reject-student/:id', (req, res) => {                           //admin rejects student
    let username = req.params.id
    let email = req.body.email
    let subject = 'Application rejected'
    let message = `
   Hey ${username} your application has been rejected by XYZ school due to unknown reasons. please visit branch with marks card and id proofs for admission
   `
    db.query('delete from student_db  where username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured');
        } else {
            res.send(true)
            emailSender(email, subject, message)
        }
    })
})



// admin deletes teacher 

app.delete('/delete-student/:id', (req, res) => {                           //admin rejects student
    let username = req.params.id
    db.query('delete from student_db  where username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured');
        } else {
            res.send(true)
        }
    })
})


//view teacher

app.post('/get-teacher-details', (req, res) => {
    let username = req.body.username
    db.query('select * from teacher_db where approve="Yes" and username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured');
        }

        if (result.length > 0) {
            res.send(true)

        } else {
            res.send(false);
        }

    })
})


app.post('/view-all-teachers', (req, res) => {
    db.query('select * from teacher_db where approve="Yes"', (err, result) => {
        if (err) {
            res.send('Unexpected error occured');
        }

        if (result.length > 0) {
            res.send(result)

        } else {
            res.send(false);
        }

    })
})


//add new teacher
app.post('/insert-new-teacher', (req, res) => {
    let name = req.body.name
    let username = req.body.username
    let password = req.body.password
    let subject = req.body.subject
    let experience = req.body.experience
    let dob = req.body.dob
    let email = req.body.email
    let phone = req.body.phone
    let approve = req.body.approve
    let salary = req.body.salary
    let joindate = req.body.joindate
    let sub = 'Welcome to Eps'
    let msg = `
Hey ${name}, welcome to EPS! you have been selected as ${subject} teacher. your username is ${username} and password is ${password}. You can login to our webapp using these credentials. 
`
    db.query('insert into teacher_db (name,username,password,subject,experience,dob,email,phone,approve,salary,joindate) values (?,?,?,?,?,?,?,?,?,?,?)', [name, username, password, subject, experience, dob, email, phone, approve, salary, joindate], (err, result) => {

        if (err) {
            console.log(err)
        } else {
            res.send(true)
            emailSender(email, sub, msg)
        }
    })

})
//fetch teacher details for updation
app.post('/fetch-teacher-details', (req, res) => {
    let username = req.body.username;
    db.query('select * from teacher_db where username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured')
        }
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send(false)
        }
    })
})
//update teacher details
app.put('/update-teacher', (req, res) => {
    let name = req.body.name
    let username = req.body.username
    let email = req.body.email
    let subject = req.body.subject
    let phone = req.body.phone
    let salary = req.body.salary
    let searchVal = req.body.searchVal

    db.query('update teacher_db set name=? , username=? , email=? , subject=? , phone=? , salary=? where username=?', [name, username, email, subject, phone, salary, searchVal], (err, result) => {
        if (err) {
            res.send('Unexpected error occured')
        } else {
            res.send(true)

        }
    })
})
//Admin-student-things


app.post('/get-student-details', (req, res) => {
    let username = req.body.username
    db.query('select * from student_db where approve="Yes" and username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured');
        }

        if (result.length > 0) {
            res.send(true);

        } else {
            res.send(false);
        }

    })
})


// view -all students

app.post('/view-all-students', (req, res) => {
    db.query('select * from student_db where approve="Yes" ', (err, result) => {
        if (err) {
            res.send('Unexpected error occured');
        }

        if (result.length > 0) {
            res.send(result);

        } else {
            res.send(false);
        }

    })
})



// admin adds student
app.post('/add-student', (req, res) => {
    let name = req.body.name
    let fathername = req.body.fathername
    let username = req.body.username
    let password = req.body.password
    let caste = req.body.caste
    let phone = req.body.phone
    let religion = req.body.religion
    let percent = req.body.percent
    let email = req.body.email
    let approve = req.body.approve
    let rollno = req.body.rollno
    let fee = req.body.fee
    let dob = req.body.dob
    let stuClass = req.body.class
    let paid = req.body.paid
    let sub = 'Welcome to EPS'
    let msg = `
    Hey ${name}, welcome to EPS. you have been admitted to class ${stuClass}. your username and password are attached to this email. you can login to our web app using these credentials. Announcements will be posted in our web app. Your username is ${username} and password is ${password}
    `
    db.query('insert into student_db (name,fathername,class,phone,email,caste,dob,username,password,religion,percent,approve,rollno,fee,paid) value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [name, fathername, stuClass, phone, email, caste, dob, username, password, religion, percent, approve, rollno, fee, paid], (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(true)
                emailSender(email, sub, msg)
            }
        })

})
//admin fetch student details for updation

app.post('/fetch-student-details', (req, res) => {
    let username = req.body.username;
    db.query('select * from student_db where username=?', [username], (err, result) => {
        if (err) {
            res.send('Unexpected error occured')
        }
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send(false)
        }
    })
})
//admin updates student

app.put('/update-student', (req, res) => {
    let name = req.body.name
    let username = req.body.username
    let email = req.body.email
    let studentClass = req.body.studentClass
    let phone = req.body.phone
    let fee = req.body.fee
    let searchVal = req.body.searchVal

    db.query('update student_db set name=? , username=? , email=? , class=? , phone=? , fee=? where username=?', [name, username, email, studentClass, phone, fee, searchVal], (err, result) => {
        if (err) {
            res.send('Unexpected error occured')
        } else {
            res.send(true)

        }
    })
})

//admin fetch fees
app.post('/fetch-fees', (req, res) => {
    let studentClass = req.body.class;
    db.query('select * from student_db where class=?', [studentClass], (err, result) => {
        if (err) {
            res.send('Unexpected error occured')
        } else {
            res.send(result);
        }
    })
})
//teacher save attendance

app.post('/save-attendance', (req, res) => {
    let sClass = req.body.class
    let date = req.body.date
    let status = req.body.status
    let subject = req.body.subject
    let rollno = req.body.rollno
    db.query('insert into attendance_db (class,date,status,subject,rollno) values (?,?,?,?,?)', [sClass, date, status, subject, rollno], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(true);
        }
    })
})
// fetch student attendance
app.post('/fetch-student-attendance', (req, res) => {
    const rollno = req.body.rollno
    db.query('select * from attendance_db where rollno=?', [rollno], (err, result) => {
        if (err) {
            res.send(err)
        }

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send(false)
        }
    })
})
//get attendance by date
app.post('/get-attendance-by-date', (req, res) => {
    let date = req.body.date;
    let roll = req.body.roll;
    db.query('select * from attendance_db where rollno=? and date=?', [roll, date], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send(false)
        }
    })
})
//admin send notification for all

app.post('/send-notification', (req, res) => {
    let msg = req.body.msg
    let subject = "Notification from XYZ public school"
    let emails = [];
    db.query('select email from student_db ', (err, result) => {
        if (err) {
            console.log(err)
        }

        if (result.length > 0) {

            for (var i = 0; i < result.length; i++) {
                emails.push(result[i].email)

            } emailSenderAll(emails, subject, msg)
            res.send(true);
        } else {
            res.send(false)
        }


    })
})

//admin send notification class wise
app.post('/send-notification-to-class', (req, res) => {
    let sClass = req.body.class
    let msg = req.body.msg
    let subject = "Notification from XYZ public school"
    db.query('select email from student_db where class=?', [sClass], (err, result) => {
        if (err) {
            console.log(err)
        }

        if (result.length > 0) {

            for (var i = 0; i < result.length; i++) {
                emailSender(result[i].email, subject, msg)
            }
            res.send(true);
        } else {
            res.send(false)
        }

    })
})



app.post('/send-notification', (req, res) => {
    let msg = req.body.msg
    let subject = "Notification from XYZ public school"
    db.query('select email from student_db ', (err, result) => {
        if (err) {
            console.log(err)
        }

        if (result.length > 0) {

            for (var i = 0; i < result.length; i++) {
                emailSender(result[i].email, subject, msg)
            }
            res.send(true);
        } else {
            res.send(false)
        }
    })
})                                                                          // get last token num

app.post('/get-token', (req, res) => {
    db.query('Select tokennumber FROM classroom_db order by tokennumber desc limit 1;', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result[0].tokennumber)
        }
    })
})
// teacher saves data to classroom
app.post('/save-classroom-file', (req, res) => {
    let sClass = req.body.class;
    let title = req.body.title
    let msg = req.body.msg
    let type = req.body.type
    let link = req.body.link
    let date = req.body.date
    let subject = req.body.subject
    let token = req.body.token
    let Esubject = `Classroom notification`
    let message = `New ${subject} ${type} has been uploaded, open classroom to view it.
    `

    db.query('insert into classroom_db (class,subject,filelink,title,message,type,tokennumber,date) values (?,?,?,?,?,?,?,?)', [sClass, subject, link, title, msg, type, token, date], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(true);
            db.query('select email from student_db where class= ?', [sClass], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    for (var i = 0; i < result.length; i++) {
                        let email = result[i].email
                        emailSender(email, Esubject, message);
                    }
                }
            })
        }
    })
})

//fetch details from classroom_db (count)

app.post('/fetch-classroom-details', (req, res) => {
    let roll = req.body.rollno
    let sClass = ''
    let English = ''
    let Kannada = ''
    let Hindi = ''
    let Maths = ''
    let Science = ''
    let Social = ''
    let GeneralKnowledge = ''
    let PhysicalEducation = ''
    let arrayofCount = []
    db.query('select class from student_db where rollno=?', [roll], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            sClass = result[0].class
            db.query('select * from classroom_db where class=? and subject=?', [sClass, "Science"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    Science = result.length;
                    arrayofCount.push({
                        "Science": Science
                    })
                }
            })

            db.query('select * from classroom_db where class=? and subject=?', [sClass, "General knowledge"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    GeneralKnowledge = result.length
                    arrayofCount.push({
                        "GeneralKnowledge": GeneralKnowledge
                    })
                }
            })

            db.query('select * from classroom_db where class=? and subject=?', [sClass, "English"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    English = result.length
                    arrayofCount.push({
                        "English": English
                    })
                }
            })

            db.query('select * from classroom_db where class=? and subject=?', [sClass, "Kannada"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    Kannada = result.length
                    arrayofCount.push({
                        "Kannada": Kannada
                    })
                }
            })

            db.query('select * from classroom_db where class=? and subject=?', [sClass, "Hindi"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    Hindi = result.length
                    arrayofCount.push({
                        "Hindi": Hindi
                    })
                }
            })

            db.query('select * from classroom_db where class=? and subject=?', [sClass, "Maths"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    Maths = result.length
                    arrayofCount.push({
                        "Maths": Maths
                    })
                }
            })

            db.query('select * from classroom_db where class=? and subject=?', [sClass, "Social"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    Social = result.length
                    arrayofCount.push({
                        "Social": Social
                    })
                }
            })
            db.query('select * from classroom_db where class=? and subject=?', [sClass, "Physical Education"], (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    PhysicalEducation = result.length;
                    arrayofCount.push({
                        "PhysicalEducation": PhysicalEducation
                    })
                    res.send(arrayofCount);
                }
            })

        }
    })
})

app.post('/fetch-classroom-subjectwise', (req, res) => {
    let sub = req.body.subject
    let sClass = '';
    let rollno = req.body.roll
    db.query('select class from student_db where rollno=? ', [rollno], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            sClass = result[0].class;
            db.query('select * from classroom_db where subject=? and class=? ', [sub, sClass], (err, result) => {
                if (err) {
                    res.send(false)
                } else {
                    res.send(result)
                }
            })
        }
    })
})


app.post('/get-students', (req, res) => {
    let sClass = req.body.class;
    db.query('select name from student_db where approve=? and class=? ', ['Yes', sClass], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(result);
        }
    })
})


app.post('/insert-marks', (req, res) => {
    let sClass = req.body.class;
    let Sname = req.body.name;
    let exam = req.body.exam;
    let totalM = req.body.totalMarks;
    let scoredW = req.body.scored;
    let internalMarks = req.body.internalMarks;
    let scoredTotal = req.body.scoredTotal;
    let subject = req.body.subject;

    db.query('insert into result_db (class,name,exam,ttlMarks,scored,internal_marks,total_scored,subject) values (?,?,?,?,?,?,?,?)', [sClass, Sname, exam, totalM, scoredW, internalMarks, scoredTotal, subject], (err, result) => {
        if (err) {
            res.send(false)
        } else {
            res.send(true);
        }
    })
})

app.post('/get-student-result', (req, res) => {
    let sclass = req.body.class;
    let exam = req.body.exam;
    let name = req.body.name;

    db.query('select * from result_db where (name=? and class=?) and exam=? ', [name, sclass, exam], (err, result) => {
        if (err) {
            res.send(false)
        } else {
            res.send(result);
        }
    })
})

app.post('/send-otp', (req, res) => {
    let username = req.body.username;
    let password = '';
    for (var i = 0; i < 6; i++) {
        let digit = Math.floor(Math.random() * 9);
        password += digit;
    }
    let sub = "One Time Password"
    let msg = `
    Hey ${username}, OTP to change your password is ${password}
    `
    db.query('select * from student_db where username=?', [username], (err, result) => {
        if (err) {
            res.send('Err')
        }
        if (result.length > 0) {
            emailSender(result[0].email, sub, msg)
            res.send(password)
        } else {
            res.send(false)
        }
    })
})


app.put('/student-pass-update', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    db.query('update student_db set password=? where username=?', [password, username], (err, result) => {
        if (err) {
            res.send(false)
        } else {
            res.send(true)
        }
    })
})

app.post('/send-otp-teacher', (req, res) => {
    let username = req.body.username;
    let password = '';
    for (var i = 0; i < 6; i++) {
        let digit = Math.floor(Math.random() * 9);
        password += digit;
    }
    let sub = "One Time Password"
    let msg = `
    Hey ${username}, OTP to change your password is ${password}
    `
    db.query('select * from teacher_db where username=?', [username], (err, result) => {
        if (err) {
            res.send('Err')
        }
        if (result.length > 0) {
            emailSender(result[0].email, sub, msg)
            res.send(password)
        } else {
            res.send(false)
        }
    })
})


app.put('/teacher-pass-update', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    db.query('update teacher_db set password=? where username=?', [password, username], (err, result) => {
        if (err) {
            res.send(false)
        } else {
            res.send(true)
        }
    })
})

function generatePDf(file, pass, email, subject, message) {
    html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
        fs.writeFile('some.pdf', pdfBuffer, (err) => {
            if (err) {
                return false;
            } else {
                const pdfDoc = new HummusRecipe('some.pdf', 'enc.pdf');

                pdfDoc
                    .encrypt({
                        userPassword: pass,
                        ownerPassword: pass,
                        userProtectionFlag: 4
                    })
                    .endPDF();
                emailSenderFile(email, subject, message)
            }
        });
    })
}



app.post('/fetch-student-attendance-chatbot', (req, res) => {
    const rollno = req.body.rollno;
    let passwordPdf = '';
    let email = '';

    db.query('select * from student_db where rollno=?', [rollno], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length <= 0) {
            res.send(false);
        } else if (result.length > 0) {
            res.send(true);
            passwordPdf = result[0].password;
            email = result[0].email;
            db.query('select * from attendance_db where rollno=?', [rollno], (err, result) => {
                if (err) {
                    res.send(err)
                }

                if (result.length > 0) {

                    let data = [];
                    data = result;
                    let file = {
                        content: `
                    <div>
                    <h1 style="color:green;text-align:center">XYZ School</h1>
                    <img src="https://itsmepunith.github.io/images/logo.png">
                   <label>Roll no</label> : <label>${rollno}<label> <br />
                    <div class="tableData">
                    <table style="text-align:center;border-collapse: collapse;font-size:1.3rem;margin-left:200px">
                    <thead>
                      <tr>
                        <th style="border: 1px solid black;padding:10px;">Date</th>
                        <th style="border: 1px solid black;padding:10px;">Status</th>
                        <th style="border: 1px solid black;">Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                ${data.map(d => `
                <tr>
                <td style="border: 1px solid black;padding:10px;">${d.date}</td>
                <td style="border: 1px solid black;padding:10px;">${d.status}</td>
                <td style="border: 1px solid black;padding:10px;">${d.subject}</td>
                </tr>
                `).join("")}
                </tbody>
                </table>
                    </div>
                    </div>
                    `};
                    let subject = 'Attendance details';
                    let message = `Your password is the password for pdf`
                    generatePDf(file, passwordPdf, email, subject, message);

                }
            })
        }
    })

})







app.post('/fetch-student-fees-chatbot', (req, res) => {
    const rollno = req.body.rollno;
    let passwordPdf = '';
    let email = '';

    db.query('select * from student_db where rollno=?', [rollno], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length <= 0) {
            res.send(false);
        } else if (result.length > 0) {
            res.send(true);
            passwordPdf = result[0].password;
            email = result[0].email;
            let pending = result[0].fee - result[0].paid;
            console.log(result);
            let file = {
                content: `
                    <div>
                    <h1 style="color:green;text-align:center">XYZ School</h1>
                    <img src="https://itsmepunith.github.io/images/logo.png">
                   <label>Roll no</label> : <label>${rollno}<label> <br />
                    <div class="tableData">
                    <table style="text-align:center;border-collapse: collapse;font-size:1.3rem;margin-left:200px">
                    <thead>
                      <tr>
                        <th style="border: 1px solid black;padding:10px;">Total Fees</th>
                        <th style="border: 1px solid black;padding:10px;">Paid fees</th>
                        <th style="border: 1px solid black;">Pending fees</th>
                      </tr>
                    </thead>
                    <tbody>
                <tr>
                <td style="border: 1px solid black;padding:10px;">${result[0].fee}</td>
                <td style="border: 1px solid black;padding:10px;">${result[0].paid}</td>
                <td style="border: 1px solid black;padding:10px;">${pending}</td>
                </tr>
                </tbody>
                </table>
                    </div>
                    </div>
                    `};
            let subject = 'Fees details';
            let message = `Your password is the password for pdf`
            generatePDf(file, passwordPdf, email, subject, message);
        }
    })
})


app.post('/fetch-marks-bot', (req, res) => {
    let name = '';
    let Sclass = '';
    let email = '';
    let passwordPdf = '';

    db.query('select * from student_db where rollNo=?', [req.body.regNo], (err, result) => {
        if (err) {
            res.send(false);
        }

        if (result.length <= 0) {
            res.send(false);
        } else if (result.length >= 0) {
            name = result[0].name;
            Sclass = result[0].class;
            email = result[0].email;
            passwordPdf = result[0].password;
            db.query('select * from result_db where name=? and class=?', [name, Sclass], (err, result) => {
                if (result.length >= 0) {
                    res.send(true);
                    let data = [];
                    data = result;
                    let file = {
                        content: `
                <div>
                <h1 style="color:green;text-align:center">XYZ School</h1>
                <img src="https://itsmepunith.github.io/images/logo.png">
               <label>Roll no</label> : <label>${req.body.regNo}<label> <br />
                <div class="tableData">
                <table style="text-align:center;border-collapse: collapse;font-size:1.3rem;margin-left:100px">
                <thead>
                  <tr>
                    <th style="border: 1px solid black;padding:10px;">Exam name</th>
                    <th style="border: 1px solid black;padding:10px;">Subject</th>
                    <th style="border: 1px solid black;">Total marks</th>
                    <th style="border: 1px solid black;">Theory</th>
                    <th style="border: 1px solid black;">Internal Marks</th>
                    <th style="border: 1px solid black;">Total</th>
                  </tr>
                </thead>
                <tbody>
                
            ${data.map(d => `
            <tr>
            <td style="border: 1px solid black;padding:10px;">${d.exam}</td>
            <td style="border: 1px solid black;padding:10px;">${d.subject}</td>
            <td style="border: 1px solid black;padding:10px;">${d.ttlMarks}</td>
            <td style="border: 1px solid black;padding:10px;">${d.scored}</td>
            <td style="border: 1px solid black;padding:10px;">${d.internal_marks}</td>
            <td style="border: 1px solid black;padding:10px;">${d.total_scored}</td>
            </tr>
            `).join("")}
            </tbody>
            </table>
                </div>
                </div>
                `};
                    let subject = 'Marks Details';
                    let message = `Your password is the password for pdf`
                    generatePDf(file, passwordPdf, email, subject, message);
                }
                else if (result.length <= 0) {
                    res.send(false);
                }
            })
        }
    })
})

app.post('/fetchTeacherNames', (req, res) => {
    db.query('select name from teacher_db ', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/insert-appointment', (req, res) => {
    let teacher = req.body.teacher;
    let date = req.body.date;
    let email = req.body.email;
    db.query('insert into appointment_db (date,teacher,email,status) values (?,?,?,?)', [date, teacher, email, "Pending"], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(true);
        }
    })
})


app.post('/fetch-appointments', (req, res) => {
    let name = req.body.name;
    let jsonArray = [];
    db.query("SELECT * from appointment_db where teacher=? and status=?", [name, "Pending"], (err, result) => {
        if (err) {
            res.send(false)
        }

        else if (result.length <= 0) {
            res.send(false)
        } else if (result.length > 0) {
            res.send(result);
        }
    })
})

app.put('/accept-appointment', (req, res) => {
    let email = req.body.email;
    let teacher = req.body.teacher;
    let date = req.body.date;
    let subject = `Appointment accepted`;
    let message = `Dear parent your request for appointment to meet mr/mrs ${teacher} has been accepted. you can visit on ${date}.  `
    console.log(req.body);
    db.query('update appointment_db set status=? where teacher=? and date=?', ["Accepted", teacher, date], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(true);
            emailSender(email, subject, message);
        }
    })
})


app.delete('/reject-appointment/:name/:email/:date', (req, res) => {
    let name = req.params.name;
    let email = req.params.email;
    let date = req.params.date;
    let subject = `Appointment rejected`;
    let message = `Dear parent your request for appointment to meet mr/mrs ${teacher} has been rejected. please visit our school to know more.  `
    db.query('delete from appointment_db where (teacher=? and email=?) and date=? ', [name, email, date], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(true);
            emailSender(email, subject, message);
        }
    })
})

app.post('/save-book', (req, res) => {
    let isbn = req.body.isbn;
    let bname = req.body.bname;
    let author = req.body.author;
    let publisher = req.body.publisher;
    let desc = req.body.desc;
    let copies = req.body.copies;
    let sclass = req.body.sclass;
    let shelf = req.body.shelf;
    let lang = req.body.lang;
    let available = req.body.available;

    db.query('select * from books_db where book_isbn=?', [isbn], (err, result) => {
        if (err) {
            res.send("Unexpected error occured!!");
        } else {
            if (result.length > 0) {
                res.send("ISBN already exists");
            } else {
                db.query('insert into books_db (book_isbn,title,author,publisher,description,copies,class,language,shelf,available) values (?,?,?,?,?,?,?,?,?,?)', [isbn, bname, author, publisher, desc, copies, sclass, lang, shelf, available], (err, result) => {
                    if (err) {
                        res.send("Unexpected error occured!!");
                    } else {
                        res.send("Book data saved successfully!!!");
                    }
                })
            }
        }
    })
})

app.post('/search-book', (req, res) => {
    let ISBN = req.body.isbn;
    db.query('select * from books_db where book_isbn=?', [ISBN], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send(false);
            }
        }
    })
})

app.put('/update-book', (req, res) => {
    let ISBN = req.body.isbn;
    let bname = req.body.bname;
    let author = req.body.author;
    let copies = req.body.copies;
    let shelf = req.body.shelf;

    db.query('update books_db set title=? , author=? , copies=? , shelf=? where book_isbn=?', [bname, author, copies, shelf, ISBN], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(true);
        }
    })
})

app.delete('/delete-book/:isbn', (req, res) => {
    let isbn = req.params.isbn;
    db.query('delete from books_db where book_isbn=?', [isbn], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(true);
        }
    })
})

app.post('/select-books', (req, res) => {
    let sClass = req.body.class;
    db.query('select * from books_db where class=? ', [sClass], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(result);
        }
    })
})

app.post('/fetch-rollNum', (req, res) => {
    let sClass = req.body.class;
    db.query('select name from student_db where class=? and approve=?', [sClass, 'Yes'], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(result);
        }
    })
})

app.post('/issue-book', (req, res) => {
    let sName = req.body.sName;
    let bookName = req.body.bookName;
    let sClass = req.body.class;
    let tenDaysLater = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
    let dueDate = tenDaysLater.getTime();

    db.query('insert into issue_db (student_name,book_name,class,issue_date,due_date,status) values (?,?,?,?,?,?)', [sName, bookName, sClass, timestamp, dueDate, "Active"], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            db.query('update books_db set copies=copies-1 where title=?', [bookName], (err, result) => {
                if (err) {
                    res.send(false);
                } else {
                    res.send(true);
                }
            })
        }
    })
})

app.post('/get-issue-book', (req, res) => {
    let sClass = req.body.sClass;
    db.query('select * from issue_db where class=? and status=?', [sClass, 'Active'], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(result);
        }
    })
})

app.post('/fetch-issue-data', (req, res) => {
    let sClass = req.body.sClass;
    let sName = req.body.sName;
    db.query('select * from issue_db where (class=? and student_name=?) and status=? ', [sClass, sName, 'Active'], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(result);
        }
    })
})

app.post('/fetch-isued-final', (req, res) => {
    let sClass = req.body.sClass;
    let sName = req.body.sName;
    let bookName = req.body.bookName;
    db.query('select * from issue_db where (class=? and student_name=?) and book_name=? ', [sClass, sName, bookName, 'Active'], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            res.send(result);
        }
    })
})

app.post('/return-book', (req, res) => {
    let bookName = req.body.bookName;
    let studentName = req.body.studentName;
    let sClass = req.body.class;
    let fine = req.body.fine;

    db.query('insert into return_db (bookName,studentName,class,fine) values (?,?,?,?) ', [bookName, studentName, sClass, fine], (err, result) => {
        if (err) {
            res.send(false);
        } else {
            db.query('update issue_db set status=? where (class=? and student_name=?) and book_name=? ', ['Inactive', sClass, studentName, bookName], (err, result) => {
                if (err) {
                    res.send(false);
                } else {
                    db.query('update books_db set copies=copies+1 where title=?', [bookName], (err, result) => {
                        if (err) {
                            res.send(false);
                        } else {
                            res.send(true);
                        }
                    })
                }
            })
        }
    })
})




app.post('/get-all-books',(req,res)=>{
    db.query('select * from books_db',(err,result)=>{
        if(err){ 
           res.send(false)
        }else{
           res.send(result);
        }
    })
})


app.post('/fetch-all-issued',(req,res)=>{
    db.query('select * from issue_db where status=? ',['Active'],(err,result)=>{
        if(err){ 
            res.send(false);
        }else{
            res.send(result);
        }
    })
})



app.post('/fetch-all-returned',(req,res)=>{
    db.query('select * from return_db ',(err,result)=>{
        if(err){ 
            res.send(false);
        }else{
            res.send(result);
        }
    })
})

app.post('/load-fees',(req,res)=>{
    let roll=req.body.roll;
    db.query('select * from student_db where rollno=?',[roll],(err,result)=>{
        if(err){ 
           res.send(false);
        }else{
            res.send(result);
        }
    })
})


app.post('/update-fees-db',(req,res)=>{
    let roll=req.body.roll;
    let paid=req.body.paid;
    db.query('update student_db set paid=paid+? where rollno=?',[paid,roll],(err,result)=>{
        if(err){ 
           res.send(err);
        }else{
            res.send(true);
        }
    })
})


app.post('/getAttendance',(req,res)=>{
    let rollno = req.body.roll;
    db.query('select * from attendance_db where rollno=?',[rollno],(err,result)=>{
        if(err){ 
            res.send(false);
        }else{
           res.send(result);
        }
    })
})











app.listen('3001', () => {
    console.log('listening to port 3001');
})


