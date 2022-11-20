<template>
    <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: black">
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li v-show="!loginValid"  class="nav-item">
                    <router-link active-class="active" class="nav-link" to="/login">Login Page</router-link>
                </li>
                <li v-show="loginValid" class="nav-item">
                    <router-link active-class="active" class="nav-link" to="/" aria-current="page">Home</router-link>
                </li>
                <li v-show="loginValid" class="nav-item">
                    <router-link active-class="active" class="nav-link" to="/product">Product Page</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name:'MainMenu',
    props:['loginValid'],
    
}
</script>