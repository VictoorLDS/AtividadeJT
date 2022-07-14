<script>
import axios from "axios"
export default {
  data(){
    return{
      jogadores:[],
      jogador:{},
      times:[],
    };
  },
  async created(){
    await.this.buscarTodosOsJogadores();
    await.this.buscarTodosOsTimes();
  },
  methods:{
    async buscarTodosOsTimes(){
      const times = await axios.get("http://localhost:4000/times");
      this.times = times.data;
    },
    async buscarTodosOsJogadores(){
      await axios.post("http://localhost:4000/jogadores?expand=time");
      this.jogadores = resposta.data
    },
    async salvar(){
      await axios.post("http://localhost:4000/jogadores", this.jogador);
      await this.buscarTodosOsJogadores();
    },
  },
};
</script>
<template>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de Jogadores</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="jogador.nome" placeholder="Nome do Jogador"/>
        <select v-model="jogador.timeId">
        <option v-for="time in times":key="time.id" :value="time.id">
        {{time.nome}}
        </option>
        </select>
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-jogadores">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="jogadores in jogadores" :key="jogador.id">
              <td>{{ jogador.id }}</td>
              <td>{{ jogador.nome }}</td>
              <td>??</td>
              <td>{{ jogador.time.nome }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<style>
.title {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid rgb(147, 147, 147);
  border-radius: 10px;
  padding: 0 10px;
}
.form-input button {
  margin-left: 1px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: rgb(227, 170, 0);
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}
.list-jogadores {
  display: flex;
  justify-content: center;
}
.list-jogadores table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
