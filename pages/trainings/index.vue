<script setup>

const { data } = await useFetch(() => `/api/trainings`, {
  pick: ['trainings'],

  onRequestError({ error }) {
    console.log("error->", error);
  }
})

useHead({
  title: 'Trainings'
})




</script>

<template>
  <div class="flex justify-center items-center bg-gray-800">
    <div class="w-1/2 h-full grid grid-cols-2 gap-12 justify-items-center">
      <Training 
        v-for="training in data.trainings" :key="training.id"
        :training="training"
      />

    </div>
  </div>
</template>

<style scoped></style>
