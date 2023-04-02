<script setup>
import DebtCard from '../components/DebtCard.vue';
const debts = [{ image: "", name: "bruh", amount: 123 }, { name: "bruh2", amount: 332 }]
</script>

<template>
  <div>
    <p class="text-4xl">Debt management</p>
    <li v-for="debt in debts">
      <DebtCard :debt=debt />
    </li>
  </div>
</template>