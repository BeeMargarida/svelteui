<script lang="ts">
  import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import useStyles from './Track.styles';
	import { Box } from '../../Box';
	import type { TrackProps as $$TrackProps } from './Track.styles';

	interface $$Props extends $$TrackProps {}

	export let use: $$Props['use'] = [],
		color: $$Props['color'] = 'blue',
		radius: $$Props['radius'] = 'xl',
		size: $$Props['size'] = 'md',
		filled: $$Props['filled'] = undefined,
		offset: $$Props['offset'] = undefined,
		marksOffset: $$Props['marksOffset'] = undefined,
		marks: $$Props['marks'] = [],
		min: $$Props['min'] = 0,
		max: $$Props['max'] = 100,
		value: $$Props['value'] = undefined,
		disabled: $$Props['disabled'] = false;

  /** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ classes } = useStyles({ size, color, radius, disabled, offset, filled }));
</script>

<div class={classes.root}>
  <Box class={classes.bar} use={[forwardEvents, [useActions, use]]}/>
  <slot />
  <!-- TODO: add marks and onChange logic-->
</div>

