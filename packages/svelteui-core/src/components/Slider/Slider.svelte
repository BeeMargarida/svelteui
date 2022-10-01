<script lang="ts">
	import useStyles from './Slider.styles';
	import { Box } from '../Box';
	import Track from './Track/Track.svelte';
	import type { SliderProps as $$SliderProps } from './Slider.styles';

	interface $$Props extends $$SliderProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'blue',
		radius: $$Props['radius'] = 'xl',
		size: $$Props['size'] = 'md',
		min: $$Props['min'] = 0,
		max: $$Props['max'] = 100,
		step: $$Props['step'] = 1,
		precision: $$Props['precision'] = undefined,
		value: $$Props['value'] = undefined,
		defaultValue: $$Props['defaultValue'] = undefined,
		name: $$Props['name'] = undefined,
		disabled: $$Props['disabled'] = false,
		marks: $$Props['marks'] = [],
		label: $$Props['label'] = undefined,
		labelTransition: $$Props['labelTransition'] = 'fade', //TODO: check if is fade
		labelTransitionDuration: $$Props['labelTransitionDuration'] = 0,
		labelAlwaysVisible: $$Props['labelAlwaysVisible'] = false,
		showLabelOnHover: $$Props['showLabelOnHover'] = true;
	export { className as class };

  let position = 0; // TODO: calculate this
  let trackValue = value; // TODO: change this

  function onTrackMouseEnter() {}
  function onTrackMouseLeave() {}

	$: ({ classes } = useStyles({ size, color, radius, disabled }));
</script>

<Box
	bind:element
	class={classes.root}
	{use}
	{...$$restProps}
>
	<Track
    color={color}
    radius={radius}
    size={size}
    filled={position}
    offset={0}
    marks={marks}
    min={min}
    max={max}
    value={trackValue}
    on:mouseenter={onTrackMouseEnter}
    on:mouseleave={onTrackMouseLeave}
  >
  </Track>
</Box>
