<template>
    <div>
        <img v-if="imagen" :src="imagen" alt="Yes Image">
        <img v-else src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif" alt="Default Image">
        <br>
        <div class="pregunta-container">
            <input v-model="pregunta" type="text" placeholder="Escribe tu pregunta aquí..." />
            <p>Recuerda terminar con el signo de interrogacion (?)</p>
            <h2>{{ pregunta }}</h2>
            <h2 v-if="respuesta">{{ respuesta }}</h2>
            <h2 v-else>No hay respuesta</h2>
        </div>
    </div>

</template>

<script>
import ConsumirAPIFacade from '../clients/YesNoClient.js'
export default {

    name: 'Pregunta',

    data() {
        return {
            pregunta: '',
            respuesta: '',
            imagen: ''
        }
    },

    watch: { //son observadores de propiedades reactivas
        pregunta(value) {
            if (value.includes('?')) {
                this.consumirAPI()
            }
            else {
                this.respuesta = "";
            }
        }
    },

    methods: {
        async consumirAPI() {
            const response = await ConsumirAPIFacade();
            console.log(response.answer);
            this.respuesta = response.answer.charAt(0).toUpperCase() + response.answer.slice(1).toLowerCase();
            this.imagen = response.image;
        }
    }
}

</script>

<style scoped>
img {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

.pregunta-container {
    position: relative;
    margin-top: 2rem;
    z-index: 2;
    text-align: center;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    background: rgba(0, 0, 0, 0.3);
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-width: 300px;
    max-width: 500px;
}

input {
    width: 90%;
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
    margin-bottom: 1rem;
    font-size: 1rem;
}

input:focus {
    outline: none;
    box-shadow: 0 0 25px rgb(202, 76, 54);
}

h1 {
    font-size: 3rem;
    margin: 0.5rem 0;
}
</style>