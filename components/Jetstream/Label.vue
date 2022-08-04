<script setup>
defineProps({
    value: String,
    comment: {
        required: false
    },
    required: {
        type: Boolean,
        required: false
    },
});
</script>

<template>
    <label class="block font-medium text-md text-gray-700">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>

        <span v-if="required" class="text-red-500 font-bold"> *</span>
        <p v-if="comment" class="text-xs text-gray-500">{{ comment }}</p>
    </label>
</template>
