<template>
  <div>
    <form class="form" @submit="checkForm">
      <label>
        <input v-model="query" @input="handleChange" type="text" placeholder="введите id сайта"/>
      </label>
      <button>Войти</button>
    </form>
    <p v-if="error">
      <b>{{ error }}</b>
    </p>
  </div>
</template>

<script>
import { getData } from '../services/trackAPI';
import { saveId } from '../utils/localStorage';

export default {
  data () {
    return {
      error: null,
      query: ''
    };
  },

  methods: {
    checkForm: function (e) {
      e.preventDefault();

      if (this.query.trim().length !== 24) {
        this.error = 'id сайта должен содержать 24 символа';
      } else {
        getData(this.query).then(res => {
          if (res.message === 'ok') {
            saveId(this.query);
            this.$router.push('/analytics');
          }
        }).catch(err => (this.error = err.message))
      }
    },

    handleChange: function () {
      this.error = '';
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
}

label {
  box-sizing: border-box;
  max-width: 300px;
}

input {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 8px;
}

button {
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
