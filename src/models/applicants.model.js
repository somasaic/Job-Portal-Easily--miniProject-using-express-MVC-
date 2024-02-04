export default class ApplicantsModel{

    constructor(id,applicantname,emailid,applicantcontact,resume,){
        this.id =  id;
        this.applicantname = applicantname;
        this.emailid = emailid;
        this.applicantcontact = applicantcontact;
        this.resume = resume;
    }   
    
    static get() {
        return applicants;
    }
    static add(applicantname, emailid, applicantcontact, resume){
        const newApplicant = new ApplicantsModel(applicants.length+1, applicantname, emailid, applicantcontact, resume);
        applicants.push(newApplicant);
    }
}

var applicants=[
    new ApplicantsModel(1, 'Sai Dinesh', 'saidineshe@gmail.com', 7780719145,'resume1.pdf'),
    new ApplicantsModel(2, 'Somasai ', 'somasaicheviti@gmail.com', 778719145,'resume2.pdf'),
    new ApplicantsModel(3, 'Dinesh', 'dinesh12@gmail.com', 9550920114,'resume3.pdf'),
];