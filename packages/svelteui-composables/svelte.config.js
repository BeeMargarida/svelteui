import mm from 'micromatch';
import path from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		files: {
			lib: 'src'
		},
		alias: {
			$clib: path.resolve('./src')
		}
	},
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
			return !mm.contains(filepath, '**_');
		},
		files: mm.matcher('!**/*.test.{ts, js}')
	}
};

export default config;
