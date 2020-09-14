<template>
  <div>
    <div>
      未完成的任务: <span data-jest="count"> {{ list.length }} </span>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index" data-jest="undo-item">
        <span> {{ item }} </span>
        <button data-jest="delete-btn" @click="deleteUndoItem(index)">
          删除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteUndoItem(index) {
      this.$emit("delete-undo", index);
    }
  }
};
</script>

<style lang="scss" scoped></style>
