
<script>
	/** @type {import('./$types').PageData */
	export let data;
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	export let featured = data.posts.find((item) => item.featured);
	const list = [...data.posts].splice(1, data.posts.length);
	const listHeader = data.posts[0];
</script>

{#if featured}
	<section class="w-full">
		<div class="container max-w-6xl py-12 mx-auto">
			<article class="grid grid-cols-2 gap-4">
				<div>
					<a href={featured.slug}>
						<img
							alt={featured.title}
							src={featured.image}
							class="bg-contain object-contain shadow-sm"
						/>
					</a>
				</div>
				<div>
					<h2 class="text-sm uppercase text-gray-600">Editor's Pick</h2>
					<a href={featured.slug}>
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
				<a href={listHeader?.slug}>
					<img
						alt={listHeader?.title}
						src={listHeader?.image}
						class="m-0 pb-4 w-full h-52 object-fill"
					/>
				</a>
				<a href={listHeader?.slug}>
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
