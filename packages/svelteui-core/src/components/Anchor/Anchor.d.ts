import { SvelteComponentTyped } from 'svelte';
import { DefaultProps } from '$lib/styles';
import { TextProps } from "../Text/Text";

export type AnchorVariant = 'filled' | 'outline' | 'light';

export interface AnchorProps extends DefaultProps, TextProps<HTMLAnchorElement> {
	root?: TextProps['root'];
	external?: boolean;
}

export interface AnchorEvents {
  click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface AnchorSlots {
	default: { slotValue: string };
}

export default class Anchor extends SvelteComponentTyped<AnchorProps, AnchorEvents, AnchorSlots> {}
