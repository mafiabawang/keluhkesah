<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Keluh Kesah Mahasiswa</h1>
        <!-- Tombol Logout -->
        <div class="text-right mb-3">
            <a @click="logout" class="btn btn-danger">Logout</a>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>NRP</th>
                    <th>No. WA</th>
                    <th>Tahun</th>
                    <th>Prodi</th>
                    <th>Isi Keluhan</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data keluhan mahasiswa -->
                <tr v-for="siswa in dataList" :key="siswa.id">
                    <td>{{ siswa.nama }}</td>
                    <td>{{ siswa.nrp }}</td>
                    <td>{{ siswa.nowa }}</td>
                    <td>{{ siswa.angkatan }}</td>
                    <td>{{ siswa.program }}</td>
                    <td>{{ siswa.keluhan }}</td>
                    <td><a :href="'https://wa.me/' + siswa.nowa" class="btn btn-primary" target="_blank">Hubungi</a></td>
                    <td><a @click="deleteData(siswa)" class="btn btn-danger">Delete</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            dataList: []
        }
    },
    mounted() {
        this.load();
    },
    methods: {
        logout() {
            sessionStorage.removeItem("admin");
            this.$router.push({ name: 'Login' });
        },
        load() {
            const { token } = JSON.parse(sessionStorage.getItem("admin"));
            axios.get("http://localhost:3000/660/dataList/", {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }).then((res) => {
                this.dataList = res.data;
            }).catch((e) => {
                console.log(e);
            });
        },
        deleteData(siswa) {
            const { token } = JSON.parse(sessionStorage.getItem("admin"));
            axios.delete("http://localhost:3000/660/dataList/" + siswa.id, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }).then((res) => {
                this.dataList.splice(siswa.id, 1);
            })
        }
    }
}
</script>