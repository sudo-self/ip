<script>
	import Details from '$lib/Details.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1><span>ip.JesseJesse.com&nbsp; Node!</span></h1>

<div class="info">
	<Details city={data.city} ip={data.ip} />
</div>
