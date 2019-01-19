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
                            <form action="">
                                <ul class="list-unstyled">
                                    <li>
                                        <label for="id">ID</label>
                                        <input type="text" name="id" id="id" autocomplete="off">
                                    </li>
                                    <li>
                                        <label for="price">Price</label>
                                        <input type="text" name="price" id="price" autocomplete="off">
                                    </li>
                                    <li>
                                        <label for="name">Name</label>
                                        <input type="text" name="name" id="name" autocomplete="off">
                                    </li>
                                    <button class="btn btn-primary" type="submit">Add</button>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "products"
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
