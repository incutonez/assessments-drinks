<script setup lang="ts">
import { ref, unref } from "vue";
import type { DrinksViewModel } from "@incutonez/assessments-drinks-spec";
import BaseButton from "@/components/BaseButton.vue";
import DialogDelete from "@/components/DialogDelete.vue";
import { IconAdd, IconDelete, IconEdit } from "@/components/Icons.ts";
import TableData from "@/components/TableData.vue";
import TablePagination from "@/components/TablePagination.vue";
import { useDeleteDrink, useGetDrinks } from "@/composables/drinks.ts";
import { useViewDrink } from "@/composables/routes.ts";
import { useTableActions, useTableData } from "@/composables/table.ts";
import { RouteCreate } from "@/constants.ts";

const viewDrink = useViewDrink();
const showDelete = ref(false);
const selectedRecord = ref<DrinksViewModel>();
const { records, search } = useGetDrinks();
const { deleteDrink, deleting } = useDeleteDrink();
const { table } = useTableData<DrinksViewModel>({
	paginated: true,
	data: records,
	columns: [useTableActions([{
		icon: IconEdit,
		handler(record) {
			viewDrink(record.id!);
		},
	}, {
		icon: IconDelete,
		handler(record) {
			selectedRecord.value = record;
			showDelete.value = true;
		},
	}]), {
		accessorKey: "name",
		header: "Name",
	}, {
		accessorKey: "description",
		header: "Description",
	}],
});

function onClickAddDrink() {
	viewDrink(RouteCreate);
}

async function onDeleteDrink() {
	const $selectedRecord = unref(selectedRecord);
	if ($selectedRecord) {
		await deleteDrink($selectedRecord.id!);
		showDelete.value = false;
	}
}
</script>

<template>
	<article class="flex flex-col">
		<section class="ml-auto">
			<TablePagination
				v-model:search="search"
				:table="table"
			>
				<template #after-search>
					<BaseButton
						text="Drink"
						:icon="IconAdd"
						theme="info"
						@click="onClickAddDrink"
					/>
				</template>
			</TablePagination>
		</section>
		<TableData :table="table" />
		<RouterView />
		<DialogDelete
			v-model="showDelete"
			:entity-name="selectedRecord?.name"
			:loading="deleting"
			@delete="onDeleteDrink"
		/>
	</article>
</template>
