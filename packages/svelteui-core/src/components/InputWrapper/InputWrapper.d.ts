import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface InputWrapperBaseProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	label?: string;
	description?: string;
	error?: string | boolean;
	required?: boolean;
	labelProps?: Record<string, unknown>;
	descriptionProps?: Record<string, unknown>;
	errorProps?: Record<string, unknown>;
}

export interface InputWrapperProps extends InputWrapperBaseProps {
	id?: string;
	labelElement?: 'label' | 'div';
	size?: SvelteUISize;
}

export interface InputWrapperEvents {}

export interface InputWrapperSlots {
  default: { slotValue: string };
}

export default class InputWrapper extends SvelteComponentTyped<InputWrapperProps, InputWrapperEvents, InputWrapperSlots> {}
