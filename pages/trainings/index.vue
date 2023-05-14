<script setup>

const { data } = await useFetch(() => `/api/trainings`, {
  pick: ['trainings'],

  onRequestError({ error }) {
    console.log("error->", error);
  }
})






</script>

<template>
  <div class="flex justify-center items-center bg-gray-800 h-screen">
    <div class="w-1/2 grid grid-cols-2 gap-12 justify-items-center">
      <Training 
        v-for="training in data.trainings" :key="training.id"
        :training="training"
      />

    </div>
  </div>
</template>

<style scoped></style>
