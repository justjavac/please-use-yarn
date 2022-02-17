#!/usr/bin/env node
if (
  !(/yarn\.js$|yarnpkg$/.test(process.env.npm_execpath) ||
    /^yarn\//.test(process.env.npm_config_user_agent))
) {
  console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
  console.error(`\x1B[1;31m* 请使用 yarn 安装依赖。\x1B[0;0m`);
  console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
  console.error(``);
  process.exit(1);
}
