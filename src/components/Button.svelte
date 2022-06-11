<script lang="ts">
  export let disableButton = false;
</script>

<div class="form-group text-center m-3">
  <button
    class="btn btn-primary px-5"
    disabled={disableButton}
    on:click
  >
  作成
</button>
</div>