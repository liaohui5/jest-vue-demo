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

<style lang="less">
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
