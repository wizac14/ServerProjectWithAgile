const CategoryModel = require('./CategoryModel');

const getCategories = async () => {
  return await CategoryModel.find({});
}

const getCategoryById = async (categoryId) => {
  return await CategoryModel.find({_id : categoryId});
}

const saveCategory = async (category) => {
  const categoryModel = new CategoryModel(category);
  return await categoryModel.save();
}

const deleteCategory = async (categoryId) => {
  return await CategoryModel.deleteOne({_id: categoryId});
}

const updateCategory = async (category) => {
  return await CategoryModel.findOneAndUpdate({_id: category._id}, category, {new: true});
}

module.exports = { getCategories, saveCategory, deleteCategory, updateCategory, getCategoryById };

var data1 = [{
    "_id": 1,
    "name": "Food"
  }, {
    "_id": 2,
    "name": "Shopping"
  }, {
    "_id": 3,
    "name": "Saving Money"
  }, {
    "_id": 4,
    "name": "Fuel"
  }, {
    "_id": 5,
    "name": "Hang out"
  }, {
    "_id": 6,
    "name": "Wedding"
  }, {
    "_id": 7,
    "name": "Picnic"
  }, {
    "_id": 8,
    "name": "Children"
  }, {
    "_id": 9,
    "name": "Study"
  }, {
    "_id": 10,
    "name": "House"
  }];
  