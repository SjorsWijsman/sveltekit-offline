<script>
	import { remoteDB } from '$lib/db';

	let title = 'Test Title',
		content = 'This is some content',
		date,
		source = 'Me. Trust me bro.';

	function addNews() {
		date = Date.now();
		console.log({
			title,
			content,
			date,
			source
		});
		remoteDB
			.post({
				title,
				content,
				date,
				source
			})
			.then(function (response) {
				console.log(response);
				// handle response
			})
			.catch(function (err) {
				console.log(err);
			});
	}
</script>

<h1>Admin</h1>
<hr />
<ul>
	<li>
		<label>
			title
			<input bind:value={title} />
		</label>
	</li>
	<li>
		<label>
			content
			<textarea bind:value={content} />
		</label>
	</li>
	<li>
		<label>
			source
			<input bind:value={source} />
		</label>
	</li>
</ul>
<button on:click={addNews}>Add News</button>
