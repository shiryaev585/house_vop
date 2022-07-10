<template>
    <form class="form" @submit.prevent>
        <span class="form__info">*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</span>
        <input 
            class="form__input name" 
            type="text" 
            placeholder="Ваше имя"
        >
        <input 
            class="form__input phone" 
            type="tel"
            placeholder="Ваш телефон"
        >
        <v-button
            class="form__btn" 
            type="submit"
        >
            Посмотреть район
        </v-button>
    </form>
</template>
<script>
export default {
    name: 'v-form',
}
</script>
<style lang="scss">
@import '../assets/styles/variables.scss';

.form {
    display: flex;

    &__input {
        background: rgb(255, 255, 255, 0.2);
        padding: 12px;
        font-size: 14px;
        line-height: 27px;
        color: #BEBEBE;
    }

    &__info {
        font-size: 13px;
        line-height: 16px;
        text-align: center;
        color: #E7E7E7;
    }

    &__btn {
        background: $accent;
        font-weight: 700;
        font-size: 16px;
        line-height: 27px;
        color: #FFFFFF;

        &:hover {
            background: $accentHover;
        }

        &:active {
            background: $accent;
        }
    }
}
</style>