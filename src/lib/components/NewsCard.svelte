<script>
	import { getRelativeTime } from '$lib/time';

	export let _id, _rev, title, content, date, source;

	$: _id, _rev;
</script>

<article>
	<h2>{title}</h2>
	<p class="content">{content}</p>
	<p>{getRelativeTime(date)}</p>
	<p>{source}</p>
	<a href="?a={_id}">Open</a>
</article>

<style>
	h2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	p.content {
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
