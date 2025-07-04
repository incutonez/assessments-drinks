import { inject, type InjectionKey, provide, ref } from "vue";

type TUseActiveDialog = ReturnType<typeof provideActiveDialog>;
const KeyActiveDialog: InjectionKey<TUseActiveDialog> = Symbol("activeDialog");

export function provideActiveDialog() {
	const activeDialog = ref<HTMLDialogElement>();
	const previousDialog = ref<HTMLDialogElement>();

	function setActiveDialog(dialog?: HTMLDialogElement) {
		if (dialog) {
			previousDialog.value = activeDialog.value;
			activeDialog.value = dialog;
		}
		else {
			activeDialog.value = previousDialog.value;
		}
	}

	const provider = {
		activeDialog,
		setActiveDialog,
	};

	provide(KeyActiveDialog, provider);

	return provider;
}

export function injectActiveDialog() {
	return inject(KeyActiveDialog) as TUseActiveDialog;
}
