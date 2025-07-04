/// <reference types="vite/client" />
import { RowData } from "@tanstack/vue-table";
import type { ITableCell, ITableHeader } from "@/components/types.ts";

declare module "@tanstack/vue-table" {
	interface ColumnMeta<TData extends RowData> {
		cellCls?: string | ((cell: ITableCell<TData>) => string);
		footerCls?: (header: ITableHeader<TData>) => string;
		/**
		 * If we want to let the column match its longest text, it's best to use min-w-auto for this value, and then set the
		 * table-layout to auto
		 */
		columnWidth?: string;
		columnAlign?: "left" | "center" | "right";
		canClick?: boolean;
		onClickCell?: (cell: ITableCell<TData>) => void;
	}
}
