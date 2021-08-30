async function getPosts() {
	const modules = import.meta.glob(`../../blog/post/*.svx`); // load all the svx files

	const postPromises = [];
	for (const [path, resolver] of Object.entries(modules)) {
		const promise = resolver()
			.then((post) => {
				const slug = path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
				return {
					slug,
					...post.metadata
				};
			})
			.catch((e) => {
				console.log('error loading', e);
			});
		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
	return posts;
}

export async function get() {
	const posts = await getPosts();
	return {
		body: {
			posts
		}
	};
}
