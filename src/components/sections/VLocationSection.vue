<template>
    <section class="location">
        <div class="wrapper">
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
        const observer = new IntersectionObserver(callback, { threshold: 0 });
        observer.observe(this.$refs['location-title']);
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

    &__title {
        width: $contentWidth;
        transform: translate(20%, 0);
        opacity: 0;
        transition: all 0.7s ease;
    }

    &__map {
        width: $contentWidth;
        margin: 100px auto 0;
    }
}

@media (max-width: 1200px) {
    .location {
        padding: 130px 0;

        &__map {
            width: 100%;
        }
    }
}

@media (max-width: 768px) {
    .location {
        padding: 100px 0;

        &__map {
            margin: 50px auto 0;
        }
    }
}

@media (max-width: 414px) {
    .location {
        padding: 50px 0;
    }
}
</style>