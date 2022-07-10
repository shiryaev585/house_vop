<template>
    <div class="gallery">
        <div class="gallery__slide first-slide" @click="setActiveClass">
            <span>Лофт — 1 этажа</span>
        </div>
        <div class="gallery__slide second-slide active-slide" @click="setActiveClass">
            <span>Лофт — 2 этажа</span>
        </div>
        <div class="gallery__slide third-slide" @click="setActiveClass">
            <span>Лофт — 3 этажа</span>
        </div>
        <div class="gallery__slide fourth-slide" @click="setActiveClass">
            <span>Лофт — 4 этажа</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-gallery',
    methods: {
        setActiveClass({ target }) {
            const slides = document.querySelectorAll('.gallery__slide');
            slides.forEach((slide) => {
                if (slide.classList.contains('active-slide')) {
                    slide.classList.remove('active-slide');
                }
            });
            target.classList.add('active-slide');
        },
    },
}
</script>
<style lang="scss">
@import '../assets/styles/variables.scss';

.gallery {
    width: $contentWidth;
    display: flex;
    margin: 100px auto 0;

    & .first-slide {
        background-image: url('../assets/images/loft-1.png');
    }
    & .second-slide {
        background-image: url('../assets/images/loft-2.png');
    }
    & .third-slide {
        background-image: url('../assets/images/loft-3.png');
    }
    & .fourth-slide {
        background-image: url('../assets/images/loft-4.png');
    }

    &__slide {
        height: 50vh;
        border-radius: 5px;
        margin: 10px;
        cursor: pointer;
        color: #fff;
        flex: 1;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        transition: all 0.5s ease-in-out;

        & span {
            position: absolute;
            bottom: 50px;
            left: 50px;
            opacity: 0;
        }
    }

    & .active-slide {
        flex: 10;

        & span {
            opacity: 1;
            transition: opacity 0.3s ease-in 0.4s;
        }
    }
}
</style>