<template>
    <ul class="menu__list">
        <li>
            <router-link
                class="menu__list-link" 
                to="/about"
            >
                О комплексе
            </router-link>
        </li>
        <li>
            <router-link
                class="menu__list-link" 
                to="/location"
            >
                Район
                </router-link>
        </li>
        <li>
            <router-link
                class="menu__list-link" 
                to="/catalog"
            >
                Каталог квартир
            </router-link>
        </li>
        <li>
            <router-link
                class="menu__list-link" 
                to="/mortgage"
            >
                Ипотека
            </router-link>
        </li>
        <li>
            <router-link
                class="menu__list-link" 
                to="/contacts"
            >
                Контакты
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'v-menu',
}
</script>
<style lang="scss">
@import '../../assets/styles/variables.scss';

.menu__list-link {
    color: #fff;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;

    &:hover {
        color: $accent;
    }

    &:active {
        color: #fff;
    }
}
</style>