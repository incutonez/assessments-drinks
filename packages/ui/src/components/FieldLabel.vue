<script setup lang="ts">
import type { IFieldLabelProps } from "@/components/types.ts";

const { separator = ":", text = undefined } = defineProps<IFieldLabelProps>();
</script>

<template>
	<label
		v-if="!!text"
		class="field-label"
	>
		<slot>{{ text }}{{ separator }}</slot>
	</label>
</template>
