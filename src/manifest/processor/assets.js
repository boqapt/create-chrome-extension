import fs from 'fs-extra';
import path from 'path';

import * as log from '../../utils/log';
import * as Remove from '../../utils/remove';

const buildAssetsDir = '$assets';

const processAsset = function (object, key, src, buildPath) {
  const assetPath = object[key];

  log.pending(`Processing asset '${assetPath}'`);

  const assetSrcPath = path.join(src, assetPath);
  const buildAssetPath = path.join(buildAssetsDir, Remove.path(assetPath));
  const assetDestPath = path.join(buildPath, buildAssetPath);

  fs.copySync(assetSrcPath, assetDestPath);

  object[key] = buildAssetPath;

  log.done(`Done`);

  return true;
};

export default function (manifest, { buildPath, src }) {
  // Process icons
  if (manifest.icons && Object.keys(manifest.icons).length) {
    // Create asset directory
    const buildAssetsDirPath = path.join(buildPath, buildAssetsDir);
    fs.mkdirsSync(buildAssetsDirPath);

    for (let name in manifest.icons) {
      processAsset(manifest.icons, name, src, buildPath);
    }
  }

  // TODO can there be more assets?

  return { manifest };
}
