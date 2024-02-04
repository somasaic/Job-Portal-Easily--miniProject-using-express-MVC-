export default class JobModel{

    constructor(_id,_company,_category,_tech, _location,_salary, _date,_openings,_skills ){
        this.id = _id;
        this.company = _company;
        this.category =_category;
        this.tech = _tech;
        this.location = _location;
        this.salary = _salary;
        this.date = _date;
        this.openings = _openings;
        this.skills = _skills;
    }

    static get(){
        return jobs;
    }
    static add(company,category, tech,location,salary, date,openings,skills){
        var newJOb = new JobModel(jobs.length+1, company, category,tech, location, salary, date, openings, skills);
        jobs.push(newJOb);
    }
    static update(id,company,category,tech, location,salary, date,openings,skills){
        const jobObj = {id,company,category,tech,location,salary, date,openings,skills};
        const index = jobs.findIndex(
            (j) => j.id == jobObj.id);
            jobs[index] = jobObj;
    }
    static delete(id){
        const index = jobs.findIndex(j => j.id === id);
        jobs.splice(index, 1);
    }

    static getById(id){
        return jobs.find((j) => j.id == id);
    }

}
let jobs = [
    new JobModel(1, 'Amazon','Tech', 'SDE-1', 'Gurugram IND Remote', '6-7','2023-11-30',4,['JS','NodeJs','ReactJs','Express','DS & Algo','Java','SpringBoot','Git','Angular', 'NextJs','MongoDB']),
    new JobModel(2, 'Facebook','Tech','Full Stack Developer', 'Banglore IND', '8-9','2023-11-20',8,['DSA','JavaScript','React','Node','Express','comm skills','Tailwind CSS','Jquery']),
    new JobModel(3, 'Infosys', 'Tech','Python', 'Noida On-Site', '7-8','2023-12-02',13,['c','C++','Java','SpringBoot','Python','Graphics','DSA']),
    new JobModel(4, 'TCS', 'Non-Tech','HR Manager', 'Noida IND', '4-5','2023-12-10',2,['English','Comm Skills','Management Theory','Apptitude','Presentation Skills']),
];