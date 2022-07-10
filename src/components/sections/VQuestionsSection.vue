<template>
    <section class="questions">
        <div class="wrapper">
            <h3 
                class="questions__title section-title"
                ref="questions-title"
            >
                Есть вопросы?
            </h3>
            <v-form class="questions__form" />
        </div>
    </section>
</template>
<script>
import VForm from '@/components/VForm.vue';
export default {
    name: 'v-questions-section',
    components: {
        VForm,
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

.questions {
    background-color: $bg;
    padding-bottom: 180px;

    &__title {
        width: $contentWidth;
        transform: translate(50%, 0);
        opacity: 0;
        transition: all 0.7s ease;
    }

    &__form {
        @include centered(space-between);
        width: $contentWidth;
        margin: 50px auto 0;
    }

    & span,
    & .name,
    & .phone,
    & button {
        width: 255px;
    }

    & button {
        padding: 12px;
    }
}
    
</style>