<script setup lang="ts">
import { computed } from "vue";
import { IconLoading } from "@/components/Icons.ts";
import type { IBaseButtonProps } from "@/components/types.ts";

const { text = undefined, theme = "normal", icon = undefined, disabled = false, loading = false } = defineProps<IBaseButtonProps>();
const buttonClass = computed(() => {
	return {
		[`button-${theme}`]: true,
		"button-icon-only": !text,
	};
});
const isDisabled = computed(() => disabled || loading);
</script>

<template>
	<button
		:disabled="isDisabled"
		class="base-button"
		:class="buttonClass"
	>
		<IconLoading
			v-if="loading"
			class="animate-spin"
		/>
		<slot
			v-else
			name="icon"
		>
			<Component
				:is="icon"
				v-if="!!icon"
			/>
		</slot>
		<slot name="text">
			<span v-if="!!text">{{ text }}</span>
		</slot>
	</button>
</template>
