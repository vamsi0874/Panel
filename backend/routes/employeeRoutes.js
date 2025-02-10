const express = require('express');
const ImageKit = require('imagekit');
const requireAuth = require('../middleware/reqAuth');

const router = express.Router();


const { createEmployee, getEmployees,editEmployee,getEmployee,deleteEmployee } = require('../controllers/employeeController');


const imagekit = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT
  });

  router.get("/upload", (req, res) => {
 
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  });
  

router.use(requireAuth)

router.post('/createEmployee',  createEmployee);
router.get('/employees', getEmployees);
router.get('/employees/:id',getEmployee)
router.post('/employees/:id',  editEmployee)
router.delete('/employees/:id',deleteEmployee)

module.exports = router;