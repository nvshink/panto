<script>
export default {
    props: {
        products: {
            type: Array
        },
    },
}
</script>
<template>
    <li v-for="(product) in products" class="product-card card">
        <img :src="require(`../assets/${product.photo}.png`)" alt="" class="card-img-top bg-transpanent">
        <div class="d-flex flex-column product-card-foot card-body">
        <span class="product-type">{{product.type}}</span>
        <span>{{product.name}}</span>
        <span>{{product.rate}}/5</span>
        <span><sup>&#36</sup>{{product.price}}</span>
    </div>
    </li>
</template>
