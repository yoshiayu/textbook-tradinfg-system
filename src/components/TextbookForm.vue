<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="localTextbook.title" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="author">著者</label>
      <input type="text" id="author" v-model="localTextbook.author" class="form-control" required />
    </div>
    <div class="form-group">
      <label for="price">価格</label>
      <input type="number" id="price" v-model="localTextbook.price" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-primary mt-3">保存</button>
  </form>
</template>

<script>
export default {
  props: {
    textbook: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      localTextbook: { ...this.textbook },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.localTextbook);
    },
  },
  watch: {
    textbook: {
      handler(newVal) {
        this.localTextbook = { ...newVal };
      },
      deep: true,
    },
  },
};
</script>
