<template>
<div>
  <div class="menu_list">
    <h3> Menu : {{ menu_size }}</h3>
    <div v-for="(item, index) in items" v-bind:key="index" v-bind:class="['menu_item', {'unavailable' : item.count < 1}]">
      <h3>{{ item.name }}</h3>
      <p class="desc">{{ item.description }}</p>
      <img :src="item.image_src">
      <p>Remaining : {{ item.count }}</p>
      <button v-on:click="placeOrder(index)"
              v-bind:class="{'unavailable': item.count < 1}"
              v-bind:disabled="item.count < 1">
        Order !
      </button>

    </div>
  </div>
</div>
</template>

<script>
import salmon_png from './assets/salmon.png';
import tuna_png from './assets/tuna.png';

export default {
  name: 'exo1',

  data() {
    return {
      item_class: ['menu_item'],
      items: [
        {
          name: 'Salmon',
          image_src: salmon_png,
          price: '400',
          description: 'Basic but unique flavor!',
          count: 1,
        },
        {
          name: 'Tuna',
          image_src: tuna_png,
          price: '300',
          description: 'Normal delicious tuna',
          count: 2,
        },
      ],
    };
  },

  computed: {
    menu_size() {
      return this.items.filter(i => i.count > 0).length;
    },
  },

  methods: {
    placeOrder(index) {
      if (this.items[index].count > 0) {
        this.items[index].count--;
      }
    },
  },
};
</script>

<style scoped>
div.menu_item {
  border: 2px solid green;
  border-collapse: collapse;
  display: inline-block;
  margin: -2px 0 0 -2px;
  padding: 2px;
  text-align: center;
}
div.menu_item > h3 {
  color: #a33;
}
div.menu_item > p.desc {
  font-style: oblique;
}
.price {
  font-size: 24px;
}
.unavailable {
  background-color: gray;
}
</style>
