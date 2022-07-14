
<script>
import axios from "axios";
export default {
  data() {
    return {
      times: [],
      time: {}, 
    };
  },
  async created() {
    const times = await axios.get("http://localhost:4000/times");
    this.times = times.data;
  },
  methods: {
    async salvar() {
      if (this.time.id) {
        const time_alterado = await axios.put(
          'http://localhost:4000/times/$(this.time.id)', 
          this.time
        );
      } else {
        const time_criado = await axios.post(
          "http://localhost:4000/times/",
          this.time
        );
        this.times.push(time_criado.data);
      }
      this.times.push(time_criado.data);
      this.time = {};
    },
    async excluir(time) {
      await axios.delete('http://localhost:4000/times/$(time.id)');
      const indice = this.times.index0f(time);
      this.times.splice(indice, 1);
    },
    prepararEdicao(time) {
      Object.assign (this.time, time); 
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Times</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome do time" v-model="time.nome" />
      <input type="text" placeholder="Cidade" v-model="time.cidade" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="times in times" :key="times.id">
            <td>{{ times.id }}</td>
            <td>{{ times.nome }}</td>
            <td>{{ times.cidade }}</td>
            <td>
              <button @click="prepararEdicao">Editar</button>
              <button @click="excluir(time)">Excluir</button>
            </td>
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
.list-times{
  display: flex;
  justify-content: center;
}
.list-times table{
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td{
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
