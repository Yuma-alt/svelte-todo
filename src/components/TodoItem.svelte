<script lang="ts">
  export let todoItem;
  export let completeTask;
  import { PriorityNames } from "../store";
  import { Priorities } from "../store";
  import { slide } from "svelte/transition";
  import DeleteButton from "./DeleteButton.svelte";
</script>

<li transition:slide class="list-group-item align-middle">
  <span
    class="badge m-1 text-dark"
    class:bg-danger={todoItem.priority === Priorities.High}
    class:bg-warning={todoItem.priority === Priorities.Mid}
    class:bg-success={todoItem.priority === Priorities.Low}
  >
    {PriorityNames[todoItem.priority]}
  </span>
  {todoItem.title}
  <DeleteButton on:click={() => completeTask(todoItem.id)} />
</li>
