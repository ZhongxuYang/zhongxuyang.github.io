import{_ as e,c as a,o,V as b}from"./chunks/framework.c277a2d0.js";const _=JSON.parse('{"title":".babelrc与babel.config.js","description":"","frontmatter":{},"headers":[],"relativePath":"notes/it/web/Develop/babelrc.md","filePath":"notes/it/web/Develop/babelrc.md","lastUpdated":1697592608000}'),l={name:"notes/it/web/Develop/babelrc.md"},c=b('<h1 id="babelrc与babel-config-js" tabindex="-1">.babelrc与babel.config.js <a class="header-anchor" href="#babelrc与babel-config-js" aria-label="Permalink to &quot;.babelrc与babel.config.js&quot;">​</a></h1><h2 id="问题背景" tabindex="-1">问题背景 <a class="header-anchor" href="#问题背景" aria-label="Permalink to &quot;问题背景&quot;">​</a></h2><p>在开发组件库 <code>EJ/UI</code> 时，使用的技术栈：Typescript、Vue3、Storybook。</p><p>因为在开发某些组件时（Table、TableColumn）需要用到 <code>jsx</code> 语法。所以需要安装Vue官方开发的babel plugin：<code>@vue/babel-plugin-jsx</code>。</p><p>于是在项目的 <code>/.storybook</code> 的路径下创建了 <code>.babelrc</code> 文件用于配置添加的babel plugin，这时候出现了第一个奇怪的问题：</p><ol><li>在项目编译时??和?.等可选符编译报错，因此为了解决该问题，我不得不手动配置上 <code>@babel/plugin-proposal-optional-chaining</code> 和 <code>@babel/plugin-proposal-nullish-coalescing-operator</code> 插件。然而在未配置此文件之前是不报此错误的，因为typescript已经为我们做好了可选符的编译配置，这时候我们可以合理怀疑，是配置的.babelrc文件冲掉了原有的配置。</li><li>遇到的第二个问题是，在编译在/src/utils路径下的Typescript写的ES6代码时，没有把ES6代码转义成ES5，因此造成webpack报错。这时候我们更加可以验证，由于对.babelrc文件的配置冲刷掉原有的babel配置了。</li></ol><h2 id="babel-config-js与-babelrc区别" tabindex="-1">babel.config.js与.babelrc区别 <a class="header-anchor" href="#babel-config-js与-babelrc区别" aria-label="Permalink to &quot;babel.config.js与.babelrc区别&quot;">​</a></h2><p>通过<a href="https://babeljs.io/docs/en/config-files#root-babelconfigjson-file" target="_blank" rel="noreferrer">babel官方文档</a>我们可以看到，对于babel.config.js与.babelrc区别的描写，我们可以理解为：</p><ol><li>babel.config.js进行的配置是对于该项目下所有文件生效（报错node_modules）。</li><li>.babelrc进行配置仅对.babelrc所在目录下的文件有效，且会以.babelrc的配置为主，忽略掉babel.config.js。</li></ol><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>知道了原因，我们就很好解决了。</p><p>正是由于 <code>/.storybook/.babelrc</code> 冲掉了项目的默认babel配置，才造成的无法正确编译。我们只需要把对babel的配置文件由 <code>/.storybook/.babelrc</code> 换到 <code>/babel.config.js</code> 即可。</p>',12),r=[c];function i(t,s,n,d,p,f){return o(),a("div",null,r)}const u=e(l,[["render",i]]);export{_ as __pageData,u as default};