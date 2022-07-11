<template>
    <v-benefits-section />
    <v-flats-section />
    <v-video-section />
    <v-location-section />
    <v-questions-section />
</template>
<script>
import VBenefitsSection from '@/components/sections/VBenefitsSection.vue';
import VFlatsSection from '@/components/sections/VFlatsSection.vue';
import VVideoSection from '@/components/sections/VVideoSection.vue';
import VLocationSection from '@/components/sections/VLocationSection.vue';
import VQuestionsSection from '@/components/sections/VQuestionsSection.vue';

export default {
    components: { 
        VBenefitsSection,
        VFlatsSection,
        VVideoSection,
        VLocationSection,
        VQuestionsSection,
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

.wrapper {
    width: $contentWidth;
    margin: 0 auto;
}

.section-title {
    font-family: 'Playfair Display';
    font-size: 36px;
    line-height: 48px;
    color: $accent;
    margin: auto;
    display: inline-block;
    width: 300px;
}

.active {
    transform: translate(0, 0);
    opacity: 1;
}

@media (max-width: 1200px) {
    .wrapper {
        width: 80%;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 32px;
    }
}

@media (max-width: 576px) {
    .section-title {
        font-size: 28px;
    }
}

@media (max-width: 414px) {
    .section-title {
        font-size: 24px;
        width: 260px;
    }
}

@media (max-width: 320px) {
    .section-title {
        font-size: 22px;
        width: 200px;
    }
}

</style>