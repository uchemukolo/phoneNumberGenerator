import express from 'express';
import PhoneNumberController from '../controllers/phoneNumberController';
import QueryValidator from '../middlewares/query';

const router = express.Router();

router.get('/phonenumbers',
    QueryValidator.checkQuery,
    PhoneNumberController.getPhoneNumbers
);
router.get('/phonenumbers/generate',
    QueryValidator.checkQuery,
    PhoneNumberController.generatePhoneNumbers
);
router.get('/phonenumbers/minandmax',
    PhoneNumberController.getMinMaxPhoneNumbers
);

export default router;