<template>
    <footer class="footer">
        <div class="wrapper footer__wrapper">
            <v-logo />
            <navbar />
            <navbar />
            <div class="contacts">
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
</style>