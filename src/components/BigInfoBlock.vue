<script setup>
import WideArrow from './WideArrow.vue';
</script>
    <template>
    <div class="big-info-block">
        <span class="big-info-block-head">
            <slot name="head"></slot>
        </span>
        <h3 class="mt-4 mb-4 big-info-block-title">
            <slot name="title"></slot>
        </h3>
        <p class="mb-4">
            <slot name="text"></slot>
        </p>
        <WideArrow>
            <slot name="button-text"></slot>
        </WideArrow>
    </div>
</template>