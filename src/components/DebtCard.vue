<script setup>
defineProps({
    debt: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img :src=debt.image alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ debt.amount }}</h2>
            <p>{{ debt.name }}</p>
            <div class="card-actions">
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-primary">Pay</button>
            </div>
        </div>
    </div>
</template>