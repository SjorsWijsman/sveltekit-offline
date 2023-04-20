<script>
	import NewsCard from './NewsCard.svelte';

	export let listData;

	console.log(listData.rows);
</script>

<ul>
	{#each listData?.rows as itemData}
		<li>
			<NewsCard {...itemData.doc} />
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
