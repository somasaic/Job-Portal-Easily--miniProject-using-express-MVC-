
import {body, validationResult} from 'express-validator';
const validateRequest =  async (req, res, next) =>{
//validate data using express-validator library

//1.Setup rules for validation
const rules= [
    body('category').notEmpty().withMessage('Job Category is required to select'),

    body('tech').notEmpty().withMessage('Job Designation is required to select'),

    body('company').notEmpty().withMessage('Comapany Name is required'),
  

    body('location').notEmpty().withMessage('Location is required'),

    body('openings').isFloat({gt : 0}).withMessage('Openings should be more than 0'),

    body('skills').notEmpty().withMessage('At Least One Skill is required to select'),

    body('date').notEmpty().withMessage('Date is required'),
];
//2. Run those rules
await Promise.all(rules.map((rule) => rule.run(req)));

//3. Check if there are any errors after running the rules
var validationErrors =validationResult(req);

//4. if errors, return the error message
    if(!validationErrors.isEmpty()){
        return res.render('add-new-jobs', {
            errorMessage : validationErrors.array()[0].msg,
        });
    }
      next();
}
export default validateRequest;