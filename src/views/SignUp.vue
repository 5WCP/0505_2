<script>
    import {RouterLink, RouterView} from "vue-router";
</script>

<template>
    <div>
        <h1>Sign Up</h1>
    </div>
    <ul>
        <li>
            <Router-link to="/signUp/byGoogle">Google</Router-link>
        </li>
        <li>
            <Router-link to="/signUp/byFacebook">Facebook</Router-link>
        </li>
    </ul>
    <RouterView />
</template>

<style>
</style>