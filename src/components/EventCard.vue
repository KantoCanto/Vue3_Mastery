<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'event-details', params: { id: event.id } }"
  >
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 1.5rem;
  width: 20rem;
  cursor: pointer;
  border: 0.01rem solid #39495c;
  margin-bottom: 1.3rem;
}

.event-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0.1rem 1rem 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
