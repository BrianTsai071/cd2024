var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/BrianTsai071/cd2024 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程w5","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 協同產品設計實習第五週詳細大綱 一、教學內容 先前影片整理 搜尋已發布的教學影片 製作字幕並上傳嵌入網站 整理逐字稿並上傳 .txt 連結 撰寫教學影片的摘要 相關教學影片列表： cd2024 2a 1 blog setup 1 cd2024 2a 2 odoo plm簡介 2 cd2024 2a w2 3 如何建立各組的 Team midag1 並利用 Codespaces 維護內容 3 cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲 4 cd2024 2a w2 5 如何利用近端可攜環境與外部 IPv4 開啟動態網站 5 cd2024 2a w3 如何將學員倉儲設為分組倉儲的子模組 6 cd2024 2a w3 利用分組協同建立 LaTeX 報告 7 分組網誌的統整 修改 pelicanconf.py 文件 利用 Pelican 設定 PATH 與 OUTPUT_PATH 變數 動態複製 .md 檔案到分組倉儲中的 combined_directory 避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案 網誌轉檔指令： pelican -s local_publishconf.py 組員命 名規則： - 每個網誌 .md 檔案名稱需加上前綴字串，如 \"學號_\" 加上唯一的網誌 Slug 字串名稱 - Category 使用該組員的學號作為標示 NX 零組件繪圖 使用 NX1872 協同繪製零組件 從電腦輔助設計室取得 NX 套件目錄檔案 使用 start_USB_nx1872.bat 啟動 NX 不同版本 NX 的協同設計操作 二、影片整理具體步驟 添加字幕 使用軟體（如 Aegisub）為教學影片添加字幕 上傳帶有字幕的影片到可以嵌入各分組網站的平台（如 YouTube） 整理逐字稿 根據字幕內容整理出逐字稿 以 .txt 文件形式上傳到影片下方，並提供下載連結 撰寫摘要 為每個教學影片撰寫教學重點摘要 將摘要內容放置在影片嵌入部分的下方 三、分組網誌統整步驟 修改 pelicanconf.py 設定 PATH 與 OUTPUT_PATH 變數 動態複製子模組中的 .md 文件到分組倉儲中的 combined_directory 網誌轉檔 使用 pelican -s local_publishconf.py 進行網誌轉檔 命名規則 組員的網誌 .md 文件需加上前綴字串（如 \"學號_\"） 使用學號作為 Category 標示 四、NX 零組件繪圖 安裝與啟動 將 NX1872 目錄存入隨身碟 使用 start_USB_nx1872.bat 啟動 NX 協同設計 設置 temp 目錄用來儲存 NX 的 Syslog 系統狀態檔案 配置批次檔案啟動 NX 五、ODOO PLM 論文中英並列任務 任務說明 各組員在個人 cd2024 倉儲中以 LaTeX 格式翻譯並列中英文資料 最後在分組網站的 Release 或 downloads 區製作 2a-midagx_report.pdf 資源 下載 miktex-portable.7z 和 latex_images_github.7z 文章內容 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf 英文單字查詢 使用 2021_odoo_reading.html 進行查詢 六、倉儲權限管理 Replit SSH 設定 在 Replit 中設置 SSH 以管理分組倉儲的權限 七、Sourcetree 使用 功能介紹 利用 Sourcetree 管理倉儲提交內容 查看歷次提交歷史 回復到先前版本 實施細節與步驟 一、先前影片整理 字幕添加與上傳 使用字幕軟件（如 Aegisub）添加字幕 上傳到 YouTube 或其他可嵌入的平台 逐字稿整理 從字幕文件中提取逐字稿 生成 .txt 文件並上傳 摘要撰寫 撰寫每個教學影片的摘要 將摘要放置在影片嵌入下方 二、分組網誌統整 修改 pelicanconf.py 設定 PATH 與 OUTPUT_PATH 變數 動態複製子模組 .md 文件到 combined_directory 轉檔操作 執行 pelican -s local_publishconf.py 命名與分類 網誌文件前綴為 \"學號_\" Category 使用學號標示 三、NX 繪圖 啟動 NX 使用 start_USB_nx1872.bat 啟動 USB 中的 NX1872 設置 temp 目錄 在 NX1872 目錄中新增 temp 目錄 四、ODOO PLM 論文翻譯 分工翻譯 各組員在個人倉儲中完成分工翻譯 LaTeX 編譯 使用 miktex-portable 編譯 LaTeX 報告 生成 PDF 將最終報告生成 2a-midagx_report.pdf 五、Replit SSH 設定 SSH 設置 在 Replit 中配置 SSH 管理分組倉儲 六、Sourcetree 使用 提交與回復 查看歷史提交 回復到任一版本","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"2024 Spring 課程w4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第四週協同產品設計實習詳細大綱 一、概述 目標 ：明確界定各分組的任務需求與分工時序，使用 SourceTree 和 Git Branch 優化協同設計流程。 工具 ：SourceTree、Git Branch、GitHub、Replit、Codespaces、Gitpod、localhost。 二、工具與方法介紹 SourceTree 用途：視覺化管理 Git 倉儲，清晰查看改版歷程。 操作：如何安裝、連接到遠端倉儲，基本操作。 Git Branch 用途：減少合併衝突，管理階段性改版內容。 操作：創建、切換、合併分支的具體步驟。 三、任務需求與分工時序 界定需求 每個分組需明確界定任務需求，包括教學影片字幕、逐字稿、摘要說明等。 分工時序 各分組成員的具體分工及工作進度安排。 四、教學影片整理與自評 任務 為教學影片添加字幕。 整理出逐字稿並放置在影片下方，以 .txt 連結方式安排。 編寫教學影片的摘要。 自評 分組內部進行自評，確保任務完成質量。 五、GitHub 個人與分組倉儲維護 倉儲結構 個人倉儲： cd2024 分組倉儲： mdecd2024 ，命名規則 2a-midag<組別> 。 子模組設置 將個人倉儲設為分組倉儲的子模組，便於各組員自行管理和維護。 六、資料管理 類型 ： 文字資料（含 LaTeX 報告章節） 零組件檔案、工程圖、組立圖（含 BOM 與爆炸圖） 教學影片、操作流程錄製影片或 Wink 資料。 七、倉儲維護方式介紹 Replit 歷史及用途介紹。 免費帳號限制及使用方法。 動態與靜態網站維護的具體步驟及注意事項。 Codespaces 使用方法及限制介紹。 動態與靜態網站維護的具體操作步驟。 Gitpod 使用方法及免費授權時間限制。 動態與靜態網站維護的具體操作步驟。 localhost 使用可攜程式系統維護倉儲。 動態與靜態網站維護的具體操作步驟。 八、NX 繪圖協同設計 軟體版本 各版本 NX 的安裝與啟動方法。 USB 隨身碟啟動批次檔案配置。 協同設計 不同版本 NX 的協同設計方法及注意事項。 九、討論與反思 留言系統 使用留言系統進行討論，交流實習過程中的問題和經驗。 反思 根據反思一和反思二，理解協同設計的重要性和團隊合作的必要性。 十、參考資源 學長推甄研究所資訊 使用 Team code: n9k585c 進入查看。 十一、實習總結 總結本週實習成果 ，進行經驗交流和總結。 詳細內容與操作說明 一、SourceTree 使用教程 安裝與設置 如何下載並安裝 SourceTree。 如何連接到 GitHub 倉儲。 基本操作 如何查看改版歷程。 如何進行分支管理。 二、Git Branch 操作指導 創建分支 如何在本地創建新分支。 切換分支 如何切換到不同的分支。 合併分支 如何合併分支並解決衝突。 三、教學影片整理與自評步驟 添加字幕 使用軟件添加字幕的具體步驟。 整理逐字稿 如何從字幕中整理出逐字稿。 編寫摘要 如何編寫影片教學重點摘要。 四、GitHub 倉儲維護具體步驟 設置子模組 如何將個人倉儲設為分組倉儲的子模組。 分組倉儲管理 如何管理和維護分組倉儲。 五、Replit 詳細使用說明 動態網站 如何在 Replit 上運行動態網站。 靜態網站 如何在 Replit 上運行靜態網站。 六、Codespaces 詳細使用說明 動態網站 如何在 Codespaces 上運行動態網站。 靜態網站 如何在 Codespaces 上運行靜態網站。 七、Gitpod 詳細使用說明 動態網站 如何在 Gitpod 上運行動態網站。 靜態網站 如何在 Gitpod 上運行靜態網站。 八、localhost 使用與配置 可攜程式系統 如何使用可攜程式系統進行倉儲維護。 動態與靜態網站 在 localhost 上運行動態與靜態網站的步驟。 九、NX 繪圖協同設計 安裝與配置 如何安裝不同版本的 NX。 如何配置批次檔案啟動 NX。 協同設計步驟 不同版本 NX 的協同設計操作步驟。 十、討論與反思 討論 利用留言系統進行問題交流。 反思 分析協同設計中的問題與經驗。 十一、參考資源 推甄研究所資訊查詢方式。 十二、實習總結 本週實習總結與經驗交流。","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"2024 Spring 課程w3","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 第三週協同產品設計實習大綱 1. 善用 GitHub Codespaces 與 Gitpod 介紹 GitHub Codespaces 每月 120 core hours 免費使用 建議僅在需要轉檔或編輯時啟用，以最佳化使用 介紹 Gitpod 與 GitHub Codespaces 類似，使用 Visual Studio Code 網頁介面 運行個人 cd2024 倉儲的設定 分組倉儲的 SSH 設定與維護 2. 將組員倉儲設為分組倉儲的子模組 設定子模組的指令 在分組倉儲目錄下執行 git submodule add 組員的個人倉儲網址 組員的學號 範例: git submodule add https://github.com/scrum-1/cd2024.git 41023249 子模組的優點 組員自行管理個人倉儲 自行決定整合版本 簡化資料導入分組網站的過程 3. LaTeX 轉 PDF 機制 LaTeX 文件編輯與轉檔 利用 xelatex.exe 編譯 .tex 文件 生成 .pdf 文件 範例與教學影片 示範如何在 Windows 環境下編譯 LaTeX 文件 解決編譯過程中的常見問題 使用 GitHub Actions 進行自動轉檔 .github/workflows/main.yml 設定範例 轉檔目錄結構：latex 目錄與 downloads 目錄 4. 啟動期中分組報告的製作 分工翻譯與編輯報告 以 LaTeX 格式分工完成英文與中文翻譯 在分組網站的 Release 或 downloads 區發布報告 協同編輯與衝突解決 .tex 文件的純文字編輯 多人協同編輯時的衝突解決 5. 使用 Replit 維護分組倉儲 Replit 環境介紹 基本操作與維護方法 .ssh 目錄的管理 6. CD2024 期中分組倉儲與網站 建立分組網站與倉儲 使用 Brython 程式語法生成連結內容 範例程式碼提供 Brython 程式碼示範 自動生成分組網站與倉儲的連結 7. 期中分組報告範本 LaTeX 報告範本 下載與使用說明 miktex-portable.7z 與 latex_images_github.7z 下載 8. 在電腦教室中的協同設計 各組員維護個人與分組倉儲 利用 Token 或 SSH 授權 git clone 指令範例 9. 其他工具與參考資料 OnShape 帳號與 MKCad Library 使用 網頁設計與產品建模 CoppeliaSim 下載與使用說明 結合可攜程式環境進行機電系統設計與模擬 10. 相關連結與資料 參考資料 Odoo PLM 功能與使用介紹 英文單字查詢工具 GitHub Actions 配置範例 完整範例文件與資源 可攜程式環境下載 協同報告範本下載 詳細說明 善用 GitHub Codespaces 與 Gitpod 介紹 GitHub Codespaces GitHub Codespaces 是一個雲端開發環境，允許開發者在瀏覽器中編寫、測試和調試代碼。 每月 120 core hours 的免費配額允許用戶高效利用資源。 使用策略：僅在需要進行文件轉檔或進行大量編輯時啟用，其他時候使用本地編輯工具。 介紹 Gitpod Gitpod 是類似於 GitHub Codespaces 的工具，使用 Visual Studio Code 的網頁介面。 用於管理和編輯個人的 cd2024 倉儲。 分組倉儲需設置 SSH 許可權來進行管理。 將組員倉儲設為分組倉儲的子模組 設定子模組的指令 在分組倉儲的根目錄中，運行以下命令來添加子模組： sh git submodule add <組員的個人倉儲網址> <組員的學號> 例如： sh git submodule add https://github.com/scrum-1/cd2024.git 41023249 子模組的優點 各組員可以自行管理和更新個人倉儲，無需同步到分組倉儲。 子模組的獨立性讓組員可以單獨測試和修改自己的代碼。 簡化資料的整合過程，只需更新子模組即可同步最新內容。 LaTeX 轉 PDF 機制 LaTeX 文件編輯與轉檔 LaTeX 是一個基於 TeX 的排版系統，適用於專業文檔和學術論文的編輯。 在 Windows 環境中，使用 MiKTeX 編譯 LaTeX 文件，生成 PDF 報告。 主要步驟包括編輯 .tex 文件，然後使用 xelatex.exe 進行編譯： sh xelatex <filename>.tex 範例與教學影片 教學影片詳細說明如何下載、安裝和使用 MiKTeX。 解決常見的編譯錯誤和問題。 使用 GitHub Actions 進行自動轉檔 配置 GitHub Actions 來自動化 LaTeX 文件的編譯和 PDF 生成。 範例配置文件 .github/workflows/main.yml 可參考： yaml name: LaTeX Build on: [push] jobs: build: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2 - name: Setup LaTeX run: sudo apt-get install -y texlive-full - name: Compile LaTeX run: xelatex main.tex 啟動期中分組報告的製作 分工翻譯與編輯報告 組員分工完成英文和中文的翻譯與編輯。 使用 LaTeX 格式撰寫報告，最終生成 PDF 文件。 協同編輯與衝突解決 .tex 文件的純文字格式有助於版本控制和衝突解決。 在 Git 中協同編輯時，可以清楚地看到和解決衝突。 使用 Replit 維護分組倉儲 Replit 環境介紹 Replit 是一個在線開發環境，支持多種編程語言和框架。 可以方便地在瀏覽器中編輯和運行代碼。 免費帳號的 .ssh 目錄管理和維護需要注意。 CD2024 期中分組倉儲與網站 建立分組網站與倉儲 使用 Brython 程式語法生成期中分組倉儲和網站的連結。 範例程式碼展示如何自動生成連結列表。 範例程式碼 ： ```python from browser import document, html brython_div = document[\"brython_div1\"] div = \"a\" org = \"mdecd2024\" midterm = \"mid\" + div + \"g\" group_num = 8 for i in range(1,group_num+1): site_url = \"https://\" + org + \".github.io/","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 Spring 課程w2-2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2a-midag1, 第一組的期中報告網站將位於: https://mdecd2024.github.io/2a-midag1. 說明甲班第一組組長如何建立 midag1 Team, 並利用 Codespaces 維護 2a-midag1 分組倉儲 說明如何利用 Replit 管理從 Classroom 取得的分組倉儲 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. 利用 Codespaces 維護倉儲與網站 說明如何利用 Github Codespaces 維護網站內容","tags":"w2-2","url":"./2024-Spring-w2-2-blog-tutorial.html"},{"title":"2024 Spring 課程w2-1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 利用 Codespaces 維護倉儲與網站 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours.","tags":"w2-1","url":"./2024-Spring-w2-1-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統2 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};