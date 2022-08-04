<script setup>
import { computed } from 'vue';

const errors = computed(() => useRoute().params.errors);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);
</script>

<template>
    <div v-if="hasErrors">
        <div class="font-medium text-red-600">
            有些錯誤需要修正！
        </div>

        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            <li v-for="(error, key) in errors" :key="key">
                {{ error }}
            </li>
        </ul>
    </div>
</template>
