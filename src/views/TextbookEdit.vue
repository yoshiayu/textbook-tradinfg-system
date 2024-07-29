<template>
  <div class="container">
    <h1>教科書情報を編集</h1>
    <TextbookForm :textbook="textbook" @submit="updateTextbook" />
  </div>
</template>

<script>
import axios from 'axios';
import TextbookForm from '@/components/TextbookForm.vue';

export default {
  components: {
    TextbookForm,
  },
  data() {
    return {
      textbook: null,
    };
  },
  async created() {
    const response = await axios.get(`/api/textbooks/${this.$route.params.id}`);
    this.textbook = response.data;
  },
  methods: {
    async updateTextbook(updatedTextbook) {
      await axios.put(`/api/textbooks/${this.$route.params.id}`, updatedTextbook);
      this.$router.push('/textbooks');
    },
  },
};
</script>
