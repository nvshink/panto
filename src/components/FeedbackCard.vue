<script>
    export default {
        props: {
            feedbacks: {
                type: Array
            },
        },
    }
    </script>
    <template>
        <li v-for="(feedback) in feedbacks" class="feedback-card card">
            <img :src="require(`../assets/bg-${feedback.background}.png`)" alt="" class="card-img-top feedback-background">
            <div class="card-body feedback-card-foot d-flex flex-column align-items-center">
            <img :src="require(`../assets/ava-${feedback.avatar}.png`)" alt="" class="feedback-ava  rounded-circle">
            <span class="feedback-name">{{feedback.name}}</span>
            <span  class="feedback-comment mt-auto text-center">&quot{{feedback.comment}}&quot</span>
            <span class="mt-auto">{{feedback.rate}}/5</span>
        </div>
        </li>
    </template>
    