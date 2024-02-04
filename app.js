import express from 'express';
import path from 'path';
import JobsController from './src/controllers/jobs.controller.js';
import UserController from './src/controllers/user.controller.js';
import ApplicantsController from './src/controllers/applicants.controller.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
import { validateHeaderValue } from 'http';
import validationMiddleware from './src/middlewares/validation.middleware.js';
import { auth } from './src/middlewares/auth.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
import ejsLayouts from 'express-ejs-layouts';


const app = express();

app.use(express.static('public'));
app.use(cookieParser());

app.use(session({
    secret: 'secretKey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure: false}
}))

app.set('view engine', 'ejs');

app.set('views', path.join(path.resolve(), 'src','views'));

app.use(ejsLayouts);
app.use(express.static('src/views'));

const jobsController = new JobsController();
const usersController = new UserController();
const applicantsController = new ApplicantsController();

//parse form data
app.use(express.urlencoded({extended:true}));

app.post('/register', usersController.postRegister);

app.get('/login', usersController.getLogin);

app.post('/login', usersController.postLogin);

app.get('/logout', usersController.logout);


app.get('/',jobsController.getHome);

app.get('/jobs',jobsController.getJobs);

app.get('/add-new-jobs',auth, jobsController.getNewJobs);

app.post('/jobs',validationMiddleware,auth,jobsController.AddNewJobs);

app.get('/delete-job/:id',auth,jobsController.deleteJob);   

app.get('/update-jobs/:id',auth, jobsController.getUpdateJobView);

app.post('/update-jobs',auth, jobsController.postUpdateJob);

app.get('/details/:id',setLastVisit, jobsController.getJobDetailsView);

app.get('/applicants',uploadFile.single('resume'),auth, applicantsController.getApplicants);

app.post('/applied', uploadFile.single('resume'), applicantsController.addNewApplicants);


app.listen(3100, () => {
    console.log('server is working on port 3100');
})

