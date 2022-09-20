import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/getPosts';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	try {
		const posts = await getPosts()
		return {
			posts
		}
	}catch(e){
		console.error(e)
		throw error(500, `Could not load ${url}`);
	}
	
}
