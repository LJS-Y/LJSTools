
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { createHtmlPlugin } from "vite-plugin-html";


//这个配置 为了在html中使用 环境变量
const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};
const viteConfig = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd(), '');
  console.log('Node环境: ' + env.npm_config_user_agent);
  console.log(
    '环境描述: ' +
      (env.VITE_APP_CURRENTMODE === 'production'
        ? '生产'
        : env.VITE_APP_CURRENTMODE === 'test'
          ? '测试服'
          : '本地开发')
  );
  console.log('打包环境: ' + env.VITE_NODE_ENV);
  console.log('接口: ' + env.VITE_APP_API_URL);
  console.log('base', env.VITE_NODE_ENV === 'development' ? './' : env.BASE_URL);
  return {
		plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        // 指定symbolId格式
        symbolId: '[name]',

        /**
         * 自定义插入位置
         * @default: body-last
         */
        // inject?: 'body-last' | 'body-first'

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        // customDomId: '__svg__icons__dom__',
      }),
      createHtmlPlugin({
        inject: {
          data: {
            //将环境变量 VITE_PROJECT_NAME 赋值给 title 方便 html页面使用 title 获取系统标题
            title: getViteEnv(mode, "VITE_PROJECT_NAME"),
          },
        },
      }),
    ],
    // 静态资源服务的文件夹
    publicDir: "public",
    base: env.VITE_NODE_ENV === 'development' ? "./" : env.BASE_URL,
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    // 预览设置  npm run build　打包之后，会生成dist文件 然后运行npm run preview；vite会创建一个服务器来运行打包之后的文件
    preview: {
      port: 9990, //端口号
      host: true,
      open: true, //是否自动打开浏览器
    },
    // 开发配置  npm run dev
    server: {
      port: 9100, // 端口号
      strictPort: false, // 是否是严格的端口号，如果true，端口号被占用的情况下，vite会退出
      host: true,
      cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
      https: false, // 是否支持http2 如果配置成true 会打开https://localhost:3001/xxx;
      open: true, // 是否自动打开浏览器
      // 反向代理 跨域配置
      // proxy: {
      //   "/api": {
      //     target: "http://www.cwl.gov.cn",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
    // 打包配置 npm run build
    build: {
      // 指定输出路径
      outDir: "ljs-tools",
      lib: {
        entry: path.resolve(__dirname, './src/tools/index.js'),
        name: "index",
        fileName: "index",
      },
      // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      assetsInlineLimit: 4096,
      // 启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      sourcemap: false, // 构建后是否生成 source map 文件
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },
      // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true, // 发布元文件（package.json/README/index.d.ts/AI.md）由 public/ 构建回填，清空无害（2026-10-22）
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 1500,
      // minify: 'terser',
      // terserOptions: {
      //   compress: {
      //     //生产环境时移除console
      //     drop_console: ['log'],
      //     drop_debugger: true,
      //   },
      // },
    },
    esbuild: {
      drop: ['debugger'],
      pure: env.VITE_NODE_ENV === 'production' ? ['console.log', 'console.warn'] : [],
    }
	};
});

export default viteConfig;
