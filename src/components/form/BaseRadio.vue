<template>
    <div class="form-check form-check-inline">
        <input type="radio" :value="value" :checked="modelValue == value"
            @change="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" class="form-check-input"/>
        <label class="form-check-label">{{ label }}</label>
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
            type: [String, Number],
            default: null,
        },
        value: {
            type: [String, Number],
            required: true,
        },
    },
};
</script>