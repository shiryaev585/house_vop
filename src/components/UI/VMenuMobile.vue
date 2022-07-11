<template>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
    </label>
    <ul class="mobile-menu">
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
    name: 'v-mobile-menu',
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss'; 

.mobile-menu {
    display: none;
}

.mobile-menu > li {
    margin: 0 1rem;
    overflow: hidden;
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
    .mobile-menu {
        display: block;
    }
    .menu-button-container {
        display: flex;
    }

    .mobile-menu {
        position: absolute;
        top: 0;
        left: 0;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    #menu-toggle ~ .mobile-menu li {
        height: 0;
        margin: 0;
        padding: 0;
        border: 0;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked ~ .mobile-menu li {
        height: auto;
        padding: 12px;
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .mobile-menu > li {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0.5em 0;
        width: 100%;
        color: white;
        background-color: $bg;
    }
    .mobile-menu > li:not(:last-child) {
        border-bottom: 1px solid #444;
    }
}
</style>