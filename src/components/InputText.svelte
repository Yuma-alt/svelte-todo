<script lang="ts">
  export let value: string;
</script>

<div class="form-group">
  <label for="title">タイトル</label>
  <input class="form-control" bind:value />
</div>