

const categoryService = require('./CategoryService');

const getCategories = async () => {
    try {
        return await categoryService.getCategories();
    } catch (error) {
        throw error;
    }
}

const getCategoryById = async (categoryId) => {
    try {
        return await categoryService.getCategoryById(categoryId);
    } catch (error) {
        throw error;
    }
}

const saveCategory = async (category) => {
    try {
        const result = await categoryService.saveCategory(category);
        return {
            ...result._doc
        }
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteCategory = async (categoryId) => {
    try {
        const result = await categoryService.deleteCategory(categoryId);
        return result;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

const updateCategory = async (category) => {
    try {
        const oldCategory = categoryService.getCategoryById(category._id);
        category = {
            ...oldCategory, ...category
        }
        const result = await categoryService.updateCategory(category);
        return result;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports = {getCategories, saveCategory, deleteCategory, updateCategory, getCategoryById};