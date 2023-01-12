import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface IconRendererProps extends DefaultProps<HTMLOrSVGElement>, HTMLAttributes<HTMLOrSVGElement> {
	icon?: Component | HTMLOrSVGElement;
	iconSize?: number;
	iconProps?: Record<string, unknown>;
}

export interface IconRendererEvents {}

export interface IconRendererSlots {}

export default class IconRenderer extends SvelteComponentTyped<IconRendererProps, IconRendererEvents, IconRendererSlots> {}
