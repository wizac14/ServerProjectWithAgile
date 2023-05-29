const TransactionService = require('./TransactionService');


const addNewTransaction = async (name, money, note, image, category, createAt, updateAt) => {
    try {
        return await TransactionService.addNewTransaction(name, money, note, image, category, createAt, updateAt);
    } catch (error) {
        console.log("error: ", error);
        return false;
    }
}

module.exports = {addNewTransaction};