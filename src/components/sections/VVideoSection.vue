<template>
    <transition name="fade">
        <v-modal 
            v-if="isModalVisible"
            v-model:isVisible="isModalVisible"
        >
            <iframe 
                src="https://www.youtube.com/embed/Jd4cILtGiRA?&autoplay=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            ></iframe>
        </v-modal>
    </transition>
    <section class="video">
        <div class="video__top">
            <div class="video__top-content wrapper">
                <div 
                    class="video__top-left"
                    ref="video-left-block"
                >
                    <h3 class="video__title section-title">Хотите посмотреть?</h3>
                    <p class="video__txt">
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. 
                    </p>
                </div>
                <div 
                    class="video__top-right"
                    ref="video-right-block"
                >
                    <v-form />
                </div>
            </div>
        </div>
        <div class="video__bottom">
            <div class="video__bottom-number">IV</div>
            <div class="video__bottom-image">
                <v-button 
                    @click="showModal"
                    class="video__bottom-btn"
                >
                    <v-play-button />
                </v-button>
            </div>
        </div>
    </section>
</template>
<script>
import VForm from '@/components/VForm.vue';

export default {
    name: 'v-video-section',
    components: {
        VForm,
    },
    data() {
        return {
            isModalVisible: false,
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.video {
    &__top {
        background-image: url('@/assets/images/section-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
        padding: 180px 0;

        &-content {
            @include centered(space-between);
        }

        &-left {
            margin-right: 35px;
            transform: translate(-10%, 0);
            opacity: 0;
            transition: all 0.7s ease;
        }

        &-right {
            transform: translate(10%, 0);
            opacity: 0;
            transition: all 0.7s ease;

            .form {
                @include centered(space-between);
                flex-wrap: wrap;

                & .name {
                    order: 1;
                }

                & .phone {
                    order: 2;
                }

                &__input {
                    margin-bottom: 35px;
                    width: 231px;
                }

                    &__info {
                        order: 3;
                        width: 255px;
                    }

                    &__btn {
                        order: 4;
                        width: 255px;
                        padding: 12px;
                    }
            }
        }
    }

    &__txt {
        width: 535px;
        margin-top: 50px;
        font-family: 'Raleway';
        font-size: 16px;
        line-height: 24px;
    }

    &__bottom {
        background-color: $bg;
        position: relative;

        &-number {
            @extend %numberPosition;
            top: 50%;
            right: -100px;
            transform: translate(-50%, -50%);
        }

        &-image {
            @include centered(center);
            background-image: url('@/assets/images/video-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
            width: 718px;
            height: 650px;
            margin: 0 auto;
        }
    }
}

.modal iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}

@media (max-width: 1200px) {
    .video {
        &__top {
            padding: 130px 0;

            &-content {
                flex-wrap: wrap;
            }

            &-left {
                margin-bottom: 50px;
                margin-right: 0;
            }
        }

        &__txt {
            width: auto;
        }

        .form {
            &__btn {
                order: 3;
                margin-bottom: 35px;
            }

            &__info {
                order: 4;
                margin-bottom: 35px;
            }
        }

        &__bottom-number {
            display: none;
        }
    }
}

@media (max-width: 992px) {
    .video {
        .form {
            &__input {
                width: 30%;
            }
            &__btn {
                width: 30%;
            }
        }
    }
}

@media (max-width: 768px) {
    .video {
        &__top {
            padding: 100px 0;
        }

        .form {
            &__input {
                width: 40%;
            }
            &__btn {
                width: 44%;
                order: 4;
                font-size: 14px;
            }

            &__info {
                width: 44%;
                order: 3;
            }
        }

        &__bottom-image {
            width: 100%;
        }
    }
}

@media (max-width: 576px) {
    .video {
        .form {
            &__btn {
                width: 45.5%;
            }

            &__info {
                width: 45.5%;
            }
        }

        &__bottom-image {
            height: 300px;
        }
    }
}

@media (max-width: 414px) {
    .video {
        &__top {
            padding: 50px 0;
        }
        
        .form {
            &__btn {
                width: 47%;
                font-size: 12px;
            }

            &__info {
                width: 47%;
                font-size: 10px;
            }
        }
    }
}

@media (max-width: 375px) {
    .video {
        &__txt {
            font-size: 14px;
        }
        
        .form {
            &__btn {
                font-size: 11px;
            }

            &__info {
                font-size: 8px;
            }
        }
    }
}

@media (max-width: 320px) {
    .video {
        .form {
            &__btn {
                line-height: 12px;
            }
        }
    }
}
</style>