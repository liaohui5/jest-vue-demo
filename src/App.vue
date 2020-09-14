<template>
  <div id="app">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./views/TodoList";
export default {
  name: "App",
  components: { TodoList }
};
</script>

<style lang="less"></style>
