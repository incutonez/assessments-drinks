<script setup lang="ts">
import { computed, ref, watch } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import FieldText from "@/components/FieldText.vue";
import { IconSave } from "@/components/Icons.ts";
import type { ViewModelIdProp } from "@/components/types.ts";
import { provideReviewRecord } from "@/composables/reviews.ts";
import { useViewDrink } from "@/composables/routes.ts";
import { RouteDrinkTabs } from "@/constants.ts";

interface ViewReviewProps {
	drinkId: number;
	reviewId: ViewModelIdProp;
}

const props = defineProps<ViewReviewProps>();
const drinkId = computed(() => props.drinkId);
const reviewId = computed(() => props.reviewId);
const { reviewRecord, save, saving } = provideReviewRecord(drinkId, reviewId);
const show = ref(true);
const viewDrink = useViewDrink();

async function onClickSave() {
	await save();
	await viewDrink(drinkId.value, RouteDrinkTabs.Reviews);
}

watch(show, ($show) => {
	if (!$show) {
		viewDrink(drinkId.value, RouteDrinkTabs.Reviews);
	}
});

watch(reviewRecord, ($reviewRecord) => show.value = !!$reviewRecord);
</script>

<template>
	<BaseDialog
		v-if="reviewRecord"
		v-model="show"
		title="Review"
		class="z-2"
		body-class="gap-form flex flex-col"
	>
		<template #content>
			<FieldText
				v-model="reviewRecord.description"
				label="Description"
				autofocus
			/>
			<FieldText
				v-model="reviewRecord.rating"
				label="Rating"
			/>
			<FieldText
				v-model="reviewRecord.userName"
				label="Rating"
			/>
		</template>
		<template #footer>
			<BaseButton
				theme="info"
				:loading="saving"
				:icon="IconSave"
				text="Save"
				@click="onClickSave"
			/>
		</template>
	</BaseDialog>
</template>
