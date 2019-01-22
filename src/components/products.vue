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
                                        <input type="text" :value="NEW_ID" id="id" autocomplete="off" name="NEW_ID">
                                    </li>
                                    <li>
                                        <label for="price">Price</label>
                                        <input type="text" :value="NEW_PRICE" id="price" autocomplete="off" name="NEW_PRICE">
                                    </li>
                                    <li>
                                        <label for="name">Name</label>
                                        <input type="text" :value="NEW_NAME" id="name" autocomplete="off" name="NEW_NAME">
                                    </li>
                                    <button @click="ADD_PRODUCT" class="btn btn-primary" type="submit">Add</button>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        computed: {
            ...mapState(['NEW_ID', 'NEW_PRICE', 'NEW_NAME'])
        },
        /*computed: mapState(['NEW_ID', 'NEW_PRICE', 'NEW_NAME'])*/
        methods: {
            ADD_PRODUCT() {
                return this.$store.commit('ADD_PRODUCT');
            }
        }
    }
</script>
<style scoped>
    .container
    {
        margin: 0 auto;
    }
    li
    {
        display: inline-block;
        margin: 10px
    }
    input
    {
        margin: 10px;
        border: 1px solid#CCC;
        border-radius: 5px
    }
</style>
