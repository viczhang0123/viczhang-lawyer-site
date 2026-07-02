/* ============================================================
   公众号文章清单 —— 想加文章只需要改这个文件！

   添加方法：复制下面四行的一组，粘贴到 ARTICLES = [ 的下一行
   （新文章放最上面），改成新文章的信息，保存后上传这个文件到
   GitHub 仓库覆盖即可。首页和文章页会自动显示。

   { title: "文章标题",
     desc:  "一句话简介（会显示在标题下方）",
     date:  "2026-07-10",
     url:   "https://mp.weixin.qq.com/s/xxxxxx" },

   注意：每组用 { } 包住，末尾有英文逗号；引号必须是英文引号。
   ============================================================ */
const ARTICLES = [

  { title: "立案时程序走不完，放人时程序快不起来——最近办案的两件事",
    desc:  "办案手记 · 程序正义的两副面孔",
    date:  "2026-07-02",
    url:   "https://mp.weixin.qq.com/s/H3cDIDJFfHVAKu7eXjAkog" },

  { title: "公司是你的，公司的钱却不是你的。聊一聊职务侵占那些事儿",
    desc:  "企业家刑事风险 · 职务侵占罪解析",
    date:  "2026-07-01",
    url:   "https://mp.weixin.qq.com/s/CNHx8g3FPg1P1eJfmR0Jrg" },

  { title: "老板被刑事拘留后，怎么争取取保候审？",
    desc:  "刑事实务 · 黄金37天应对指南",
    date:  "2026-06-29",
    url:   "http://mp.weixin.qq.com/s?__biz=MzkzNjkwMzIwNg==&mid=2247483764&idx=1&sn=5a2a7223988a0754b2916ac80ef89aa0&chksm=c34f0a0c6b9d6fc937a2a2b09ce794bdb9e40e5232e89cd784f177636fb25150122944f98cd6#rd" },

  { title: "刑事谅解谈判 操作自查清单",
    desc:  "刑事实务 · 谅解谈判要点与操作清单",
    date:  "2026-06-25",
    url:   "https://mp.weixin.qq.com/s/mubYcogfUKZj7Xd_XKchAQ" }

];

/* 渲染函数：limit 为显示条数，0 表示全部显示 */
function renderArticles(containerId, limit) {
  const box = document.getElementById(containerId);
  if (!box) return;
  const list = limit > 0 ? ARTICLES.slice(0, limit) : ARTICLES;
  list.forEach(a => {
    const item = document.createElement("a");
    item.className = "article-item";
    item.href = a.url;
    item.target = "_blank";
    item.rel = "noopener";
    const left = document.createElement("div");
    const h = document.createElement("h3");
    h.textContent = a.title;
    const p = document.createElement("p");
    p.textContent = a.desc;
    left.appendChild(h); left.appendChild(p);
    const d = document.createElement("span");
    d.className = "article-date";
    d.textContent = a.date;
    item.appendChild(left); item.appendChild(d);
    box.appendChild(item);
  });
}
