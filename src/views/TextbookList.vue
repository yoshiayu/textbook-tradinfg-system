<template>
  <div class="container">
    <h1>教科書リスト</h1>
    <input v-model="search" @input="fetchTextbooks" placeholder="検索..." class="form-control" />
    <router-link to="/textbooks/new" class="btn btn-primary my-3">新しい教科書を追加</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>著者</th>
          <th>価格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="textbook in paginatedTextbooks" :key="textbook.id">
          <td>{{ textbook.id }}</td>
          <td>{{ textbook.title }}</td>
          <td>{{ textbook.author }}</td>
          <td>{{ textbook.price }}</td>
          <td>
            <router-link :to="`/textbooks/${textbook.id}/edit`" class="btn btn-warning btn-sm">編集</router-link>
            <button @click="deleteTextbook(textbook.id)" class="btn btn-danger btn-sm">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-secondary btn-sm">前へ</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-secondary btn-sm">次へ</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      textbooks: [],
      search: '',
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    paginatedTextbooks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.textbooks.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.textbooks.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchTextbooks() {
      const response = await axios.get('/api/textbooks', {
        params: { search: this.search },
      });
      this.textbooks = response.data;
    },
    async deleteTextbook(id) {
      await axios.delete(`/api/textbooks/${id}`);
      this.fetchTextbooks();
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
    this.fetchTextbooks();
  },
};
</script>

<style scoped>
@import '../assets/custom.css';

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.table {
  width: 100%;
  margin-top: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}
</style>
