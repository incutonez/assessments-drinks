<script setup lang="ts">
// We use this to tie the field and label together, so when the user clicks in the label, it pops open the file input
import { computed, ref, useId, watch } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import FieldText from "@/components/FieldText.vue";
import { IconCancel, IconSave } from "@/components/Icons.ts";

interface FieldFileProps {
	loading?: boolean;
}

defineProps<FieldFileProps>();
const emit = defineEmits(["click-upload"]);
const fileId = useId();
const hasDragOver = ref(false);
const imageEncoded = ref<string>();
const importedFiles = ref<FileList>();
const showUpload = computed(() => !importedFiles.value?.length);
const cls = computed(() => {
	return {
		"!border-red-500": hasDragOver.value,
	};
});

function onChangeFile({ target }: Event) {
	importedFiles.value = (target as HTMLInputElement).files ?? undefined;
}

function onDrop({ dataTransfer }: DragEvent) {
	hasDragOver.value = false;
	importedFiles.value = dataTransfer?.files;
}

function onDragOver() {
	hasDragOver.value = true;
}

function onDragEnd() {
	hasDragOver.value = false;
}

function onClickUpload() {
	const [file] = importedFiles.value ?? [];
	if (file) {
		emit("click-upload", file, imageEncoded.value);
	}
}

function onClickCancel() {
	reset();
}

function reset() {
	importedFiles.value = undefined;
}

watch(importedFiles, ($importedFiles) => {
	const [file] = $importedFiles ?? [];
	if (file) {
		const fileReader = new FileReader();
		fileReader.onload = (event) => {
			imageEncoded.value = event.target?.result as string;
		};
		fileReader.readAsDataURL(file);
	}
});

defineExpose({
	reset,
});
</script>

<template>
	<article class="h-48 w-96">
		<label
			v-if="showUpload"
			:for="fileId"
			class="size-full flex flex-col cursor-pointer border-2 rounded-md border-slate-700 border-dashed p-4 items-center justify-center hover:border-red-600"
			:class="cls"
			@drop.prevent="onDrop"
			@dragover.prevent="onDragOver"
			@dragleave="onDragEnd"
		>
			<input
				:id="fileId"
				type="file"
				accept="image/jpeg,image/png"
				class="hidden"
				@change="onChangeFile"
			>
			<span class="text-sm font-semibold text-slate-700">Click or drag file here</span>
		</label>
		<article
			v-else
			class="text-sm size-full p-2"
		>
			<section
				v-for="importedFile in importedFiles"
				:key="importedFile.name"
				class="flex flex-col size-full gap-form"
			>
				<FieldText
					v-model="importedFile.name"
					label="Name"
					label-align="left"
				/>
				<div class="grow h-1 flex justify-end gap-form">
					<img
						v-if="imageEncoded"
						alt="Upload Image"
						class="h-full w-auto"
						:src="imageEncoded"
					>
					<div class="flex flex-col gap-form">
						<BaseButton
							:icon="IconSave"
							text="Upload"
							theme="info"
							:loading="loading"
							@click="onClickUpload"
						/>
						<BaseButton
							text="Cancel"
							:icon="IconCancel"
							@click="onClickCancel"
						/>
					</div>
				</div>
			</section>
		</article>
	</article>
</template>
