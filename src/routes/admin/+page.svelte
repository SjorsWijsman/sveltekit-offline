<script>
	import { localDB, remoteDB } from '$lib/db';

	let title = 'Test Title',
		content = 'This is some content',
		date,
		source = 'Me';

	function addNews() {
		date = Date.now();

		console.log({
			title,
			content,
			date,
			source
		});

		localDB
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

		remoteDB.replicate.from(localDB);
	}
</script>

<h1>Admin</h1>
<hr />
<form>
	<label>
		Title
		<input bind:value={title} />
	</label>
	<label>
		Content
		<textarea bind:value={content} />
	</label>
	<label>
		Source
		<input bind:value={source} />
	</label>
	<button on:click={addNews}>Add News</button>
</form>
