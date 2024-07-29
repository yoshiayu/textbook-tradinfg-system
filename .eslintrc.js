module.exports = {
    env: {
      node: true, // Node.js環境を許可する
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'vue',
    ],
    rules: {
      // カスタムルールをここに追加
    },
  };
  