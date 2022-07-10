<template>
    <section class="location">
        <div class="wrapper">
            <div class="location__number">V</div>
            <h3 
                class="location__title section-title"
                ref="location-title"
            >
                Район на карте
            </h3>
            <div class="location__map">
                <v-map />
            </div>
        </div>
    </section>
</template>
<script>
import VMap from '@/components/VMap.vue';
export default {
    name: 'v-location-section',
    components: {
        VMap,
    },
    mounted() {
        const callback = (entries) => {
            const element = entries[0].target;
                entries[0].isIntersecting
                    ? element.classList.add('active')
                    : element.classList.remove('active');
        };
        Object.values(this.$refs).forEach((ref) => {
            const observer = new IntersectionObserver(callback, { threshold: 0 });
            observer.observe(ref);
        });
    },
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss'; 
@import '@/assets/styles/mixinsAndTemplates.scss';

.location {
    background-color: $bg;
    padding: 180px 0;
    position: relative;

    &__number {
        @extend %numberPosition;
        top: 45%;
        left: 20%;
        transform: translate(-50%, -50%);
    }

    &__title {
        width: $contentWidth;
        transform: translate(50%, 0);
        opacity: 0;
        transition: all 0.7s ease;
    }

    &__map {
        width: $contentWidth;
        margin: 100px auto 0;
    }
}
</style>