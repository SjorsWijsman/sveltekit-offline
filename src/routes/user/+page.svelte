<script>
	import { localDB } from '$lib/db';

	function clearData() {
		localDB.destroy();
	}
</script>

<h1>User</h1>
<hr />
<button on:click={clearData}>Clear Data</button>
