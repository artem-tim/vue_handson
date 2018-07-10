<template>
<div class="menu_item">
  <main-list :items="menu_list" :options="menu_options"></main-list>
</div>
</template>

<script>
import MainList from 'exo1';
import axios from 'axios';

export default {
  name: 'exo2',

  components: {
    MainList,
  },

  data() {
    return {
      menu_list: [],
      menu_options: {
        discount: 0.9,
      },
    };
  },

  mounted() {
    this.getTopics();
  },

  methods: {
    getTopics() {
      axios({
        method: 'get',
        url: '/sushi/',
        params: {
          data_format: 'json',
        },
      })
        .then(response => {
          this.menu_list = response.data.topicsList.map(item => {
            return {
              name: item.subject,
              image_src: item.file_url,
              price: item.ext_col_03,
              description: item.ext_col_02,
              count: item.ext_col_04,
            };
          });
          console.log(response);
        })
        .catch(() => {
          // If error
        })
        .then(() => {
          // Always executed
        });
    },
  },
};
</script>

<style scoped>
</style>
