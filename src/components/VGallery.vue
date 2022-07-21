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
    width: auto;
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
            font-size: 0;
        }
    }

    & .active-slide {
        flex: 10;

        & span {
            font-size: 24px;
            opacity: 1;
            transition: all 0.3s ease-in 0.4s;
        }
    }
}

@media (max-width: 1200px) {
    .gallery {
        & span {
            bottom: 20px;
            left: 20px;
        }

        & .active-slide span {
            font-size: 20px;
        }
    }
}

@media (max-width: 768px) {
    .gallery {
        margin: 80px auto 0;

        &__slide {
            height: 30vh;
        }

        & .active-slide span {
            font-size: 16px;
        }
    }
}

@media (max-width: 576px) {
    .gallery {
        margin: 50px auto 0;

        &__slide {
            height: 30vh;
            margin: 5px;

            & span {
                bottom: 15px;
                left: 15px;                
            }
        }

        & .active-slide span {
            font-size: 14px;
        }
    }
}

@media (max-width: 414px) {
    .gallery {
        margin: 50px auto 0;

        &__slide {
            height: 25vh;
            margin: 3px;

            & span {
                bottom: 10px;
                left: 10px;                
            }
        }

        & .active-slide span {
            font-size: 10px;
        }
    }
}
</style>