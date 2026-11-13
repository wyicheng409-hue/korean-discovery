/* KOREAN DISCOVERY｜文章資料庫
   新增文章時，複製一個 article 物件並填入欄位即可。
   category 必須使用：Hangul / Daily Korean / Korean Culture / Internet Slang / Language Facts
*/
window.KD_ARTICLES = [

  {
    id: "korean-honorifics",
    title: "韓國人為什麼這麼重視敬語？",
    subtitle: "一句話的語尾，藏著尊重、距離感與人際關係。",
    category: "Daily Korean", categoryLabel: "日常韓文",
    date: "2026.11.13", readTime: "6 MIN READ", author: "EDITORIAL TEAM",
    featured: true, coverClass: "cover-culture", coverText: "존댓말", coverNote: "THE LANGUAGE OF RESPECT",
    excerpt: "為什麼第一次見面常常要先說敬語？認識 존댓말 與 반말，理解韓語如何表達尊重與親近。",
    intro: "如果你看過韓劇，可能會發現角色第一次見面時，常常會先確認年齡、身分，或是彼此能不能改用比較輕鬆的說法。這和韓語中的敬語文化有關。韓語會透過稱呼、詞彙和句尾變化，表達說話者與聽話者之間的關係。對初學者來說，先理解敬語與非敬語的差別，就能少一些溝通上的尷尬。",
    sections: [
      {
        heading: "敬語不只是禮貌，也是在拿捏人際距離",
        paragraphs: [
          "韓語常見的兩種說話方式是 존댓말（敬語／禮貌說法）和 반말（非敬語／親近說法）。敬語通常用在初次見面、不熟悉的人、長輩、老師或正式場合；반말 則常出現在關係親近、彼此熟悉，或雙方已經同意使用輕鬆語氣的情況。",
          "因此，敬語不只是表示「我尊敬你」，也能讓對方知道彼此目前的關係與距離。使用不合適的語氣，可能讓對方覺得太過親近，或感到不自在。"
        ]
      },
      {
        heading: "존댓말 和 반말，聽起來有什麼不同？",
        paragraphs: [
          "對初學者來說，最容易觀察的是句尾。日常禮貌說法常見「-요」，例如 가요（去）、먹어요（吃）；親近的 반말 則可能說 가（去）、먹어（吃）。在較正式的場合，也常聽到「-습니다／-ㅂ니다」這類句尾。",
          "要注意的是，韓語敬語不只有句尾。稱呼、特定動詞和對話情境也可能帶有尊敬意味。例如，對長輩說「吃飯了嗎？」時，可能使用 드세요，而不是一般的 먹어요。"
        ]
      },
      {
        heading: "什麼時候可以改說 반말？",
        paragraphs: [
          "通常不要因為對方看起來年紀較小，就直接改用 반말。初次見面、還不熟悉，或不確定對方偏好時，先使用 존댓말 會比較穩妥。年齡、職場身分、場合正式程度，以及雙方親近程度，都可能影響說話方式。",
          "如果彼此熟悉後想改用 반말，可以先詢問對方是否方便。這樣既自然，也能尊重對方的感受。"
        ]
      }
    ],
    words: [
      { korean: "존댓말", roman: "jeon-daen-mal", meaning: "敬語／禮貌說法", note: "用來表達禮貌與尊重，常用於不熟悉的人或正式情境。" },
      { korean: "반말", roman: "ban-mal", meaning: "非敬語／親近說法", note: "常用於朋友、親近的人，或雙方同意使用輕鬆語氣時。" },
      { korean: "높임말", roman: "no-pim-mal", meaning: "尊敬語", note: "廣義上指用來抬高對方或相關對象的表達方式。" },
      { korean: "말씀", roman: "mal-sseum", meaning: "話、說話（敬語詞）", note: "보다正式或尊敬的說法，常見於 말씀하시다 等表達。" }
    ],
    examples: [
      { korean: "처음 뵙겠습니다. 만나서 반갑습니다.", roman: "cheo-eum boep-get-seum-ni-da. man-na-seo ban-gap-seum-ni-da", meaning: "初次見面，很高興認識你。", usage: "初次見面或較正式的自我介紹場合，可以使用這種有禮貌的說法。" },
      { korean: "선생님, 지금 시간 괜찮으세요?", roman: "seon-saeng-nim, ji-geum si-gan gwaen-cha-neu-se-yo?", meaning: "老師，您現在方便嗎？", usage: "向老師或需要尊重的對象詢問事情時，可以使用 -세요 句尾。" },
      { korean: "혹시 반말로 해도 될까요?", roman: "hok-ssi ban-mal-lo hae-do doel-kka-yo?", meaning: "請問我們可以改用非敬語說話嗎？", usage: "和對方逐漸熟悉後，想確認能否改用比較輕鬆的語氣時使用。" },
      { korean: "오늘 뭐 해?", roman: "o-neul mwo hae?", meaning: "你今天要做什麼？", usage: "這是 반말，適合熟悉的朋友之間，不建議對剛認識的人直接使用。" }
    ],
    takeaways: [
      "존댓말 能表達禮貌與尊重，也能維持適當的人際距離。",
      "選擇敬語或 반말，不只看年齡，也要考慮關係、身分與場合。",
      "不確定怎麼說時，先使用 존댓말；想改用 반말 時，可以先詢問對方。"
    ],
    related: ["hello-korean", "korean-age"]
  },
  {
    id: "hangul-origin",
    title: "韓文是怎麼誕生的？認識訓民正音的故事",
    subtitle: "一套為了讓人民更容易閱讀與書寫而誕生的文字。",
    category: "Hangul", categoryLabel: "韓文字母與發音",
    date: "2026.11.10", readTime: "5 MIN READ", author: "EDITORIAL TEAM",
    featured: true, coverClass: "cover-hangul", coverText: "한글", coverNote: "THE BEAUTY OF HANGUL",
    excerpt: "你知道韓文不是自然慢慢演變而來，而是有人為了讓百姓更容易讀寫，特別創造出來的文字嗎？",
    intro: "韓文的字母系統稱為「한글（Hangul）」。它的誕生故事很特別：在 15 世紀以前，朝鮮半島主要使用漢字記錄文字，對一般百姓來說，學習和使用並不容易。於是，世宗大王希望創造一套更容易學習的文字。",
    sections: [
      { heading: "一套為人民而創造的文字", paragraphs: ["1443 年，朝鮮世宗大王主持創制新文字，並於 1446 年正式公布《訓民正音》。這個名稱可以理解為「教導百姓正確發音的文字」。", "設計的核心想法是讓文字更容易學習與使用。韓文字母以簡潔的基本筆畫組合成音節方塊，看起來像一個個方形字，但其實每個方塊都由不同字母組成。"] },
      { heading: "韓文字母如何組合？", paragraphs: ["韓文不是一個字母對應一個方塊，而是把子音和母音組合在一起。例如 ㄱ（g/k）加上 ㅏ（a），就會組成 가（ga）。", "這也是韓文很有趣的地方：看起來像一個完整的字，拆開後卻能看見清楚的組合規則。"] }
    ],
    words: [
      { korean: "한글", roman: "han-geul", meaning: "韓文字母／韓文文字", note: "韓文的文字系統名稱。" },
      { korean: "훈민정음", roman: "hun-min-jeong-eum", meaning: "訓民正音", note: "世宗大王公布新文字時使用的名稱。" },
      { korean: "세종대왕", roman: "se-jong-dae-wang", meaning: "世宗大王", note: "朝鮮王朝第四代國王，與韓文字母的創制密切相關。" }
    ],
    examples: [
      { korean: "한글은 배우기 쉬워요.", roman: "han-geu-reun bae-u-gi swi-wo-yo", meaning: "韓文很容易學習。", usage: "可以用來分享自己對韓文字母的感受。" },
      { korean: "세종대왕이 한글을 만들었어요.", roman: "se-jong-dae-wang-i han-geu-reul man-deu-reo-sseo-yo", meaning: "世宗大王創造了韓文。", usage: "介紹韓文字母歷史時可以使用。" }
    ],
    takeaways: ["韓文的字母系統稱為 한글（Hangul）。", "訓民正音於 1446 年正式公布。", "韓文字母能依規則組合成音節方塊。"],
    related: ["hangul-syllable", "hello-korean"]
  },
  {
    id: "hello-korean",
    title: "第一次見面說什麼？안녕하세요 的日常禮貌",
    subtitle: "一句問候，藏著韓國語言裡的人際距離與禮貌。",
    category: "Daily Korean", categoryLabel: "日常韓文",
    date: "2026.11.08", readTime: "4 MIN READ", author: "EDITORIAL TEAM",
    featured: true, coverClass: "cover-hello", coverText: "안녕!", coverNote: "A LITTLE HELLO",
    excerpt: "打開韓劇最常聽到的問候語，從 안녕하세요 開始認識韓文的禮貌層次。",
    intro: "如果只能先學會一句韓文，那麼 안녕하세요（annyeonghaseyo）絕對是很實用的選擇。它是日常生活中常見的禮貌問候語，第一次見面、走進商店或與不熟悉的人打招呼時都能使用。",
    sections: [
      { heading: "안녕하세요 不只是「你好」", paragraphs: ["안녕하세요 是一種有禮貌、使用範圍很廣的問候方式。它適合對長輩、陌生人、店員或一般不熟悉的人使用。", "韓文會依照說話對象與關係調整語氣。初學者還不熟悉不同語尾時，先使用 안녕하세요 通常是穩妥的選擇。"] },
      { heading: "那 안녕 呢？", paragraphs: ["안녕（annyeong）是比較親近、輕鬆的說法，可以用在朋友或年紀相近、關係熟悉的人之間。它也能依情境表示打招呼或道別。", "簡單記住：不確定對方是否熟悉時，先用 안녕하세요。"] }
    ],
    words: [
      { korean: "안녕하세요", roman: "an-nyeong-ha-se-yo", meaning: "你好（禮貌）", note: "適合初次見面、一般社交場合。" },
      { korean: "안녕", roman: "an-nyeong", meaning: "嗨／再見（親近語氣）", note: "常用於朋友、熟人之間。" },
      { korean: "처음 뵙겠습니다", roman: "cheo-eum boep-get-seum-ni-da", meaning: "初次見面", note: "比一般問候更正式、客氣。" }
    ],
    examples: [
      { korean: "안녕하세요. 저는 민수예요.", roman: "an-nyeong-ha-se-yo. jeo-neun min-su-ye-yo", meaning: "你好，我是民秀。", usage: "初次自我介紹時可以這樣說。" },
      { korean: "안녕! 오늘 뭐 해?", roman: "an-nyeong! o-neul mwo hae?", meaning: "嗨！你今天要做什麼？", usage: "與熟悉的朋友聊天時使用。" }
    ],
    takeaways: ["안녕하세요 是最實用的基本禮貌問候語。", "안녕 的語氣比較親近，適合熟人。", "不確定關係時，先使用禮貌說法最安全。"],
    related: ["hangul-origin", "korean-age"]
  },
  {
    id: "korean-age",
    title: "韓國年齡文化：為什麼大家常問你幾歲？",
    subtitle: "年齡不只是一個數字，也可能影響稱呼與說話方式。",
    category: "Korean Culture", categoryLabel: "韓國文化",
    date: "2026.11.05", readTime: "6 MIN READ", author: "EDITORIAL TEAM",
    featured: true, coverClass: "cover-culture", coverText: "나이", coverNote: "AGE & CULTURE",
    excerpt: "在韓國影劇裡，角色常常先確認彼此年齡。這背後其實和稱呼、禮貌及人際互動有關。",
    intro: "看韓劇或綜藝時，你可能注意到角色認識不久，就會問對方是哪一年出生。這不一定是想打聽隱私，而是年齡在韓國的日常互動中，常常與稱呼和語氣選擇有關。",
    sections: [
      { heading: "年齡會影響稱呼方式", paragraphs: ["韓語中有不少稱呼會依照對方與自己的年齡、性別及關係而改變。例如，年紀較小的人可能稱呼年長男性為 오빠（oppa），稱呼年長女性為 언니（eonni）。", "不過，實際使用仍要看雙方關係、場合與對方意願，並不是只要年紀大就一定能直接使用某個稱呼。"] },
      { heading: "現在的韓國年齡制度", paragraphs: ["韓國自 2023 年起，法律與行政等一般情況原則上統一採用國際通用的周歲計算方式。生活對話中，出生年份仍可能被拿來理解同輩關係或學年背景。", "因此，影劇中聽到的年齡話題，往往不只是計算歲數，也是在確認彼此如何互動。"] }
    ],
    words: [
      { korean: "나이", roman: "na-i", meaning: "年齡", note: "詢問年齡時常見的單字。" },
      { korean: "오빠", roman: "o-ppa", meaning: "哥哥／年長男性（女性稱呼）", note: "女性對親近的年長男性使用。" },
      { korean: "언니", roman: "eon-ni", meaning: "姊姊／年長女性（女性稱呼）", note: "女性對親近的年長女性使用。" }
    ],
    examples: [
      { korean: "몇 살이에요?", roman: "myeot sa-ri-e-yo?", meaning: "你幾歲？", usage: "一般禮貌語氣的年齡詢問。" },
      { korean: "저는 2004년생이에요.", roman: "jeo-neun i-cheon-sa-nyeon-saeng-i-e-yo", meaning: "我是 2004 年出生的。", usage: "用出生年份回答，日常對話中很常見。" }
    ],
    takeaways: ["年齡可能影響韓語稱呼與語氣選擇。", "오빠、언니 等稱呼要看關係與使用情境。", "韓國自 2023 年起一般法律與行政情況原則上採周歲計算。"],
    related: ["hello-korean", "korean-lol"]
  },
  {
    id: "korean-lol",
    title: "ㅋㅋ、ㅎㅎ 到底差在哪？韓國網路笑聲圖鑑",
    subtitle: "聊天室裡的幾個韓文字母，讓語氣變得不一樣。",
    category: "Internet Slang", categoryLabel: "網路流行語",
    date: "2026.11.02", readTime: "3 MIN READ", author: "EDITORIAL TEAM",
    featured: false, coverClass: "cover-slang", coverText: "ㅋㅋㅋ", coverNote: "TEXTING IN KOREA",
    excerpt: "韓國朋友傳來一串 ㅋㅋㅋ，不一定是在大笑；不同寫法也會帶出不同的聊天氣氛。",
    intro: "在韓國社群、留言區或聊天訊息裡，ㅋㅋ 和 ㅎㅎ 非常常見。它們都是用韓文字母呈現笑聲，但給人的語氣感受不太一樣，常常要搭配前後文理解。",
    sections: [
      { heading: "ㅋㅋ：比較直接、俐落的笑", paragraphs: ["ㅋㅋ 是以子音 ㅋ 重複呈現笑聲，感覺有點像中文訊息裡的「哈哈」。重複越多，有時會讓笑聲看起來越強烈，但也可能只是打字習慣。", "在朋友聊天或網路留言中很常見，正式工作訊息則要斟酌使用。"] },
      { heading: "ㅎㅎ：比較柔和的笑", paragraphs: ["ㅎㅎ 以 ㅎ 重複呈現笑聲，視情境可能帶有比較溫和、靦腆或客氣的感覺。", "不過，網路語氣沒有絕對規則。同一句話加上 ㅋㅋ 或 ㅎㅎ，讀起來就可能有不同感受。"] }
    ],
    words: [
      { korean: "ㅋㅋ", roman: "keu-keu", meaning: "哈哈／笑聲", note: "常見於輕鬆聊天或網路留言。" },
      { korean: "ㅎㅎ", roman: "heu-heu", meaning: "呵呵／輕笑", note: "有時感覺比較柔和、客氣。" },
      { korean: "웃기다", roman: "ut-gi-da", meaning: "好笑", note: "描述某件事很好笑。" }
    ],
    examples: [
      { korean: "진짜 웃겨 ㅋㅋㅋ", roman: "jin-jja ut-gyeo keu-keu-keu", meaning: "真的太好笑了哈哈哈。", usage: "朋友分享有趣的事情時可以使用。" },
      { korean: "고마워요 ㅎㅎ", roman: "go-ma-wo-yo heu-heu", meaning: "謝謝你呵呵。", usage: "想讓訊息感覺柔和一點時可能會使用。" }
    ],
    takeaways: ["ㅋㅋ 和 ㅎㅎ 都能表示笑聲。", "ㅋㅋ 常給人比較直接的笑感，ㅎㅎ 有時較柔和。", "網路語氣需要搭配情境與前後文判斷。"],
    related: ["hello-korean", "hangul-syllable"]
  },
  {
    id: "hangul-syllable",
    title: "為什麼韓文像一個個方塊？拆解音節組合",
    subtitle: "看懂子音與母音怎麼排在一起，就能讀懂韓文的基本結構。",
    category: "Language Facts", categoryLabel: "有趣的語言現象",
    date: "2026.10.29", readTime: "5 MIN READ", author: "EDITORIAL TEAM",
    featured: false, coverClass: "cover-blocks", coverText: "가나다", coverNote: "BUILD A SYLLABLE",
    excerpt: "韓文看起來像方方正正的圖形，其實每個音節方塊都藏著字母組合的邏輯。",
    intro: "第一次看到韓文的人，常覺得它像一排排小方塊。其實這些方塊不是單一圖案，而是由子音和母音依照規則排列而成的音節。",
    sections: [
      { heading: "一個方塊，就是一個音節", paragraphs: ["以 가（ga）為例，它由 ㄱ（g/k）和 ㅏ（a）組成。兩個字母放在同一個音節方塊裡，就形成一個可以發音的單位。", "如果母音是左右型，例如 ㅏ，子音通常放在左邊；如果母音是上下型，例如 ㅗ，子音通常放在上方。"] },
      { heading: "有時候下方還會多一個字母", paragraphs: ["像 강（gang）這個音節，除了 ㄱ 和 ㅏ，下面還有 받침（batchim，收尾子音）ㅇ。這個位置稱為終聲，會影響音節最後的發音。", "先掌握「子音＋母音」的基本概念，就能開始拆解許多韓文字了。"] }
    ],
    words: [
      { korean: "가", roman: "ga", meaning: "由 ㄱ + ㅏ 組成的音節", note: "子音在左、母音在右。" },
      { korean: "고", roman: "go", meaning: "由 ㄱ + ㅗ 組成的音節", note: "子音在上、母音在下。" },
      { korean: "강", roman: "gang", meaning: "江／河（依詞彙而定）", note: "下方的 ㅇ 是收尾子音。" }
    ],
    examples: [
      { korean: "가방", roman: "ga-bang", meaning: "包包。", usage: "可以拆成 가 + 방 兩個音節。" },
      { korean: "고기", roman: "go-gi", meaning: "肉。", usage: "可以觀察 고、기 兩個音節的排列。" }
    ],
    takeaways: ["韓文字看似方塊，其實是字母組成的音節。", "基本結構通常包含子音與母音。", "音節下方可能出現收尾子音 받침。"],
    related: ["hangul-origin", "korean-lol"]
  }
];
