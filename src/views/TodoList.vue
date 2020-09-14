<template>
  <div>
    <div>
      <TodoHeader @add-todo="addUndoItem" />
    </div>
    <div>
      <Undos :list="undos" @delete-undo="deleteUndoItem" />
    </div>
  </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader";
import Undos from "../components/Undos";
export default {
  components: { TodoHeader, Undos },
  data: () => ({
    undos: [], // 为完成的
    dones: [] // 已完成的
  }),
  methods: {
    // 增加未完成任务
    addUndoItem(todo) {
      this.undos.push(todo);
    },

    // 删除未完成任务
    deleteUndoItem(index) {
      this.undos.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped></style>
