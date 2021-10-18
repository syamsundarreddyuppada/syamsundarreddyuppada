<template>
  <div class="nameblock">
    <v-container>
      <v-form>
        <v-btn text @click="deleteNameBlock(arr.id)" class="myclose red--text">
          <v-icon medium>fa-times</v-icon>
        </v-btn>
        <v-row>
          <v-col cols="12" class="px-3 py-0">
            <v-text-field label="name" v-model="arr.name"></v-text-field>
          </v-col>

          <v-col cols="12" class="px-3 py-0">
            <v-text-field
              class="ipafields"
              label="age"
              type="number"
              placeholder="age"
              v-model="arr.age"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nameblock",
  props: {
    arr: Object,
    disp: Function,
    dispage: Function,
  },
  data() {
    return {
      name: this.arr.name,
      age: this.arr.age,
    };
  },
  mounted() {
    console.log("mount", this.arr);
  },
  methods: {
    deleteNameBlock(id) {
      console.log("from Parent delete", id);
      this.$emit("alert");

      this.$store.dispatch("deleteNameBlock", id);
    },
  },
};
</script>

<style lang="css" scoped>
.myclose {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.nameblock {
  border: 1px solid lightgray;
  background-color: #fafafa;
  margin: 10px;
  width: 300px;
}
</style>
