<script>
  let vars = {
    query: '',
    data: '',
    error: '',
  }

  const getPhrase = async () => {
    try {
      const response = await fetch(
        `https://idiom-api.su.ysnirix.xyz/api/${vars.query}`
      )

      vars.error = ''
      const res = await response.json()

      if (res.error) vars.error = res.message
      else vars.data = res.results
    } catch {
      vars.error = '😢 Something went wrong'
    }
  }
</script>

<svelte:head>
	<title>idiom</title>
</svelte:head>

<main>
  <div class="hero flex flex-col mt-16">
    <img
      class="w-52 mb-6"
      src="https://res.cloudinary.com/ydevcloud/image/upload/v1664491433/yassi/susj6yvlmhbfwxa6i8uy.svg"
      alt="idiom"
    />
    <h2 class="pb-2 font-semibold text-lg font-fresca text-center md:text-xl">
      Generate unique randomized
      <span class="text-[#BE91F3] font-bold">words</span>
      &
      <span class="text-[#F64A23] font-bold">phrases</span>
      with
      <a
        class="text-blue-600 underline"
        href="https://github.com/Ysn4Irix/idiom">api</a
      >
      endpoints
    </h2>
  </div>
  <div class="hero flex flex-col justify-center align-middle mt-5">
    <div>
      <div class="mt-4">
        <input
          type="text"
          placeholder="ex: the @pluralNoun is @gerund"
          bind:value={vars.query}
          class="input input-bordered input-secondary w-80 shadow-lg font-fresca"
        />

        <button
          class:btn-disabled={vars.query === ''}
          type="button"
          on:click|preventDefault={getPhrase}
          class="btn btn-secondary ml-1 shadow-lg font-fresca"
        >
          GET
        </button>
      </div>
    </div>
    {#if vars.error}
      <p class="mt-8 font-fresca text-xl text-[#F64A23]">
        {vars.error}
      </p>
    {:else}
      <p class="mt-8 font-fresca text-xl">
        {vars.query !== '' ? vars.data : ''}
      </p>
    {/if}
  </div>
</main>
