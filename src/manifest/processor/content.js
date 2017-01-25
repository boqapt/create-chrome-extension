import script from './lib/script';

export default function (manifest, { buildPath }) {
  const contentScripts = manifest['content_scripts'];

  if (!contentScripts) { return; }

  const scripts = [];

  contentScripts.forEach((contentScript = []) => {
    // TODO content_script can contain css too.
    // Maybe we can be strict, throw error and tell user to add css into scripts and leave it on webpack too
    contentScript.js.forEach((scriptPath) => {
      script(scriptPath, buildPath);
      scripts.push(scriptPath);
    });
  });

  return { scripts };
}
