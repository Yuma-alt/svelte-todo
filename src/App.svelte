<script lang="ts">
  import type { TodoItem } from "./store";
  import CreateTaskButton from "./components/Button.svelte";
  import InputText from "./components/InputText.svelte";
  import TodoItemList from "./components/TodoItem.svelte";
  import PrioritySelector from "./components/PrioritySelector.svelte";

  const LOW = 1;
  const MIDDLE = 2;
  const HIGH = 3;

  let title = "";
  let priority: number = 2;
  let todoList: TodoItem[] = [];

  $: disableCreationButton = title === "";
  $: sortTodoListByPriority = todoList.sort(
    (item1, item2) => item1.priority - item2.priority
  );

  const clickTaskCreatingButton = () => {
    const id = new Date().getTime();
    if (priority === LOW || priority == MIDDLE || priority == HIGH) {
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
        <PrioritySelector bind:selectedPriority={priority} />
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
        <div>必要なタスクを作成してください</div>
      {:else}
        <ul class="list-group">
          {#each sortTodoListByPriority as todoItem (todoItem.id)}
            <TodoItemList {todoItem} {completeTask} />
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>
