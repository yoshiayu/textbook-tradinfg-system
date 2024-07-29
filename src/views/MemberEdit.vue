<template>
  <div>
    <h1>会員情報を編集</h1>
    <MemberForm :member="member" @submit="updateMember" />
  </div>
</template>

<script>
import axios from 'axios';
import MemberForm from '@/components/MemberForm.vue';

export default {
  components: {
    MemberForm
  },
  data() {
    return {
      member: null
    };
  },
  async created() {
    const response = await axios.get(`/api/members/${this.$route.params.id}`);
    this.member = response.data;
  },
  methods: {
    async updateMember(updatedMember) {
      await axios.put(`/api/members/${this.$route.params.id}`, updatedMember);
      this.$router.push('/members');
    }
  }
};
</script>
