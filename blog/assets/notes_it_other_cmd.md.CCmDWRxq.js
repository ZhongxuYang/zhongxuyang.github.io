import{ac as s,h as a,f as i,aC as n}from"./chunks/framework.DoD2GAWc.js";const m=JSON.parse('{"title":"命令行","description":"","frontmatter":{},"headers":[],"relativePath":"notes/it/other/cmd.md","filePath":"notes/it/other/cmd.md","lastUpdated":1715213753000}'),e={name:"notes/it/other/cmd.md"},l=n(`<h1 id="命令行" tabindex="-1">命令行 <a class="header-anchor" href="#命令行" aria-label="Permalink to &quot;命令行&quot;">​</a></h1><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h2><h3 id="全局包" tabindex="-1">全局包 <a class="header-anchor" href="#全局包" aria-label="Permalink to &quot;全局包&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看全局安装的包 ｜ --depth 0 参数告诉npm仅显示直接安装的包，而不是它们的依赖项。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载全局安装的包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 升级全局安装的npm包 ｜ 去掉&lt;package-name&gt;即为升级全部</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h3><p><code>npm version</code> 是一个用于在你的包（package）中更新版本号的 <code>npm</code> 命令。它允许你自动修改 <code>package.json</code> 文件中的版本号，并可以选择同时创建 <code>Git</code> 标签。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">newversio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下面是常用的 <code>&lt;newversion&gt;</code> 参数示例：</p><ul><li>patch：自动将当前版本号的最后一位数字加一，例如从 <code>1.0.0</code> 更新到 <code>1.0.1</code>。</li><li>minor：自动将当前版本号的中间位数字加一，同时将最后一位数字重置为零，例如从 <code>1.0.1</code> 更新到 <code>1.1.0</code>。</li><li>major：自动将当前版本号的第一位数字加一，同时将中间和最后一位数字重置为零，例如从 <code>1.1.0</code> 更新到 <code>2.0.0</code>。</li></ul><p>除了 <code>&lt;newversion&gt; </code>参数外，npm version 命令还支持其他选项和标志，例如 -m 用于指定 Git 提交信息的模板、--allow-same-version 允许生成与当前版本相同的标签等。</p><p>通过使用 npm version 命令，你可以方便地在你的包中更新版本号，并与 Git 标签保持同步，从而更好地管理版本控制和发布流程。</p><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看所有可升级依赖项</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> outdated</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 升级所有依赖项至最新版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 升级所有依赖项至最新版本 - 交互式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade-interactive</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="c" tabindex="-1">C <a class="header-anchor" href="#c" aria-label="Permalink to &quot;C&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行指定C文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> work</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./work</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,15),p=[l];function t(h,r,d,k,c,o){return i(),a("div",null,p)}const b=s(e,[["render",t]]);export{m as __pageData,b as default};