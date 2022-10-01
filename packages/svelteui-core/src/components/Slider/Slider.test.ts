import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Slider } from './Slider.svelte';

describe('Slider', () => {
	itSupportsClassName(Slider);
});
