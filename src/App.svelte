<script>
	import Subs from "./components/Subs.svelte";
	import NonSubs from "./components/NonSubs.svelte";
	import { getResto } from "./data.service.js";

	let dsStores = getResto();
	let currentStore = null;
	let tabID = 0;
	$: catCompo = [Subs, NonSubs][tabID];

	// $: console.log("currentStore main", currentStore);
</script>

<div class="page-limit">
	<header class="main-header">
		<h1>PORTAL</h1>
		<div class="gray-field">
			<select bind:value={currentStore}>
				{#await dsStores}
					<option value={null}>Loading stores...</option>
				{:then stores}
					<option value={null}>Select a store</option>
					{#each stores as s}
						<option value={s}>{s.RestaurantName}</option>
					{/each}
				{/await}
			</select>
		</div>
	</header>

	{#if currentStore}
		<section>
			<ul class="tab-header">
				<li>
					<label>
						<input
							class="hidden"
							type="radio"
							bind:group={tabID}
							value={0}
						/>
						<div class="tab-text">Subs</div>
					</label>
				</li>
				<li>
					<label>
						<input
							class="hidden"
							type="radio"
							bind:group={tabID}
							value={1}
						/>
						<div class="tab-text">Non Subs</div>
					</label>
				</li>
			</ul>
			<svelte:component this={catCompo} {currentStore} />
		</section>
	{/if}
</div>

<style>
	.page-limit {
		width: 1024px;
		max-width: 100%;
		margin: 0 auto;
	}
	h1 {
		color: var(--BrandColor1);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.main-header {
		padding: 1rem;
	}

	.tab-header {
		margin-bottom: 2rem;
	}
</style>
