<template>
  <div>
    <h1>会員リスト</h1>
    <input v-model="search" @input="fetchMembers" placeholder="検索..." />
    <router-link to="/members/new">新しい会員を追加</router-link>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メール</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in paginatedMembers" :key="member.id">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>
            <router-link :to="`/members/${member.id}/edit`">編集</router-link>
            <button @click="deleteMember(member.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="prevPage" :disabled="currentPage === 1">前へ</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">次へ</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      members: [],
      search: '',
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    paginatedMembers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.members.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.members.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchMembers() {
      const response = await axios.get('/api/members', {
        params: { search: this.search },
      });
      this.members = response.data;
    },
    async deleteMember(id) {
      await axios.delete(`/api/members/${id}`);
      this.fetchMembers();
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  created() {
    this.fetchMembers();
  },
};
</script>

<style scoped>
@import '../assets/custom.css';
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

button + button {
  margin-left: 5px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
}
</style>
