<script>
    // your script goes here
    import { navigateTo } from 'svelte-router-spa'
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<h1>Home</h1>
<button on:click={() => {
    navigateTo('page2')
}}>next</button>