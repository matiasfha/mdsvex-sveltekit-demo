<script context="module">
	export async function load({ fetch }) {
		const url = '/api/blog.json';
		const res = await fetch(url);
		if (res.ok) {
			const { posts } = await res.json();
			return {
				props: {
					articles: posts
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
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	export let articles = [];
	export let featured = articles.find((item) => item.featured);
	console.log(featured);
	const list = [...articles].splice(1, articles.length);
	const listHeader = articles[0];
</script>

{#if featured}
	<section class="w-full">
		<div class="container max-w-6xl py-12 mx-auto">
			<article class="grid grid-cols-2 gap-4">
				<div>
					<a href={`/blog/post/${featured.slug}`}>
						<img
							alt={featured.title}
							src={featured.image}
							class="bg-contain object-contain shadow-sm"
						/>
					</a>
				</div>
				<div>
					<h2 class="text-sm uppercase text-gray-600">Editor's Pick</h2>
					<a href={`/blog/post/${featured.slug}`}>
						<h1 class="text-3xl text-gray-900">
							{featured.title}
						</h1>
					</a>
					<p class="text-base text-gray-800">
						{featured.description}
					</p>
				</div>
			</article>
		</div>
	</section>
{/if}

<section class="w-full py-8">
	<div class="container max-w-6xl py-12 mx-auto">
		<div class="grid grid-cols-3 gap-8">
			<article class="flex flex-col">
				<a href={`/blog/post/${listHeader?.slug}`}>
					<img
						alt={listHeader?.title}
						src={listHeader?.image}
						class="m-0 pb-4 w-full h-52 object-fill"
					/>
				</a>
				<a href={`/blog/post/${listHeader?.slug}`}>
					<h1 class="text-gray-900 text-xl mb-4">{listHeader?.title}</h1>
				</a>
				<p class="text-sm text-gray-800">
					{listHeader.description}
				</p>
			</article>
			<!-- Section Articles -->
			<section>
				{#each list as article}
					<ArticleCard {article} />
				{/each}
			</section>
		</div>
	</div>
</section>
