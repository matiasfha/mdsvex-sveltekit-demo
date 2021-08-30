<script context="module">
	import blockquote from '$lib/components/Quote.svelte';
	export { blockquote };
</script>

<script>
	export let title;
	export let description;
	export let keywords;
	export let image;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<article class="w-full p-8">
	<header>
		<h1 class="text-4xl text-center">{title}</h1>
	</header>
	<main class="max-w-screen-md mx-auto">
		<slot />
	</main>
	<footer>
		<a href="">Share this on Twitter</a>
	</footer>
</article>
