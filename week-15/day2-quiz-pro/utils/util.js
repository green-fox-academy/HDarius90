import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export function createDirname(importMetaUrl) {
    const __dirname = dirname(fileURLToPath(importMetaUrl));

    return function getAbsolutePath(dirName) {
        return path.join(__dirname, dirName);
    }
};