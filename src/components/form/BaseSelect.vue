<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <select name="angkatan" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs" class="form-control">
            <option value="" v-if="placeholder">{{ placeholder }}</option>
            <option v-for="option in options" :value="option.value">
                {{ option.label }}
            </option>
        </select>
        <slot name="error"></slot>
    </div>
</template>


<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            default: null,
        },
        options: {
            type: Array,
            required: true,
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
};
</script>