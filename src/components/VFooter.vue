<template>
    <footer class="footer">
        <div class="wrapper footer__wrapper">
            <v-logo class="footer__item"/>
            <v-menu class="footer__item"/>
            <v-menu class="footer__item"/>
            <div class="contacts footer__item">
                <ul>
                    <li class="contacts__item">Адрес: Наб. реки Фонтанки 10-15</li>
                    <li class="contacts__item">Телефон: 8 (812) 123-45-67</li>
                    <li class="contacts__item">Отдел продаж: 10:00 - 20:00</li>
                    <li class="contacts__item">E-mail: <mark>vip@housevip.ru</mark></li>
                </ul>
                <social />
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'v-footer',
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss'; 
@import '@/assets/styles/mixinsAndTemplates.scss';

.footer {
    background-color: #2D343C;

    &__wrapper {
        @include centered(space-between);
        align-items: start;
        padding: 60px 0;
    }

    & li {
        margin-bottom: 15px;

        & mark {
            background-color: transparent;
            color: $accent;
            font-weight: 700;
        }
    }
}

.contacts {
    &__item {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
}

@media (max-width: 1200px) {
    .footer {
        &__wrapper {
            width: 80% !important;
        }
    }
}

@media (max-width: 992px) {
    .footer {
        &__wrapper {
            flex-wrap: wrap;
        }

        &__item {
            width: 40%;
            margin-bottom: 50px;
        }
    }
}

@media (max-width: 768px) {
    .footer {
        & .menu__list-link,
        & .contacts__item {
            font-size: 13px;
        }

        & li {
            margin-bottom: 10px;
        }
    }
}

@media (max-width: 540px) {
    .footer {
        &__wrapper {
            flex-direction: column;
        }

        &__item {
            width: 100%;
        }
    } 
}

@media (max-width: 414px) {
    .footer__wrapper {
        padding: 50px 0 0;
    }
}
</style>