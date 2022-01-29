# please-use-yarn

> 强制在项目中使用 yarn 作为包管理器

## 使用

在 `package.json` 文件的 scripts 中添加 `preinstall`：

```json
{
  "scripts": {
    "preinstall": "npx please-use-yarn"
  }
}
```

## 效果

当使用 `npm i` 安装依赖时，会报错并停止安装。

![](./screen.png)

## License

[MIT](LICENSE)
