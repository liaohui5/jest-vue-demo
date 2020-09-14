<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>
