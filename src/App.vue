<template>
  <div id="app">
    <nav>
      <router-link to="/">ホーム</router-link> |
      <router-link to="/members">会員リスト</router-link> |
      <router-link to="/textbooks">教科書リスト</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  color: #007bff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
