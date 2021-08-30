<script lang="ts" context="module">
	export async function load({ fetch }) {
		const url = '/api/blog.json';
		const res = await fetch(url);
		if (res.ok) {
			const { posts } = await res.json();
			return {
				props: {
					posts
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let posts; // The prop value comes from the module above
</script>

<main class="max-w-screen-md mx-auto">
	<ol class="list-decimal">
		{#each posts as post}
			<li class="py-4 text-2xl underline">
				<a href={`/blog/post/${post.slug}`}>
					{post.title}
				</a>
			</li>
		{/each}
	</ol>
</main>
