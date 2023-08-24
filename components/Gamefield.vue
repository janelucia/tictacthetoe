<template>
  <div
    v-for="row in field.getRows()"
    class="flex border border-solid border-primary"
  >
    <div
      v-for="cell in row"
      class="flex border border-solid border-primary flex-col w-full"
    >
      <Gamefield v-if="field.hasSubFields()" :field="cell" />
      <span v-else>{{ cell }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  field: Field;
}>();
</script>
