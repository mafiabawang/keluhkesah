<template>
    <section>
        <div class="container text-center">
            <img src="logo.png" alt="Logo Keluh Kesah Mahasiswa" width="150" height="150">
            <h1 class="mt-4">Selamat Datang di Keluh Kesah Mahasiswa</h1>
            <p class="text-muted">Silakan masuk sebagai Admin atau Mahasiswa</p>
            <div class="row mt-4">
                <div class="col-md-6">
                    <button v-on:click="login" class="btn btn-primary btn-block">Login Admin</button>
                </div>
                <div class="col-md-6">
                    <button v-on:click="goToForm" class="btn btn-secondary btn-block">Form Mahasiswa</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        async login() {
            this.$router.push({ name: 'Login' })
        },
        async goToForm() {
            this.$router.push({ name: 'Form' })
        }
    }
}
</script>
<style scoped>
section {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f8f9fa;
        }
</style>