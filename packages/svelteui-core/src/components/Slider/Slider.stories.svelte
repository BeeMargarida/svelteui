<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Slider } from './index';
</script>

<Meta title="Components/Slider" component={Slider} />

<Template let:args>
	<Slider {...args} />
</Template>

<Story name="Slider" />
