<template>
  <div
    v-for="row in field.getRows()"
    class="flex border border-solid border-primary h-calc(100%/3)"
  >
    <div
      v-for="cell in row"
      class="flex border border-solid border-primary flex-col w-calc(100%/3)"
    >
      <Gamefield v-if="field.hasSubFields()" :field="cell" />
      <span v-else>{{ cell }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  field: Field;
}>();
</script>
