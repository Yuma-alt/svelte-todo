<script lang="ts">
  import type { TodoItem } from "./store";
  import { PriorityNames } from "./store";
  import { Priorities } from "./store";
  import { slide } from "svelte/transition";
  import CreateTaskButton from "./components/Button.svelte";
  import DeleteButton from "./components/DeleteButton.svelte";
  import InputText from "./components/InputText.svelte";

  let title = "";
  let priority: number = 2;
  let todoList: TodoItem[] = [];

  $: disableCreationButton = title === "";
  $: sortTodoListByPriority = todoList.sort(
    (item1, item2) => item1.priority - item2.priority
  );

  const clickTaskCreatingButton = () => {
    const id = new Date().getTime();
    if (priority === 1 || priority == 2 || priority == 3) {
      todoList = [...todoList, { id, title, priority }];
    }
    title = "";
  };

  const completeTask = (id: number) => {
    todoList = todoList.filter((todo) => todo.id !== id);
  };
</script>

<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8">
      <h2>TODOリスト</h2>
      <form>
        <InputText bind:value={title} />
        <div class="form-group">
          <label for="priority">優先度</label>
          <select class="form-control" bind:value={priority}>
            {#each Object.entries(PriorityNames) as [index, label]}
              <option value={Number(index)}>{label}</option>
            {/each}
          </select>
        </div>
        <CreateTaskButton
          bind:disableButton={disableCreationButton}
          on:click={clickTaskCreatingButton}
        />
      </form>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8">
      {#if todoList.length === 0}
        <div>アイテムを作成してください</div>
      {:else}
        <ul class="list-group">
          {#each sortTodoListByPriority as todoItem (todoItem.id)}
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
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>
