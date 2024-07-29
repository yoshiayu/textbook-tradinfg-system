<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">名前</label>
      <input type="text" v-model="formData.name" class="form-control" id="name" />
    </div>
    <div class="form-group">
      <label for="email">メール</label>
      <input type="email" v-model="formData.email" class="form-control" id="email" />
    </div>
    <button type="submit" class="btn btn-primary">保存</button>
  </form>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formData: {
        name: this.member.name || '',
        email: this.member.email || ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.formData });
    }
  }
};
</script>
