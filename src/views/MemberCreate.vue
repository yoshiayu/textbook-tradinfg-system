<template>
  <div class="container">
    <h1>新しい会員を追加</h1>
    <MemberForm @submit="createMember" />
  </div>
</template>

<script>
import axios from 'axios';
import MemberForm from '@/components/MemberForm.vue';

export default {
  components: {
    MemberForm
  },
  methods: {
    async createMember(member) {
      try {
        await axios.post('http://localhost:8080/api/members', member);
        this.$router.push('/members');
      } catch (error) {
        console.error(error);
        alert('追加に失敗しました');
      }
    }
  }
};
</script>
