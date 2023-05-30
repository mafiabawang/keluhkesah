<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h1 class="text-center mb-4">Masuk Admin</h1>
                <form @submit.prevent="handleSubmit">
                    <base-input type="text" v-model="form.email" label="Email" placeholder="Email">
                    </base-input>
                    <base-input type="password" v-model="form.password" label="Password" placeholder="Password">
                    </base-input>
                    <hr>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
export default {
    name: "Login",
    data() {
        return {
            form : {
                username : '',
                password : ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            let valid = true;
            
            if (valid) {
                const newData = {
                    email: this.form.email,
                    password: this.form.password,
                };
                let url = "http://localhost:3000/login/";
                let method = axios.post;
                method(url, newData).then((res) => {
                    const token = res.data.accessToken;
                    const decoded = jwt_decode(token);
                    const { email, sub } = decoded;

                    sessionStorage.setItem("admin", JSON.stringify({email, sub, token}));
                    this.$router.push({ name: 'Dashboard' });
                    
                    this.form = {
                        username : '',
                        password : ''
                    };
                });
            }
        }
    }
}
</script>