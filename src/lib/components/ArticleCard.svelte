<script>
	export let article;
</script>

<article class="flex flex-row items-center justify-between transform duration-150 hover:shadow-md">
	<a href={`/blog/post/${article.slug}`}>
		<img class="object-scale-down w-28 h-28" src={article.image} alt={article.title} />
	</a>
	<div class="flex flex-col ml-4 items-start justify-around">
		<a href={`/blog/post/${article.slug}`}>
			<h1 class="text-gray-900 text-base mt-4">{article.title}</h1>
		</a>
	</div>
</article>
