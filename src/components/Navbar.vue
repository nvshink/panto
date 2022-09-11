<script >
import Logo from './Logo.vue';
import DropDown from './DropDown.vue';
import TextLink from './TextLink.vue';
import ShoppingCart from './ShoppingCart.vue';
import List from './List.vue';
export default {
props: {
productsTypes: {
type: Array,
required: true,
}
},
components: {
Logo,
DropDown,
TextLink,
ShoppingCart,
List
}
}
</script>

<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-md">
      <div class="navbar-brand col-9 col-md-1">
        <Logo class="logo"></Logo>
      </div>
      <button class="col-1 col-md-0 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <List class="list-toggle"></List>
      </button>
      <ShoppingCart class="col-1 col-md-1 order-3 order-md-3 justify-content-end"></ShoppingCart>
      <div class="col-12 col-md-8 order-4 order-md-2 justify-content-center collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav gap-md-5">
          <DropDown class="nav-item" :productsTypes="productsTypes"></DropDown>
          <TextLink class="nav-item nav-link" link="#">Shop</TextLink>
          <TextLink class="nav-item nav-link" link="#">About Us</TextLink>
          <TextLink class="nav-item nav-link" link="#">Contact</TextLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
