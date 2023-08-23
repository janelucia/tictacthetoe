<template></template>

<script setup lang="ts">

const generateBoard:  = (level) => {
    level === 0 ? '' : [generateBoard(level-1), generateBoard(level-1), generateBoard(level-1)];
    return generateBoard(level);
}
</script>
