const TransactionModel = require('./TransactionModel');


//http://localhost:3000/api/transactions/new
//them moi giao dich
const addNewTransaction = async (name, money, note, image, category, createAt, updateAt) => {
    try {
        const newTransaction = { name, money, note, image, category, createAt, updateAt };
        const trans = new TransactionModel(newTransaction);
        await trans.save();
        return true;
    } catch (error) {
        console.log('Add new transaction error: ' + error);
        return false;
    }
}

module.exports = {addNewTransaction};
