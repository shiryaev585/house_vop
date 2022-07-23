<template>
    <div ref="top"></div>
    <v-header />
    <router-view></router-view>
    <v-footer />
    <div 
        class="up-btn-wrapper"
        :class="{['show-btn']: isScrolled}"
    >
        <v-button 
            class="up-btn"
            @click="scrollToTop"
        >
            <v-arrow-up />
        </v-button>
    </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue';
import VFooter from '@/components/VFooter.vue';

export default {
    components: {
        VHeader,
        VFooter,
    },
    data() {
        return {
            isScrolled: false,
        }
    },
    methods: {
        setScroll(element, behavior = 'smooth') {
            const scrollTop = window.pageYOffset || element.scrollTop;
            const finalOffset = element.getBoundingClientRect().top + scrollTop;

            window.scrollTo({
                top: finalOffset,
                behavior: behavior || 'auto',
            });
        },
        scrollToTop() {
            this.setScroll(this.$refs.top);
        },
        scrollHandler() {
            window.pageYOffset > 300
                ? this.isScrolled = true
                : this.isScrolled = false;
        },

    },
    mounted() {
        window.addEventListener('scroll', this.scrollHandler);
    },
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss'; 

body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Raleway', sans-serif;
}

ol, 
ul {
    list-style: none;
}

a, 
button,
input,
textarea,
select {
    outline: none;
    display: block;
}

button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
}

input,
textarea,
select {
	font-family:inherit;
	font-size:inherit;
	font-weight:inherit;
    border: none;
}

a {
    text-decoration: none;
}

.up-btn-wrapper {
    position: fixed;
    bottom: 3%;
    right: 3%;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.show-btn {
    opacity: 1;
}

</style>
