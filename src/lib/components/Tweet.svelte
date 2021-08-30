<script>
	import { onMount } from 'svelte';
	let mounted = false;
	export let id;

	onMount(() => {
		// The payment-form is ready.
		mounted = true;
	});

	function scriptLoaded() {
		if (mounted) {
			var tweet = document.getElementById('tweet');
			window.twttr.widgets.createTweet(id, tweet, {
				conversation: 'none', // or all
				cards: 'hidden', // or visible
				linkColor: '#cc0000', // default is blue
				theme: 'light' // or dark
			});
		}
	}
</script>

<svelte:head>
	<script src="https://platform.twitter.com/widgets.js" on:load={scriptLoaded}></script>
</svelte:head>

<div id="tweet" />
