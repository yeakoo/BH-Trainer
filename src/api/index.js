import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const insertSequence = (payload) => api.post(`/sequence`, payload);
export const getAllSequences = () => api.get(`/sequences`);
export const updateSequenceById = (id, payload) =>
  api.put(`/sequence/${id}`, payload);
export const deleteSequenceById = (id) => api.delete(`/sequence/${id}`);
export const getSequenceById = (id) => api.get(`/sequence/${id}`);

const apis = {
  insertSequence,
  getAllSequences,
  updateSequenceById,
  deleteSequenceById,
  getSequenceById,
};

export default apis;
