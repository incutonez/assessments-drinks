<script setup lang="ts">
import { computed, reactive, ref, unref, watch } from "vue";
import type { ReviewsViewModel } from "@incutonez/assessments-drinks-spec";
import BaseButton from "@/components/BaseButton.vue";
import BaseDialog from "@/components/BaseDialog.vue";
import BaseTabs from "@/components/BaseTabs.vue";
import DialogDelete from "@/components/DialogDelete.vue";
import FieldText from "@/components/FieldText.vue";
import { IconAdd, IconDelete, IconEdit, IconSave } from "@/components/Icons.ts";
import TableData from "@/components/TableData.vue";
import type { IBaseTabProps, ViewModelIdProp } from "@/components/types.ts";
import { provideDrinkRecord } from "@/composables/drinks.ts";
import { useGetDrinkPictures } from "@/composables/pictures.ts";
import { useDeleteReview, useGetDrinkReviews } from "@/composables/reviews.ts";
import { useViewDrink, useViewDrinks, useViewReview } from "@/composables/routes.ts";
import { useTableActions, useTableData } from "@/composables/table.ts";
import { RouteCreate, RouteDrinkTabs } from "@/constants.ts";
import PictureUpload from "@/views/drinks/PictureUpload.vue";

interface ViewDrinkProps {
	drinkId: ViewModelIdProp;
	tabId: "details" | "pictures" | "reviews";
}

const props = defineProps<ViewDrinkProps>();
const show = ref(true);
const showDelete = ref(false);
const drinkId = computed(() => props.drinkId);
const selectedReview = ref<ReviewsViewModel>();
const { drinkRecord, save, saving } = provideDrinkRecord(drinkId);
const { drinkReviews } = useGetDrinkReviews(drinkId);
const { drinkPictures } = useGetDrinkPictures(drinkId);
const { deleteReview } = useDeleteReview();
const viewDrinks = useViewDrinks();
const viewReview = useViewReview();
const tabs = reactive<IBaseTabProps[]>([{
	title: "Details",
	value: RouteDrinkTabs.Details,
	contentClasses: "flex flex-col items-start gap-2 p-2 border-0",
}, {
	title: "Pictures",
	value: RouteDrinkTabs.Pictures,
	contentClasses: "flex flex-col gap-2 pt-2 border-0",
}, {
	title: "Reviews",
	value: RouteDrinkTabs.Reviews,
	contentClasses: "flex flex-col gap-2 pt-2 border-0",
}]);
const activeTab = ref(tabs[0].title);
const viewDrink = useViewDrink();
const reviews = useTableData<ReviewsViewModel>({
	data: drinkReviews,
	columns: [useTableActions([{
		icon: IconEdit,
		handler(record) {
			viewReview(drinkId.value as number, record.id!);
		},
	}, {
		icon: IconDelete,
		handler(record) {
			selectedReview.value = record;
			showDelete.value = true;
		},
	}]), {
		accessorKey: "description",
		header: "Description",
	}, {
		accessorKey: "rating",
		header: "Rating",
	}, {
		accessorKey: "userName",
		header: "User",
	}],
});
const title = computed(() => {
	const $drinkRecord = unref(drinkRecord);
	if ($drinkRecord?.id) {
		return "Edit Drink";
	}
	return "Create Drink";
});

async function onClickSave() {
	await save();
	await viewDrinks();
}

async function onDeleteReview() {
	const $selectedReview = unref(selectedReview);
	if ($selectedReview) {
		await deleteReview(drinkId.value as number, $selectedReview.id!);
		showDelete.value = false;
	}
}

function onClickAddReview() {
	viewReview(drinkId.value as number, RouteCreate);
}

watch(show, ($show) => {
	if (!$show) {
		viewDrinks();
	}
});

// If the tabId prop is changed, then update the activeTab
watch(() => props.tabId, (tabId) => activeTab.value = tabId, {
	immediate: true,
});
// If the activeTab is changed, then we need to update the route
watch(activeTab, ($activeTab) => viewDrink(drinkId.value, $activeTab));
</script>

<template>
	<BaseDialog
		v-if="drinkRecord"
		v-model="show"
		:title="title"
		:tabs="tabs"
		class="size-3/4"
		body-padding=""
	>
		<template #content>
			<BaseTabs
				v-model="activeTab"
				:tabs="tabs"
				orientation="vertical"
			>
				<template #[RouteDrinkTabs.Details]>
					<section class="flex flex-col gap-4">
						<FieldText
							v-model="drinkRecord.name"
							label="Name"
							autofocus
						/>
						<FieldText
							v-model="drinkRecord.description"
							label="Description"
						/>
					</section>
				</template>
				<template #[RouteDrinkTabs.Pictures]>
					<PictureUpload />
					<article
						v-for="drinkPicture in drinkPictures"
						:key="drinkPicture.id"
					>
						Hi
					</article>
				</template>
				<template #[RouteDrinkTabs.Reviews]>
					<section class="flex flex-col gap-form size-full">
						<div class="flex items-center px-2">
							<h1 class="font-semibold text-lg">
								Reviews
							</h1>
							<BaseButton
								text="Review"
								theme="info"
								class="ml-auto"
								:icon="IconAdd"
								@click="onClickAddReview"
							/>
						</div>
						<TableData
							class="flex-1 border-x-0 border-b-0"
							:table="reviews.table"
						/>
					</section>
				</template>
			</BaseTabs>
		</template>
		<template #footer>
			<BaseButton
				text="Save"
				theme="info"
				:loading="saving"
				:icon="IconSave"
				@click="onClickSave"
			/>
		</template>
	</BaseDialog>
	<!-- We use a v-if here because we don't want the route to render before our dialog shows -->
	<RouterView v-if="drinkRecord" />
	<DialogDelete
		v-model="showDelete"
		:entity-name="selectedReview?.description"
		@delete="onDeleteReview"
	/>
</template>
