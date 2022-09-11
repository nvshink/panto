<script>
export default {
props: ['link'],
}
</script>
        
<template>
    <a v-bind:href="link"><slot></slot></a>
</template>
        