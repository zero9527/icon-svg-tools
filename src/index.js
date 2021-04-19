const path = require('path');
const fs = require('fs');
const ora = require('ora');
const {
  readSvgFile,
  resolveSvgFile,
  createComponent
} = require('./utils');

const svgDirPath = path.resolve(process.cwd(), './src/svgs/black1');
const saveToDir = path.resolve(process.cwd(), './src/components/black1');
// const svgDirPath = path.resolve(process.cwd(), './src/svgs/colors1');
// const saveToDir = path.resolve(process.cwd(), './src/components/colors1');

const progress = ora();

async function startup () {
  if (!fs.existsSync(svgDirPath)) {
    console.log(`svg路径[${svgDirPath}]不存在！`);
    process.exit(1);
  }
  if (!fs.existsSync(saveToDir)) {
    console.log(`输出路径[${saveToDir}]不存在！`);
    process.exit(1);
  }
  progress.start('开始生成svg图标\n');
  // 读取svg文件目录
  const files = await readSvgFile(svgDirPath);
  progress.text = '读取文件成功\n';
  const svgInfoList = await resolveSvgFile(svgDirPath, files);
  progress.text = 'svg信息处理成功\n';
  await createComponent(saveToDir, svgInfoList);
  progress.succeed('生成svg图标完成！\n');

  console.log(`svg路径：${svgDirPath}`);
  console.log(`输出路径：${saveToDir}\n`);
}

startup();
