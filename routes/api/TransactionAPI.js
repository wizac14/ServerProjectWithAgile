var express = require('express')
var router = express.Router();

const TransactionController = require('../../components/Transaction/TransactionController')

//http://localhost:3000/api/transactions/
router.post('/', [], async (req, res, next) => {
    
})
module.exports = router;

