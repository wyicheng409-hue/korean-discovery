# KOREAN DISCOVERY｜韓文探索誌

以韓文知識與韓國文化為主題的靜態雜誌網站。使用 HTML、CSS、原生 JavaScript 製作，可直接部署至 GitHub Pages。

## 專案結構

```text
korean-discovery/
├── AGENTS.md
├── index.html
├── articles.html
├── article.html
├── css/
│   └── style.css
├── js/
│   ├── articles.js
│   └── main.js
├── images/
│   └── article-images/
└── README.md
```

## 頁面

- `index.html`：首頁，包含主視覺、精選文章、分類入口、最新文章與網站介紹。
- `articles.html`：文章列表，支援分類篩選、關鍵字搜尋。
- `article.html?id=文章ID`：文章內頁，依網址參數載入文章資料。

## 新增文章

1. 開啟 `js/articles.js`。
2. 在 `window.KD_ARTICLES` 陣列中新增一個文章物件。
3. `id` 必須唯一；`category` 必須使用以下其中一個值：
   - `Hangul`
   - `Daily Korean`
   - `Korean Culture`
   - `Internet Slang`
   - `Language Facts`
4. 填寫 `title`、`subtitle`、`categoryLabel`、`date`、`readTime`、`coverClass`、`coverText`、`excerpt`、`intro`。
5. 每篇文章至少提供兩個 `examples`，並提供 `words`、`takeaways`、`sections`。
6. `related` 填入其他文章的 `id`，作為延伸閱讀。

文章內頁會自動套用共用的版型，不需要為新文章建立新的 HTML 或 CSS。

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可。網站沒有使用 fetch、伺服器端程式或建置工具，因此也能直接部署至 GitHub Pages。

## 部署至 GitHub Pages

1. 將整個資料夾內容推送到 GitHub repository 的根目錄。
2. 進入 repository 的 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**。
4. Branch 選擇 `main`，資料夾選擇 `/ (root)`，按下 Save。
5. 等待 GitHub Pages 完成部署，再使用 Pages 顯示的網址瀏覽。

所有 CSS、JavaScript 與站內頁面連結均採相對路徑，支援部署在 GitHub Pages 的 repository 子路徑。

## 技術備註

- 不使用前端框架或後端服務。
- 文章資料集中管理於 `js/articles.js`。
- 共用元件樣式與響應式規則集中管理於 `css/style.css`。
- 共用導覽、篩選、搜尋與文章渲染集中管理於 `js/main.js`。
- 字體透過 Google Fonts 載入；若無網路，會回退至系統字體。
