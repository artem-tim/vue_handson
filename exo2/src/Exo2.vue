<template>
<div class="menu_item">
  Test
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
      msg: 'Exercice 2',
    };
  },
};
</script>

<style scoped>
</style>
