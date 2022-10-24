import { createStyles, type SvelteUIColor } from '$lib/styles';
import { sizes } from "../Slider.styles";
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface TrackProps extends DefaultProps {
  color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
  size?: SvelteUINumberSize;
  filled?: number;
  offset?: number;
  marksOffset?: number;
  marks?: { value: number; label: Component | string }[];
  min?: number;
  max?: number;
  value?: number;
  disabled?: boolean;
}

export interface TrackStyleParams {
	size: SvelteUINumberSize;
	color: SvelteUIColor;
	radius: SvelteUINumberSize | number;
  disabled: boolean;
  offset: number;
  filled: number;
}

export default createStyles(
	(theme, { size, color, radius, disabled, offset, filled }: TrackStyleParams) => {
		return {
			root: {
        position: 'relative',
        height: theme.fn.size({ sizes, size }),
        width: '100%',
        marginRight: theme.fn.size({ size, sizes }),
        marginLeft: theme.fn.size({ size, sizes }),

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          borderRadius: theme.fn.radius(radius),
          right: -1 * theme.fn.size({ size, sizes }),
          left: -1 * theme.fn.size({ size, sizes }),
          backgroundColor: theme.fn.themeColor('gray', 2),
          zIndex: 0,

          darkMode: {
            backgroundColor: theme.fn.themeColor('dark', 4),
          }
        },
      },
      bar: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        bottom: 0,
        backgroundColor: disabled
          ? theme.fn.themeColor('gray', 4)
          : theme.fn.variant({ variant: 'filled', color }).background,
        borderRadius: theme.fn.radius(radius),
        left: `calc(${offset}% - ${theme.fn.size({ size, sizes })}px)`,
        width: `calc(${filled}% - ${theme.fn.size({ size, sizes })}px)`,

        darkMode: {
          backgroundColor: disabled ? theme.fn.themeColor('dark', 3) : theme.fn.variant({ variant: 'filled', color }).background,
        }
      },
		};
	}
);
