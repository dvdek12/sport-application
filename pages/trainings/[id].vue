<template>
    <div>
        <TrainingDetail :training="data.training" />
    </div>
</template>


<script setup>

const route = useRoute()

const { data } = await useFetch(() => `/api/trainings/${route.params.id}`, {
  pick: ['training'],

  onRequestError({ error }) {
    console.log("error->", error);
  }
})

</script>