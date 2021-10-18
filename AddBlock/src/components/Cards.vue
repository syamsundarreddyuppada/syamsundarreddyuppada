<template>
  <div class="box container-fluid container-main border">
    <div class="d-flex align-baseline">
      <p>
        <strong class="mx-3">Name</strong>:
        <span class="title font-weight-regular">{{ name.name }}</span>
      </p>
    </div>
    <div class="d-flex align-baseline">
      <v-title class="mx-3 font-weight-bold">Age :</v-title>
      <p class="title font-weight-regular">{{ name.age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    name: Object,
  },
};
</script>

<style lang="css" scoped>
.box {
  width: 350px;
  border: 1px solid lightgrey;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: #fafafa;
}
.container-main {
  overflow: auto;
  max-height: 100%;
}
</style>
