import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/sales/`;

// Create New Sales
const createSales = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};

// Get all Saless
const getSaless = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Delete a Sales
const deleteSales = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
};
// Get a Sales
const getSales = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data;
};
// Update Sales
const updateSales = async (id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`, formData);
    return response.data;
};

const salesService = {
    createSales,
    getSaless,
    getSales,
    deleteSales,
    updateSales,
};

export default salesService;