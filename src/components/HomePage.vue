<template>
    <div class="row justify-content-start align-items-start g-2">
        <div class="col-2">
            <h1>Home page</h1>
            {{UserData}}
        </div>
    </div>
</template>
<script>

export default {
    name:'HomePage',
    props:['UserData']
}
</script>