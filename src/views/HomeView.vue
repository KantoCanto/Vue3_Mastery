<script setup>
import EventCard from "../components/EventCard.vue";
import { ref } from "vue";

const events = ref([
  {
    id: 123455,
    category: "animal welfare",
    title: "Cat Adoption Day",
    description: "Find your new feline friend at this event.",
    location: "Meow Town",
    date: "January 28, 2022",
    time: "12:00",
    petsAllowed: true,
    organizer: "Kat Lydi",
  },
  {
    id: 234566,
    category: "animal welfare",
    title: "Dog Adoption Day",
    description: "Find your new doggo friend at this event.",
    location: "BarkVille",
    date: "January 29, 2022",
    time: "12:00",
    petsAllowed: true,
    organizer: "Dough Borky",
  },
  {
    id: 123123,
    category: "animal welfare",
    title: "Food for Animals",
    description: "Help feed starving animals at this event.",
    location: "Zoo City",
    date: "January 30, 2022",
    time: "12:00",
    petsAllowed: true,
    organizer: "???",
  },
]);
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  text-align: center;
}
</style>
