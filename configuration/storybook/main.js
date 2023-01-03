const path = require('path');
// const preprocess = require('svelte-preprocess');
const { mergeConfig } = require('vite');

module.exports = {
	stories: [
    '../../packages/{svelteui-composables,svelteui-core,svelteui-dates}/src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'storybook-dark-mode'
	],
	framework: '@storybook/sveltekit',
	features: {
		storyStoreV7: true
	},
  // core: {
  //   builder: '@storybook/builder-vite',
  // },
  // svelteOptions: {
	// 	preprocess: preprocess()
	// },
  docs: {
    autodocs: false
  },
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   return mergeConfig(config, {
  //     // Use the same "resolve" configuration as your app
  //     resolve: (await import('../../packages/svelteui-core/vite.config.js')).default.resolve,
  //     // Add dependencies to pre-optimization
  //     optimizeDeps: {
  //       include: ['storybook-dark-mode'],
  //     },
  //   });
  // },
	async viteFinal(config) {
		return mergeConfig(config, {
      // preprocess: preprocess(),
      resolve: {
        alias: {
          $lib: path.resolve(__dirname, '../../packages/svelteui-core/src'),
          $clib: path.resolve(__dirname, '../../packages/svelteui-composables/src'),
          $dlib: path.resolve(__dirname, '../../packages/svelteui-dates/src'),
          '@svelteuidev/core': path.resolve(__dirname, '../../packages/svelteui-core/src'),
          '@svelteuidev/composables': path.resolve(__dirname, '../../packages/svelteui-composables/src'),
          '@svelteuidev/dates': path.resolve(__dirname, '../../packages/svelteui-dates/src'),
        }
      },
      define: {
        ...config.define,
        global: "window",
      },
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
		});
	}
};
