<template>
    <div class="pokemon-imagen">
        <h1>¿Quién es este Pokémon?</h1>
        <img :src="srcImagen" alt="imagen pokemon" />
    </div>
</template>
<script>
export default {
    name: 'PokemonImagen',
    props: {
        PokemonId: {
            type: Number,
            required: true
        }
    },
    computed: {
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.PokemonId}.svg`;
        }
    },
    methods: {
        destruirComponente() {
            console.log('Ejecutando limpieza del componente PokemonImagen');
            console.log('Limpiando recursos, cancelando suscripciones, etc.');
            // Aquí puedes agregar lógica de limpieza específica
            // Por ejemplo: cancelar timers, limpiar event listeners, etc.
        }
    },
    //Destruccion o eliminacion del componente
    beforeUnmount() {
        console.log('Antes de desmontar el componente PokemonImagen');
        console.log('BeforeUnmount: justo antes de que el componente sea eliminado del DOM');
        this.destruirComponente();
    },
    unmounted() {
        console.log('Componente PokemonImagen desmontado o eliminado del DOM');
        console.log('Unmounted: despues de que el componente ha sido eliminado del DOM');
    },
}
</script>
<style scoped>
.pokemon-imagen {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    gap: 1.5rem;
    background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: min(360px, 100%);
    max-width: 400px;
    margin: 0 auto;
    align-self: center;
}

.pokemon-imagen h1 {
    margin: 0;
    color: #333;
    font-family: 'Arial', sans-serif;
    font-size: 1.5rem;
}

.pokemon-imagen img {
    width: 250px;
    height: 250px;
    object-fit: contain;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.pokemon-imagen img:hover {
    transform: scale(1.05);
}
</style>