<template>
    <section class="benefit">
        <div class="benefit__number">II</div>
        <div 
            class="benefit__block"
            ref="bench"    
        >
            <v-bench />
            <span>Рядом исторические парки и скверы</span>
        </div>
        <div 
            class="benefit__block"
            ref="building"
        >
            <v-building />
            <span>Полностью обустроенный</span>
        </div>
        <div 
            class="benefit__block" 
            ref="fountain"
        >
            <v-fountain />
            <span>10 фонтанов на территории</span>
        </div>
        <div 
            class="benefit__block" 
            ref="bicycle"
        >
            <v-bicycle />
            <span>6 км велодорожек</span>
        </div>
    </section>
</template>
<script>
export default {
    name: 'v-benefits-section',
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
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss'; 
@import '@/assets/styles/mixinsAndTemplates.scss';

.benefit {
    @include centered(center);
    background-color: $bg;
    position: relative;
    padding: 120px 0;

    &__number {
        @extend %numberPosition;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
    }

    &__block {
        @include centered(center);
        width: 193px;
        flex-direction: column;
        margin-right: 70px;
        opacity: 0;
        transition: opacity 3s ease;

        & span {
            font-family: 'Roboto';
            font-size: 20px;
            line-height: 27px;
            text-align: center;
            color: #FFFFFF;
            margin-top: 53px;
        }
    }
}

.active {
    transform: translate(0, 0);
    opacity: 1;
}
</style>