<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { localDB } from '$lib/db';
	import NewsList from '$lib/components/NewsList.svelte';
	import NewsItem from '$lib/components/NewsItem.svelte';
</script>

<h1>News</h1>
<hr />
{#if !$page.params.id}
	{#if browser}
		{#await localDB.allDocs({ include_docs: true })}
			<p>Retrieving News...</p>
		{:then listData}
			<NewsList {listData} />
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	{/if}
{:else}
	<NewsItem _id={$page.params.id} />
{/if}
