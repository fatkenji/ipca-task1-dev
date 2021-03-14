<script>
    import { afterUpdate } from "svelte";
    import { getProducts } from "../data.service.js";

    export let currentStore = {};
    let headers = [];
    let products = [];

    $: rn = currentStore.RestaurantNumber;
    $: getProducts(rn, 1).then((r) => {
        headers = r.Headers;
        products = r.productViewModels;
    });

    function reload() {
        // trigger a change in value
        let val = currentStore;
        currentStore = {};
        setTimeout(() => (currentStore = val), 0);
    }

    // $: console.log("RestaurantNumber", rn);
</script>

{#if products.length}
    <div class="table-xscroll sexy-scrollbar">
        <table class="data-table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>{headers[0]} Price</th>
                    <th>{headers[1]} Price</th>
                </tr>
            </thead>
            <tbody>
                {#each products as item}
                    <tr>
                        <td>
                            {item.Name}
                            <div class="desc">{item.Description}</div>
                        </td>
                        <td>
                            <div class="gray-field">
                                <input
                                    type="number"
                                    value={item.SixInchPrice}
                                />
                            </div>
                        </td>
                        <td>
                            <div class="gray-field">
                                <input
                                    type="number"
                                    value={item.FootLongPrice}
                                />
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <footer>
        <button>Submit</button>
        <button on:click={(e) => reload()}>Reset</button>
    </footer>
{:else}
    <div class="noitems">You have no items yet</div>
{/if}

<style>
    .data-table {
        min-width: 100%;
    }
    .desc {
        color: #aaa;
        font-size: 90%;
    }

    .noitems {
        padding: 5rem 2rem;
        text-align: center;
    }

    footer {
        padding: 1rem;
        text-align: right;
    }
</style>
