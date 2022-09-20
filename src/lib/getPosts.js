export async function getPosts() {
	const modules = import.meta.glob('../routes/blog/post/**/+page.svx'); // load all the svx files

	const postPromises = [];
	for (const [path, resolver] of Object.entries(modules)) {
		const promise = resolver()
			.then((post) => {
				const slug = path.slice(10, -10)
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.replace(/\?|\¿/g, '');
				return {
					slug,
					...post.metadata
				};
			})
			.catch((e) => {
				console.error('error loading', e);
			});
		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
	return posts;
}
