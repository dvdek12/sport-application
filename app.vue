<template>
  <div class="overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>


useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Sport Tracker` : 'Sport Tracker'
  },
  meta: [
    {
      name: 'description',
      content: 'Amazing description'
    }
  ]
})


</script>
