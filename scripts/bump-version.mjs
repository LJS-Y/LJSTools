/**
 * 发版版本号 bump（同步两处：public/package.json + 根 package.json）
 * 用法：
 *   node scripts/bump-version.mjs            # patch +1（默认）
 *   node scripts/bump-version.mjs minor      # minor +1
 *   node scripts/bump-version.mjs major      # major +1
 *   node scripts/bump-version.mjs 2.0.0      # 指定版本
 * 约定：只改文件，不打 git tag、不自动提交。
 * 流程：发版前先询问用户是否需要指定版本号，未指定则走默认 patch。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const target = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'package.json');
const arg = process.argv[2] || 'patch';
const raw = readFileSync(target, 'utf8');
const eol = raw.includes('\r\n') ? '\r\n' : '\n'; // 保留原文件换行风格
const pkg = JSON.parse(raw);
const old = pkg.version;

if (/^\d+\.\d+\.\d+$/.test(arg)) {
  pkg.version = arg;
} else {
  const v = old.split('.').map(Number);
  if (arg === 'major') { v[0]++; v[1] = 0; v[2] = 0; }
  else if (arg === 'minor') { v[1]++; v[2] = 0; }
  else if (arg === 'patch') { v[2]++; }
  else { console.error('未知参数: ' + arg + '（支持 patch|minor|major|x.y.z）'); process.exit(1); }
  pkg.version = v.join('.');
}

writeFileSync(target, JSON.stringify(pkg, null, 2).replace(/\n/g, eol) + eol);
console.log('版本: ' + old + ' -> ' + pkg.version + '（' + target + '）');

// 同步根 package.json 的 version（最小化替换，保留其余内容与换行风格）
const rootTarget = join(dirname(fileURLToPath(import.meta.url)), '..', 'package.json');
const rootRaw = readFileSync(rootTarget, 'utf8');
const rootNext = rootRaw.replace(/("version"\s*:\s*")[^"]*(")/, '$1' + pkg.version + '$2');
if (rootNext !== rootRaw) {
  writeFileSync(rootTarget, rootNext);
  console.log('版本: ' + old + ' -> ' + pkg.version + '（' + rootTarget + '，已同步）');
}
console.log('提示: npm run build 会把 public/ 的 package.json 同步进发布目录；发版前请先询问用户是否指定版本号。');
