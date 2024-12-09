import { readFile, writeFile, readdir, unlink } from 'node:fs/promises';
import dot from 'dot';

export async function compileDevTemplates() {
  const dirRoot = new URL('../', import.meta.url);

  // Compile the `doT.js` template files for `vercel dev`
  const templatesDir = new URL('src/util/dev/templates', dirRoot);

  dot.process({ path: templatesDir });

  const files = await readdir(templatesDir);
  const compiledFiles = files.filter(f => f.endsWith('.js'));

  for (const file of compiledFiles) {
    const fnPath = new URL(file, templatesDir);
    const tsPath = fnPath.href.replace(/\.js$/, '.ts');
    const def = await readFile(
      new URL(fnPath.href.replace(/\.js$/, '.tsdef')),
      'utf8'
    );
    const interfaceName = def.match(/interface (\w+)/)[1];

    const { default: fn } = await import(fnPath);

    const contents = `import encodeHTML from 'escape-html';

${def}
export default ${fn
      .toString()
      .replace(/var encodeHTML.+\(\)\);/s, '')
      .replace(/\bvar\b/g, 'let')
      .replace(/\(it\s*\)/s, `(it: ${interfaceName}): string`)}`;

    await Promise.all([writeFile(new URL(tsPath), contents), unlink(fnPath)]);
  }
}
