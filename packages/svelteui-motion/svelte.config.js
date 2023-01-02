import { vitePreprocess } from '@sveltejs/kit/vite';
import mm from 'micromatch';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
			return !mm.contains(filepath, '**_');
		},
		files: mm.matcher('!**/*.test.{ts, js}')
	}
};

export default config;
