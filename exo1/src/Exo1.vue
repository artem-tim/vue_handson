<template>
<div>
  <h2>Menu ({{ menu_size }})</h2>
  <div class="menu_list">
    <div v-for="(item, index) in items " :key="index" :class="['menu_item', {'unavailable': item.count < 1}]">
      <h3>{{ item.name }}</h3>
      <p class="desc">{{ item.description }}</p>
      <p class="price">¥{{item.price}}</p>
      <img :src="item.image_src"><br>
      <button @click="placeOrder(index)" :class="{'unavailable': item.count < 1}" :disabled="item.count < 1">Order !</button>
      <button @click="addMore(index)">Add more !</button>
      <p>Remaining: {{ item.count }}</p>
    </div>
  </div>
</div>
</template>

<script>
import salmon_png from '@/assets/salmon.png';
import tuna_png from '@/assets/tuna.png';
import maki_png from '@/assets/maki.png';

export default {
  name: 'exo1',

  props: {
    options: {
      type: Object,
      default: () => {
      }
    },
    menu_items_prop: {
      type: Array,
      default: () => [
        {
          name: 'Salmon',
          image_src: salmon_png,
          price: 100,
          description: 'Basic but delicious salmon!',
          count: 3,
        },
        {
          name: 'Tuna',
          image_src: tuna_png,
          price: 130,
          description: 'Fresh sumptuous tuna!',
          count: 5,
        },
        {
          name: 'Maki',
          image_src: maki_png,
          price: 150,
          description: "Children's favourite roll!",
          count: 3,
        },
      ],
    },
  },

  data() {
    return {
      items: [
        {
          name: 'Salmon',
          image_src: salmon_png,
          price: 100,
          description: 'Basic but delicious salmon!',
          count: 3,
        },
        {
          name: 'Tuna',
          image_src: tuna_png,
          price: 130,
          description: 'Fresh sumptuous tuna!',
          count: 5,
        },
        {
          name: 'Maki',
          image_src: maki_png,
          price: 150,
          description: "Children's favourite roll!",
          count: 3,
        },
      ],
    };
  },

  computed: {
    menu_items() {
      return this.menu_items_prop.map(i => {
        i.price *= this.options.discount;
        return i;
      });
    },
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
    addMore(index) {
      this.items[index].count++;
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
