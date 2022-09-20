
<script>
	/** @type {import('./$types').PageData */
	export let data;
	
</script>

<main class="max-w-screen-md mx-auto">
	<ol class="list-decimal">
		{#each data.posts as post}
			<li class="py-4 text-2xl underline">
				<a href={post.slug}>
					{post.title}
				</a>
			</li>
		{/each}
	</ol>
</main>
