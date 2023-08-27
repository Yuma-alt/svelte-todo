<script lang="ts">
  export let selectedPriority: number;
  import { PriorityNames } from "../store";
</script>

<div class="form-group">
  <label for="priority">優先度</label>
  <select class="form-control" bind:value={selectedPriority}>
    {#each Object.entries(PriorityNames) as [index, label]}
      <option value={Number(index)}>{label}</option>
    {/each}
  </select>
</div>
