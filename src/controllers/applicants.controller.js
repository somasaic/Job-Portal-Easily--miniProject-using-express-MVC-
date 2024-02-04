import path from 'path';
import ApplicantsModel from '../models/applicants.model.js';
import JobModel from  '../models/jobs.model.js'
import { uploadFile } from '../middlewares/file-upload.middleware.js';

export default class ApplicantsController{  

    getApplicants(req, res){
        let applicant = ApplicantsModel.get();
        res.render("applicants",{applicant, userEmail : req.session.userEmail});
    }

    addNewApplicants(req, res, next){
        const {applicantname,emailid,applicantcontact} = req.body;
        const resume = 'resume/' + req.file.filename;
        ApplicantsModel.add(applicantname,emailid,applicantcontact,resume);
        var applicant = ApplicantsModel.get();
        var job = JobModel.get();
        return res.render('jobs',{applicant,job, userEmail : req.session.userEmail});  
      
    }

}