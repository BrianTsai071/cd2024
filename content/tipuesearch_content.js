var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://briantsai071.github.io/cd2024/ \n 網誌: https://briantsai071.github.io/cd2024/blog \n 簡報:\xa0\xa0 https://briantsai071.github.io/cd2024/reveal \n 倉儲:  https://github.com/BrianTsai071/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w1', 'text': '利用 Replit 對 cd2024 改版 \n 說明如何利用 Replit 對 cd2024 改版 \n 將個人倉儲 import 至 Replit \n 設定 Replit 與 Github 應用授權的說明影片 \n 2a 建個人課程倉儲 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '', 'tags': '', 'url': 'w2.html'}, {'title': '利用 Codespaces 維護倉儲與網站', 'text': '如何利用 Github Codespaces 維護網站內容 \n', 'tags': '', 'url': '利用 Codespaces 維護倉儲與網站.html'}, {'title': '在近端執行動態網站', 'text': '如何利用近端可攜系統維護分組網站 \n', 'tags': '', 'url': '在近端執行動態網站.html'}, {'title': 'w3', 'text': '2024 Spring 網際內容管理與協同產品設計實習課程教學導引. \n', 'tags': '', 'url': 'w3.html'}, {'title': '第三週協同產品設計實習大綱', 'text': '1. 善用 GitHub Codespaces 與 Gitpod \n \n 介紹 GitHub Codespaces \n 每月 120 core hours 免費使用 \n 建議僅在需要轉檔或編輯時啟用，以最佳化使用 \n 介紹 Gitpod \n 與 GitHub Codespaces 類似，使用 Visual Studio Code 網頁介面 \n 運行個人 cd2024 倉儲的設定 \n 分組倉儲的 SSH 設定與維護 \n \n 2. 將組員倉儲設為分組倉儲的子模組 \n \n 設定子模組的指令 \n 在分組倉儲目錄下執行 \xa0 git submodule add 組員的個人倉儲網址 組員的學號 \n 範例: \xa0 git submodule add https://github.com/scrum-1/cd2024.git 41023249 \n 子模組的優點 \n 組員自行管理個人倉儲 \n 自行決定整合版本 \n 簡化資料導入分組網站的過程 \n \n 3. LaTeX 轉 PDF 機制 \n \n LaTeX 文件編輯與轉檔 \n 利用 xelatex.exe 編譯 .tex 文件 \n 生成 .pdf 文件 \n 範例與教學影片 \n 示範如何在 Windows 環境下編譯 LaTeX 文件 \n 解決編譯過程中的常見問題 \n 使用 GitHub Actions 進行自動轉檔 \n .github/workflows/main.yml 設定範例 \n 轉檔目錄結構：latex 目錄與 downloads 目錄 \n \n 4. 啟動期中分組報告的製作 \n \n 分工翻譯與編輯報告 \n 以 LaTeX 格式分工完成英文與中文翻譯 \n 在分組網站的 Release 或 downloads 區發布報告 \n 協同編輯與衝突解決 \n .tex 文件的純文字編輯 \n 多人協同編輯時的衝突解決 \n \n 5. 使用 Replit 維護分組倉儲 \n \n Replit 環境介紹 \n 基本操作與維護方法 \n .ssh 目錄的管理 \n \n 6. CD2024 期中分組倉儲與網站 \n \n 建立分組網站與倉儲 \n 使用 Brython 程式語法生成連結內容 \n 範例程式碼提供 \n Brython 程式碼示範 \n 自動生成分組網站與倉儲的連結 \n \n 7. 期中分組報告範本 \n \n LaTeX 報告範本 \n 下載與使用說明 \n miktex-portable.7z 與 latex_images_github.7z 下載 \n \n 8. 在電腦教室中的協同設計 \n \n 各組員維護個人與分組倉儲 \n 利用 Token 或 SSH 授權 \n git clone 指令範例 \n \n 9. 其他工具與參考資料 \n \n OnShape 帳號與 MKCad Library 使用 \n 網頁設計與產品建模 \n CoppeliaSim \n 下載與使用說明 \n 結合可攜程式環境進行機電系統設計與模擬 \n \n 10. 相關連結與資料 \n \n 參考資料 \n Odoo PLM 功能與使用介紹 \n 英文單字查詢工具 \n GitHub Actions 配置範例 \n 完整範例文件與資源 \n 可攜程式環境下載 \n 協同報告範本下載 \n \n', 'tags': '', 'url': '第三週協同產品設計實習大綱.html'}, {'title': '詳細說明', 'text': '善用 GitHub Codespaces 與 Gitpod \n \n 介紹 GitHub Codespaces \n GitHub Codespaces 是一個雲端開發環境，允許開發者在瀏覽器中編寫、測試和調試代碼。 \n 每月 120 core hours 的免費配額允許用戶高效利用資源。 \n \n 使用策略：僅在需要進行文件轉檔或進行大量編輯時啟用，其他時候使用本地編輯工具。 \n \n \n 介紹 Gitpod \n \n Gitpod 是類似於 GitHub Codespaces 的工具，使用 Visual Studio Code 的網頁介面。 \n 用於管理和編輯個人的 cd2024 倉儲。 \n 分組倉儲需設置 SSH 許可權來進行管理。 \n \n 將組員倉儲設為分組倉儲的子模組 \n \n 設定子模組的指令 \n 在分組倉儲的根目錄中，運行以下命令來添加子模組： \xa0 sh git submodule add <組員的個人倉儲網址> <組員的學號> \n 例如： \xa0 sh git submodule add https://github.com/scrum-1/cd2024.git 41023249 \n 子模組的優點 \n 各組員可以自行管理和更新個人倉儲，無需同步到分組倉儲。 \n 子模組的獨立性讓組員可以單獨測試和修改自己的代碼。 \n 簡化資料的整合過程，只需更新子模組即可同步最新內容。 \n \n LaTeX 轉 PDF 機制 \n \n LaTeX 文件編輯與轉檔 \n LaTeX 是一個基於 TeX 的排版系統，適用於專業文檔和學術論文的編輯。 \n 在 Windows 環境中，使用 MiKTeX 編譯 LaTeX 文件，生成 PDF 報告。 \n 主要步驟包括編輯 \xa0 .tex \xa0 文件，然後使用 \xa0 xelatex.exe \xa0 進行編譯： \xa0 sh xelatex <filename>.tex \n 範例與教學影片 \n 教學影片詳細說明如何下載、安裝和使用 MiKTeX。 \n 解決常見的編譯錯誤和問題。 \n 使用 GitHub Actions 進行自動轉檔 \n 配置 GitHub Actions 來自動化 LaTeX 文件的編譯和 PDF 生成。 \n 範例配置文件 \xa0 .github/workflows/main.yml \xa0 可參考： \xa0 yaml name: LaTeX Build on: [push] jobs: build: runs-on: ubuntu-latest steps: - uses: actions/checkout@v2 - name: Setup LaTeX run: sudo apt-get install -y texlive-full - name: Compile LaTeX run: xelatex main.tex \n \n 啟動期中分組報告的製作 \n \n 分工翻譯與編輯報告 \n 組員分工完成英文和中文的翻譯與編輯。 \n 使用 LaTeX 格式撰寫報告，最終生成 PDF 文件。 \n 協同編輯與衝突解決 \n .tex 文件的純文字格式有助於版本控制和衝突解決。 \n 在 Git 中協同編輯時，可以清楚地看到和解決衝突。 \n \n 使用 Replit 維護分組倉儲 \n \n Replit 環境介紹 \n Replit 是一個在線開發環境，支持多種編程語言和框架。 \n 可以方便地在瀏覽器中編輯和運行代碼。 \n 免費帳號的 .ssh 目錄管理和維護需要注意。 \n \n CD2024 期中分組倉儲與網站 \n \n 建立分組網站與倉儲 \n 使用 Brython 程式語法生成期中分組倉儲和網站的連結。 \n 範例程式碼展示如何自動生成連結列表。 \n 範例程式碼 ： ```python from browser import document, html brython_div = document["brython_div1"] div = "a" org = "mdecd2024" midterm = "mid" + div + "g" group_num = 8 for i in range(1,group_num+1): site_url = "https://" + org + ".github.io/ \n \n', 'tags': '', 'url': '詳細說明.html'}, {'title': 'w4', 'text': '2024 Spring 網際內容管理與協同產品設計實習課程教學導引. \n', 'tags': '', 'url': 'w4.html'}, {'title': '第四週協同產品設計實習詳細大綱', 'text': '一、概述 \n \n 目標 ：明確界定各分組的任務需求與分工時序，使用 SourceTree 和 Git Branch 優化協同設計流程。 \n 工具 ：SourceTree、Git Branch、GitHub、Replit、Codespaces、Gitpod、localhost。 \n \n 二、工具與方法介紹 \n \n SourceTree \n 用途：視覺化管理 Git 倉儲，清晰查看改版歷程。 \n \n 操作：如何安裝、連接到遠端倉儲，基本操作。 \n \n \n Git Branch \n \n 用途：減少合併衝突，管理階段性改版內容。 \n 操作：創建、切換、合併分支的具體步驟。 \n \n 三、任務需求與分工時序 \n \n 界定需求 \n \n 每個分組需明確界定任務需求，包括教學影片字幕、逐字稿、摘要說明等。 \n \n \n 分工時序 \n \n 各分組成員的具體分工及工作進度安排。 \n \n 四、教學影片整理與自評 \n \n 任務 \n 為教學影片添加字幕。 \n 整理出逐字稿並放置在影片下方，以 .txt 連結方式安排。 \n \n 編寫教學影片的摘要。 \n \n \n 自評 \n \n 分組內部進行自評，確保任務完成質量。 \n \n 五、GitHub 個人與分組倉儲維護 \n \n 倉儲結構 \n 個人倉儲： cd2024 \n \n 分組倉儲： mdecd2024 ，命名規則 \xa0 2a-midag<組別> 。 \n \n \n 子模組設置 \n \n 將個人倉儲設為分組倉儲的子模組，便於各組員自行管理和維護。 \n \n 六、資料管理 \n \n 類型 ： \n 文字資料（含 LaTeX 報告章節） \n 零組件檔案、工程圖、組立圖（含 BOM 與爆炸圖） \n 教學影片、操作流程錄製影片或 Wink 資料。 \n \n 七、倉儲維護方式介紹 \n \n Replit \n 歷史及用途介紹。 \n 免費帳號限制及使用方法。 \n \n 動態與靜態網站維護的具體步驟及注意事項。 \n \n \n Codespaces \n \n 使用方法及限制介紹。 \n \n 動態與靜態網站維護的具體操作步驟。 \n \n \n Gitpod \n \n 使用方法及免費授權時間限制。 \n \n 動態與靜態網站維護的具體操作步驟。 \n \n \n localhost \n \n 使用可攜程式系統維護倉儲。 \n 動態與靜態網站維護的具體操作步驟。 \n \n 八、NX 繪圖協同設計 \n \n 軟體版本 \n 各版本 NX 的安裝與啟動方法。 \n \n USB 隨身碟啟動批次檔案配置。 \n \n \n 協同設計 \n \n 不同版本 NX 的協同設計方法及注意事項。 \n \n 九、討論與反思 \n \n 留言系統 \n \n 使用留言系統進行討論，交流實習過程中的問題和經驗。 \n \n \n 反思 \n \n 根據反思一和反思二，理解協同設計的重要性和團隊合作的必要性。 \n \n 十、參考資源 \n \n 學長推甄研究所資訊 \n 使用 Team code: \xa0 n9k585c \xa0 進入查看。 \n \n 十一、實習總結 \n \n 總結本週實習成果 ，進行經驗交流和總結。 \n \n \n', 'tags': '', 'url': '第四週協同產品設計實習詳細大綱.html'}, {'title': '詳細內容與操作說明', 'text': '一、SourceTree 使用教程 \n \n 安裝與設置 \n 如何下載並安裝 SourceTree。 \n \n 如何連接到 GitHub 倉儲。 \n \n \n 基本操作 \n \n 如何查看改版歷程。 \n 如何進行分支管理。 \n \n 二、Git Branch 操作指導 \n \n 創建分支 \n \n 如何在本地創建新分支。 \n \n \n 切換分支 \n \n \n 如何切換到不同的分支。 \n \n \n 合併分支 \n \n 如何合併分支並解決衝突。 \n \n 三、教學影片整理與自評步驟 \n \n 添加字幕 \n \n 使用軟件添加字幕的具體步驟。 \n \n \n 整理逐字稿 \n \n \n 如何從字幕中整理出逐字稿。 \n \n \n 編寫摘要 \n \n 如何編寫影片教學重點摘要。 \n \n 四、GitHub 倉儲維護具體步驟 \n \n 設置子模組 \n \n 如何將個人倉儲設為分組倉儲的子模組。 \n \n \n 分組倉儲管理 \n \n 如何管理和維護分組倉儲。 \n \n 五、Replit 詳細使用說明 \n \n 動態網站 \n \n 如何在 Replit 上運行動態網站。 \n \n \n 靜態網站 \n \n 如何在 Replit 上運行靜態網站。 \n \n 六、Codespaces 詳細使用說明 \n \n 動態網站 \n \n 如何在 Codespaces 上運行動態網站。 \n \n \n 靜態網站 \n \n 如何在 Codespaces 上運行靜態網站。 \n \n 七、Gitpod 詳細使用說明 \n \n 動態網站 \n \n 如何在 Gitpod 上運行動態網站。 \n \n \n 靜態網站 \n \n 如何在 Gitpod 上運行靜態網站。 \n \n 八、localhost 使用與配置 \n \n 可攜程式系統 \n \n 如何使用可攜程式系統進行倉儲維護。 \n \n \n 動態與靜態網站 \n \n 在 localhost 上運行動態與靜態網站的步驟。 \n \n 九、NX 繪圖協同設計 \n \n 安裝與配置 \n 如何安裝不同版本的 NX。 \n \n 如何配置批次檔案啟動 NX。 \n \n \n 協同設計步驟 \n \n 不同版本 NX 的協同設計操作步驟。 \n \n 十、討論與反思 \n \n 討論 \n \n 利用留言系統進行問題交流。 \n \n \n 反思 \n \n 分析協同設計中的問題與經驗。 \n \n 十一、參考資源 \n \n 推甄研究所資訊查詢方式。 \n \n 十二、實習總結 \n \n 本週實習總結與經驗交流。 \n \n', 'tags': '', 'url': '詳細內容與操作說明.html'}, {'title': '期中', 'text': '\n  editor2 結束  \n \n \n \n \n w6 \n  1 00:00:00,512 --> 00:00:04,352 好啦目前啊我想要把這個進端這個拉到 2 00:00:04,608 --> 00:00:06,400 拿到我的可惜 3 00:00:06,912 --> 00:00:08,448 環境來處理 4 00:00:09,984 --> 00:00:11,776 可是我必須要有權限對吧 5 00:00:13,312 --> 00:00:14,848 所以我的權限啊 6 00:00:15,104 --> 00:00:17,664 我在這邊有設定一個 7 00:00:19,712 --> 00:00:20,992 Gucci的權限 8 00:00:22,272 --> 00:00:23,808 好市多ipv4 9 00:00:25,344 --> 00:00:28,160 這個是我當時設好之後啊把他 10 00:00:28,672 --> 00:00:29,440 會出的 11 00:00:31,232 --> 00:00:32,512 所以我因為對 12 00:00:33,280 --> 00:00:36,352 第二組的分組倉鼠我有權限所以我就 13 00:00:36,864 --> 00:00:38,912 必須要存在實體的 14 00:00:39,680 --> 00:00:42,240 必須實體這個時候不能用y 15 00:00:43,520 --> 00:00:45,824 來當路徑因為Windows不認 16 00:00:46,080 --> 00:00:47,360 不認這個外 17 00:00:47,616 --> 00:00:48,896 下面的這個redis 18 00:00:49,664 --> 00:00:51,712 你一定要存在實體的 19 00:00:52,480 --> 00:00:53,504 把這個 20 00:00:54,016 --> 00:00:54,528 隨身碟 21 00:00:54,784 --> 00:00:55,552 太好笑 22 00:00:55,808 --> 00:00:58,112 你才可以按兩下他才會跑出這個 23 00:00:59,136 --> 00:01:00,928 所以你就可以 24 00:01:02,208 --> 00:01:03,232 這樣子我的 25 00:01:04,000 --> 00:01:06,560 這個session就可以用 26 00:01:08,352 --> 00:01:09,120 所以我要 27 00:01:09,376 --> 00:01:10,400 抓下來啊 28 00:01:10,656 --> 00:01:13,216 我就必須要用對的這個協定 29 00:01:13,984 --> 00:01:15,520 我才能夠維護嗎 30 00:01:16,544 --> 00:01:18,080 所以我現在我就 31 00:01:18,848 --> 00:01:19,872 跳到c槽 32 00:01:21,152 --> 00:01:22,944 然後我在這邊見一個Ten 33 00:01:27,296 --> 00:01:29,856 要把第二組的那個倉儲啊 34 00:01:30,880 --> 00:01:32,928 我先用西帽號跳到c槽 35 00:01:33,952 --> 00:01:36,512 然後mkdir建立一個Tank 36 00:01:37,024 --> 00:01:38,304 因為他的西 37 00:01:38,560 --> 00:01:39,840 固態硬碟是最快 38 00:01:40,096 --> 00:01:41,632 好像有在上面處理的話 39 00:01:42,144 --> 00:01:43,936 應該會比較順利一點 40 00:01:45,216 --> 00:01:46,496 就待會需要 41 00:01:46,752 --> 00:01:49,568 直接處理這個啦所以我把他先複製下 42 00:01:50,848 --> 00:01:52,128 我進來之後啊 43 00:01:54,944 --> 00:01:55,968 必需要的Chrome 44 00:01:56,992 --> 00:01:58,784 模組 45 00:01:59,296 --> 00:02:00,320 所有地下 46 00:02:01,088 --> 00:02:01,856 Re 47 00:02:03,392 --> 00:02:04,160 MA 48 00:02:05,440 --> 00:02:07,744 然後再利用SSD 49 00:02:08,256 --> 00:02:10,816 所以我現在是請假的cycu 50 00:02:12,096 --> 00:02:14,400 然後我這樣子的話應該就有機會 51 00:02:17,472 --> 00:02:19,520 所以這邊的重點啦其實就是這 52 00:02:21,312 --> 00:02:22,336 我沒有權限 53 00:02:22,848 --> 00:02:25,152 找我我這個時候可以克龍下來 54 00:02:25,664 --> 00:02:28,224 表示我應該就可以退回去 55 00:02:29,504 --> 00:02:32,064 不行就一定是這個setting出問題 56 00:02:32,832 --> 00:02:33,600 感謝你 57 00:02:33,856 --> 00:02:35,648 最近端的時候也可以這樣做 58 00:02:36,672 --> 00:02:38,464 那我們看看是不是可以一一的 59 00:02:39,232 --> 00:02:40,256 把每一個人 60 00:02:40,768 --> 00:02:42,048 設一個分組啊 61 00:02:42,560 --> 00:02:43,328 課程倉儲 62 00:02:44,352 --> 00:02:45,632 然後加上這一個 63 00:02:47,424 --> 00:02:49,984 抓下來我就必須要看說 64 00:02:51,264 --> 00:02:52,288 我想要 65 00:02:52,544 --> 00:02:55,104 直接動他的這個檔裡面因為我 66 00:02:55,616 --> 00:02:58,432 我要把他的MD檔加上他的這個組別 67 00:02:59,456 --> 00:03:00,480 然後檢查一下 68 00:03:00,992 --> 00:03:02,784 所以你講的是共同的 69 00:03:03,552 --> 00:03:04,576 相關的 70 00:03:05,088 --> 00:03:06,880 討論啊或者是你要 71 00:03:07,136 --> 00:03:09,184 記錄在分組倉儲的話也可以 72 00:03:09,952 --> 00:03:12,000 這樣的話我們基本上就是 73 00:03:12,768 --> 00:03:14,304 一旦克龍我 74 00:03:14,560 --> 00:03:15,840 可以直接在這裡 75 00:03:16,608 --> 00:03:17,632 然後看到他 76 00:03:18,144 --> 00:03:20,192 那我現在想要處理的事嗎大 77 00:03:21,472 --> 00:03:23,776 你在這邊就可以看到說我把它 78 00:03:24,800 --> 00:03:28,640 克隆到這裡然後這些是分組的分組的這一個目錄 79 00:03:30,176 --> 00:03:32,224 好然後我現在要處理的事嗎 80 00:03:32,736 --> 00:03:35,552 所以你可以想像說到時候我們假如 81 00:03:36,064 --> 00:03:38,368 主力長的話也是這個架構 82 00:03:38,624 --> 00:03:39,904 而且一定要在軍團作 83 00:03:40,416 --> 00:03:42,464 因為我們現在畫圖 84 00:03:43,744 --> 00:03:46,816 Ok然後轉成場景也是一樣一路 85 00:03:47,328 --> 00:03:49,376 必須要有不同的這個格式的 86 00:03:49,888 --> 00:03:52,192 找一個安排所以我們現在想要處理的是 87 00:03:57,312 --> 00:03:59,360 那我們就直接啊把這一個 88 00:04:00,384 --> 00:04:03,456 分組的這個把它加進來到時候啊 89 00:04:03,968 --> 00:04:05,760 在轉檔的時候他會出問 90 00:04:06,528 --> 00:04:08,064 所以我們就先把 91 00:04:09,088 --> 00:04:11,136 外部的這個我們把它加上 92 00:04:13,184 --> 00:04:13,952 喔 93 00:04:14,208 --> 00:04:16,256 應該就不會重複了嘛這個 94 00:04:17,791 --> 00:04:18,815 然後再加上 95 00:04:23,679 --> 00:04:26,751 但是我們還是不放心我們還是把他抓出來看 96 00:04:32,639 --> 00:04:34,687 因為你這個也要處理不是嗎 97 00:04:36,223 --> 00:04:37,503 這個要處理啊 98 00:04:37,759 --> 00:04:39,295 表示就是我這一組啦 99 00:04:39,807 --> 00:04:41,343 然後是我第一週的 100 00:04:41,599 --> 00:04:42,879 寫在分組了 101 00:04:46,207 --> 00:04:48,767 同樣的啊你要再抓他的 102 00:04:50,559 --> 00:04:52,607 已經不一樣了 103 00:04:52,863 --> 00:04:54,399 但是我再加上這個的話 104 00:04:55,423 --> 00:04:56,447 他就是唯一啦 105 00:04:57,471 --> 00:04:59,007 到時候不會帶回去所以 106 00:04:59,263 --> 00:05:02,335 你假如是被分配到寫這兩個的 107 00:05:03,359 --> 00:05:04,383 所以你要記得 108 00:05:04,639 --> 00:05:05,663 相關資 109 00:05:05,919 --> 00:05:07,199 前面這個日期 110 00:05:07,455 --> 00:05:09,759 標題的部分就比較OK啦 111 00:05:10,527 --> 00:05:12,319 我就不會造成衝突了 112 00:05:13,087 --> 00:05:14,367 這個轉檔的問題 113 00:05:14,879 --> 00:05:17,951 我就已經應該可以轉檔了對不對 114 00:05:18,975 --> 00:05:23,071 所以我轉檔的部分啊我在這邊的話我看看能不能用 115 00:05:23,583 --> 00:05:27,423 因為今天plus是我在Linux上面的指令 116 00:05:28,191 --> 00:05:29,983 那我想要把他帶出來 117 00:05:31,263 --> 00:05:33,311 應該可以看到他的這個指令啊 118 00:05:34,079 --> 00:05:35,359 所以我應該在 119 00:05:35,871 --> 00:05:38,687 倉鼠裡面我只要下這個指定他應該就會轉達 120 00:05:40,223 --> 00:05:42,015 好所以我在這邊 121 00:05:42,527 --> 00:05:44,063 我就直接 122 00:05:44,575 --> 00:05:46,111 進入他的分組倉儲 123 00:05:47,135 --> 00:05:48,415 所以我進入21 124 00:05:50,719 --> 00:05:53,023 然後是m i d a G2 125 00:05:55,327 --> 00:05:57,375 老師我就把這個指令貼上 126 00:05:58,655 --> 00:06:01,215 我想要寫批次檔可以啊 127 00:06:02,239 --> 00:06:04,543 我想要寫一個 128 00:06:05,055 --> 00:06:06,335 ZENBOOK的b 129 00:06:07,103 --> 00:06:10,175 其實就是這樣然後點滴他就可以進 130 00:06:10,687 --> 00:06:13,247 我們試試看說不定可以你去看 131 00:06:13,759 --> 00:06:15,807 所以我這裡想要把他說 132 00:06:16,575 --> 00:06:18,879 然後我在這裡我把他加上 133 00:06:19,135 --> 00:06:19,647 FL 134 00:06:26,559 --> 00:06:28,095 註解的話 135 00:06:28,351 --> 00:06:29,631 我們就不需要這樣 136 00:06:31,423 --> 00:06:33,471 然後你註解的話他是禮貌 137 00:06:37,567 --> 00:06:38,335 茶葉嗎 138 00:06:40,127 --> 00:06:41,407 然後把它存起來 139 00:06:43,711 --> 00:06:44,223 茶葉嗎 140 00:06:45,503 --> 00:06:48,319 我不要直接下指令 141 00:06:48,831 --> 00:06:49,599 我直接 142 00:06:49,855 --> 00:06:50,367 監控 143 00:06:54,463 --> 00:06:55,999 他就變成披薩 144 00:06:56,767 --> 00:07:00,095 所以我等於是在104 145 00:07:00,607 --> 00:07:02,399 我用game box的沒有 146 00:07:03,167 --> 00:07:04,447 沒有副檔名的 147 00:07:04,959 --> 00:07:06,751 然後在Windows我就 148 00:07:07,007 --> 00:07:08,287 可以把那兩個處理啊 149 00:07:09,055 --> 00:07:10,591 那你在這裡想要看 150 00:07:11,871 --> 00:07:13,663 我們現在 151 00:07:15,199 --> 00:07:17,759 好那我們最近端午要檢查一下 152 00:07:18,527 --> 00:07:20,063 對應的這個設定 153 00:07:20,319 --> 00:07:20,831 海 154 00:07:21,087 --> 00:07:23,903 我們在雲端的話應該也可以看靜態的吧 155 00:07:27,487 --> 00:07:31,071 這個時候啊當時用成80是因為rep 156 00:07:31,839 --> 00:07:34,655 我們想要動態裡面再講一個心態 157 00:07:35,167 --> 00:07:36,703 可是現在已經不能這樣用了 158 00:07:36,959 --> 00:07:39,263 844 159 00:07:40,543 --> 00:07:43,615 動態843是靜態 160 00:07:45,919 --> 00:07:47,967 所以從這裡啊cms 161 00:07:48,223 --> 00:07:49,503 你敢之後他知道 162 00:07:50,271 --> 00:07:53,087 943我應該就可以看啊 163 00:07:53,343 --> 00:07:54,367 老師我用這個 164 00:07:54,879 --> 00:07:55,647 就給他 165 00:08:02,303 --> 00:08:04,863 直接進到9413 166 00:08:06,655 --> 00:08:07,935 9443 167 00:08:09,215 --> 00:08:11,519 Ok然後我看看 168 00:08:12,799 --> 00:08:15,103 這樣能不能看到這個是動態了 169 00:08:16,127 --> 00:08:19,455 所以我想要編輯我現在這裡處理要處理衝突也是 170 00:08:19,711 --> 00:08:20,991 也是可以在這裡處理 171 00:08:21,759 --> 00:08:23,295 好那我現在因為 172 00:08:24,319 --> 00:08:26,879 所以我也不用改這個命 173 00:08:27,391 --> 00:08:30,207 只是我不確定啊這邊的動態到底 174 00:08:30,975 --> 00:08:32,255 Switch動態 175 00:08:33,023 --> 00:08:33,791 好的我試試 176 00:08:34,815 --> 00:08:36,095 我這個 177 00:08:36,607 --> 00:08:37,375 應該是這 178 00:08:38,399 --> 00:08:39,935 那我等一下 179 00:08:40,703 --> 00:08:41,727 我要打開 180 00:08:43,007 --> 00:08:45,567 哇他這個會直接用外部IP 181 00:08:47,871 --> 00:08:50,943 然後我這個應該就可以開了這個就是靜態 182 00:08:59,903 --> 00:09:03,743 動態的話你可能人家會進來趕快 183 00:09:04,511 --> 00:09:06,303 為我寫的這個不應該在 184 00:09:08,095 --> 00:09:09,119 這兩天在這邊 185 00:09:09,631 --> 00:09:10,911 而且我已經都加上 186 00:09:11,679 --> 00:09:12,447 對應的這 187 00:09:13,215 --> 00:09:14,495 前面的這個標題啊 188 00:09:15,007 --> 00:09:16,031 你這樣的話 189 00:09:17,055 --> 00:09:19,103 你就可以像你看這個都還沒 190 00:09:20,127 --> 00:09:21,919 我們進來應該要把 191 00:09:24,223 --> 00:09:25,247 你的網頁啊 192 00:09:26,015 --> 00:09:27,551 你的網址啊這個要請 193 00:09:30,367 --> 00:09:33,951 改完之後你要退回去所以現在我就把 194 00:09:34,463 --> 00:09:37,279 至少在這個網子我們已經處理完了 195 00:09:38,047 --> 00:09:39,583 好那我要把它推回去啊 196 00:09:40,351 --> 00:09:42,911 好的我現在就直接在 197 00:09:43,423 --> 00:09:44,447 這裡要關掉 198 00:09:45,471 --> 00:09:48,031 老師我就可以 199 00:09:48,543 --> 00:09:50,335 Play APP可以用嗎 200 00:09:51,615 --> 00:09:52,383 因為我有一 201 00:09:53,919 --> 00:09:56,479 ATP 202 00:09:56,991 --> 00:09:59,807 其實這個就是 203 00:10:00,831 --> 00:10:06,719 把唯一的那個參數把它拿出來看A片 204 00:10:12,095 --> 00:10:15,679 可是這樣的話你就可以直接後面就加一個字串 205 00:10:16,191 --> 00:10:18,495 所以我們就是 206 00:10:20,543 --> 00:10:21,567 往事 207 00:10:22,591 --> 00:10:23,615 用MD 208 00:10:28,223 --> 00:10:28,735 前 209 00:10:29,247 --> 00:10:30,783 各家 210 00:10:32,575 --> 00:10:34,879 加上 211 00:10:35,391 --> 00:10:36,415 分組代號 212 00:10:36,927 --> 00:10:39,743 這樣告訴我們講我複製我們就不會 213 00:10:41,279 --> 00:10:43,327 基本上就不會有衝突了 214 00:10:48,447 --> 00:10:49,727 所以他就上去了 215 00:10:49,983 --> 00:10:52,543 你自己假如沒有想要 216 00:10:53,567 --> 00:10:55,359 看我們之前的 217 00:10:56,383 --> 00:10:59,967 我不曉得他可不可以 218 00:11:00,223 --> 00:11:01,503 那我們再看一下 219 00:11:02,527 --> 00:11:06,879 我是假設你去看上一個禮拜的 220 00:11:08,671 --> 00:11:11,999 我看一下是寫在上一個禮拜嗎 221 00:11:12,767 --> 00:11:15,071 我們的分組的話 222 00:11:16,095 --> 00:11:18,655 靜態動態 223 00:11:21,215 --> 00:11:22,495 然後 224 00:11:23,775 --> 00:11:26,847 來這裡沒有好再往前 225 00:11:27,103 --> 00:11:28,127 這個嗎 226 00:11:29,919 --> 00:11:32,991 幫我找一下他那個是在 227 00:11:34,015 --> 00:11:37,343 應該 228 00:11:37,599 --> 00:11:43,743 港幣點批發嗎有沒有 229 00:11:45,023 --> 00:11:51,167 好是我們找一下你肯我在這裡 230 00:11:51,423 --> 00:11:57,567 所以我們需要的是改這個所以我們想要現在就要做的話我們就可以把這個 231 00:11:57,823 --> 00:12:03,967 不是這個弄進來啊我不曉得各組我們先轉一次好了 232 00:12:04,223 --> 00:12:10,367 好所以我這邊啊我就把這個檔案啦躺著呼吸下 233 00:12:10,623 --> 00:12:16,767 然後檢查一下他是不是有把它弄上去給他丟上去好所以我就必須帶 234 00:12:17,023 --> 00:12:23,167 帶出現有的這個personality 235 00:12:23,423 --> 00:12:29,567 Helicon再出來我 236 00:12:29,823 --> 00:12:35,967 所以我先把它弄下來 237 00:12:36,223 --> 00:12:42,367 所以我從哪裡開始改呢我必須要從我 238 00:12:42,623 --> 00:12:48,767 My number秀出來因為前面一定是他加上去的 239 00:12:49,023 --> 00:12:55,167 我在馬上後面在PS4面我在PASS後面到 240 00:12:55,423 --> 00:13:01,567 結束這裡到雲諾我需要這一段好就把 241 00:13:01,823 --> 00:13:07,967 好喝氣象這個時候我在看這個這兩個 242 00:13:14,623 --> 00:13:20,767 台沒關係我就直接把他貼在後面 243 00:13:21,023 --> 00:13:27,167 可是問題你這個時候啊必須要把分組的那個代號 244 00:13:27,423 --> 00:13:33,567 這個後面你在自己加我明天裝 245 00:13:33,823 --> 00:13:39,967 其中一個也就是41023156的因為 246 00:13:40,223 --> 00:13:46,367 裡面有3天可是他還沒有加上他的學號 247 00:13:53,023 --> 00:13:59,167 躺在抓第二個的話那第二個的話你就在逗點他是 248 00:13:59,423 --> 00:14:05,567 好那我們看看有可能就會衝突了 249 00:14:05,823 --> 00:14:11,967 他這個就會帶回去了 250 00:14:12,223 --> 00:14:18,367 這樣的話我就可以 251 00:14:25,023 --> 00:14:31,167 這個時候 252 00:14:44,223 --> 00:14:50,367 我們就把那個肩膀肩膀 253 00:14:50,623 --> 00:14:56,767 我們就只需要 254 00:14:57,023 --> 00:15:03,167 女用堅果因為我沒有Pasta 255 00:15:03,423 --> 00:15:09,567 這個時候啊他在執行的過程他會幫我們見一個 256 00:15:09,823 --> 00:15:15,967 會幫我們建一個目錄 257 00:15:16,223 --> 00:15:22,367 好像沒有 258 00:15:22,623 --> 00:15:28,767 那應該要有一個COMEBUY NET 259 00:15:29,023 --> 00:15:35,167 Or 260 00:15:35,423 --> 00:15:41,567 所以這個時候啊應該 261 00:15:48,223 --> 00:15:54,367 打開MAZDA 262 00:16:07,423 --> 00:16:13,567 我試試看喔 263 00:16:13,823 --> 00:16:19,967 感覺好像他沒有進去幫我們好像沒有幫我們做 264 00:16:20,223 --> 00:16:26,367 沒有 265 00:16:26,623 --> 00:16:32,767 沒有幫我們做複製的動作 266 00:16:33,023 --> 00:16:39,167 我這邊不曉得現在錯在哪裡 267 00:16:39,423 --> 00:16:45,567 好心疼要先暫停一下照講因為他執行 268 00:16:45,823 --> 00:16:51,967 我沒有錢啊 269 00:16:52,223 --> 00:16:58,367 理論上我不需要自己自己加這個 270 00:16:58,623 --> 00:17:04,767 可是應該要改我這邊必須要改他是從新的 271 00:17:05,023 --> 00:17:11,167 Ok所以我變成堅果你要拉筋不走出來改成啊他會從 272 00:17:11,423 --> 00:17:17,567 我現在不是直 273 00:17:17,823 --> 00:17:23,967 我必須要從這個新的 274 00:17:24,223 --> 00:17:30,367 可是我這個要全程啊新的所以你這裡要 275 00:17:30,623 --> 00:17:36,767 純的話你要存成協同 276 00:17:37,023 --> 00:17:43,167 Generic covid所以這樣的話看他可不可以所以我們 277 00:17:43,423 --> 00:17:49,567 就見希望 278 00:17:49,823 --> 00:17:55,967 這邊的意思就是說你這邊啊原先是從他到他這個 279 00:17:56,223 --> 00:18:02,367 近的意思是用picant當工具然後他會從這個目錄裡面去抓 280 00:18:02,623 --> 00:18:08,767 所有的點MV那這個點mb啊因為我們用的logo 281 00:18:09,023 --> 00:18:15,167 給你看我們的logo 282 00:18:15,423 --> 00:18:21,567 他在執行到第11行的時候會跟拷貝的這個 283 00:18:21,823 --> 00:18:27,967 Dyson把他抓進來所以他其實就是在這裡做複製了正常的話我們看 284 00:18:28,223 --> 00:18:34,367 這裡就是 285 00:18:34,623 --> 00:18:40,767 你沒有協調好的部分他有兩個有沒有兩個 286 00:18:41,023 --> 00:18:47,167 一個是在哪一個這個12點沒改 287 00:18:47,423 --> 00:18:53,567 所以這邊就是出問題那我們先除掉一個我們兩個兩個 288 00:18:53,823 --> 00:18:59,967 組員馬上就出問題對啊那我們就把第二個組員拿掉 289 00:19:00,223 --> 00:19:06,367 好我們先處理一個這個應該就沒衝突吧好所以這個把它存起來 290 00:19:06,623 --> 00:19:12,767 然後我們再轉一次從這個砍敗的這個目錄來轉 291 00:19:13,023 --> 00:19:19,167 喔他跟那個分組的 292 00:19:32,223 --> 00:19:38,367 然後我們再講一次我這裡面你們開會就要把它協調好 293 00:19:38,623 --> 00:19:44,767 好啦他有3天啊在這裡這邊你因為打明一樣這裡不 294 00:19:45,023 --> 00:19:51,167 現在5天了8個人就40天喔所以一定要加上學 295 00:19:51,423 --> 00:19:57,567 兩個一定要拆開好所以我們先處理這個答案給你所以我們現在好了嗎 296 00:19:57,823 --> 00:20:03,967 致我們就可以直接APP啦我們利用 297 00:20:04,223 --> 00:20:10,111 用哪一個組員啊410我們利用4102 298 00:20:11,135 --> 00:20:11,903 356 299 00:20:13,695 --> 00:20:14,719 紙模組 300 00:20:15,231 --> 00:20:15,999 中的 301 00:20:17,279 --> 00:20:17,791 MAZDA 302 00:20:20,863 --> 00:20:21,887 作為 303 00:20:22,655 --> 00:20:23,167 範 304 00:20:24,447 --> 00:20:25,215 轉出 305 00:20:25,983 --> 00:20:28,543 對應的分主唱分數的 306 00:20:28,799 --> 00:20:29,823 這個網址 307 00:20:31,359 --> 00:20:33,151 到時候其實你就是 308 00:20:33,663 --> 00:20:35,455 處理零組件也是一樣 309 00:20:36,223 --> 00:20:36,735 因為 310 00:20:36,991 --> 00:20:41,087 告訴我的零件是會在分佈在每一個組員的紙模組裡面 311 00:20:46,207 --> 00:20:48,255 禁斷要看也可以 312 00:20:49,279 --> 00:20:53,119 進端的靜態在這裡嗎所以我們這邊的往事應該改了 313 00:20:54,143 --> 00:20:55,935 是第一位主人的那三天喔 314 00:20:56,191 --> 00:20:56,959 沒有抓 315 00:20:59,775 --> 00:21:01,055 關掉 316 00:21:04,383 --> 00:21:05,407 你還要 317 00:21:05,919 --> 00:21:07,199 還要再打開 318 00:21:10,783 --> 00:21:12,319 遠端那邊需要轉檔 319 00:21:13,087 --> 00:21:14,879 所以你可以現在進單給你看 320 00:21:15,903 --> 00:21:16,928 我們這裡必須要進 321 00:21:20,000 --> 00:21:21,792 然後你在啟動 322 00:21:25,632 --> 00:21:26,144 王八 323 00:21:26,656 --> 00:21:28,192 然後在滑鼠右鍵點這 324 00:21:28,960 --> 00:21:31,008 然後這個時候是在這裡 325 00:21:31,520 --> 00:21:32,032 相對 326 00:21:32,800 --> 00:21:33,568 這個就是 327 00:21:34,080 --> 00:21:35,104 他那三天在 328 00:21:35,616 --> 00:21:36,896 所以你們要自己把 329 00:21:37,152 --> 00:21:38,176 每一個人的 330 00:21:38,944 --> 00:21:39,712 點mb 331 00:21:40,224 --> 00:21:41,760 以及你對應的這個 332 00:21:43,040 --> 00:21:43,808 那麼 333 00:21:44,320 --> 00:21:44,832 必 334 00:21:45,088 --> 00:21:45,600 改一下 335 00:21:48,416 --> 00:21:50,464 基本上大概是這樣所以我們這個影片 336 00:21:50,976 --> 00:21:54,048 就是把第二組的這個資料我們把他抓上 337 00:21:56,096 --> 00:21:59,168 所以你就趕快配合你的這個不能修改 338 00:21:59,936 --> 00:22:00,704 好玩吧 339 00:22:00,960 --> 00:22:01,472 存', 'tags': '', 'url': '期中.html'}]};