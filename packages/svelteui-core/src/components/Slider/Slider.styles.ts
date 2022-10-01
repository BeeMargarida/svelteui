import { keyframes, createStyles, type SvelteUIColor } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize, Transition } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface SliderProps extends DefaultProps {
  color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
  size?: SvelteUINumberSize;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  value?: number;
  defaultValue?: number;
  name?: string;
  disabled?: boolean;
  marks?: { value: number; label: Component | string }[];
  label?: Component | string;
  labelTransition?: Transition;
	labelTransitionDuration?: number;
  labelAlwaysVisible?: boolean;
  showLabelOnHover?: boolean;
  // TODO: add thumb stuff
  // TODO: add scale
}
export interface SliderStyleParams {
	size: SvelteUINumberSize;
	color: SvelteUIColor;
	radius: SvelteUINumberSize | number;
  disabled: boolean;
}

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
}

export default createStyles(
	(theme, { size, color, radius, disabled }: SliderStyleParams) => {
		return {
			root: {
        outline: 0,
        height: theme.fn.size({ size: size, sizes: sizes }) * 2,
        display: 'flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        touchAction: 'none',
      }
		};
	}
);
