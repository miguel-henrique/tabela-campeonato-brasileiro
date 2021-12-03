import axios from "axios";

const api = axios.create({
baseURL: 'https://api.api-futebol.com.br/v1/campeonatos/2/tabela',
headers: { Authorization: `Bearer test_317811c1f0ace176bf6398e3f32a77` }
});

export default api;