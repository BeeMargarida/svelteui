<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { LockClosed } from 'radix-icons-svelte';
	import { Button } from './index';
	import { Group } from '../Group';
	import { useSvelteUITheme } from '$lib/styles';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
</script>

<Meta title="Components/Button" component={Button} />

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Button" id="button" />

<Story name="Colors" id="buttonColors">
	<div style="padding:40px;">
		{#each colors as color}
			<Group mt="xl">
				<Button {color}>Filled button</Button>
				<Button {color} variant="light">Light button</Button>
				<Button {color} variant="outline">Outline button</Button>
				<Button {color} variant="gradient">Gradient button</Button>
			</Group>
		{/each}
	</div>
</Story>

<Story name="With icon" id="buttonIcon">
	<Button>
		<LockClosed slot="leftIcon" />
		Sign Up
	</Button>
</Story>

<Story name="Disabled" id="buttonDisabled" args={{ disabled: true }} />
