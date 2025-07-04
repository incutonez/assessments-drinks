<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import { IconDelete } from "@/components/Icons.ts";
import type { IBaseDialogEmits, IBaseDialogProps } from "@/components/types.ts";

export interface DialogDeleteProps extends IBaseDialogProps {
	entityName?: string;
	loading?: boolean;
}

export interface DialogDeleteEmits extends IBaseDialogEmits {
	(event: "delete"): void;
}

defineProps<DialogDeleteProps>();
const emit = defineEmits<DialogDeleteEmits>();

async function onClickDelete() {
	emit("delete");
}
</script>

<template>
	<BaseDialog title="Delete Entity">
		<template #content>
			<p>Are you sure you want to delete {{ entityName ?? "" }}?</p>
		</template>
		<template #footer>
			<BaseButton
				text="Delete"
				:icon="IconDelete"
				:loading="loading"
				@click="onClickDelete"
			/>
		</template>
	</BaseDialog>
</template>
