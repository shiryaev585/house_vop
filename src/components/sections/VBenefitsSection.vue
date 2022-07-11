<template>
    <section class="benefit">
        <div class="wrapper benefit__wrapper">
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
<style lang="scss">
@import '@/assets/styles/variables.scss'; 
@import '@/assets/styles/mixinsAndTemplates.scss';

.benefit {
    background-color: $bg;
    padding: 120px 0;

    &__wrapper {
        @include centered(center);
        position: relative;
    }

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

@media (max-width: 1200px) {
    .benefit {
        &__wrapper {
            justify-content: space-between;
        }

        &__block {
            margin-right: 0;
            width: 160px;

            & span {
                font-size: 16px;
            }
        }
    }
}

@media (max-width: 992px) {
    .benefit__block span {
        font-size: 15px;
    }
}

@media (max-width: 768px) {
    .benefit {
        padding: 100px 0;

        &__wrapper {
            flex-wrap: wrap;
        }

        &__number {
            left: 50%;
            font-size: 250px;
        }

        &__block {
            width: 40%;
            margin-bottom: 40px;
        }
    }
}

@media (max-width: 414px) {
    .benefit {
        padding: 50px 0;
    }
}

@media (max-width: 360px) {
    .benefit {
        padding: 30px 0;
    }
}
</style>