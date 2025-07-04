<script setup lang="ts">
import { ref } from "vue";
import FieldFile from "@/components/FieldFile.vue";
import { injectDrinkRecord } from "@/composables/drinks.ts";
import { useCreatePicture } from "@/composables/pictures.ts";

const { drinkRecord } = injectDrinkRecord();
const { savePicture, savingPicture } = useCreatePicture();
const rootCmp = ref<InstanceType<typeof FieldFile>>();

async function onClickUpload(file: File, imageEncoded: string) {
	const drinkId = drinkRecord.value?.id;
	if (drinkId) {
		await savePicture(drinkId, {
			drinkId,
			name: file.name,
			mimetype: file.type,
			path: imageEncoded,
		});
		rootCmp.value?.reset();
	}
}
</script>

<template>
	<FieldFile
		ref="rootCmp"
		:loading="savingPicture"
		@click-upload="onClickUpload"
	/>
</template>
