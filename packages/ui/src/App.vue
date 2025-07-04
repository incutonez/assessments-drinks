<script setup lang="ts">
import { provideActiveDialog } from "@/composables/app.ts";

provideActiveDialog();
</script>

<template>
	<main class="flex size-full">
		<RouterView />
	</main>
</template>
