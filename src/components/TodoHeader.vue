<template>
  <div class="header-wrapper">
    <div class="header-content">
      <span>Todo List</span>
      <input
        type="text"
        data-jest="input"
        placeholder="add todo item"
        v-model="inputVal"
        @keyup.enter="addTodo"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputVal: ""
  }),
  methods: {
    addTodo() {
      if (!this.inputVal) return;
      this.$emit("add-todo", this.inputVal);
      this.inputVal = "";
    }
  }
};
</script>

<style lang="less" scoped>
.header-wrapper {
  width: 100%;
  line-height: 80px;
  background: #333;
  .header-content {
    width: 600px;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;
    input {
      float: right;
      width: 360px;
      margin-top: 25px;
      line-height: 24px;
      outline: none;
      text-indent: 10px;
    }
  }
}
</style>
