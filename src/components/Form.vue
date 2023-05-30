<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center mb-4">Form Keluhan Mahasiswa PENS PJJ</h1>
                <form @submit.prevent="addData">
                    <input type="hidden" v-model="form.id" />
                    <base-input type="text" v-model="form.nama" label="Nama" placeholder="Nama">
                    </base-input>
                    <!-- <div class="form-group">
                        <label for="nama">Nama</label>
                        <input type="text" name="nama" class="form-control" placeholder="Nama">
                    </div> -->

                    <base-input type="text" v-model="form.nrp" label="NRP" placeholder="NRP">
                    </base-input>
                    <!-- <div class="form-group">
                        <label for="nrp">NRP</label>
                        <input type="text" name="nrp" class="form-control" placeholder="NRP">
                    </div> -->

                    <base-input type="text" v-model="form.nowa" label="No. WhatsApp" placeholder="No. WhatsApp">
                    </base-input>
                    <!-- <div class="form-group">
                        <label for="nowa">No. WhatsApp</label>
                        <input type="text" name="nowa" class="form-control" placeholder="No. WhatsApp">
                    </div> -->

                    <base-select label="Angkatan" v-model="form.angkatan" :options="angkatanOptions"
                        placeholder="-Pilih Angkatan-">
                    </base-select>
                    <!-- <div class="form-group">
                        <label for="angkatan">Angkatan</label>
                        <select name="angkatan" class="form-control">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div> -->

                    <base-radio-group label="Program" name="program" :options="programOptions" v-model="form.program">
                    </base-radio-group>
                    <!-- <div class="form-group">
                        <label for="program">Program</label><br>
                        <div class="form-check form-check-inline">
                            <input type="radio" name="program" class="form-check-input" value="PJJ D4 TELKOM">
                            <label for="program1" class="form-check-label">PJJ D4 TELKOM</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="radio" name="program" class="form-check-input" value="PJJ D3 TI">
                            <label for="program2" class="form-check-label">PJJ D3 TI</label>
                        </div>
                    </div> -->

                    <div class="form-group">
                        <label for="keluhan">Keluhan</label>
                        <textarea name="keluhan" class="form-control" rows="4" placeholder="Keluhan"
                            v-model="form.keluhan"></textarea>
                    </div>

                    <!-- <div class="form-group">
                        <label for="hari">Hari Konsultasi</label><br>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" name="hari[]" id="hari1" class="form-check-input" value="Weekend">
                            <label for="hari1" class="form-check-label">Weekend</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" name="hari[]" id="hari2" class="form-check-input" value="Weekday">
                            <label for="hari2" class="form-check-label">Weekday</label>
                        </div>
                    </div> -->

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Form",
    data() {
        return {
            form: {
                id: '',
                nama: '',
                nrp: '',
                nowa: '',
                angkatan: null,
                program: '',
                keluhan: ''
            },
            angkatanOptions: [
                { value: 2020, label: 2020 },
                { value: 2021, label: 2021 },
                { value: 2022, label: 2022 }
            ],
            programOptions: [
                { text: "PJJ D4 TELKOM", value: 'PJJ D4 TELKOM' },
                { text: "PJJ D3 TI", value: 'PJJ D3 TI' },
            ],
        }
    },
    //Lanjutkan disini
    methods: {
        addData() {
            let valid = true;
            if (valid) {
                const newData = {
                    nama: this.form.nama,
                    nrp: this.form.nrp,
                    nowa: this.form.nowa,
                    angkatan: this.form.angkatan,
                    program: this.form.program,
                    keluhan: this.form.keluhan
                };
                let url = "http://localhost:3000/dataList/";
                let method = axios.post;
                method(url, newData).then((res) => {
                    this.form = {
                        nama: '',
                        nrp: '',
                        nowa: '',
                        angkatan: null,
                        program: '',
                        keluhan: ''
                    };
                });
            }
        }
    }
}
</script>