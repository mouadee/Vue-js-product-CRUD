<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h2>Products</h2>
        <div class="card">
          <div class="card-header">
            <div class="card-title text-left">Add a new products</div>
          </div>
          <div class="card-body">
            <div class="form-group">
              <ul class="list-unstyled">
                <li>
                  <label for="id">ID</label>
                  <input
                    type="text"
                    v-model="id"
                    id="id"
                    autocomplete="off"
                    name="NEW_ID"
                  >
                </li>
                <li>
                  <label for="price">Price</label>
                  <input
                    type="text"
                    v-model="price"
                    id="price"
                    autocomplete="off"
                    name="NEW_PRICE"
                  >
                </li>
                <li>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    v-model="name"
                    id="name"
                    autocomplete="off"
                    name="NEW_NAME"
                  >
                </li>
                <button
                  @click="ADD_PRODUCT"
                  class="btn btn-primary"
                  type="button"
                >Add</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    computed: {
      id: {
        get() {
          return this.$store.id;
        },
        set(value) {
          this.$store.commit("SET_ID", value);
        }
      },
      price: {
        get() {
          return this.$store.price;
        },
        set(value) {
          this.$store.commit("SET_PRICE", value);
        }
      },
      name: {
        get() {
          return this.$store.name;
        },
        set(value) {
          this.$store.commit("SET_NAME", value);
        }
      }
    },
    methods: {
      ...mapMutations(["ADD_PRODUCT"])
    }
  };
</script>
<style scoped>
  .container {
    margin: 0 auto;
  }
  li {
    display: inline-block;
    margin: 10px;
  }
  input {
    margin: 10px;
    border: 1px solid#CCC;
    border-radius: 5px;
  }
</style>
