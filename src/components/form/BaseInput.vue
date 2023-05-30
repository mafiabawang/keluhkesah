<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <input v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-control"/>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        }, modelValue: {
            type: String,
            default: null,
        },
    },
    created() {
        console.log(this.$attrs);
    },
};
</script>