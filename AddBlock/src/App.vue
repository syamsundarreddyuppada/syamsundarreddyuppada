<template>
  <v-app>
    <div v-if="itemarr.length >= 1" class="parEnt">
      <div class="widt" v-for="(item, index) in itemarr" :key="index">
        <NameBlock :arr="item"  @alert="Alert" />
      </div>
    </div>
    <div v-else class="myaddelse">
      <h4 class="display-2 red--text text--accent-3 text--disabled text-center">
        Add Block To <span class="indigo--text text--darken-2">ShowData</span>
      </h4>
    </div>

    <div class="d-flex abb justify-center">
      <v-btn color="success" elevation="2" large outlined @click="AddBlock"
        >AddBlock</v-btn
      >
    </div>

    <div class="d-flex justify-end mr-4">
      <v-alert dense outlined text v-show="successAlert" type="success">
        Added succussfully</v-alert
      >
      <v-alert dense outlined text v-show="alert" type="error">
        Deleted succussfully</v-alert
      >
      <v-btn
        class="white--text"
        color="primary"
        elevation="2"
        large
        @click="show"
        depressed
      >
        ShowCards
      </v-btn>
      <v-badge
        color="error"
        v-show="itemarr.length >= 1"
        :content="itemarr.length"
      >
      </v-badge>
    </div>
    <v-container v-if="itemarr.length >= 1">
      <div class="parEnt">
        <div
          class="widt"
          v-show="showDisplay"
          v-for="(item, index) in itemarr"
          :key="index"
        >
          <Card :name="item" v-show="item.id >= 1" />
        </div>
      </div>
    </v-container>
    <v-container v-else
      ><h4
        class="display-2 red--text text--accent-3 text--disabled text-center"
      >
        Please Add <span class="teal--text text--darken-4">Data</span>
      </h4></v-container
    >
  </v-app>
</template>

<script>
import Card from "./components/Card.vue";
import NameBlock from "./components/NameBlock.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    NameBlock,
    Card,
  },

  data: () => ({
    getitem: [],
    successAlert: false,
    alert: false,

    showDisplay: true,
  }),
  mounted() {
    console.log("mount", this.itemarr);
    console.log("mount2", this.getitem);
  },

  methods: {
    AddBlock() {
      this.successAlert = true;
      this.$store.dispatch("addCardBlock");
      setTimeout(() => {
        this.successAlert = false;
      }, 1000);
    },
    Alert() {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 1000);
    },
    show() {
      this.showDisplay = !this.showDisplay;

      console.log(this.itemarr);
    },

   
  },
  computed: {
    ...mapState({
      itemarr: (state) => state.itemarr,
    }),
    ...mapGetters(["getName"]),
    getState() {
      return this.itemarr;
    },
  },
};
</script>
<style scoped>
.widt {
  width: 30%;
  margin: 10px;
}
.parEnt {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  min-height: 350px !important;
}
.abb {
  position: relative;
}
.myaddelse {
  height: 51vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
