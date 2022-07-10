<template>
    <v-header />
    <router-view></router-view>
    <v-footer />
</template>

<script>
import VHeader from '@/components/VHeader.vue';
import VFooter from '@/components/VFooter.vue';

export default {
    components: {
        VHeader,
        VFooter,
    },
} 
</script>

<style lang="scss">
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

</style>
