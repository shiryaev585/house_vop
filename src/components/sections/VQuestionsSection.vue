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
        const observer = new IntersectionObserver(callback, { threshold: 0 });
        observer.observe(this.$refs['questions-title']);
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
        transform: translate(20%, 0);
        opacity: 0;
        transition: all 0.7s ease;
    }

    &__form {
        @include centered(space-between);
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

@media (max-width: 1200px) {
    .questions {
        .form {
            flex-wrap: wrap;

            &__input {
                order: 1;
                margin-bottom: 35px;
                width: 231px;
            }
            &__btn {
                order: 3;
                margin-bottom: 35px;
                width: 255px;
            }

            &__info {
                order: 4;
                margin-bottom: 35px;
                width: 255px;
            }
        }
    }
}

@media (max-width: 1024px) {
    .questions {
        padding-bottom: 100px;
    }
}

@media (max-width: 992px) {
    .questions {
        padding-bottom: 100px;

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
    .questions {
        padding-bottom: 65px;

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
    .questions {
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
    .questions {
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
    .questions {
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
    .questions {
        .form {
            &__btn {
                line-height: 12px;
            }
        }
    }
}
    
</style>