if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>n(s,r),o={module:{uri:r},exports:t,require:a};e[r]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"02f344f228d8aee3d5ab06adaa234897"},{url:"about/index.html",revision:"47e4ec4653e3d5593e227ba75f76df8e"},{url:"assets/1.3e6b3641.png",revision:null},{url:"assets/1.7770febf.png",revision:null},{url:"assets/1.c1f4d3e3.png",revision:null},{url:"assets/10.8d61508b.png",revision:null},{url:"assets/10.9e484ef8.png",revision:null},{url:"assets/11.eccfbaa6.png",revision:null},{url:"assets/12.4909dc06.png",revision:null},{url:"assets/13.a098bf20.png",revision:null},{url:"assets/14.e879e6af.png",revision:null},{url:"assets/15.b2ad4d2f.png",revision:null},{url:"assets/16.49b99481.png",revision:null},{url:"assets/17.dcbe05a3.png",revision:null},{url:"assets/18.666e8b52.png",revision:null},{url:"assets/19.5a11301b.png",revision:null},{url:"assets/2.2e3a242b.png",revision:null},{url:"assets/2.4110e294.png",revision:null},{url:"assets/20.c6d1e966.png",revision:null},{url:"assets/21.94ac96e1.png",revision:null},{url:"assets/23.24ca5a6b.png",revision:null},{url:"assets/3.041470a2.png",revision:null},{url:"assets/3.e9384426.svg",revision:null},{url:"assets/4.f504de5c.png",revision:null},{url:"assets/4.f92e92aa.png",revision:null},{url:"assets/5.5322b317.png",revision:null},{url:"assets/5.94f6958c.png",revision:null},{url:"assets/6.0d85bd00.png",revision:null},{url:"assets/6.4441d121.png",revision:null},{url:"assets/7.68289457.png",revision:null},{url:"assets/7.69d6a985.png",revision:null},{url:"assets/8.083a49cb.svg",revision:null},{url:"assets/8.0e5fb381.png",revision:null},{url:"assets/9.4ce2c54b.svg",revision:null},{url:"assets/9.c0ca3296.png",revision:null},{url:"assets/about_index.md.3d8a1fe1.js",revision:null},{url:"assets/about_index.md.3d8a1fe1.lean.js",revision:null},{url:"assets/app.2824fd48.js",revision:null},{url:"assets/brightness_contrast.ea451c2d.png",revision:null},{url:"assets/brightness.e8f3835b.png",revision:null},{url:"assets/chrome-memory.8517c8ee.png",revision:null},{url:"assets/chunks/virtual_pwa-register.8ad80477.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.295a6886.js",revision:null},{url:"assets/contrast.024392e2.png",revision:null},{url:"assets/equation.135f8220.svg",revision:null},{url:"assets/final1.747f4674.png",revision:null},{url:"assets/flex-logo.2489261b.svg",revision:null},{url:"assets/fx.fa743628.png",revision:null},{url:"assets/fx1.c34a5cf0.png",revision:null},{url:"assets/gzip.8b097dc8.png",revision:null},{url:"assets/index.md.852e28bb.js",revision:null},{url:"assets/index.md.852e28bb.lean.js",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/iShot.7d5b00fc.png",revision:null},{url:"assets/message_index.md.e8bd5d50.js",revision:null},{url:"assets/message_index.md.e8bd5d50.lean.js",revision:null},{url:"assets/no-gzip.a5954019.png",revision:null},{url:"assets/notes_art_book_写给无神论者.md.261d58d1.js",revision:null},{url:"assets/notes_art_book_写给无神论者.md.261d58d1.lean.js",revision:null},{url:"assets/notes_art_graph_picture-perfect-posing.md.1fd597fa.js",revision:null},{url:"assets/notes_art_graph_picture-perfect-posing.md.1fd597fa.lean.js",revision:null},{url:"assets/notes_art_graph_今日摄影.md.136c1c85.js",revision:null},{url:"assets/notes_art_graph_今日摄影.md.136c1c85.lean.js",revision:null},{url:"assets/notes_art_graph_他们为何而创作.md.3b99a57a.js",revision:null},{url:"assets/notes_art_graph_他们为何而创作.md.3b99a57a.lean.js",revision:null},{url:"assets/notes_art_graph_影像叙事语言.md.bb3f8b2b.js",revision:null},{url:"assets/notes_art_graph_影像叙事语言.md.bb3f8b2b.lean.js",revision:null},{url:"assets/notes_art_graph_摄影构图学.md.51cc98b0.js",revision:null},{url:"assets/notes_art_graph_摄影构图学.md.51cc98b0.lean.js",revision:null},{url:"assets/notes_art_graph_旁轴相机.md.f39d0cf6.js",revision:null},{url:"assets/notes_art_graph_旁轴相机.md.f39d0cf6.lean.js",revision:null},{url:"assets/notes_art_graph_胶片数码化.md.9bf93ace.js",revision:null},{url:"assets/notes_art_graph_胶片数码化.md.9bf93ace.lean.js",revision:null},{url:"assets/notes_art_graph_论摄影.md.f187dd40.js",revision:null},{url:"assets/notes_art_graph_论摄影.md.f187dd40.lean.js",revision:null},{url:"assets/notes_art_graph_辐射镜头.md.28f1a316.js",revision:null},{url:"assets/notes_art_graph_辐射镜头.md.28f1a316.lean.js",revision:null},{url:"assets/notes_art_index.md.f2ce28fd.js",revision:null},{url:"assets/notes_art_index.md.f2ce28fd.lean.js",revision:null},{url:"assets/notes_index.md.d7a199c4.js",revision:null},{url:"assets/notes_index.md.d7a199c4.lean.js",revision:null},{url:"assets/notes_it_index.md.2c52ebaf.js",revision:null},{url:"assets/notes_it_index.md.2c52ebaf.lean.js",revision:null},{url:"assets/notes_it_other_app.md.5f3e4a25.js",revision:null},{url:"assets/notes_it_other_app.md.5f3e4a25.lean.js",revision:null},{url:"assets/notes_it_other_clashX.md.9f9026fd.js",revision:null},{url:"assets/notes_it_other_clashX.md.9f9026fd.lean.js",revision:null},{url:"assets/notes_it_other_git.md.b37e7a58.js",revision:null},{url:"assets/notes_it_other_git.md.b37e7a58.lean.js",revision:null},{url:"assets/notes_it_other_windows激活.md.bb9311a8.js",revision:null},{url:"assets/notes_it_other_windows激活.md.bb9311a8.lean.js",revision:null},{url:"assets/notes_it_other_环境配置.md.dd516c51.js",revision:null},{url:"assets/notes_it_other_环境配置.md.dd516c51.lean.js",revision:null},{url:"assets/notes_it_other_虚拟定位.md.ac51dbec.js",revision:null},{url:"assets/notes_it_other_虚拟定位.md.ac51dbec.lean.js",revision:null},{url:"assets/notes_it_web__firefox跨域.md.7757f17e.js",revision:null},{url:"assets/notes_it_web__firefox跨域.md.7757f17e.lean.js",revision:null},{url:"assets/notes_it_web__haida.md.c3f1b394.js",revision:null},{url:"assets/notes_it_web__haida.md.c3f1b394.lean.js",revision:null},{url:"assets/notes_it_web__hooks的内存泄露.md.eff0c8ce.js",revision:null},{url:"assets/notes_it_web__hooks的内存泄露.md.eff0c8ce.lean.js",revision:null},{url:"assets/notes_it_web__npm源.md.d70dd8cb.js",revision:null},{url:"assets/notes_it_web__npm源.md.d70dd8cb.lean.js",revision:null},{url:"assets/notes_it_web__动态加载.md.3ddec129.js",revision:null},{url:"assets/notes_it_web__动态加载.md.3ddec129.lean.js",revision:null},{url:"assets/notes_it_web__打包工具.md.555c3f79.js",revision:null},{url:"assets/notes_it_web__打包工具.md.555c3f79.lean.js",revision:null},{url:"assets/notes_it_web_babel-plugin.md.71871c2f.js",revision:null},{url:"assets/notes_it_web_babel-plugin.md.71871c2f.lean.js",revision:null},{url:"assets/notes_it_web_babelrc.md.f03dd3e3.js",revision:null},{url:"assets/notes_it_web_babelrc.md.f03dd3e3.lean.js",revision:null},{url:"assets/notes_it_web_bigNumber.md.4f69c3d6.js",revision:null},{url:"assets/notes_it_web_bigNumber.md.4f69c3d6.lean.js",revision:null},{url:"assets/notes_it_web_canvas交互设计.md.761f8fb4.js",revision:null},{url:"assets/notes_it_web_canvas交互设计.md.761f8fb4.lean.js",revision:null},{url:"assets/notes_it_web_charles.md.ad7e31f6.js",revision:null},{url:"assets/notes_it_web_charles.md.ad7e31f6.lean.js",revision:null},{url:"assets/notes_it_web_ChromePerformance.md.22b0b35a.js",revision:null},{url:"assets/notes_it_web_ChromePerformance.md.22b0b35a.lean.js",revision:null},{url:"assets/notes_it_web_class-extends.md.c7167702.js",revision:null},{url:"assets/notes_it_web_class-extends.md.c7167702.lean.js",revision:null},{url:"assets/notes_it_web_github-actions.md.bb041fe1.js",revision:null},{url:"assets/notes_it_web_github-actions.md.bb041fe1.lean.js",revision:null},{url:"assets/notes_it_web_github-page-error.md.82717aca.js",revision:null},{url:"assets/notes_it_web_github-page-error.md.82717aca.lean.js",revision:null},{url:"assets/notes_it_web_Javascript图像处理.md.37bdbb96.js",revision:null},{url:"assets/notes_it_web_Javascript图像处理.md.37bdbb96.lean.js",revision:null},{url:"assets/notes_it_web_js中的Base64编码转译.md.5ae13ec6.js",revision:null},{url:"assets/notes_it_web_js中的Base64编码转译.md.5ae13ec6.lean.js",revision:null},{url:"assets/notes_it_web_JS中的内存占用.md.0099250e.js",revision:null},{url:"assets/notes_it_web_JS中的内存占用.md.0099250e.lean.js",revision:null},{url:"assets/notes_it_web_object-create.md.f1218ff0.js",revision:null},{url:"assets/notes_it_web_object-create.md.f1218ff0.lean.js",revision:null},{url:"assets/notes_it_web_project-version-mark.md.676382c2.js",revision:null},{url:"assets/notes_it_web_project-version-mark.md.676382c2.lean.js",revision:null},{url:"assets/notes_it_web_read-zip-info.md.dec4dc9b.js",revision:null},{url:"assets/notes_it_web_read-zip-info.md.dec4dc9b.lean.js",revision:null},{url:"assets/notes_it_web_seize-npm-name.md.c9925f7a.js",revision:null},{url:"assets/notes_it_web_seize-npm-name.md.c9925f7a.lean.js",revision:null},{url:"assets/notes_it_web_vitepress-export-pdf.md.8991d53d.js",revision:null},{url:"assets/notes_it_web_vitepress-export-pdf.md.8991d53d.lean.js",revision:null},{url:"assets/notes_it_web_vitepress-plugin-music.md.5093a68c.js",revision:null},{url:"assets/notes_it_web_vitepress-plugin-music.md.5093a68c.lean.js",revision:null},{url:"assets/notes_it_web_Web存储.md.dc23755b.js",revision:null},{url:"assets/notes_it_web_Web存储.md.dc23755b.lean.js",revision:null},{url:"assets/notes_it_web_前端CRDT实时协作库 Yjs 工程实现.md.41a8a2b7.js",revision:null},{url:"assets/notes_it_web_前端CRDT实时协作库 Yjs 工程实现.md.41a8a2b7.lean.js",revision:null},{url:"assets/notes_it_web_协同操作设计.md.860bb85f.js",revision:null},{url:"assets/notes_it_web_协同操作设计.md.860bb85f.lean.js",revision:null},{url:"assets/notes_it_web_如何命名一个alias.md.39655f35.js",revision:null},{url:"assets/notes_it_web_如何命名一个alias.md.39655f35.lean.js",revision:null},{url:"assets/notes_it_web_开启gzip.md.26c6858f.js",revision:null},{url:"assets/notes_it_web_开启gzip.md.26c6858f.lean.js",revision:null},{url:"assets/notes_it_web_打包JavaScript库的现代化指南.md.2c78bb17.js",revision:null},{url:"assets/notes_it_web_打包JavaScript库的现代化指南.md.2c78bb17.lean.js",revision:null},{url:"assets/notes_it_web_浏览器中的内存泄漏.md.f5ef806b.js",revision:null},{url:"assets/notes_it_web_浏览器中的内存泄漏.md.f5ef806b.lean.js",revision:null},{url:"assets/notes_it_web_碰撞检测.md.954d582c.js",revision:null},{url:"assets/notes_it_web_碰撞检测.md.954d582c.lean.js",revision:null},{url:"assets/notes_it_web_解析AntV技术栈动画.md.0667830a.js",revision:null},{url:"assets/notes_it_web_解析AntV技术栈动画.md.0667830a.lean.js",revision:null},{url:"assets/notes_it_web_贝塞尔曲线.md.99e00311.js",revision:null},{url:"assets/notes_it_web_贝塞尔曲线.md.99e00311.lean.js",revision:null},{url:"assets/notes_it_web_超出显示浮层.md.193ff74d.js",revision:null},{url:"assets/notes_it_web_超出显示浮层.md.193ff74d.lean.js",revision:null},{url:"assets/objectcreate.6f2f80b6.png",revision:null},{url:"assets/origin.36d75ec9.png",revision:null},{url:"assets/other.a90cd2c8.png",revision:null},{url:"assets/pentaxsp.c3a436db.png",revision:null},{url:"assets/photographs_2020.md.ad25424a.js",revision:null},{url:"assets/photographs_2020.md.ad25424a.lean.js",revision:null},{url:"assets/photographs_2021.md.e7c109ee.js",revision:null},{url:"assets/photographs_2021.md.e7c109ee.lean.js",revision:null},{url:"assets/photographs_2022.md.2c990abe.js",revision:null},{url:"assets/photographs_2022.md.2c990abe.lean.js",revision:null},{url:"assets/photographs_earlier.md.886ea874.js",revision:null},{url:"assets/photographs_earlier.md.886ea874.lean.js",revision:null},{url:"assets/photographs_index.md.de4cb338.js",revision:null},{url:"assets/photographs_index.md.de4cb338.lean.js",revision:null},{url:"assets/photographs_li-ya-nan.md.3c50a5b9.js",revision:null},{url:"assets/photographs_li-ya-nan.md.3c50a5b9.lean.js",revision:null},{url:"assets/photographs_pentaxsp.md.0c0e718a.js",revision:null},{url:"assets/photographs_pentaxsp.md.0c0e718a.lean.js",revision:null},{url:"assets/photographs_ThomasJorion.md.8199f277.js",revision:null},{url:"assets/photographs_ThomasJorion.md.8199f277.lean.js",revision:null},{url:"assets/photographs_TokyoCompression.md.60ca30cc.js",revision:null},{url:"assets/photographs_TokyoCompression.md.60ca30cc.lean.js",revision:null},{url:"assets/photographs_zhangkechun.md.1740f4f8.js",revision:null},{url:"assets/photographs_zhangkechun.md.1740f4f8.lean.js",revision:null},{url:"assets/posts_index.md.10488f39.js",revision:null},{url:"assets/posts_index.md.10488f39.lean.js",revision:null},{url:"assets/posts_me_20221018.md.fe2015a2.js",revision:null},{url:"assets/posts_me_20221018.md.fe2015a2.lean.js",revision:null},{url:"assets/posts_share_movies.md.3fda807f.js",revision:null},{url:"assets/posts_share_movies.md.3fda807f.lean.js",revision:null},{url:"assets/project_index.md.7cc7b85c.js",revision:null},{url:"assets/project_index.md.7cc7b85c.lean.js",revision:null},{url:"assets/stickPicture.39394052.png",revision:null},{url:"assets/style.baeb5405.css",revision:null},{url:"assets/tween.8defe458.png",revision:null},{url:"assets/Ventura.d27a250f.png",revision:null},{url:"assets/wificonfig.2fccfb17.png",revision:null},{url:"assets/wry_context.f835c9b2.png",revision:null},{url:"assets/亮度分布-自适应直方图均衡.57c45080.png",revision:null},{url:"assets/关键帧补间动画.480548b4.png",revision:null},{url:"assets/原图.6fafe69f.png",revision:null},{url:"assets/原图1.4cdda7a0.png",revision:null},{url:"assets/多个补间动画.738258d1.png",revision:null},{url:"assets/曲线.681025fe.png",revision:null},{url:"assets/曲线final.c69c30b4.png",revision:null},{url:"assets/直方图.8d2ce9df.png",revision:null},{url:"assets/直方图均衡1.30a90706.png",revision:null},{url:"assets/累计分布.7819a4e3.png",revision:null},{url:"assets/累计分布图.f016205f.png",revision:null},{url:"assets/脊椎.97289e02.png",revision:null},{url:"assets/自适应直方图均衡.1fdf95d1.png",revision:null},{url:"assets/自适应直方图均衡1.2e02baeb.png",revision:null},{url:"assets/补间动画.50c8c86f.png",revision:null},{url:"icon/danao.svg",revision:"ba09e7dabb0af9687e166fc00ad41293"},{url:"icon/film.svg",revision:"c381f9c9714463070e795aef69e5f593"},{url:"icon/logo.svg",revision:"b3500ecb3ef37e9a4a29cfed7311a5d9"},{url:"icon/me.svg",revision:"ea7616daac124a0edd06131c03204c89"},{url:"icon/pintu-.svg",revision:"e16203a261b9eda646e3a5a6ef4901be"},{url:"icon/xin-nannan.svg",revision:"527b01b661c5ce4de9674f9c879c2212"},{url:"images/about-footer.svg",revision:"f82fca1076119ca03becae14445948f8"},{url:"images/about-me-header.svg",revision:"6f90e4ceaeba6265d287136ab92726fa"},{url:"images/about-repos-header.svg",revision:"2a15a863832adc536bf95cc3f0f6eb56"},{url:"index.html",revision:"ce772d7dc59a10857b7035359d9065ef"},{url:"message/index.html",revision:"f78898290e6586312c23b83db6818e74"},{url:"notes/art/book/写给无神论者.html",revision:"7eee22d3ef06ee9f402e3a83b366f8d6"},{url:"notes/art/graph/picture-perfect-posing.html",revision:"19e8f40426788b706e814e837953c79d"},{url:"notes/art/graph/今日摄影.html",revision:"0d05852ea4e8bbffbaa4b7ede346fe15"},{url:"notes/art/graph/他们为何而创作.html",revision:"a63c7ae755cdb1faf72febd4cf68decd"},{url:"notes/art/graph/影像叙事语言.html",revision:"b7cdfcef6b3ef10a67c737209b9fdd54"},{url:"notes/art/graph/摄影构图学.html",revision:"48608ea636f3d75ec75f7b15cb13a73e"},{url:"notes/art/graph/旁轴相机.html",revision:"e4233fef49a196cc934c9469ebc52d22"},{url:"notes/art/graph/胶片数码化.html",revision:"221d95657abd976140d8fabda72d5bbf"},{url:"notes/art/graph/论摄影.html",revision:"8ece25423c22810fe63ae2555c9bad41"},{url:"notes/art/graph/辐射镜头.html",revision:"ded9aa7e2458d9d4d81d907cfe718205"},{url:"notes/art/index.html",revision:"c39b2463ca2cb6b87cc746a1ede641e9"},{url:"notes/index.html",revision:"73605fe618806a08c1296d48afcfcec1"},{url:"notes/it/index.html",revision:"dc7797dc9ecb3c855f2cd52ab5d8ae32"},{url:"notes/it/other/app.html",revision:"ec3ce59a72cd90116970e117fa9110fd"},{url:"notes/it/other/clashX.html",revision:"9f4058f41950e46f1845de4a9570151c"},{url:"notes/it/other/git.html",revision:"2c127f0701c1bb963dc86f8229a768e9"},{url:"notes/it/other/windows激活.html",revision:"90fc977ede50edc61092a76f07294df5"},{url:"notes/it/other/环境配置.html",revision:"e4a03b1b4b4880166c681315740e2cfc"},{url:"notes/it/other/虚拟定位.html",revision:"8bebdeb72cfdd50d241e5184a22bae71"},{url:"notes/it/web/_firefox跨域.html",revision:"63e449e68d2b1b47d02bf882440d91bb"},{url:"notes/it/web/_haida.html",revision:"a32334b60178858ab3557432df2cb82e"},{url:"notes/it/web/_hooks的内存泄露.html",revision:"707115a06a43317e9855ce017169658d"},{url:"notes/it/web/_npm源.html",revision:"be644f02a35cc0cc86320adb7cdbcac6"},{url:"notes/it/web/_动态加载.html",revision:"f08554e1a1ee9e68df7a6c3d5e56f0da"},{url:"notes/it/web/_打包工具.html",revision:"48033ce50af9c6294487386e33993751"},{url:"notes/it/web/babel-plugin.html",revision:"001fb0ae630a98228ed479d9682f29d5"},{url:"notes/it/web/babelrc.html",revision:"ae792540e480af5995fc655c34d5f9fe"},{url:"notes/it/web/bigNumber.html",revision:"338c4312f04ff54d542903fbbd43ec75"},{url:"notes/it/web/canvas交互设计.html",revision:"200119bd478bf6e023ca907d54b4f77a"},{url:"notes/it/web/charles.html",revision:"a685be0746180e3ca48d4af85ba93f92"},{url:"notes/it/web/ChromePerformance.html",revision:"d90e32f774a54e68b5ccc361c86ee6a8"},{url:"notes/it/web/class-extends.html",revision:"13e8d5fc28fe60f8f08bfd86df15443c"},{url:"notes/it/web/github-actions.html",revision:"ace8eef80ae06752afd78dea77d52eb2"},{url:"notes/it/web/github-page-error.html",revision:"d233a013025089a27552ce5f430a0b14"},{url:"notes/it/web/Javascript图像处理.html",revision:"abd2f9d46b19aaf31d5038471f39fcc9"},{url:"notes/it/web/js中的Base64编码转译.html",revision:"5662748d668033dcc798d209fdc23d0e"},{url:"notes/it/web/JS中的内存占用.html",revision:"f329fbbdc0dbd1c3d11fa64e1c1b97c2"},{url:"notes/it/web/object-create.html",revision:"3e222a7069b4dd46109c8b5d5e43919e"},{url:"notes/it/web/project-version-mark.html",revision:"19979f9605e53e088b328e8963264333"},{url:"notes/it/web/read-zip-info.html",revision:"d6fe6e64bdd724f67f33a9eb9a5871df"},{url:"notes/it/web/seize-npm-name.html",revision:"072e966ab2b95318c766cd99f273f54d"},{url:"notes/it/web/vitepress-export-pdf.html",revision:"0b1340c6cf2006a97a057e48700e46dc"},{url:"notes/it/web/vitepress-plugin-music.html",revision:"a657d876beb2bf1b7dbf6276785b6014"},{url:"notes/it/web/Web存储.html",revision:"ebbb9ccde32b39a3d05eae614f4f0525"},{url:"notes/it/web/前端CRDT实时协作库 Yjs 工程实现.html",revision:"fc8ba4c3263d06a135e46678a8083fb4"},{url:"notes/it/web/协同操作设计.html",revision:"8772387b60be32f6a60b6ee3cc11d104"},{url:"notes/it/web/如何命名一个alias.html",revision:"eb5cab893d6f8352003df4bc30afb7d5"},{url:"notes/it/web/开启gzip.html",revision:"8bb6583568eb44a7de4e410d397975ef"},{url:"notes/it/web/打包JavaScript库的现代化指南.html",revision:"ec3ffdbc9e95e8dc3b6d6e802fa95c1d"},{url:"notes/it/web/浏览器中的内存泄漏.html",revision:"36f1af89835d2fa0a960fc8fe05cc37d"},{url:"notes/it/web/碰撞检测.html",revision:"966c1769f1d9ac68e076a56f0647ec07"},{url:"notes/it/web/解析AntV技术栈动画.html",revision:"74294698b7744ae5c4bba7233d750a5f"},{url:"notes/it/web/贝塞尔曲线.html",revision:"635de4b4a1a875a86795c9e42e263567"},{url:"notes/it/web/超出显示浮层.html",revision:"d283b75b98f8925eced11de1a53bbf40"},{url:"photographs/2020.html",revision:"37472431dcff9e6e1360b84a335fd655"},{url:"photographs/2021.html",revision:"111f7ac6f35d3f5ecb4c35c84916fc32"},{url:"photographs/2022.html",revision:"888e2e15e9d4291bf21da4e8e468ef64"},{url:"photographs/earlier.html",revision:"d08b0f0d2363673739ca12101bdf590d"},{url:"photographs/index.html",revision:"54dbfe8c5ac51a88a4d66464193ddcfd"},{url:"photographs/li-ya-nan.html",revision:"c70a20d94f7fd6738be15ca2b1d01079"},{url:"photographs/pentaxsp.html",revision:"ba3c6d7c01208ca6f1afd5c316dca494"},{url:"photographs/ThomasJorion.html",revision:"be2ba88850bb5922b482cc68fc355750"},{url:"photographs/TokyoCompression.html",revision:"e8a9b5e208f88dffea187d1fda60a083"},{url:"photographs/zhangkechun.html",revision:"6b207dda8f9bcd57795afe8a4706b478"},{url:"posts/index.html",revision:"8e158d85177cf969f90406b2ae714575"},{url:"posts/me/20221018.html",revision:"649fd6f7b548942f5b454eb09cfe546a"},{url:"posts/share/movies.html",revision:"9a50c05a9dd3d40bb185483355c4a80c"},{url:"project/index.html",revision:"ef484e7f00d621328a73aa234586ec34"},{url:"manifest.webmanifest",revision:"18f2509abfc55d0f4dda505b79d48059"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));