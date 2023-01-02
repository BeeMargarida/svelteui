import { vitePreprocess } from '@sveltejs/kit/vite';
import mm from 'micromatch';
import fs from 'fs';
export const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		files: {
			lib: 'src',
			routes: 'routes'
		}
	},
	package: {
		exports: (filepath) => {
			if (filepath.endsWith('.d.ts')) return false;
			if (filepath.endsWith('.config.js')) return false;
			if (mm.contains(filepath, 'internal/**')) return false;
			if (mm.contains(filepath, 'styles/**')) return false;
			return !mm.contains(filepath, '**_');
		},
		files: mm.matcher('!**/*.test.{ts, js}')
	}
};

export default config;
