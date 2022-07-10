<template>
    <header class="header">
        <div class="header__top">
            <div class="header__top-content">
                <v-logo />
                <navbar />
            </div>
        </div>
        <div class="header__center">
            <h1 ref="title" class="header__center-title">Жилой комплекс в историческом центре</h1>
            <v-button 
                class="header__center-btn" 
                @click="scrollToNextSection"
            >
                <v-mouse />
            </v-button>
        </div>
        <div class="header__bottom">
            <div ref="address" class="header__bottom-address">
                <v-address />
                <span>Наб. реки Фонтанки 10-15</span>
            </div>
            <div ref="phone" class="header__bottom-phone">
                <v-phone />
                <span>8 (812) 123-45-67</span>
            </div>
        </div>
        <div ref="bottom"></div>
    </header>
</template>
<script>
import VMouse from './UI/icons/VMouse.vue';

export default {
    components: { 
        VMouse,
    },
    methods: {
        setScroll(element, behavior = 'smooth') {
            const scrollTop = window.pageYOffset || element.scrollTop;
            const finalOffset = element.getBoundingClientRect().top + scrollTop;

            window.scrollTo({
                top: finalOffset,
                behavior: behavior || 'auto',
            });
        },
        scrollToNextSection() {
            this.setScroll(this.$refs.bottom);
        }
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
@import '../assets/styles/variables.scss'; 
@import '../assets/styles/mixinsAndTemplates.scss';

.header {
    background-image: url('../assets/images/header-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 840px;
    color: #fff;
    position: relative;

    &__top {
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        padding: 15px 0;
        backdrop-filter: blur(8px);
        z-index: 100;

        &-content {
            @include centered(space-between);
            width: $contentWidth;
            margin: auto;
        }
    }

    & .navbar__list {
        display: flex;

        & li {
            margin-left: 40px;
        }
    }

    &__center {
        padding-top: 200px;
        margin: 0 auto;
        width: 556px;
        
        &-title {
            font-family: 'Playfair Display';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 48px;
            color: $accent;
            text-align: center;

            transform: translate(0, 200%);
            opacity: 0;
            transition: all 0.7s ease;
        }

        &-btn {
            margin: 100px auto 0;
        }
    }

    &__bottom {
        margin: 200px auto 74px;
        @include centered(center);

        &-address,
        &-phone {
            @include centered(center);
        }

        &-address {
            margin-right: 100px;
            transform: translate(-200%, 0);
            opacity: 0;
            transition: all 0.7s ease;
        }

        &-phone {
            transform: translate(200%, 0);
            opacity: 0;
            transition: all 0.7s ease;
        }

        & svg {
            margin-right: 18px;
        }
    }
}

.active {
    transform: translate(0, 0);
    opacity: 1;
}

</style>