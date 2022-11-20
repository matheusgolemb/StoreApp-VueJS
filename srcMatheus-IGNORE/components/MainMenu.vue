<template>
    <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: black;">
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link active-class="active" class="nav-link" to="/product">Products</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MainMenu'
}
</script>