<script>
	import NewsCard from './NewsCard.svelte';

	export let listData;

	const rows = listData.rows
		.map((item) => item.doc)
		.sort((a, b) => {
			return b.date - a.date;
		});
</script>

{#each rows as itemData}
	<NewsCard {...itemData} />
{:else}
	<p>You do not have any news.</p>
{/each}
