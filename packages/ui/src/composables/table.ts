import { computed, h, isRef, ref, unref, type VNode, watch } from "vue";
import {
	type ColumnDef,
	getCoreRowModel, getExpandedRowModel,
	getFilteredRowModel, getPaginationRowModel,
	getSortedRowModel,
	useVueTable,
} from "@tanstack/vue-table";
import BaseButton from "@/components/BaseButton.vue";
import type {
	ISortIdentity,
	ITable,
	ITableAction,
	ITableColumn,
	IUseTableData,
	TTableExpandedState,
} from "@/components/types.ts";

export function useTableData<TData = unknown>({ data, columns, sortInitial, searchInitial = "", canExpand, paginated }: IUseTableData<TData>) {
	const sorting = ref(sortInitial);
	const search = ref(searchInitial);
	const expanded = ref<TTableExpandedState>({});
	const table = useVueTable<TData>({
		get data() {
			return unref(data) ?? [];
		},
		get columns() {
			return unref(columns as ColumnDef<TData>[]) ?? [];
		},
		globalFilterFn: "includesString",
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getRowCanExpand: canExpand ?? (() => true),
		getSortedRowModel: getSortedRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
		getPaginationRowModel: paginated ? getPaginationRowModel() : undefined,
		initialState: {
			pagination: {
				pageSize: 50,
				pageIndex: 0,
			},
		},
		state: {
			get globalFilter() {
				return search.value;
			},
			get sorting() {
				return sorting.value;
			},
			get expanded() {
				return expanded.value;
			},
		},
		onSortingChange(updater) {
			sorting.value = updater instanceof Function ? updater(sorting.value ?? []) : updater;
		},
		onGlobalFilterChange(updaterOrValue) {
			search.value = typeof updaterOrValue === "function" ? updaterOrValue(search.value) : updaterOrValue;
		},
		onExpandedChange(updaterOrValue) {
			expanded.value = typeof updaterOrValue === "function" ? updaterOrValue(expanded.value) : updaterOrValue;
		},
	}) as ITable<TData>;
	const sortedRows = computed(() => table.getSortedRowModel().flatRows);

	table.getColumnSortIdentity = (columnId: string) => {
		let identity: ISortIdentity = 1;
		const $sorting = table.getState().sorting;
		if ($sorting) {
			identity = $sorting.find(({ id }) => id === columnId)?.desc ? 1 : -1;
		}
		return identity;
	};

	table.getSortedRowIndex = (columnId: string) => {
		return (sortedRows.value.findIndex((row) => row.id === columnId) || 0) + 1;
	};

	// Whenever the data changes, we have to make sure we reset the expanded state, as it could be invalid
	watch(isRef(data) ? data : () => data, () => table.resetExpanded());

	return {
		table,
		search,
	};
}

export function useTableActions<T>(buttons: ITableAction<T>[]): ITableColumn<T> {
	return {
		header: "Actions",
		meta: {
			columnAlign: "center",
			columnWidth: "w-24",
			cellCls: "w-24",
		},
		cell(info) {
			const children: VNode[] = [];
			for (const button of buttons) {
				const { canClick } = button;
				if (!canClick || canClick(info.row.original)) {
					children.push(h(BaseButton, {
						theme: "table",
						...button,
						onClick() {
							button.handler(info.row.original);
						},
					}));
				}
			}
			if (children.length) {
				return h("article", {
					class: "flex place-content-center",
				}, children);
			}
		},
	};
}

export function useRowNumbering<T>(): ITableColumn<T> {
	return {
		accessorKey: "id",
		header: "Row",
		enableSorting: false,
		cell: (info) => info.table.getSortedRowIndex(info.row.id),
		meta: {
			columnWidth: "min-w-auto",
			columnAlign: "center",
		},
	};
}
