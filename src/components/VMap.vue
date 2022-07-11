<template>
    <iframe 
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab8ba1e7d724d72914abf1e232130d013a13eb23ceadaedb6631fca493fa942a6&amp;source=constructor" 
        width="1100" 
        height="358" 
        frameborder="0"
    ></iframe>
</template>
<script>

export default {
    name: 'v-map',
}
</script>
<style lang="scss">
@media (max-width: 1200px) {
    iframe {
        width: 100%;
    }
}

@media (max-width: 414px) {
    iframe {
        height: 250px;
    }
}
</style>