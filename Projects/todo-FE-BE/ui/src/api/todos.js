import { api } from "./client";

export const Todos = {
  list:   async () => (await api.get("/todos")).data,
  get:    async (id) => (await api.get(`/todos/${id}`)).data,
  create: async (title) => (await api.post("/todos", { title })).data,
  update: async (id, title) => (await api.put(`/todos/${id}`, { title })).data,
  remove: async (id) => (await api.delete(`/todos/${id}`)).data,
};
