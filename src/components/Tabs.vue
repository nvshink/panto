<script>
import ProductCard from './ProductCard.vue';
import ArrowButton from './ArrowButton.vue';
export default {
props: {
productsTypes: {
type: Array,
required: true,
},
products: {
type: Array
}
},
data() {
return {
activeTab: 1,
};
},
components: { ProductCard, ArrowButton },
methods: {
productsByType(type) {
var array = []
for (var i = 0; i < this.products.length; i++) {
if (this.products[i].type == type) {
array.push(this.products[i])
}
}
return array
},
scroll_left() {
let content = document.querySelector(".product-cards")
content.scrollLeft -= content.offsetWidth/2
},
scroll_right() {
let content = document.querySelector(".product-cards")
content.scrollLeft += content.offsetWidth/2
}
}
};
</script>
<template>
  <div>
    <ul class="nav nav-tabs justify-content-center tabs m-auto rounded-pill border-0">
      <li v-for="(tab, index) in productsTypes" :key="index" :class="{
        'tab active-tab rounded-pill': index + 1 === activeTab,
        'tab rounded-pill': index + 1 !== activeTab,
      }">
        <label :for="`${_uid}${index}`" v-text="tab" class="cursor-pointer block" />

        <input :id="`${_uid}${index}`" type="radio" :name="`${_uid}-tab`" :value="index + 1" v-model="activeTab"
          class="hidden" />
      </li>
    </ul>
    <div class="d-flex flex-row justify-content-center">
      <ArrowButton  @click="scroll_left" class="col-1 arrow-button-prev"></ArrowButton>
    <template v-for="(tab, index) in productsTypes">
      <div :key="index" v-if="index + 1 === activeTab" id="product-cards" class=" col-11 product-cards bg-transparent d-flex flex-row flex-nowrap">
        <ProductCard :products="productsByType(tab)"></ProductCard>
      </div>
    </template>
    <ArrowButton  @click="scroll_right" class="col-1 arrow-button-next"></ArrowButton>
  </div>
</div>
</template>
 
 <style>
 input {
   appearance: none;
 }
 </style>