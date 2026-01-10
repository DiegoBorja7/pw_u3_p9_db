<template>
    <h3>Hola cabrones</h3>
    <p>Consultando los datos del estudiante /{{ idEstudiante }}</p>
    <button @click="identificarID">Identificar ID</button>
</template>

<script>
export default {
    name: 'HolaMundo',
    data() {
        return {
            idEstudiante: null,
        }
    },
    created() {
        console.log(this.$route);
        console.log(this.$route.query);

    },
    methods: {
        identificarID() {
            this.idEstudiante = this.$route.params.id;
        }
    }

}
</script>

<style scoped>
h3 {
    color: rgb(76, 0, 255);
}
</style>