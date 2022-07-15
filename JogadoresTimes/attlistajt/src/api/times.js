import axios from 'axios';
export default class TimesApi {
    async buscarTodosOsTimes() {
        const response = await axios.get('http://localhost:4000/times');
        return response.data;
    }
    async buscarTime(id) {
        const response = axios.get('http://localhost:4000/times/${times}');
        return response.data;
    }
    async adicionarTime(time) {
        const response = axios.post('http://localhost:4000/times', time);
        return response.data;
    }
    async excluirTime(id) {
        const response = await axios.delete('http://localhost:4000/times/${id}');
        return response.data;
    }
    async atualizarTime(time) {
        const response = await axios.put('http://localhost:4000/times/${times.id}',time,);
        return response·data;
    }
}