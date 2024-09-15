import path from 'path';
import { fileURLToPath } from 'url';

// __dirnameの代わりに次のコードを使用
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ここで__dirnameを使います
const config = {
    includePaths: [path.join(__dirname, 'styles')],
};

export default config;



