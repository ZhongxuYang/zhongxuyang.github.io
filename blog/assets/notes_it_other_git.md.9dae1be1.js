import{_ as s,c as n,o as a,V as e}from"./chunks/framework.698e940e.js";const u=JSON.parse('{"title":"Git问题处理","description":"","frontmatter":{},"headers":[],"relativePath":"notes/it/other/git.md","filePath":"notes/it/other/git.md","lastUpdated":1702022937000}'),l={name:"notes/it/other/git.md"},p=e(`<h1 id="git问题处理" tabindex="-1">Git问题处理 <a class="header-anchor" href="#git问题处理" aria-label="Permalink to &quot;Git问题处理&quot;">​</a></h1><h2 id="connection-closed-by-remote-host" tabindex="-1">Connection closed by remote host <a class="header-anchor" href="#connection-closed-by-remote-host" aria-label="Permalink to &quot;Connection closed by remote host&quot;">​</a></h2><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h3><p>在已经正常配置好的项目下，进行 <code>git push</code> 意外报错 <code>kex_exchange_identification: Connection closed by remote host</code>。随即做如下检查：</p><ul><li>Github 平台与本地的 ssh key 均配置正常</li><li>本地 <code>~/.ssh/config</code> 中没有开启 proxy 代理配置</li><li>执行命令 <code>ssh -T git@github.com</code> 返回如下结果</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-T</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">kex_exchange_identification:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Connection</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">closed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="原因" tabindex="-1">原因 <a class="header-anchor" href="#原因" aria-label="Permalink to &quot;原因&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前项目远端位置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 返回下面结果</span></span>
<span class="line"><span style="color:#FFCB6B;">origin</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">ssh://git@github.com:ZhongxuYang/vitepress-blog.git</span><span style="color:#A6ACCD;"> (fetch)</span></span>
<span class="line"><span style="color:#FFCB6B;">origin</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">ssh://git@github.com:ZhongxuYang/vitepress-blog.git</span><span style="color:#A6ACCD;"> (push)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>通过比对正常使用的项目可以得知，正确地址应为：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">origin</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">git@github.com:ZhongxuYang/vitepress-blog.git</span><span style="color:#A6ACCD;"> (fetch)</span></span>
<span class="line"><span style="color:#FFCB6B;">origin</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">git@github.com:ZhongxuYang/vitepress-blog.git</span><span style="color:#A6ACCD;"> (push)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>找到问题就很好解决了，重新配置一下 <code>remote</code> 即可：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:ZhongxuYang/vitepress-blog.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>由于重新设置了remote，需要把本地分支与远程分支重新做关联，避免每次push都需要指定远程分支：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--set-upstream-to=origin/main</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时就可以正常的推送了。</p><p>发生此问题的原因应该是此前通过 <code>SourceTree</code> 批量把 <code>http</code> 地址转为 <code>ssh</code> 地址导致的。操作需谨慎啊！</p><p>很多博客提到重新生成一个 <code>ssh-key</code> 配置到 <code>github</code>，这明显不是最优解，一是没有找到最终的问题，二是 <code>ssh-key</code> 在多个组织中使用时，随意更换带来的多次配置也是很麻烦。</p><h3 id="可能造成此问题的其他原因和解决办法" tabindex="-1">可能造成此问题的其他原因和解决办法 <a class="header-anchor" href="#可能造成此问题的其他原因和解决办法" aria-label="Permalink to &quot;可能造成此问题的其他原因和解决办法&quot;">​</a></h3><h4 id="vpn封禁了-github-端口-22-的连接" tabindex="-1">vpn封禁了 Github 端口 22 的连接 <a class="header-anchor" href="#vpn封禁了-github-端口-22-的连接" aria-label="Permalink to &quot;vpn封禁了 Github 端口 22 的连接&quot;">​</a></h4><p>将 Github 的连接端口从 22 改为 443 即可。修改 ~/.ssh/config ，添加如下段落即可：</p><div class="language-config line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">config</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Host github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    HostName ssh.github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    User git</span></span>
<span class="line"><span style="color:#A6ACCD;">    Port 443</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>验证：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ssh -T git@github.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Hi xxx! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看现有的分支引用</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show-ref</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除现有的分支引用</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update-ref</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">refs/remotes/origin/test/build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重新运行关联本地分支和远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--set-upstream-to=origin/test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,25),o=[p];function t(i,r,c,d,C,h){return a(),n("div",null,o)}const y=s(l,[["render",t]]);export{u as __pageData,y as default};