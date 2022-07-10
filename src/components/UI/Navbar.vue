<template>
    <nav class="navbar">
        <ul class="navbar__list">
            <li>
                <router-link
                    class="navbar__list-link" 
                    to="/about"
            >
                О комплексе
                </router-link>
            </li>
            <li>
                <router-link
                    class="navbar__list-link" 
                    to="/location"
            >
                Район
                </router-link>
            </li>
            <li>
                <router-link
                    class="navbar__list-link" 
                    to="/catalog"
            >
                Каталог квартир
                </router-link>
            </li>
            <li>
                <router-link
                    class="navbar__list-link" 
                    to="/mortgage"
            >
                Ипотека
                </router-link>
            </li>
            <li>
                <router-link
                    class="navbar__list-link" 
                    to="/contacts"
            >
                Контакты
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'navbar',
}
</script>
<style lang="scss">
@import '../../assets/styles/variables.scss';

.navbar__list-link {
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