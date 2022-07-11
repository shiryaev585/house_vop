<template>
    <div 
        class="modal"
        @click="hideModal"
    >
        <div 
            class="modal__content"
            @click.stop
        >
            <v-button
                class="modal__content-close"
                @click="hideModal"
            >
                <v-close />
            </v-button>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import VButton from './VButton.vue';

export default {
    name: 'v-modal',
    components: { 
        VButton 
    },
    props: {
        isVisible: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideModal() {
            this.$emit('update:isVisible', false);
        },
    },
}
</script>
<style lang="scss">
@import '../../assets/styles/variables.scss';

.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    z-index: 10;

    &__content {
        position: relative;
        margin: auto;
        background: $bg;

        width: 100%;
        padding-top: 56.25%;

        &-close {
            position: absolute;
            top: -30px;
            right: 10px;
        }
    }
}

@media (min-width: 1024px) {
    .modal__content {
        width: 80%;
        padding-top: 45%;
    }
}

</style>