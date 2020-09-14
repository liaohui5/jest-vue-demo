<template>
  <div>
    <div>
      <TodoHeader @add-todo="addUndoItem" />
    </div>
    <div>
      <p>未完成的任务:</p>
      <ul>
        <li v-for="item in undos" :key="item">
          <span> {{ item }} </span>
          <button>完成任务</button>
        </li>
      </ul>
    </div>
    <div>
      <p>已经完成的任务:</p>
      <ul>
        <li v-for="item in dones" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader";
export default {
  components: { TodoHeader },
  data: () => ({
    undos: [], // 为完成的
    dones: [] // 已完成的
  }),
  methods: {
    addUndoItem(todo) {
      this.undos.push(todo);
    }
  }
};
</script>

<style lang="less" scoped></style>
