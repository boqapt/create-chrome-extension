export default function (manifest) {
  const resourcesScripts = manifest['web_accessible_resources'];

  if (!resourcesScripts) {
    return;
  }

  const scripts = [];

  resourcesScripts.forEach((scriptPath) => {
    // Don't add HTML accessible resources to
    // the scripts entry
    if (/html$/.test(scriptPath)) {
      return;
    }

    scripts.push(scriptPath);
  });

  return { scripts };
}
