<script setup>
import WideArrow from './WideArrow.vue';

</script>
<template>
    <div>
        <h3 class="mt-4 mb-3">
            <slot name="title"></slot>
        </h3>
        <p class="mb-2">
            <slot name="text"></slot>
        </p>
        <WideArrow>
            <slot name="button-text"></slot>
        </WideArrow>
    </div>
</template>