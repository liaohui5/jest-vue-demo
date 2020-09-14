<template>
  <div>
    <input
      type="text"
      data-jest="input"
      v-model="inputVal"
      @keyup.enter="addTodo"
    />
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

<style lang="less" scoped></style>
