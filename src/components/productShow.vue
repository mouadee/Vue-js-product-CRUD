<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title text-left">Product list</div>
                    </div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Price</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>720$</td>
                            <td>IPhone 7</td>
                            <td>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href=""><i class="fas fa-pencil-alt"></i></a>
                                    </li>
                                    <li>
                                        <a href=""><i class="fas fa-trash"></i></a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "productShow"
    }
</script>
<style scoped>
    li
    {
        display: inline-block;
        margin: 5px;
    }
    li a i.fa-pencil-alt
    {
        color: #28a745;
    }
    li a i.fa-trash
    {
        color: #dc3545;
    }
</style>