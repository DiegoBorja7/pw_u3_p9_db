<template>
    <div class="pokemon-opciones">
        <h1>Opciones</h1>
        <ul>
            <li v-on:click="pasarPadre(pokemon.id)" v-for="pokemon in listaPokemons" :key="pokemon.id">{{ pokemon.nombre
                }}</li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'PokemonOpciones',
    props: {
        listaPokemons: {
            type: Array,
            required: true
        }
    },
    methods: {
        pasarPadre(id) {
            this.$emit('seleccionar-pokemon', id);
        }
    }
}
</script>
<style>
.pokemon-opciones {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    gap: 1rem;
    max-width: 320px;
    width: min(320px, 100%);
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
    margin: 0 auto;
    align-self: center;
}

.pokemon-opciones ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.pokemon-opciones li {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    transition: background-color 0.3s, transform 0.3s;
    width: 100%;
}

.pokemon-opciones li:hover {
    background-color: #fef3c7;
    transform: translateY(-2px);
}
</style>