<script>
	import { getRelativeTime } from '$lib/time';

	export let _id, _rev, title, content, date, source;

	$: _id, _rev;
</script>

<h2>{title}</h2>
<p>{content}</p>
<p>{getRelativeTime(date)}</p>
<p>{source}</p>
<a href="/{_id}">Link</a>
