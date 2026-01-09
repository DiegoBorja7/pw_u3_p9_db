<template>
    <div>
        <Pregunta />
    </div>
</template>

<script>
import Pregunta from '../components/Pregunta.vue';
export default {
    name: 'PreguntaView',
    components: {
        Pregunta
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>