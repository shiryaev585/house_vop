<template>
    <section class="flats">
        <div class="wrapper flats__wrapper">
            <div class="flats__number">III</div>
            <h3 
                class="flats__title section-title"
                ref="flats-title"
            >
                Наши квартиры
            </h3>
            <v-gallery />
        </div>
    </section>
</template>
<script>
import VGallery from '@/components/VGallery.vue';
export default {
    name: 'v-flats-section',
    components: {
        VGallery,
    },
    mounted() {
        const callback = (entries) => {
            const element = entries[0].target;
                entries[0].isIntersecting
                    ? element.classList.add('active')
                    : element.classList.remove('active');
        };
        const observer = new IntersectionObserver(callback, { threshold: 0 });
        observer.observe(this.$refs['flats-title']);
    },
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss'; 
@import '@/assets/styles/mixinsAndTemplates.scss';

.flats {
    background-color: $bg;
    position: relative;

    &__number {
        @extend %numberPosition;
        top: 30%;
        left: 20%;
        transform: translate(-50%, -50%);
    }

    &__title {
        transform: translate(20%, 0);
        opacity: 0;
        transition: all 0.7s ease;
    }
}

@media (max-width: 768px) {
    .flats {
        &__number {
            left: 50%;
            font-size: 250px;
        }
    }
}
</style>