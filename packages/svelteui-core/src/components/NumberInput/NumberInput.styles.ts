import { createStyles } from '$lib/styles';
import type { TextInputProps } from '../TextInput/TextInput.styles';
import type { Override, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface NumberInputProps extends Omit<TextInputProps, 'value'> {
	value?: number;
	defaultValue?: number;
	invalid?: boolean;
	decimalSeparator?: string;
	max?: number;
	min?: number;
	step?: number;
	stepHoldDelay?: number;
	stepHoldInterval?: number | ((step: number) => number);
	hideControls?: boolean;
	overrideControls?: Override['props'];
	precision?: number;
	noClampOnBlur?: boolean;
	formatter?: Formatter;
	parser?: Parser;
}

export interface NumberInputStyleParams {
	radius: SvelteUINumberSize;
	size: SvelteUISize;
}

export type Formatter = (value: string | undefined) => string;
export type Parser = (value: string | undefined) => string | undefined;

export const defaultFormatter: Formatter = (value) => value || '';
export const defaultParser: Parser = (num) => {
	if (num === '-') return num;

	const parsedNum = parseFloat(num);
	return Number.isNaN(parsedNum) ? undefined : num;
};

export const CONTROL_SIZES = {
	xs: 20,
	sm: 24,
	md: 30,
	lg: 34,
	xl: 36
};

export default createStyles((theme, { size, radius }: NumberInputStyleParams) => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
			height: 'calc(100% - 2px)',
			margin: 1,
			marginRight: 1
		},

		control: {
			margin: 0,
			position: 'relative',
			flex: '0 0 50%',
			boxSizing: 'border-box',
			width: CONTROL_SIZES[size],
			padding: 0,
			WebkitTapHighlightColor: 'transparent',
			borderBottom: '1px solid $gray400',
			borderLeft: '1px solid $gray400',
			borderTop: 0,
			borderRight: 0,
			backgroundColor: 'transparent',
			marginRight: 1,

			darkMode: {
				borderBottom: '1px solid $dark400',
				borderLeft: '1px solid $dark400'
			},

			'&:not(:disabled):hover': {
				backgroundColor: '$gray50',

				darkMode: {
					backgroundColor: '$dark600'
				}
			},

			'&::after': {
				position: 'absolute',
				top: 'calc(50% - 2.5px)',
				left: 'calc(50% - 4.5px)',
				content: '""',
				display: 'block',
				width: 0,
				height: 0,
				borderStyle: 'solid'
			},
		},
    controlUp: {
      borderTopRightRadius: `$${radius}`,

      '&::after': {
        borderWidth: '0px 5px 5px 5px',
        borderColor: 'transparent transparent $black transparent',

        darkMode: {
          borderColor: 'transparent transparent $dark50 transparent'
        }
      },

      '&:disabled::after': {
        borderBottomColor: '$gray500',
        darkMode: {
          borderBottomColor: '$dark200'
        }
      }
    },
    controlDown: {
      borderTopRightRadius: `$${radius}`,
      borderBottom: 0,

      '&::after': {
        borderWidth: '5px 5px 0px 5px',
        borderColor: '$black transparent transparent transparent',

        darkMode: {
          borderColor: '$dark50 transparent transparent transparent'
        }
      },

      '&:disabled::after': {
        borderTopColor: '$gray500',
        darkMode: {
          borderTopColor: '$dark200'
        }
      }
    }
	};
});
