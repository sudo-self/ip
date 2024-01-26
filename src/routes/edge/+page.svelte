<script>
	import Details from '$lib/Details.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h2><span>ip.JesseJesse.com</span></h2>

<div class="info">
	<Details city={data.city} ip={data.ip} />
</div>
