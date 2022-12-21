import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/sales/`;

// Create New sale
const createSale = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};

// Get all sales
const getSales = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Delete a sale
const deleteSale = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
};
// Get a sale
const getSale = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data;
};
// Update sale
const updateSale = async (id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`, formData);
    return response.data;
};

const salesService = {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale,
};

export default salesService;
