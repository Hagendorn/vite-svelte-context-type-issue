<script lang="ts">
  import { getContext } from "svelte";

  const foo = getContext("foo");

  console.log({ foo });
</script>

{foo}
