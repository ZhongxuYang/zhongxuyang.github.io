import{_ as s,g as n,f as a,y as l}from"./app.5e29508a.js";const d=JSON.parse('{"title":"Github Actions \u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00","link":"#\u524D\u8A00","children":[]},{"level":2,"title":"Github Actions\u81EA\u52A8\u5316\u90E8\u7F72\u914D\u7F6E","slug":"github-actions\u81EA\u52A8\u5316\u90E8\u7F72\u914D\u7F6E","link":"#github-actions\u81EA\u52A8\u5316\u90E8\u7F72\u914D\u7F6E","children":[]},{"level":2,"title":"\u672C\u5730\u90E8\u7F72","slug":"\u672C\u5730\u90E8\u7F72","link":"#\u672C\u5730\u90E8\u7F72","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"notes/it/github-actions.md","lastUpdated":1665365810000}'),e={name:"notes/it/github-actions.md"},p=l(`<h1 id="github-actions-\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762" tabindex="-1">Github Actions \u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762 <a class="header-anchor" href="#github-actions-\u81EA\u52A8\u5316\u90E8\u7F72\u9759\u6001\u9875\u9762" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u4E0B\u6587\u4E2D\u63D0\u5230\u7684\u9879\u76EE\u542B\u4E49\u5982\u4E0B\uFF1A</p><ol><li><code>zhangsan</code> / <code>webapp</code> / dev - \u5F20\u4E09\u7684Git\u8D26\u6237 / \u6E90\u4EE3\u7801\u9879\u76EE\u540D\u79F0 / \u5206\u652F</li><li><code>lisi</code> / <code>blog.github.io</code> / main - \u674E\u56DB\u7684Git\u8D26\u6237 / \u9759\u6001\u9875\u9762\u9879\u76EE\u540D\u79F0\uFF08\u5373webapp\u7684build\u4EA7\u7269\uFF09 / \u5206\u652F</li></ol><h2 id="github-actions\u81EA\u52A8\u5316\u90E8\u7F72\u914D\u7F6E" tabindex="-1">Github Actions\u81EA\u52A8\u5316\u90E8\u7F72\u914D\u7F6E <a class="header-anchor" href="#github-actions\u81EA\u52A8\u5316\u90E8\u7F72\u914D\u7F6E" aria-hidden="true">#</a></h2><ol><li>\u9996\u5148\u4F7F\u7528 <code>blog.github.io</code> \u521B\u5EFA\u4EBA\u8D26\u6237<a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">\u521B\u5EFA Access Token</a>\uFF0C\u5E76\u8BB0\u5F55\u6700\u540E\u751F\u6210\u7684\u503C\u3002</li><li>\u5728\u4F60 <code>webapp</code> \u4ED3\u5E93\u4E0B <a href="https://docs.github.com/en/actions/security-guides/encrypted-secrets" target="_blank" rel="noreferrer">\u521B\u5EFA\u4E00\u4E2Asecrets</a>\uFF0C\u586B\u5165\u521A\u521B\u5EFA\u7684 Access Token\u3002\uFF08\u6CE8\u610F\uFF1A\u521B\u5EFA\u7684 <code>secrets</code> \u540D\u79F0\u9700\u8981\u8BB0\u4F4F\uFF0C\u5728\u4E0B\u9762\u7684 <code>yml</code> \u6587\u4EF6\u4E2D\u4F7F\u7528\uFF09</li><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>.github/workflows</code> \u76EE\u5F55\uFF08\u6CA1\u6709\u7684\u8BDD\uFF0C\u8BF7\u624B\u52A8\u521B\u5EFA\u4E00\u4E2A\uFF09\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>.yml</code> \u6216\u8005 <code>.yaml</code> \u6587\u4EF6\uFF0C\u5982: <code>vitepress-deploy.yml</code></li></ol><div class="language-yaml line-numbers-mode"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#676E95;"># vitepress-deploy.yml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># name \u53EF\u4EE5\u81EA\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy GitHub Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u89E6\u53D1\u6761\u4EF6\uFF1A\u5728 push \u5230 dev \u5206\u652F\u540E\u89E6\u53D1</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build-and-deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;"># \u670D\u52A1\u5668\u73AF\u5883\uFF1A\u6700\u65B0\u7248 Ubuntu</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># \u62C9\u53D6\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># github\u5B98\u65B9\u63D0\u4F9B\u7684\u5206\u652F\u5207\u6362github action</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">persist-credentials</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn &amp;&amp; yarn build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># \u90E8\u7F72\u5230 GitHub Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JamesIves/github-pages-deploy-action@releases/v3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u6B64GitHub Action\u5C06\u81EA\u52A8\u5C06\u60A8\u7684\u9879\u76EE\u90E8\u7F72\u5230GitHub Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">REPOSITORY_NAME</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lisi/blog.github.io</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">BRANCH</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">FOLDER</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># vitepress \u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\u5B58\u653E\u7684\u5730\u65B9</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">ACCESS_TOKEN</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.ACCESS_TOKEN }}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u751F\u6210\u7684 secret, ACCESS_TOKEN\u5C31\u662F\u5728\u914D\u7F6Esecrets\u65F6\u586B\u5199\u7684\u540D\u5B57</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u81F3\u6B64\uFF0CGithub Action\u7684\u9759\u6001\u9875\u9762\u90E8\u7F72\u5C31\u7ED3\u675F\u5566\uFF01\u5728\u63A8\u9001 <code>webapp / dev</code> \u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 <code>Action</code> \u4E2D\u770B\u5230\u811A\u672C\u5DF2\u7ECF\u6109\u5730\u8DD1\u8D77\u6765\u4E86\u3002</p><h2 id="\u672C\u5730\u90E8\u7F72" tabindex="-1">\u672C\u5730\u90E8\u7F72 <a class="header-anchor" href="#\u672C\u5730\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u672C\u5730\u90E8\u7F72\u662F\u4E00\u79CD\u975E\u81EA\u52A8\u5316\u7684\uFF0C\u57FA\u4E8E <code>Shell</code> \u811A\u672C\u7684\u90E8\u7F72\u65B9\u5F0F\u3002</p><p>\u76F8\u5BF9\u4E8E <code>GitHub Action</code> \u6765\u8BF4\uFF0C\u5B83\u914D\u7F6E\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E00\u4E2A <code>Shell</code> \u6587\u4EF6\uFF0C\u540C\u65F6\u7F3A\u70B9\u4E5F\u662F\u6BCF\u6B21\u90E8\u7F72\u524D\u9700\u8981\u624B\u52A8\u6267\u884C\u8FD9\u4E2A <code>Shell</code> \u811A\u672C\u3002</p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u662F\u53D1\u5E03\u5230\u81EA\u5B9A\u4E49\u57DF\u540D</span></span>
<span class="line"><span style="color:#676E95;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -f git@github.com:lisi/blog.github.io.git main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#676E95;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> -</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5F53\u6539\u5B8C\u4EE3\u7801\u540E\uFF0C\u5728git bash\u4E2D\u6267\u884C ./deploy.sh\u5373\u53EF\u3002</p><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/marketplace/actions/private-actions-checkout" target="_blank" rel="noreferrer">actions/checkout@v2</a></li><li><a href="https://github.com/JamesIves/github-pages-deploy-action/tree/3.7.1" target="_blank" rel="noreferrer">JamesIves/github-pages-deploy-action/v3</a></li><li><a href="https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages" target="_blank" rel="noreferrer">Vuepress - \u90E8\u7F72</a></li><li><a href="https://cloud.tencent.com/developer/article/1777585" target="_blank" rel="noreferrer">VuePress\u6559\u7A0B\u4E4B\u90E8\u7F72\u5230Github Action</a></li></ul>`,15),o=[p];function c(r,t,i,b,y,u){return a(),n("div",null,o)}const D=s(e,[["render",c]]);export{d as __pageData,D as default};