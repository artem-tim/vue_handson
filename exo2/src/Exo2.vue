<template>
<div>
  <p>{{ msg }}</p>
  <main-list></main-list>
</div>
</template>

<script>
import MainList from 'exo1';

export default {
  name: 'exo2',

  components: {
    MainList,
  },

  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
