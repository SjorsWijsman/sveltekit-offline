<script>
	import NewsCard from './NewsCard.svelte';

	export let listData;

	const rows = listData.rows
		.map((item) => item.doc)
		.sort((a, b) => {
			return b.date - a.date;
		});
</script>

<ul>
	{#each rows as itemData}
		<li>
			<NewsCard {...itemData} />
		</li>
	{:else}
		<li>You do not have any news.</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
</style>
