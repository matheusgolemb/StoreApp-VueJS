<template>
    <div class="row justify-content-start align-items-start g-2">
        <div class="col-8">
            <h1>Home page</h1>
            <!-- {{UserData}} -->
            <div class="table-responsive">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">FullName</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td scope="row">{{UserData.customerId}}</td>
                            <td>{{UserData.userName}}</td>
                            <td>{{UserData.first_name}} {{UserData.last_name}}</td>
                            <td>{{UserData.email}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
</template>
<script>

export default {
    name:'HomePage',
    props:['UserData']
}
</script>
