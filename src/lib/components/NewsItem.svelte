<script>
	import { browser } from '$app/environment';
	import { localDB } from '$lib/db';
	import { getRelativeTime } from '$lib/time';

	export let _id;
</script>

{#if browser}
	{#await localDB.get(_id)}
		<p>Retrieving News Item...</p>
	{:then newsData}
		<article>
			<h2>{newsData.title}</h2>

			<h3>Content</h3>
			<p>{newsData.content}</p>

			<h3>Date</h3>
			<p>Posted {getRelativeTime(newsData.date)}</p>

			<h3>Source</h3>
			<p>{newsData.source}</p>
		</article>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
{/if}
