<template>
    <div class="logo">
        <router-link class="logo__link" to="/">HouseVOP</router-link>
        <span class="logo__txt">жилой комплекс</span>
    </div>
</template>
<script>
export default {
    name: 'v-logo',
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';

.logo {
    &__link {
        color: #fff;
        font-family: 'Post No Bills Jaffna SemiBold', sans-serif;
        font-weight: 600;
        font-size: 36px;
        line-height: 54px;

        &:hover {
            color: $accent;
        }

        &:active {
            color: #fff;
        }
    }

    &__txt {
        color: #fff;
        font-family: 'Raleway';
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }
}

@media (max-width: 576px) {
    .logo {
        &__link {
            font-size: 28px;
            line-height: 28px;
        }

        &__txt {
            font-size: 9px;
        }
    }
}
</style>