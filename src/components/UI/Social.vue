<template>
    <div class="social">
        <ul>
            <li class="social__item">
                <a href="https://www.youtube.com/channel/UCF94uYAEIOElRoIkztVq10A" target="_blank"><v-youtube /></a>
            </li>
            <li class="social__item">
                <a href="https://vk.com/tashirestate" target="_blank"><v-vk /></a>
            </li>
            <li class="social__item">
                <a href="https://www.facebook.com/tashirestate" target="_blank"><v-fb /></a>
            </li>
            <li class="social__item">
                <a href="https://www.instagram.com/tashirestate/" target="_blank"><v-instagram /></a>
            </li>
        </ul>
    </div>
</template>
<script>
import VYoutube from './icons/VYoutube.vue';

export default {
    components: { 
        VYoutube,
    },
    name: 'social',
}
</script>
<style lang="scss">
@import '@/assets/styles/mixinsAndTemplates.scss';
@import '@/assets/styles/variables.scss';

.social {
    margin-top: 20px;

    & ul {
        @include centered(start);
    }

    &__item {
        margin-right: 25px;

        &:hover svg path {
            fill: $accent;
        }

        &:active svg path {
            fill: #fff;
        }
    }
}
</style>