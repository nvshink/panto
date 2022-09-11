<script>
import TextLink from './TextLink.vue';
export default {
data() {
return {
dispMenu: false
}
},
props: {
productsTypes: {
type: Array,
required: true,
}
},
components: { TextLink }
}


</script>
    <template>
    <div class="dropdown">
        <div data-bs-toggle="dropdown">
            <div class="d-flex dropdown-btn">
            <TextLink class="nav-link">Furniture</TextLink>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.00005 7.99554C3.99969 8.12361 4.02324 8.25016 4.06897 8.36588C4.1147 8.48159 4.18145 8.58354 4.26431 8.66423L8.54962 12.805C8.67742 12.9311 8.83772 13 9.00315 13C9.16858 13 9.32888 12.9311 9.45668 12.805L13.742 8.51849C13.8878 8.37297 13.9796 8.16387 13.997 7.93718C14.0144 7.71048 13.9561 7.48477 13.8348 7.3097C13.7136 7.13463 13.5394 7.02453 13.3505 7.00363C13.1617 6.98273 12.9736 7.05274 12.8278 7.19825L8.99958 11.0304L5.17137 7.32685C5.06653 7.22201 4.93887 7.15542 4.80349 7.13495C4.66811 7.11448 4.53068 7.14098 4.40746 7.21133C4.28424 7.28167 4.18038 7.39292 4.10818 7.53189C4.03598 7.67087 3.99846 7.83177 4.00005 7.99554Z"/>
            </svg>
        </div>
        </div>
        <ul class="dropdown-menu">
            <li class="dropdown-item" v-for="(productType) in productsTypes">
                <a href="#">{{ productType }}</a>
            </li>
        </ul>
    </div>
</template>