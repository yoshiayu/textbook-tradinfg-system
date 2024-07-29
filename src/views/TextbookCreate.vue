<template>
  <div class="container">
    <h1>新しい教科書を追加</h1>
    <TextbookForm @submit="createTextbook" />
  </div>
</template>

<script>
import axios from 'axios';
import TextbookForm from '@/components/TextbookForm.vue';

export default {
  components: {
    TextbookForm
  },
  methods: {
    async createTextbook(textbook) {
      try {
        await axios.post('http://localhost:8080/api/textbooks', textbook);
        this.$router.push('/textbooks');
      } catch (error) {
        console.error(error);
        alert('追加に失敗しました');
      }
    }
  }
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
