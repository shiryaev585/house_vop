<template>
    <div class="mobile-menu-wrapper">
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button' @click="toggleMobMenu"></div>
        </label>
        <ul class="mobile-menu" ref="mobile-menu">
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
    </div>

</template>
<script>
export default {
    name: 'v-mobile-menu',
    methods: {
        toggleMobMenu() {
            this.$refs['mobile-menu'].classList.toggle('active-menu');
        },
    },
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss'; 
@import '@/assets/styles/mixinsAndTemplates.scss';

.mobile-menu {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: $bg;
    @include centered(center);
    flex-direction: column;
    height: 0;
    opacity: 0;
    transition: all 0.4s ease;

    & .menu__list-link {
        font-size: 0;
        transition: all 0.4s ease;
    }
}
.active-menu {
    height: 200px;
    opacity: 1;

    & .menu__list-link {
        padding: 10px;
        font-size: 18px;
    }
}

.menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 1px;
    z-index: 100;
}

.menu-button::before {
    content: '';
    margin-top: -8px;
}

.menu-button::after {
    content: '';
    margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
}

@media (max-width: 992px) {
    .menu-button-container {
        display: flex;
        margin-left: auto;
        margin-top: 50%;
    }
}
</style>