<script>
import Navbar from './components/Navbar.vue'
import SearchField from './components/SearchField.vue'
import Footer from './components/Footer.vue'
import SmallInfoBlock from './components/SmallInfoBlock.vue';
import Tabs from './components/Tabs.vue';
import BigInfoBlock from './components/BigInfoBlock.vue';
import FeedbackCard from './components/FeedbackCard.vue';
import WideArrow from './components/WideArrow.vue';
export default {
components: {
Navbar,
SearchField,
Footer,
SmallInfoBlock,
Tabs,
BigInfoBlock,
FeedbackCard,
WideArrow
},
data() {
return {
productsTypes: [],
products: [
{
type: "Bad",
name: "Sakarias Armchair",
rate: 3,
price: 392,
photo: "sakarias-armchair-black"
}, {
type: "Lamp",
name: "Sakarias Armchair",
rate: 3,
price: 392,
photo: "sakarias-armchair-black"
}, {
type: "Chair",
name: "Sakarias Armchair",
rate: 3,
price: 392,
photo: "sakarias-armchair-black"
},
{
type: "Chair",
name: "Baltasar Chair",
rate: 5,
price: 299,
photo: "baltasar-chair"
}, {
type: "Chair",
name: "Bed",
rate: 5,
price: 299,
photo: "baltasar-chair"
}, {
type: "Chair",
name: "Lamp",
rate: 5,
price: 299,
photo: "baltasar-chair"
}],
feedbacks: [{
background: "1",
avatar: "1",
name: "Bang Upin",
rate: 3,
comment: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
},
{
background: "1",
avatar: "1",
name: "Bang Upin",
rate: 3,
comment: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
}]
};
},
methods: {
collectTypes: function () {
var array = []
for (var i = 0; i < this.products.length; i++) {
array.push(this.products[i].type)
}
this.productsTypes = array.filter(this.searchTypes)
},
searchTypes: function (value, index, self) {
return self.indexOf(value) === index;
}
},
created() {
this.collectTypes(this.products)
}
}
</script>

<template>
  <div class="header-background">
    <div class="header container-md">
      <Navbar :productsTypes="productsTypes"></Navbar>
      <div class="header-content">
        <h1 class="text-center">Make Your Interior More Minimalistic & Modern</h1>
        <p class="text-center">Turn your room with panto into a lot more minimalist<br> and modern with ease and speed
        </p>
        <SearchField></SearchField>
      </div>
    </div>
  </div>
  <div class="content container-md">
    <div class="row flex-column flex-lg-row justify-content-center mt-5">
      <div class="col-lg-3 d-flex">
        <h2 class="align-self-center m-auto">
          Why Choosing Us
        </h2>
      </div>
      <div class="col-lg-3">
        <SmallInfoBlock class="small-info-block">
          <template v-slot:title>Luxury facilities</template>
          <template v-slot:text>The advantage of hiring a workspace with us is that givees you comfortable service and
            all-around facilities.</template>
          <template v-slot:button-text>More Info</template>
        </SmallInfoBlock>
      </div>
      <div class="col-lg-3">
        <SmallInfoBlock class="small-info-block">
          <template v-slot:title>Affordable Price</template>
          <template v-slot:text>You can get a workspace of the highst quality at an affordable price and still enjoy the
            facilities that are oly here.</template>
          <template v-slot:button-text>More Info</template>
        </SmallInfoBlock>
      </div>
      <div class="col-lg-3">
        <SmallInfoBlock class="small-info-block">
          <template v-slot:title>Many Choices</template>
          <template v-slot:text>We provide many unique work space choices so that you can choose the workspace to your
            liking.</template>
          <template v-slot:button-text>More Info</template>
        </SmallInfoBlock>
      </div>
    </div>
    <div class="row list-tabs mt-5">
      <h2 class="mt-5 text-center">Best Selling Product</h2>
      <div class="mt-4">
        <Tabs :productsTypes="productsTypes" :products="products">
        </Tabs>
      </div>
      <WideArrow class="mt-5 mb-5 d-flex justify-content-center">View All</WideArrow>
    </div>
    <div class="row d-flex flex-row flex-nowrap img-group-and-big-info-block">
      <img :src="require(`./assets/group-1.png`)" alt="" class="col-0 col-lg-5  d-none d-lg-block">
      <BigInfoBlock class="col-12 col-lg-6 offset-0 offset-lg-1 d-flex flex-column align-self-center">
        <template v-slot:head>experiences</template>
        <template v-slot:title>we provide you the best experience</template>
        <template v-slot:text>You don’t have to worry about the result because all of these interiors are made by people
          who are professionals in their fields with an elegant and lucurious style and with premium quality
          materials</template>
        <template v-slot:button-text>More Info</template>
      </BigInfoBlock>
    </div>
    <div class="row d-flex flex-row flex-nowrap img-group-and-big-info-block">
      <img :src="require(`./assets/group-2.png`)" alt=""
        class="col-0 col-lg-5 offset-0 offset-lg-1 d-none d-lg-block order-last">
      <BigInfoBlock class="col-12 col-lg-6 d-flex flex-column align-self-center">
        <template v-slot:head>materials</template>
        <template v-slot:title>Very serious materials for making furniture</template>
        <template v-slot:text>Because panto was very serious about designing furniture for our environment, using a very
          expensive and famous capital but at a relatively low price</template>
        <template v-slot:button-text>More Info</template>
      </BigInfoBlock>
    </div>
    <div class="row feedback">
      <span class="feedback-head text-center">Testimonials</span>
      <h2 class="text-center">Our Client Reviews</h2>
      <div class="d-flex flex-row flex-nowrap feedback-cards justify-content-center">
        <FeedbackCard :feedbacks="feedbacks"></FeedbackCard>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
