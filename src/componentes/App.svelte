<script>
    import {onMount} from "svelte"; //Esto es un método que detecta cuando el componente está montado.

    const API = "https://rickandmortyapi.com/api/character"; //URL de la API de Rick y Morty::after

    let data = [];
    let characters = [];

    onMount(async () => {
        const res = await fetch(API); //Llamamos a la API pr medio de Fetch
        data = await res.json(); // Damos 'data' el resultado de la llamada
        characters = data.results; // Le damos a 'characters el resultado de los personajes'
    });
</script>


<style>
    .characters{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 8px;
    }
    figure, img{
        width: 100%;
        margin: 0;
    }
</style>


<div class="characters">
    {#each characters as character}
        <figure>
            <img src={character.image} alt={character.name}/>
            <figcaption>{character.name}</figcaption>
        </figure>
        {:else}
            <p>Loading...</p>
    {/each}
</div>