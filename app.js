const answerBook = {
  dailyOpeners: [
    "同学~~认真听讲：今天也可以问小兔子。",
    "妈呀，某只猪今天居然上线了。",
    "怪力乱神已坐好，小猪猪请发言。",
    "今天的大白菜骨头汤正在咕嘟咕嘟。",
    "哎呀是这样的，问题可以丢过来了。",
    "小兔子开始营业，先装懂三分钟。",
    "咯咯哒，今天适合问一点玄学。",
    "某只猪请坐，今日答案马上开锅。",
    "我跟你说，今天的小兔子很会算。",
    "种太阳~种太阳~先把问题照亮。",
    "小吕同学请发言，怪力乱神在听。",
    "今天不许内耗，有事问小兔子。",
    "大白菜骨头汤组合今日正常营业。",
    "小兔子客服系统已上线，嘻嘻。",
    "某只猪今日提问额度：无限。",
    "别怕，命运和小兔子都在路上。",
    "今日开场白：先可爱，再判案。",
    "怪力乱神掐指一算，你会来问。",
    "同学~~认真听讲：答案可能在汤里。",
    "嘿嘿嘿，小兔子今天也偏心。",
  ],
  nicknames: ["小猪", "小猪猪", "傻猪猪", "同学", "小吕同学", "某只猪"],
  prefixes: ["妈呀", "哎呀", "我跟你说", "我告诉你啊", "怪力乱神说", "咯咯哒"],
  suffixes: ["嘻嘻。", "嘿嘿嘿。", "大白菜骨头汤认证。", "种太阳~种太阳~", "同学~~认真听讲。"],
  realRabbit: [
    "去找现实里的小兔子聊天。",
    "这个问题建议直接问小孔同学。",
    "小兔子客服系统已上线。",
    "来嘛，我听你说。",
    "别自己憋着，快来找我。",
    "本题需要线下贴贴解决。",
    "快来，大白菜骨头汤集合。",
    "怪力乱神建议：找我。",
    "这题交给现实里的我。",
    "快来，我给你认真听讲。",
    "某只猪需要小兔子充电。",
    "别独自开会，拉我进群。",
  ],
  categories: [
    {
      id: "loveActive",
      keywords: ["主动", "发消息", "联系", "找她", "找他", "想她", "想他", "表白", "靠近"],
      answers: [
        "发吧，但发完不许盯手机。",
        "可以靠近一点点，别冲太猛。",
        "想找就找嘛。",
        "真诚一点就好。",
        "去试试，小猪也很珍贵。",
        "可以主动，但不要卑微。",
        "发完就去生活。",
        "想念不是错误。",
        "喜欢就别憋太久。",
        "可以说，但说轻一点。",
        "先丢一个小信号看看。",
        "今天适合主动一点点。",
      ],
    },
    {
      id: "loveCool",
      keywords: ["放下", "等等看", "冷淡", "不回", "忽冷忽热", "上头", "喜欢我吗", "讨厌我吗"],
      answers: [
        "先别上头。",
        "等等看，对方也要有动作。",
        "别把自己放得太低。",
        "今天先把心收回来。",
        "别追太满啦。",
        "这题先观察。",
        "你也很重要。",
        "不急，真的不急。",
        "不要替对方脑补答案。",
        "先看行动，别只听话。",
        "喜欢也要有边界。",
        "再等等，别急着下结论。",
      ],
    },
    {
      id: "comfort",
      keywords: ["难过", "委屈", "伤心", "哭", "emo", "不开心", "崩溃", "累", "撑不住"],
      answers: [
        "不是你的错，先抱抱。",
        "小猪已经做得很棒了啊。",
        "别自己为难自己。",
        "小兔子一直都在。",
        "今天先不坚强也可以。",
        "我站你这边，当然站你这边。",
        "委屈先交给我保管。",
        "难过可以，不许骂自己。",
        "今天允许小猪软趴趴。",
        "有些事不是你能掌控的。",
        "先哭也行，我接着。",
        "命运安排小兔子陪你。",
      ],
    },
    {
      id: "overthinking",
      keywords: ["想太多", "胡思乱想", "不安", "没安全感", "是不是", "担心", "焦虑", "害怕"],
      answers: [
        "不要胡思乱想了！",
        "快来找我聊天，立刻马上。",
        "大脑又开始开会了。",
        "先暂停推理。",
        "现在先睡觉。",
        "你需要小兔子，不需要脑补。",
        "别审判宇宙了。",
        "先吃点东西。",
        "不要用猜的伤害自己。",
        "现在不是破案时间。",
        "脑内小剧场先关灯。",
        "证据不足，不许乱判。",
      ],
    },
    {
      id: "selfWorth",
      keywords: ["不好", "没用", "失败", "讨厌自己", "不值得", "自责", "我很差", "我是不是很"],
      answers: [
        "你已经很好了，真的。",
        "你只是今天累了。",
        "不许这样说自己。",
        "某只猪今天也很可爱。",
        "你值得很多很多爱。",
        "这不是你的全部。",
        "漂亮小猪不许自我攻击。",
        "怪力乱神说：你没问题。",
        "你只是暂时没电了。",
        "你居然怀疑自己。",
        "别拿一天否定全部。",
        "今天先对自己好一点。",
      ],
    },
    {
      id: "lifeChoice",
      keywords: ["要不要", "该不该", "去不去", "买不买", "要不要去", "要不要买", "该不该去", "该不该买"],
      answers: [
        "先做一点点就好。",
        "今天目标：别为难自己。",
        "可以，但别透支自己。",
        "去试试，不喜欢再撤。",
        "先洗脸，人生会清楚点。",
        "选轻松一点的。",
        "先选不会后悔太久的。",
        "可以试试，但留条退路。",
        "今天别做太重的决定。",
        "答案是：先别逼自己。",
      ],
    },
    {
      id: "shopping",
      keywords: ["买不买", "要不要买", "该不该买", "下单", "购物", "这个能买吗", "值得买吗"],
      answers: [
        "买，开心三天就值。",
        "先别买，明天还想再说。",
        "喜欢很久就可以买。",
        "半夜上头先不要。",
        "钱包同学也要认真听讲。",
        "可以，但别透支自己。",
        "先收藏，明天再判。",
        "如果真的会常用，批准。",
        "只是一时心动就缓缓。",
        "小猪开心也很重要。",
      ],
    },
    {
      id: "goOut",
      keywords: ["去不去", "要不要去", "该不该去", "出门", "出去玩", "见面", "赴约"],
      answers: [
        "去，出去晒晒小猪。",
        "不去，今天适合宅宅充电。",
        "想去就去，不想就撤。",
        "可以去，但别勉强自己。",
        "今天适合出门换换气。",
        "不想社交就先不社交。",
        "去一下，不舒服就回来。",
        "怪力乱神批准出门。",
        "先看体力，再看心情。",
        "本题建议：轻轻去一下。",
      ],
    },
    {
      id: "food",
      keywords: ["吃什么", "喝什么", "吃啥", "晚饭", "午饭", "早饭", "点什么", "想吃"],
      answers: [
        "吃热乎的，怪力乱神批准。",
        "今天适合喝点汤。",
        "选你第一眼想吃的。",
        "不要饿着小猪猪。",
        "吃点暖的，心会软一点。",
        "大白菜骨头汤正在招手。",
        "先吃饭，宇宙才准。",
        "吃喜欢的，今天不审判。",
        "本题答案：香香的那份。",
        "随便吃可以，别不吃。",
        "吃饱再思考命运。",
        "小兔子建议：来点好吃的。",
      ],
    },
    {
      id: "rabbitStatus",
      keywords: ["你在做什么", "你在干嘛", "你干嘛呢", "在吗", "你是谁", "小兔子在干嘛", "怪力乱神在干嘛"],
      answers: [
        "我在等某只猪提问。",
        "小兔子在认真装懂。",
        "我在锅边守着答案。",
        "怪力乱神正在营业。",
        "我在给小猪猪攒好运。",
        "在呀，快说快说。",
        "小兔子客服系统在线。",
        "我在听你讲话，嘻嘻。",
        "正在煮大白菜骨头汤。",
        "在偷偷偏心某只猪。",
        "我在这儿，一直都在。",
        "正在种太阳，顺便想你。",
      ],
    },
    {
      id: "night",
      keywords: ["晚安", "睡觉", "失眠", "熬夜", "困", "明天", "晚上"],
      answers: [
        "睡觉，今天到此为止。",
        "晚安小猪猪，明天再判。",
        "先休息，答案会长出来。",
        "不许熬太晚。",
        "今天的小猪营业结束。",
        "把烦恼放门口，先睡。",
        "小兔子给你盖好被子。",
        "今晚不想了，乖乖睡。",
        "夜里不要做重大决定。",
        "睡醒再说，真的。",
        "闭眼，怪力乱神守夜。",
        "现在适合钻进被窝。",
      ],
    },
    {
      id: "mystic",
      keywords: ["签", "签文", "抽签", "答案", "命运", "玄学", "未来", "运气", "随机"],
      answers: [
        "今日宜等风，不宜硬猜。",
        "答案在雾里，先别追。",
        "先把心放回口袋。",
        "月亮没说不可以。",
        "今天适合轻轻靠近。",
        "不要急着给梦命名。",
        "风会绕路，但会来。",
        "三分靠天意，七分靠吃饭。",
        "留一点余地给命运。",
        "会有温柔的回声。",
        "今天先别逼问宇宙。",
        "好事正在小火慢炖。",
        "答案藏在下一次心软里。",
        "云还没散，先等等。",
        "今日签：慢慢就会亮。",
        "别急，命运认识路。",
        "先种太阳，再问结局。",
        "这件事会自己开花。",
        "今晚不判，明早再看。",
        "大白菜骨头汤正在保佑。",
        "有些门会自己开。",
        "小小勇敢，偷偷生效。",
        "答案在路边晃尾巴。",
        "先别敲定，让它飘一会儿。",
      ],
    },
    {
      id: "absurd",
      keywords: ["宇宙", "抽象", "太阳", "小兔子", "小猪", "怪力乱神", "大白菜", "骨头汤", "可爱"],
      answers: [
        "呱呱呱，答案是种太阳。",
        "小兔子装懂中。",
        "大白菜骨头汤正在咕嘟。",
        "这是天才小猪问题。",
        "怪力乱神掐指一算：可以。",
        "宇宙说先吃饭。",
        "先把自己照亮。",
        "答案飘走了，但它说你很萌。",
        "本题答案藏在汤底。",
        "宇宙打了个嗝：可以。",
        "此题需要怪力乱神加班。",
        "小兔子宣布：此题可爱。",
      ],
    },
  ],
  fallback: [
    "没听懂，换个问法嘛。",
    "小兔子语言系统冒烟了。",
    "本怪力乱神刚刚掉线三秒。",
    "某只猪重新组织一下问题。",
    "妈呀，这题太大了。",
    "换一个换一个，嘻嘻。",
    "小兔子装懂失败。",
    "这个问题先放进汤里煮煮。",
    "呱呱呱，信号不好。",
    "大白菜骨头汤拒绝解析。",
    "本题超出小兔子脑容量。",
    "答案跑去种太阳了。",
  ],
  oracleAnswers: {
    general: [
      "可以，怪力乱神批准。",
      "不可以，先把自己放第一位。",
      "等一等，答案还没落地。",
      "照你想的那样去做。",
      "先不要急着决定。",
      "这件事会慢慢变清楚。",
      "小猪猪，你心里其实有答案。",
      "今天适合轻轻开始。",
      "不要勉强，顺其自然。",
      "可以试试，但别押全部。",
      "先完成眼前的小事。",
      "别让压力打乱节奏。",
      "保持开放，答案会来。",
      "这不是坏事，别怕。",
      "先笑一下，事情没那么吓人。",
      "同学~~认真听讲：慢慢来。",
      "不要犹豫太久。",
      "此事宜小步前进。",
      "答案在路上，别催它。",
      "今天先选让自己舒服的。",
      "现在不是最好的时机。",
      "机会会自己冒头。",
      "相信第一反应一次。",
      "别把简单事情想复杂。",
      "这是一个很好的开始。",
      "小猪猪会比想象中顺利。",
      "大白菜骨头汤认证：可以。",
      "怪力乱神说：留点余地。",
      "妈呀，别自己吓自己。",
      "这件事不用马上判。",
      "先把心放回口袋。",
      "不要把答案交给焦虑。",
      "今天宜勇敢，忌内耗。",
      "可以，但要温柔一点。",
      "不急，风会转向。",
      "这一次让步吧。",
      "这一次坚持吧。",
      "换个方向会更好。",
      "把问题放小一点。",
      "答案会在行动里出现。",
      "不要轻易否定自己。",
      "再观察一下。",
      "现在就开始也不晚。",
      "未来会感谢现在的你。",
      "你会发现它值得。",
      "别太较真，先开心。",
      "小小勇敢，偷偷生效。",
      "今天先不要和自己较劲。",
      "答案藏在下一次心软里。",
      "月亮没说不可以。",
    ],
    action: [
      "去吧，小猪猪。",
      "可以去，别想太多。",
      "先做一次看看。",
      "大胆一点，怪力乱神撑腰。",
      "现在就是绝佳时机。",
      "别只说不做。",
      "迈出去，答案会跟上。",
      "可以冲，但记得保护自己。",
      "先发出一个小信号。",
      "照做吧，别怂。",
      "这次不要拖。",
      "同学~~认真听讲：行动起来。",
      "做了再说，嘻嘻。",
      "抓住它，不要等了。",
      "今天适合主动一点点。",
      "先试，不喜欢再撤。",
      "认真起来，小猪会赢。",
      "你需要的是开始。",
      "勇敢五分钟就够了。",
      "可以，说出来吧。",
      "值得去争取。",
      "往前走，小兔子看着呢。",
      "这件事适合马上开锅。",
      "不要等风，自己种太阳。",
    ],
    wait: [
      "再等等，别急着冲。",
      "现在不宜硬碰硬。",
      "缓一缓，答案会软一点。",
      "把它放一晚再看。",
      "先别敲定，让它飘一会儿。",
      "等风来，不要追风。",
      "今天不判，明天再看。",
      "先停一下，小猪猪。",
      "不急，命运认识路。",
      "现在适合观望。",
      "先别加码。",
      "让事情自己沉一沉。",
      "别让一时情绪做主。",
      "等一个更好的机会。",
      "这事需要一点耐心。",
      "云还没散，先等等。",
      "暂且不要判断。",
      "先收手，不是认输。",
      "小兔子建议：缓缓。",
      "答案还在锅里煮。",
    ],
    comfort: [
      "别难过，你是最棒的。",
      "小猪已经做得很好了。",
      "不是你的错，先抱抱。",
      "别自己为难自己。",
      "有些事本来就不可控。",
      "小兔子会一直都在。",
      "来找现实里的小兔子聊天。",
      "你不会一个人的。",
      "今天先不坚强也可以。",
      "把委屈交给我保管。",
      "哭一下也没关系。",
      "你值得很多很多爱。",
      "不要压抑自己的天性。",
      "坏心情快要消失了。",
      "会有好转的，小猪猪。",
      "给自己一个肯定。",
      "命运早就安排小兔子给你了。",
      "没事，有我在。",
      "你只是需要休息一下。",
      "糖吃多了会傻，难过多了也要停。",
    ],
    love: [
      "用你自己的方式说。",
      "不要太勉强。",
      "给惊喜留出空间。",
      "值得期待。",
      "不要改变自己。",
      "说出来吧。",
      "先别磨磨蹭蹭了。",
      "这不是普通约会。",
      "别把心全递出去。",
      "喜欢也要有边界。",
      "可以主动，但别卑微。",
      "真诚一点就很好。",
      "慢慢靠近，不要慌。",
      "先说清楚再接吻。",
      "在一起看看能不能有火花。",
      "不要等太久。",
      "你会找到安慰。",
      "保持你的好奇心。",
      "它比你想象的更近。",
      "爱还没有结束。",
    ],
    playful: [
      "呱呱呱，答案是种太阳。",
      "大白菜骨头汤开始冒泡。",
      "本题建议：先可爱一下。",
      "妈呀，这题有点玄。",
      "咯咯哒，宇宙点头了。",
      "小兔子掐指一算：可以。",
      "答案藏在汤底。",
      "某只猪今日好运加载中。",
      "怪力乱神已经偷偷盖章。",
      "种太阳~种太阳~先把自己照亮。",
      "今天适合装傻通过。",
      "答案晃了一下尾巴。",
      "小猪猪别慌，锅还热着。",
      "此题交给命运翻页。",
      "大白菜骨头汤说：如你所愿。",
      "小兔子宣布：这题有趣。",
      "先亲近快乐，再考虑逻辑。",
      "宇宙说：嘿嘿嘿。",
      "今日幸运词：慢慢来。",
      "本怪力乱神建议保留神秘感。",
    ],
    book: [
      "别难过，小猪猪已经很棒。",
      "时间会替某只猪证明一切。",
      "需要一点很认真的努力。",
      "从现在开始也不晚。",
      "改变一下日常节奏。",
      "遇上了才知道答案。",
      "带一点冒险精神。",
      "允许自己先休息一下。",
      "好运正在偷偷靠近。",
      "避开第一个冲动答案。",
      "寻求帮助会更顺利。",
      "需要耐心，咯咯哒。",
      "实际一点会更好。",
      "合作会是关键。",
      "认真考虑这个机会。",
      "早点去做，别拖。",
      "无需多问，尽力去做。",
      "别让压力打乱节奏。",
      "也许会有好转。",
      "是时候换个打算了。",
      "不用怀疑了，小猪猪。",
      "不要陷进情绪里。",
      "不要犹豫太久。",
      "别浪费时间啦。",
      "先完成别的小事。",
      "专注眼下的生活。",
      "听听别人的引导。",
      "也听听专业建议。",
      "按照自己的意愿。",
      "坚持会有回报。",
      "调查清楚再行动。",
      "这不太可能失败。",
      "这是一段奇妙旅程。",
      "会变成难忘的事。",
      "它会让事情有趣。",
      "这件事还不确定。",
      "木已成舟，别回头。",
      "很难，但有价值。",
      "别人会重新看见你。",
      "这会是一种享受。",
      "它会带来好运。",
      "前路还不可预测。",
      "这不太明智。",
      "它可能要付出代价。",
      "现在就是好时机。",
      "不值得反抗。",
      "是你该走的时候。",
      "保持开放的心态。",
      "先不要让别人知道。",
      "笑一下，事情会松动。",
      "摆脱眼前的束缚。",
      "让它过去吧。",
      "为什么不列出原因？",
      "也许可以。",
      "一直走下去。",
      "你不会一个人的。",
      "只做一次就好。",
      "注意细节，小吕同学。",
      "为意外做好准备。",
      "换一个方法试试。",
      "真正努力一下。",
      "重新考虑优先级。",
      "尊重规则，别乱冲。",
      "寻找更多选择。",
      "很快就会解决。",
      "整个宇宙都会来帮你。",
      "结果可能会惊喜。",
      "这需要冒险一试。",
      "多花点时间决定。",
      "那可能会浪费钱。",
      "这超出你的控制。",
      "办法暂时不明显。",
      "机会不会等太久。",
      "事情很快会变化。",
      "结果会是好的。",
      "保持乐观，嘻嘻。",
      "障碍会被克服。",
      "这是制定新计划的时机。",
      "先冷静，再决定。",
      "相信自己的直觉。",
      "别忘了最初的想法。",
      "试一个不太可能的方法。",
      "现在不太适合。",
      "你会慢慢提升。",
      "换一种方式也可以。",
      "等一等。",
      "等待更好的机会。",
      "晴天正在路上。",
      "注意你的节奏。",
      "你需要适应一下。",
      "不会失望的。",
      "你会庆幸自己做了。",
      "学会妥协。",
      "需要了解更多信息。",
      "主动一点会更好。",
      "你可能会后悔。",
      "糊涂一点也没关系。",
      "不必替不可控的事担心。",
      "不要忘记微笑。",
      "看看会发生什么。",
      "失去的会换种方式回来。",
      "状态不对就先停。",
      "或许需要突破。",
      "这不合适。",
      "换一个方向。",
      "放轻松，很简单。",
      "也许会迟到，但会来。",
      "行动会改变现状。",
      "奇迹会降临。",
      "放手吧，小猪猪。",
      "学会珍惜。",
      "调整心情再出发。",
      "坚持这份努力。",
      "不要刻意隐藏。",
      "及时行乐。",
      "甜一点会解决问题。",
      "你不是不在意。",
      "不用拿出最棒状态。",
      "会因为行动而快乐。",
      "你很棒，自信起来。",
      "答案在你心里。",
      "停止 emo，来找小兔子。",
      "打开窗，会有风来。",
      "自己选的路也要走完。",
      "重要的东西会帮你过渡。",
      "分不清好坏也没关系。",
      "高兴起来吧，你这么厉害。",
      "随波逐流未必是坏事。",
      "需要一点孤勇。",
      "问问自己为什么。",
      "见好就收。",
      "试着去爱。",
      "答案就在身边。",
      "珍惜身边的人。",
      "这是必经的过程。",
      "马上会有期待的事。",
      "每天做一点就好。",
      "主动一点，人生会不同。",
      "以后再说。",
      "会很棒的。",
      "会很顺利。",
      "会感到庆幸。",
      "未来会甜的。",
      "你会获得支持。",
      "你说了算。",
      "准备迎接意外结果。",
      "出门也许会遇到惊喜。",
      "别指望所有人都懂你。",
      "不要要求太多。",
      "别辜负自己就好。",
      "千万不能失败，认真点。",
      "另择吉日。",
      "学会自我安慰。",
      "尽人事，听天命。",
      "带着好奇心去试试。",
      "很多事会慢慢好起来。",
      "时间会告诉你一切。",
      "相信最初的想法。",
      "眼光放远一点。",
      "研究它，然后享受它。",
      "跟着靠谱的人走。",
      "值得争取。",
      "这是必然的，别抗拒。",
      "不要刻意压抑。",
      "背不动就放下。",
      "回家吧，家是避风港。",
      "慢下来，某只猪。",
      "挥手道别也可以。",
      "未来可期。",
      "平平安安就很好。",
      "别选错的。",
      "重要的事必须做。",
      "用平淡的心态追求。",
      "一切皆有可能。",
      "控制自己的情绪。",
      "顺其自然。",
      "鲜花会铺满路。",
      "暂且不要判断。",
      "别一成不变。",
      "享受全心全意的付出。",
      "你站在重要的位置。",
      "大多数人会支持你。",
      "慢些，我们会更快。",
      "需要直面残酷。",
      "回头看看。",
      "当然可以。",
      "别傻了，小猪猪。",
      "等待，不要急。",
      "伤口会很快愈合。",
      "如你所愿。",
      "悄悄躲开也行。",
      "完美的。",
      "不要马上做决定。",
      "浪费光阴可不行。",
      "停止向前，先看看。",
      "再也不要见也可以。",
      "你有必要傻一点。",
      "会忘记的。",
      "只是梦一场。",
      "小心疼也没关系。",
      "车到山前必有路。",
      "试着慷慨一点。",
      "戒掉过分急躁。",
      "不要隐藏起来。",
      "有些话憋不住就说。",
      "别耽于怀旧。",
      "放在心里会好一点。",
      "一个人安静待会儿。",
      "会让身边的人温暖。",
      "看见的未必是真的。",
      "这是件乐事。",
      "胜券在握。",
      "突如其来的幸福。",
      "未来会变得忙碌。",
      "别轻易相信表象。",
      "特殊见解会出现。",
      "值得喝一杯庆祝。",
      "先观望，别急。",
      "还有另一种情况。",
      "照你想的去做。",
      "量力而行。",
      "但行好事，莫问前程。",
      "迷途慢慢也会有归处。",
      "适度坚持就好。",
      "保留你的选择权。",
      "贴近心灵一点。",
      "把它当成游戏。",
      "清楚自己想要什么。",
      "确认无法抗拒再行动。",
      "当作演习，别太紧张。",
      "让快乐先发生。",
      "调情一下也未尝不可。",
      "尽快吧。",
      "克服困难会有奖励。",
      "现在只是一个阶段。",
      "从头开始努力。",
      "抱紧自己，小猪猪。",
      "先说清楚再决定。",
      "让它自然发展。",
      "保留一点秘密。",
      "厚着脸皮，你来掌控。",
      "照吩咐去做。",
      "把事情搞清楚。",
      "现在请保持秘密。",
      "先问后答。",
      "等别人邀请也行。",
      "制定基本计划。",
      "用想象力解决它。",
      "尽快处理。",
      "克服困难。",
      "这只是一个阶段。",
      "慢慢了解。",
      "从中找到安慰。",
      "留出空间。",
      "靠近一点，是唯一确定的方法。",
    ],
  },
  softMystic: [
    "答案在雾里，先别追。",
    "云还没散，先等等。",
    "留一点余地给命运。",
    "这件事会自己开花。",
    "小小勇敢，偷偷生效。",
    "先别敲定，让它飘一会儿。",
  ],
  categoryMystic: {
    food: [
      "今天的胃会自己指路。",
      "答案在锅里冒泡。",
      "先吃热乎的，心会亮一点。",
      "香香的那份正在召唤。",
    ],
    rabbitStatus: [
      "小兔子在答案旁边蹲着。",
      "怪力乱神正在偷偷营业。",
      "我在汤锅边等某只猪。",
      "小兔子信号满格中。",
    ],
    comfort: [
      "先抱抱，别急着解释难过。",
      "委屈会过去，小兔子不会走。",
      "今天先把自己抱紧一点。",
      "坏心情会散，小兔子会在。",
    ],
    overthinking: [
      "脑内小剧场先落幕。",
      "证据没来，先别判案。",
      "别追着雾跑，先回来。",
      "今天不适合审判宇宙。",
    ],
    night: [
      "夜里不判案，梦里种太阳。",
      "先睡，答案明天会软一点。",
      "月亮值班，小猪休息。",
      "被窝已经批准你逃跑。",
    ],
    lifeChoice: [
      "选轻一点的那条路。",
      "先迈半步，别押全部。",
      "答案会在行动里冒头。",
      "留个退路，也留个勇敢。",
    ],
    shopping: [
      "喜欢会发光，但钱包也会说话。",
      "先放一晚，明天还亮就买。",
      "心动是真的，冲动也可能是真的。",
      "购物车里的答案先睡一觉。",
    ],
    goOut: [
      "出门的风会给答案。",
      "先去半步，不舒服就回来。",
      "今天的路可能有小惊喜。",
      "宅宅也可以慢慢出门。",
    ],
    loveActive: [
      "靠近一点，别把心全递出去。",
      "小信号先飞过去看看。",
      "真诚出门，边界也要出门。",
      "心动可以，自己也要在场。",
    ],
    loveCool: [
      "风没回信，先抱住自己。",
      "别替对方写答案。",
      "心先收回来一点点。",
      "等对方也走一步。",
    ],
  },
};

const matchRules = [
  {
    id: "rabbitStatus",
    priority: 120,
    patterns: [
      /你在(做什么|干嘛|干啥|忙什么)/,
      /(小兔子|怪力乱神)在(做什么|干嘛|干啥)/,
      /^(在吗|在不在|你是谁)$/,
      /想我吗/,
    ],
  },
  {
    id: "food",
    priority: 115,
    patterns: [/吃什么/, /吃啥/, /喝什么/, /(早饭|午饭|晚饭|夜宵)/, /点什么/, /想吃/],
  },
  {
    id: "night",
    priority: 105,
    patterns: [/晚安/, /睡不着/, /失眠/, /熬夜/, /该睡了/, /要睡吗/, /困(了|死|不行)?/],
  },
  {
    id: "comfort",
    priority: 100,
    patterns: [/难过/, /委屈/, /伤心/, /不开心/, /崩溃/, /撑不住/, /想哭/, /好累/, /心情不好/],
  },
  {
    id: "selfWorth",
    priority: 96,
    patterns: [/我(是不是)?(很)?(不好|没用|失败|差劲)/, /讨厌自己/, /不值得/, /自责/, /怪我/],
  },
  {
    id: "overthinking",
    priority: 92,
    patterns: [/想太多/, /胡思乱想/, /没安全感/, /好焦虑/, /好担心/, /害怕/, /是不是.*(烦我|讨厌我|不喜欢我|不理我)/],
  },
  {
    id: "loveActive",
    priority: 88,
    patterns: [
      /(要不要|该不该|能不能|可不可以).*(主动|发消息|联系|找他|找她|表白|靠近)/,
      /(主动|发消息|联系|表白|靠近).*(吗|好不好|行不行)/,
      /想(他|她).*怎么办/,
    ],
  },
  {
    id: "loveCool",
    priority: 84,
    patterns: [
      /(要不要|该不该).*(放下|算了|不理|冷静)/,
      /(不回|冷淡|忽冷忽热|上头)/,
      /(喜欢我吗|讨厌我吗|是不是不喜欢我)/,
    ],
  },
  {
    id: "shopping",
    priority: 112,
    patterns: [/(买不买|要不要买|该不该买|值得买吗|下单|购物车|这个能买吗)/],
  },
  {
    id: "goOut",
    priority: 110,
    patterns: [/(去不去|要不要去|该不该去|出去玩|出门|赴约|见面)/],
  },
  {
    id: "lifeChoice",
    priority: 64,
    patterns: [/(要不要|该不该|能不能|可不可以)/, /去不去/, /买不买/, /选哪个/, /怎么办/],
  },
  {
    id: "mystic",
    priority: 58,
    patterns: [/抽.*签/, /签文/, /今日签/, /玄学/, /命运/, /运气/, /给.*答案/],
  },
  {
    id: "absurd",
    priority: 46,
    patterns: [/宇宙/, /抽象/, /种太阳/, /大白菜/, /骨头汤/, /怪力乱神/, /小猪.*可爱/, /小兔子.*可爱/],
  },
];

const fillerWords = [
  "啊",
  "呀",
  "嘛",
  "呢",
  "吧",
  "啦",
  "哈",
  "么",
  "真的",
  "到底",
  "现在",
  "一下",
  "有点",
];

const cardTypes = [
  { symbol: "☾", mood: "wait" },
  { symbol: "✧", mood: "general" },
  { symbol: "♡", mood: "comfort" },
  { symbol: "☼", mood: "action" },
  { symbol: "✿", mood: "comfort" },
  { symbol: "❀", mood: "love" },
  { symbol: "♢", mood: "general" },
  { symbol: "☁", mood: "wait" },
  { symbol: "⌁", mood: "playful" },
  { symbol: "੯‧̀͡u\\", mood: "playful", compact: true },
  { symbol: "(๑•̀ㅂ•́)و", mood: "action", compact: true },
  { symbol: "՞•ﻌ•՞", mood: "love", compact: true },
  { symbol: "ᜊ( ' ⩊ ' )ᜊ", mood: "playful", compact: true },
  { symbol: "˙ᵕ˙", mood: "general", compact: true },
  { symbol: "⋆｡°✩", mood: "general" },
];

const flowerTypes = [
  { flower: "✿", mood: "general" },
  { flower: "❀", mood: "comfort" },
  { flower: "✾", mood: "love" },
  { flower: "❁", mood: "wait" },
  { flower: "✽", mood: "action" },
  { flower: "✤", mood: "playful" },
];

const petalSymbols = ["·", "✦", "∴", "˖", "°", "♡"];
const LOCAL_USER_KEY = "little-oracle-local-user";
const LOCAL_ACCOUNTS_KEY = "little-oracle-local-accounts";
const DAILY_CHAT_KEY = "little-oracle-daily-chat";
const FAVORITE_REMINDER_KEY = "little-oracle-favorite-reminder";
const VISIT_STREAK_KEY = "little-oracle-visit-streak";
const SECRET_NOTE_KEY = "little-oracle-secret-note";
const ENERGY_BOTTLE_KEY = "little-oracle-energy-bottle";
const WISHES_KEY = "little-oracle-wishes";
const UPDATE_SEEN_KEY = "little-oracle-update-seen-version";
const APP_VERSION_CODE = 2026090303;
const SESSION_DAYS = 7;
const SESSION_MS = SESSION_DAYS * 24 * 60 * 60 * 1000;
const ENERGY_GOAL = 100;
const DAY_MS = 24 * 60 * 60 * 1000;

const secretNotes = [
  "秘密纸条：某只猪今天也被兔兔占卜师偷偷偏心。",
  "纸条轻轻飘过：别忘了，现实里的小兔子一直在。",
  "今日隐藏签：大白菜骨头汤正在给小猪猪攒一点好运。",
  "兔兔占卜师悄悄写下：你已经比昨天更厉害一点点。",
  "秘密小纸条：今天适合吃点好吃的，再把烦恼放小一点。",
  "小兔子盖章：某只猪不用每件事都表现得很厉害。",
  "偷偷告诉你啊：有些好事正在慢慢靠近。",
  "今日纸条：种太阳~种太阳~先把小猪照亮。",
  "怪力乱神夹带私货：你是很值得被爱的同学。",
  "小纸条落下来了：今天也请对自己温柔一点。",
];

const echoSteps = [
  "兔兔正在把旧答案揉成小纸团",
  "撒一点星辰",
  "倒一点露水",
  "蘸一点彩虹",
  "呼噜呼噜重新制作中",
];

const energyRewards = [
  "隐藏夸夸签：某只猪居然坚持来找兔兔这么多天，认真讲，很厉害。",
  "能量瓶奖励：今天允许小猪猪理直气壮地被偏爱一下。",
  "满瓶签文：大白菜骨头汤宣布，某只猪本周好运正在慢慢升温。",
  "兔兔奖励纸条：你不用一直表现得很稳，也会有人喜欢真实的你。",
  "小猪能量满格：今天做什么都可以先把自己放在第一位。",
  "神秘奖励：现实里的小兔子正在远程给你补充一点亮晶晶能量。",
];

const wishPrompts = [
  "问题瓶晃了一下，纸条要浮出来啦。",
  "瓶口出现一点薄荷光，暂存问题正在冒泡。",
  "兔兔占卜师听见瓶子里咕嘟了一声。",
  "漂流问题纸条正在排队出瓶。",
];

const nightOpeners = [
  "晚安模式开启，兔兔占卜师戴着小睡帽听某只猪说话。",
  "月亮值班中，小猪猪的问题可以轻轻放过来。",
  "嘘，夜间答案之书翻开啦，今天不许太用力想事情。",
  "星星已经坐好，某只猪慢慢问，兔兔慢慢答。",
  "夜里适合温柔一点，怪力乱神也小声营业。",
  "小兔子把被角掖好啦，问题可以轻轻丢进来。",
];

let pendingQuestion = "";
let pendingMood = "general";
let drawLocked = false;
let currentUser = null;
let databaseConfigured = true;
let authMode = "login";
let latestAnswer = "";
let latestQuestion = "";

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "请求失败了");
  }

  return data;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getTodayKey() {
  return new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function getIsoDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getYesterdayIsoKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return getIsoDateKey(date);
}

function pickDaily(items) {
  const todayKey = getTodayKey();
  const index = [...todayKey].reduce((sum, char) => sum + char.charCodeAt(0), 0) % items.length;
  return items[index];
}

function isNightTime(date = new Date()) {
  const hour = date.getHours();
  return hour >= 19 || hour < 6;
}

function pickOpeningLine() {
  return isNightTime() ? pickDaily(nightOpeners) : pickDaily(answerBook.dailyOpeners);
}

function applyNightMode() {
  const night = isNightTime();
  const welcome = document.querySelector(".welcome-line");
  document.body.classList.toggle("night-mode", night);
  if (welcome) {
    welcome.textContent = night
      ? "嘘，月亮和兔兔占卜师都在，小猪猪可以轻轻提问"
      : "嘛哩嘛哩哄，怪力乱神已上线，某只猪请提问";
  }
}

function renderInkText(bubble, text) {
  bubble.textContent = "";
  bubble.setAttribute("aria-label", text);
  const chars = [...String(text)];
  chars.forEach((char, index) => {
    const span = document.createElement("i");
    span.textContent = char;
    span.setAttribute("aria-hidden", "true");
    span.style.setProperty("--ink-delay", `${Math.min(index * 0.018, 1.2)}s`);
    bubble.append(span);
  });
}

function normalizeQuestion(question) {
  return question
    .trim()
    .toLowerCase()
    .replace(/[？！?？!！。，、,.~～…\s]/g, "")
    .replace(/(.)\1{2,}/g, "$1$1")
    .replace(/干啥/g, "干嘛")
    .replace(/吃啥/g, "吃什么")
    .replace(/咋办/g, "怎么办")
    .replace(/咋样/g, "怎么样");
}

function getCategoryById(id) {
  return answerBook.categories.find((category) => category.id === id);
}

function matchPattern(question, pattern) {
  return pattern.test(question);
}

function scoreCategoryKeywords(question, category) {
  return category.keywords.reduce((score, keyword) => {
    if (!question.includes(keyword)) {
      return score;
    }

    if (keyword.length <= 1) {
      return score;
    }

    return score + Math.min(18, keyword.length * 3);
  }, 0);
}

function scoreRules(question) {
  return matchRules
    .map((rule) => {
      const matches = rule.patterns.filter((pattern) => matchPattern(question, pattern)).length;
      return {
        id: rule.id,
        score: matches ? rule.priority + matches * 8 : 0,
        source: "rule",
      };
    })
    .filter((item) => item.score > 0);
}

function scoreKeywordFallback(question) {
  if (fillerWords.includes(question)) {
    return [];
  }

  return answerBook.categories
    .map((category) => ({
      id: category.id,
      score: scoreCategoryKeywords(question, category),
      source: "keywords",
    }))
    .filter((item) => item.score >= 12);
}

function chooseCategory(question) {
  const normalized = normalizeQuestion(question);
  const scored = [...scoreRules(normalized), ...scoreKeywordFallback(normalized)]
    .sort((a, b) => b.score - a.score);

  if (!scored.length) {
    return null;
  }

  const winner = scored[0];
  const category = getCategoryById(winner.id);

  if (!category) {
    return null;
  }

  let confidence = "low";

  if (winner.score >= 90) {
    confidence = "high";
  } else if (winner.score >= 45) {
    confidence = "medium";
  }

  return { category, confidence, score: winner.score, source: winner.source };
}

function decorate(answer, categoryId) {
  let result = answer;

  if (Math.random() < 0.45 && !result.includes("小猪")) {
    const nickname = pick(answerBook.nicknames);
    result = /[。！？]$/.test(result) ? `${result}${nickname}。` : `${result}，${nickname}`;
  }

  if (Math.random() < 0.34 && !result.startsWith("怪力乱神")) {
    result = `${pick(answerBook.prefixes)}，${result}`;
  }

  if (Math.random() < 0.24 && result.length < 28) {
    result = `${result}${result.endsWith("。") ? "" : "。"}${pick(answerBook.suffixes)}`;
  }

  if (categoryId && ["comfort", "overthinking"].includes(categoryId) && Math.random() < 0.14) {
    result = pick(answerBook.realRabbit);
  }

  return result.replace("。。", "。");
}

function getMysticChance(categoryId, confidence) {
  if (categoryId === "mystic") {
    return 1;
  }

  if (["food", "rabbitStatus", "comfort", "overthinking", "night", "selfWorth"].includes(categoryId)) {
    return confidence === "high" ? 0.04 : 0.18;
  }

  if (["lifeChoice", "shopping", "goOut", "loveActive", "loveCool"].includes(categoryId)) {
    return confidence === "high" ? 0.14 : 0.36;
  }

  return confidence === "high" ? 0.08 : 0.28;
}

function pickMysticAnswer(categoryId) {
  const themed = answerBook.categoryMystic[categoryId];

  if (themed) {
    return pick(themed);
  }

  const mystic = getCategoryById("mystic");
  return pick(answerBook.softMystic.concat(mystic.answers));
}

function getAnswer(question) {
  const normalized = question.trim();

  if (!normalized) {
    return decorate(pickOracleAnswer("general"));
  }

  if (normalized.startsWith("debug:") || normalized.startsWith("debug：")) {
    const debugQuestion = normalized.replace(/^debug[:：]/, "").trim();
    const debugResult = chooseCategory(debugQuestion);

    if (!debugResult) {
      return "调试：没有命中分类，会走兜底。";
    }

    return `调试：${debugResult.category.id} / ${debugResult.confidence} / ${debugResult.score} / ${debugResult.source}`;
  }

  return decorate(pickOracleAnswer(getOracleMood(normalized)));
}

function getSignedAnswer(question, forcedMood) {
  const mood = forcedMood || getOracleMood(question);
  const answer = decorate(pickOracleAnswer(mood));
  const signNumber = Math.floor(Math.random() * 409) + 1;
  return `第 ${signNumber} 签：${answer}`;
}

function getOracleMood(question) {
  const normalized = normalizeQuestion(question);

  if (/难过|委屈|伤心|不开心|崩溃|哭|累|烦|焦虑|害怕|emo|失望/.test(normalized)) {
    return "comfort";
  }

  if (/喜欢|爱|想他|想她|表白|约会|亲|发消息|联系|主动/.test(normalized)) {
    return "love";
  }

  if (/等|算了|放下|不去|别|不要|贵|太贵|来不及|以后|缓/.test(normalized)) {
    return Math.random() < 0.7 ? "wait" : "general";
  }

  if (/要不要|该不该|能不能|可不可以|买吗|去吗|做吗|看吗|说吗|试试|开始|行动/.test(normalized)) {
    return Math.random() < 0.65 ? "action" : "general";
  }

  if (/宇宙|抽象|小兔子|小猪|怪力乱神|大白菜|骨头汤|太阳|可爱|在干嘛|你在/.test(normalized)) {
    return "playful";
  }

  return Math.random() < 0.25 ? "playful" : "general";
}

function pickOracleAnswer(mood) {
  const corePool = answerBook.oracleAnswers[mood] || answerBook.oracleAnswers.general;
  const bookPool = answerBook.oracleAnswers.book || [];
  const blendedPool =
    mood === "general"
      ? bookPool.concat(answerBook.oracleAnswers.general)
      : corePool.concat(corePool, bookPool, answerBook.oracleAnswers.general);
  return pick(blendedPool);
}

function addMessage(messages, text, sender, options = {}) {
  const createdAt = options.createdAt || options.created_at || new Date().toISOString();
  const article = document.createElement("article");
  article.className = `message ${sender}`;
  if (options.favoritable || options.echoable) {
    article.classList.add("has-actions");
  }
  const bubble = document.createElement("span");
  if (sender === "bot" && options.inkReveal !== false && options.favoritable) {
    bubble.classList.add("ink-reveal");
    renderInkText(bubble, text);
  } else {
    bubble.textContent = text;
  }
  article.append(bubble);

  const actions = document.createElement("div");
  actions.className = "message-actions";

  if (options.favoritable) {
    const favoriteRecord = {
      answerText: text,
      question: options.question || latestQuestion,
      created_at: createdAt,
    };
    const favorite = document.createElement("button");
    favorite.className = "message-favorite";
    favorite.type = "button";
    const existingFavorite = findLocalFavorite(favoriteRecord);
    if (existingFavorite) {
      favorite.classList.add("is-saved");
      favorite.textContent = "♥";
      favorite.setAttribute("aria-label", "取消收藏这条答案");
    } else {
      favorite.textContent = "♡";
      favorite.setAttribute("aria-label", "收藏这条答案");
    }
    favorite.addEventListener("click", () => {
      if (favorite.classList.contains("is-saved")) {
        removeFavorite(favoriteRecord, favorite);
      } else {
        saveFavorite(favoriteRecord, favorite);
      }
    });
    actions.append(favorite);
  }

  if (options.echoable) {
    const echo = document.createElement("button");
    echo.className = "message-echo";
    echo.type = "button";
    echo.textContent = "再制一次";
    echo.setAttribute("aria-label", "让兔兔占卜师重新制作一次答案");
    echo.addEventListener("click", () => {
      runAnswerEcho(messages, options.question || latestQuestion, echo);
    });
    actions.append(echo);
  }

  if (actions.children.length) {
    article.append(actions);
  }

  messages.append(article);
  messages.scrollTop = messages.scrollHeight;

  if (options.persist !== false) {
    saveDailyChatMessage({
      sender,
      text,
      favoritable: Boolean(options.favoritable),
      echoable: Boolean(options.echoable),
      question: options.question || "",
      createdAt,
    });
  }
}

function showDrawPanel(messages, drawPanel, cardDeck, drawHint, question) {
  pendingQuestion = question;
  pendingMood = getOracleMood(question);
  drawLocked = false;
  messages.classList.add("is-drawing");

  if (question === "抽今日签文") {
    showFlowerPanel(messages, drawPanel, cardDeck, drawHint, question);
    return;
  }

  drawPanel.className = "draw-panel";
  cardDeck.className = "card-deck";
  drawHint.textContent = pick([
    "请选择一张小牌",
    "屏住呼吸，答案要翻面了",
    "小猪猪，请凭直觉点一下",
    "怪力乱神正在洗牌",
  ]);
  cardDeck.textContent = "";

  const shuffled = [...cardTypes].sort(() => Math.random() - 0.5).slice(0, 3);

  shuffled.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "oracle-pick";
    button.type = "button";
    button.setAttribute("aria-label", `选择第 ${index + 1} 张牌`);
    button.dataset.mood = Math.random() < 0.55 ? card.mood : pendingMood;
    if (card.compact) {
      button.classList.add("has-compact-symbol");
    }
    button.innerHTML = `
      <span class="card-face card-front"><span class="card-symbol">${card.symbol}</span></span>
      <span class="card-face card-back"><span class="card-sigil">第 ? 签</span></span>
    `;
    button.addEventListener("click", () => {
      pickCard(messages, drawPanel, cardDeck, drawHint, button);
    });
    cardDeck.append(button);
  });

  drawPanel.hidden = false;
  messages.scrollTop = messages.scrollHeight;
}

function showFlowerPanel(messages, drawPanel, cardDeck, drawHint, question) {
  drawPanel.className = "draw-panel flower-panel";
  cardDeck.className = "flower-field";
  drawHint.textContent = "花篮已经偷偷晃起来啦";
  cardDeck.textContent = "";

  const basket = document.createElement("div");
  basket.className = "flower-basket";
  basket.setAttribute("aria-hidden", "true");
  basket.innerHTML = "<span></span>";
  cardDeck.append(basket);

  const petalLayer = document.createElement("div");
  petalLayer.className = "petal-layer";
  petalLayer.setAttribute("aria-hidden", "true");
  cardDeck.append(petalLayer);

  Array.from({ length: 22 }).forEach((_, index) => {
    const petal = document.createElement("i");
    petal.textContent = pick(petalSymbols);
    petal.style.setProperty("--x", `${Math.round(Math.random() * 210 - 105)}px`);
    petal.style.setProperty("--ny", `${Math.round((Math.random() * 78 + 38) * -1)}px`);
    petal.style.setProperty("--r", `${Math.round(Math.random() * 140 - 70)}deg`);
    petal.style.setProperty("--d", `${index * 0.035}s`);
    petalLayer.append(petal);
  });

  const flowers = [...flowerTypes].sort(() => Math.random() - 0.5).slice(0, 5);
  flowers.forEach((flower, index) => {
    const button = document.createElement("button");
    button.className = "flower-pick";
    button.type = "button";
    button.dataset.mood = Math.random() < 0.52 ? flower.mood : pendingMood;
    button.style.setProperty("--i", index);
    button.style.setProperty("--x", `${(index - 2) * 48}px`);
    button.style.setProperty("--mx", `${(index - 2) * 38}px`);
    button.style.setProperty("--rot", `${(index - 2) * 7}deg`);
    button.style.setProperty("--stem", `${(index - 2) * -5}deg`);
    button.style.setProperty("--pop-delay", `${0.52 + index * 0.08}s`);
    button.style.setProperty("--sway-delay", `${index * -0.18}s`);
    button.setAttribute("aria-label", `选择第 ${index + 1} 朵花`);
    button.innerHTML = `<span>${flower.flower}</span>`;
    button.addEventListener("click", () => {
      pickFlower(messages, drawPanel, cardDeck, drawHint, button);
    });
    cardDeck.append(button);
  });

  drawPanel.hidden = false;
  messages.scrollTop = messages.scrollHeight;
}

async function getRemoteSignedAnswer(question, forcedMood) {
  const data = await apiRequest("./api/oracle-answer", {
    method: "POST",
    body: JSON.stringify({ question, mood: forcedMood }),
  });
  return data.text;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizePhoneInput(phone) {
  return String(phone || "").replace(/[^\d+]/g, "").trim();
}

function readJsonStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (error) {
    localStorage.removeItem(key);
    return fallback;
  }
}

function getDailyChatMessages() {
  const saved = readJsonStorage(DAILY_CHAT_KEY, null);
  if (!saved || saved.dateKey !== getTodayKey() || !Array.isArray(saved.messages)) {
    localStorage.removeItem(DAILY_CHAT_KEY);
    return [];
  }

  return saved.messages;
}

function saveDailyChatMessage(message) {
  const messages = getDailyChatMessages();
  const nextMessages = [...messages, message].slice(-80);
  localStorage.setItem(
    DAILY_CHAT_KEY,
    JSON.stringify({
      dateKey: getTodayKey(),
      messages: nextMessages,
    }),
  );
}

function restoreDailyChat(messages) {
  const savedMessages = getDailyChatMessages();
  if (!savedMessages.length) {
    return false;
  }

  savedMessages.forEach((message) => {
    if (!message?.text || !message?.sender) {
      return;
    }
    addMessage(messages, message.text, message.sender, {
      favoritable: Boolean(message.favoritable),
      echoable: Boolean(message.echoable),
      question: message.question || "",
      createdAt: message.createdAt || message.created_at,
      inkReveal: false,
      persist: false,
    });
  });

  return true;
}

function updateVisitStreak() {
  const today = getIsoDateKey();
  const yesterday = getYesterdayIsoKey();
  const saved = readJsonStorage(VISIT_STREAK_KEY, {});
  const currentStreak = Number(saved.streak || 0);

  if (saved.lastVisit === today) {
    return { streak: currentStreak || 1, isNewVisit: false };
  }

  const nextStreak = saved.lastVisit === yesterday ? currentStreak + 1 : 1;
  localStorage.setItem(
    VISIT_STREAK_KEY,
    JSON.stringify({
      lastVisit: today,
      streak: nextStreak,
    }),
  );
  return { streak: nextStreak, isNewVisit: true };
}

function initVisitRitual() {
  const visit = updateVisitStreak();
  const { streak } = visit;
  const charm = document.querySelector("#visitCharm");
  const secretNote = document.querySelector("#secretNote");
  const secretText = document.querySelector("#secretNoteText");
  const closeSecretNote = document.querySelector("#closeSecretNote");
  const today = getIsoDateKey();

  if (charm) {
    charm.hidden = false;
    charm.textContent =
      streak > 1
        ? `某只猪连续第 ${streak} 天拜访兔兔占卜师，今日好运已偷偷续杯`
        : "某只猪今日第一次拜访兔兔占卜师，薄荷星光已就位";
  }

  const savedNote = readJsonStorage(SECRET_NOTE_KEY, {});
  const shouldShowNote =
    savedNote.lastShown !== today && (streak === 1 || streak % 3 === 0 || Math.random() < 0.52);

  if (secretNote && secretText && shouldShowNote) {
    secretText.textContent = pick(secretNotes);
    secretNote.hidden = false;
    localStorage.setItem(SECRET_NOTE_KEY, JSON.stringify({ lastShown: today }));
  }

  closeSecretNote?.addEventListener("click", () => {
    if (secretNote) {
      secretNote.classList.add("is-folding");
      window.setTimeout(() => {
        secretNote.hidden = true;
        secretNote.classList.remove("is-folding");
      }, 220);
    }
  });

  updateEnergyBottle(streak, visit.isNewVisit);
}

function getEnergyBonus(streak) {
  if (streak >= 14) return 26;
  if (streak >= 7) return 20;
  if (streak >= 3) return 16;
  return 12;
}

function showEnergyReward(rewardText) {
  const modal = document.querySelector("#energyRewardModal");
  const text = document.querySelector("#energyRewardText");
  const close = document.querySelector("#closeEnergyReward");

  if (!modal || !text || !close) {
    showToast(rewardText);
    return;
  }

  text.textContent = rewardText;
  modal.hidden = false;
  close.onclick = () => {
    modal.hidden = true;
  };
}

function renderEnergyBottle(energy, streak, justAdded = 0) {
  const fill = document.querySelector("#energyFill");
  const text = document.querySelector("#energyText");
  const bottle = document.querySelector("#energyBottle");
  const percent = Math.max(0, Math.min(100, energy));

  if (fill) {
    fill.style.height = `${percent}%`;
  }

  if (text) {
    text.textContent = justAdded
      ? `今日 +${justAdded}，${percent}/100`
      : `连续 ${streak} 天，${percent}/100`;
  }

  if (bottle) {
    bottle.classList.toggle("is-full", percent >= ENERGY_GOAL);
    bottle.classList.toggle("just-filled", justAdded > 0);
    if (justAdded > 0) {
      window.setTimeout(() => bottle.classList.remove("just-filled"), 900);
    }
  }
}

function updateEnergyBottle(streak, isNewVisit) {
  const today = getIsoDateKey();
  const saved = readJsonStorage(ENERGY_BOTTLE_KEY, {});
  let energy = Number(saved.energy || 0);
  let justAdded = 0;

  if (isNewVisit && saved.lastCharged !== today) {
    justAdded = getEnergyBonus(streak);
    energy += justAdded;
    const rewards = Array.isArray(saved.rewards) ? saved.rewards : [];

    if (energy >= ENERGY_GOAL) {
      const rewardText = pick(energyRewards);
      rewards.unshift({
        text: rewardText,
        createdAt: new Date().toISOString(),
      });
      energy = energy - ENERGY_GOAL;
      window.setTimeout(() => showEnergyReward(rewardText), 680);
    }

    localStorage.setItem(
      ENERGY_BOTTLE_KEY,
      JSON.stringify({
        energy,
        rewards: rewards.slice(0, 12),
        lastCharged: today,
      }),
    );
  }

  renderEnergyBottle(energy, streak, justAdded);
}

function initEnergyBottle() {
  const bottle = document.querySelector("#energyBottle");
  bottle?.addEventListener("click", () => {
    const saved = readJsonStorage(ENERGY_BOTTLE_KEY, {});
    const rewards = Array.isArray(saved.rewards) ? saved.rewards : [];
    if (!rewards.length) {
      showToast("小猪能量瓶正在咕嘟咕嘟蓄能，满了会掉落隐藏夸夸签。");
      return;
    }

    showEnergyReward(rewards[0].text);
  });
}

function getWishes() {
  return readJsonStorage(WISHES_KEY, []).filter((wish) => wish?.text);
}

function saveWishes(wishes) {
  localStorage.setItem(WISHES_KEY, JSON.stringify(wishes.slice(0, 30)));
}

function removeStoredQuestion(id) {
  saveWishes(getWishes().filter((wish) => wish.id !== id));
}

function renderStoredQuestionPapers(area) {
  const wishes = getWishes();
  const now = Date.now();
  area.textContent = "";

  if (!wishes.length) {
    area.innerHTML = '<div class="wish-empty">瓶子空空的，先放一张暂存问题纸条进去吧。</div>';
    return;
  }

  const list = document.createElement("div");
  list.className = "wish-paper-list";
  wishes.forEach((wish, index) => {
    const paper = document.createElement("button");
    paper.className = "wish-paper";
    paper.type = "button";
    paper.textContent = wish.text;
    paper.style.setProperty("--paper-delay", `${index * 0.08}s`);
    if (now - new Date(wish.createdAt || now).getTime() >= 3 * DAY_MS) {
      paper.classList.add("is-overdue");
    }
    paper.setAttribute("aria-label", "点击暂存问题纸条，让兔兔占卜师回答");
    paper.addEventListener("click", () => showWishConfirm(wish));
    list.append(paper);
  });
  area.append(list);
}

function floatStoredQuestions() {
  const area = document.querySelector("#wishFloatArea");
  const drawButton = document.querySelector("#drawWishButton");

  if (!area) return;

  if (drawButton) {
    drawButton.textContent = pick(wishPrompts);
    window.setTimeout(() => {
      drawButton.textContent = "让问题纸条浮出来";
    }, 1200);
  }

  area.classList.remove("is-drawing");
  void area.offsetWidth;
  area.classList.add("is-drawing");
  window.setTimeout(() => renderStoredQuestionPapers(area), 340);
}

function showWishConfirm(wish) {
  const modal = document.querySelector("#wishConfirmModal");
  const text = document.querySelector("#wishConfirmText");
  const cancel = document.querySelector("#cancelWishAnswer");
  const confirm = document.querySelector("#confirmWishAnswer");

  if (!modal || !text || !cancel || !confirm) {
    return;
  }

  text.textContent = `这张纸条写着：“${wish.text}”。确定要让兔兔占卜师现在回答它吗？回答后它会从瓶子里游出去。`;
  modal.hidden = false;
  cancel.onclick = () => {
    modal.hidden = true;
  };
  confirm.onclick = () => {
    modal.hidden = true;
    const wishModal = document.querySelector("#wishModal");
    if (wishModal) {
      wishModal.hidden = true;
    }
    const messages = document.querySelector("#messages");
    const input = document.querySelector("#questionInput");
    const drawPanel = document.querySelector("#drawPanel");
    const cardDeck = document.querySelector("#cardDeck");
    const drawHint = document.querySelector("#drawHint");
    if (messages && input && drawPanel && cardDeck && drawHint) {
      removeStoredQuestion(wish.id);
      const area = document.querySelector("#wishFloatArea");
      if (area) {
        renderStoredQuestionPapers(area);
      }
      showToast("兔兔占卜师收到这张暂存问题纸条啦。");
      ask(messages, input, drawPanel, cardDeck, drawHint, wish.text);
    }
  };
}

function initWishBottle() {
  const modal = document.querySelector("#wishModal");
  const open = document.querySelector("#wishBottleButton");
  const close = document.querySelector("#closeWishModal");
  const form = document.querySelector("#wishForm");
  const input = document.querySelector("#wishInput");
  const drawButton = document.querySelector("#drawWishButton");

  open?.addEventListener("click", () => {
    if (modal) {
      modal.hidden = false;
      floatStoredQuestions();
    }
  });

  close?.addEventListener("click", () => {
    if (modal) {
      modal.hidden = true;
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = String(input?.value || "").trim();
    if (!text) {
      showToast("问题纸条还空着呢，某只猪写一点点。");
      return;
    }

    const wishes = getWishes();
    wishes.unshift({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      text: text.slice(0, 120),
      createdAt: new Date().toISOString(),
    });
    saveWishes(wishes);
    if (input) input.value = "";
    showToast("问题已经暂时放进瓶子里啦。");
    floatStoredQuestions();
  });

  drawButton?.addEventListener("click", () => floatStoredQuestions());
}

function getLocalAccounts() {
  return readJsonStorage(LOCAL_ACCOUNTS_KEY, {});
}

function saveLocalAccounts(accounts) {
  localStorage.setItem(LOCAL_ACCOUNTS_KEY, JSON.stringify(accounts));
}

function getLocalUser() {
  const saved = readJsonStorage(LOCAL_USER_KEY, null);
  if (!saved || !saved.expiresAt || saved.expiresAt <= Date.now()) {
    localStorage.removeItem(LOCAL_USER_KEY);
    return null;
  }
  return saved;
}

function saveLocalUser(user) {
  const saved = {
    ...user,
    id: user.id || "local-user",
    isAdmin: false,
    localOnly: true,
    expiresAt: Date.now() + SESSION_MS,
  };
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(saved));
  updateUserUi(saved);
  return saved;
}

function clearLocalUser() {
  localStorage.removeItem(LOCAL_USER_KEY);
}

let toastTimer = null;

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) {
    window.alert(message);
    return;
  }

  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

function shouldShowFavoriteReminder() {
  const saved = readJsonStorage(FAVORITE_REMINDER_KEY, {});
  if (saved.muteUntil && saved.muteUntil > Date.now()) {
    return false;
  }

  return saved.lastShownDate !== getTodayKey();
}

function rememberFavoriteReminderChoice(muted) {
  const nextState = {
    lastShownDate: getTodayKey(),
  };

  if (muted) {
    nextState.muteUntil = Date.now() + 7 * 24 * 60 * 60 * 1000;
  }

  localStorage.setItem(FAVORITE_REMINDER_KEY, JSON.stringify(nextState));
}

function showFavoriteReminder() {
  if (!shouldShowFavoriteReminder()) {
    return;
  }

  const modal = document.querySelector("#favoriteReminderModal");
  const checkbox = document.querySelector("#favoriteReminderMute");
  const okButton = document.querySelector("#favoriteReminderOk");

  if (!modal || !okButton) {
    return;
  }

  if (checkbox) {
    checkbox.checked = false;
  }
  modal.hidden = false;
  okButton.onclick = () => {
    rememberFavoriteReminderChoice(Boolean(checkbox?.checked));
    modal.hidden = true;
  };
}

function isImageAvatar(value) {
  return String(value || "").startsWith("data:image/");
}

function setAvatarPreview(value) {
  const preview = document.querySelector("#avatarPreview");
  const avatarValue = document.querySelector("#avatarValue");
  const avatar = value || "🐷";

  if (avatarValue) {
    avatarValue.value = avatar;
  }

  if (!preview) {
    return;
  }

  preview.textContent = "";
  preview.style.backgroundImage = "";
  preview.classList.toggle("has-photo", isImageAvatar(avatar));

  if (isImageAvatar(avatar)) {
    preview.style.backgroundImage = `url("${avatar}")`;
  } else {
    preview.textContent = avatar;
  }
}

function compressAvatar(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("请选择一张图片作为头像。"));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const size = 320;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");
        const side = Math.min(image.width, image.height);
        const sx = (image.width - side) / 2;
        const sy = (image.height - side) / 2;
        context.drawImage(image, sx, sy, side, side, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };
      image.onerror = () => reject(new Error("这张图片暂时读不出来，换一张试试。"));
      image.src = reader.result;
    };
    reader.onerror = () => reject(new Error("头像读取失败了。"));
    reader.readAsDataURL(file);
  });
}

async function runAnswerCountdown(drawHint) {
  const steps = [
    "兔兔正在加急赶制答案中",
    "正在收集星辰、露水、彩虹、花香",
    "3",
    "2",
    "1",
    "签文马上出炉",
  ];

  for (const step of steps) {
    drawHint.textContent = step;
    drawHint.classList.remove("is-ticking");
    void drawHint.offsetWidth;
    drawHint.classList.add("is-ticking");
    await wait(step.length <= 1 ? 460 : 640);
  }
}

function updateUserUi(user) {
  currentUser = user;
  const profileNicknameInput = document.querySelector("#profileNicknameInput");
  const avatarInput = document.querySelector("#avatarInput");
  const avatarValue = document.querySelector("#avatarValue");

  if (profileNicknameInput && user) {
    profileNicknameInput.value = user.nickname || "某只猪";
  }

  if (user) {
    setAvatarPreview(user.avatar || "🐷");
    if (avatarInput) avatarInput.value = "";
    if (avatarValue) avatarValue.value = user.avatar || "🐷";
  }
}

function getLocalFavorites() {
  return JSON.parse(localStorage.getItem("little-oracle-favorites") || "[]");
}

function getFavoriteAnswer(favorite) {
  return favorite.answer_text || favorite.answerText || "";
}

function getFavoriteQuestion(favorite) {
  return favorite.question || "";
}

function getFavoriteKey(favorite) {
  return `${getFavoriteQuestion(favorite)}::${getFavoriteAnswer(favorite)}`;
}

function findLocalFavorite(favorite) {
  const key = getFavoriteKey(favorite);
  return getLocalFavorites().find((item) => getFavoriteKey(item) === key);
}

function saveLocalFavorite(favorite) {
  const key = getFavoriteKey(favorite);
  const favorites = [
    {
      ...favorite,
      localId: favorite.localId || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    },
    ...getLocalFavorites().filter((item) => getFavoriteKey(item) !== key),
  ].slice(0, 50);
  localStorage.setItem("little-oracle-favorites", JSON.stringify(favorites));
  return favorites;
}

function removeLocalFavorite(favorite) {
  const key = getFavoriteKey(favorite);
  const favorites = getLocalFavorites().filter((item) => getFavoriteKey(item) !== key);
  localStorage.setItem("little-oracle-favorites", JSON.stringify(favorites));
  return favorites;
}

function formatFavoriteDate(value) {
  const date = new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) {
    return "某个神秘时刻";
  }
  return date.toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderFavorites(favorites = getLocalFavorites()) {
  const list = document.querySelector("#favoritesList");
  if (!list) {
    return;
  }

  if (!favorites.length) {
    list.innerHTML = '<div class="favorite-empty">还没有收藏签文，先去抽一张喜欢的吧。</div>';
    return;
  }

  list.innerHTML = favorites
    .map((favorite) => {
      const text = getFavoriteAnswer(favorite);
      const question = getFavoriteQuestion(favorite) || "抽今日签文";
      const date = favorite.created_at || favorite.createdAt;
      return `
        <article class="favorite-item">
          <div class="favorite-meta">${escapeHtml(formatFavoriteDate(date))}</div>
          <div class="favorite-question">问：${escapeHtml(question)}</div>
          <div class="favorite-answer">答：${escapeHtml(text)}</div>
        </article>
      `;
    })
    .join("");
}

async function loadFavorites() {
  try {
    const data = await apiRequest("./api/favorites");
    renderFavorites(data.configured === false ? getLocalFavorites() : data.favorites || []);
  } catch (error) {
    renderFavorites(getLocalFavorites());
  }
}

function playFavoriteFly(control) {
  const source = control?.closest(".message")?.querySelector(":scope > span");
  const target = document.querySelector("#favoriteButton");
  if (!source || !target) {
    return;
  }

  const sourceBox = source.getBoundingClientRect();
  const targetBox = target.getBoundingClientRect();
  const flyer = source.cloneNode(true);
  flyer.classList.add("favorite-flyer");
  flyer.style.left = "0";
  flyer.style.top = "0";
  flyer.style.width = `${sourceBox.width}px`;
  document.body.append(flyer);
  control?.closest(".message")?.classList.add("is-folding-to-favorite");

  const start = {
    x: sourceBox.left + Math.min(sourceBox.width * 0.72, sourceBox.width - 24),
    y: sourceBox.top + sourceBox.height * 0.46,
  };
  const end = {
    x: targetBox.left + targetBox.width / 2,
    y: targetBox.top + targetBox.height / 2,
  };
  const lift = Math.max(92, Math.min(170, Math.abs(start.y - end.y) * 0.42 + 84));
  const controlOne = {
    x: start.x + (end.x - start.x) * 0.18,
    y: start.y - lift,
  };
  const controlTwo = {
    x: start.x + (end.x - start.x) * 0.72,
    y: end.y - lift * 0.62,
  };
  const duration = 1900;
  const startedAt = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const curve = (t, p0, p1, p2, p3) =>
    Math.pow(1 - t, 3) * p0 +
    3 * Math.pow(1 - t, 2) * t * p1 +
    3 * (1 - t) * t * t * p2 +
    t * t * t * p3;
  const curveSlope = (t, p0, p1, p2, p3) =>
    3 * Math.pow(1 - t, 2) * (p1 - p0) +
    6 * (1 - t) * t * (p2 - p1) +
    3 * t * t * (p3 - p2);

  function flyFrame(now) {
    const raw = Math.min((now - startedAt) / duration, 1);
    const t = ease(raw);
    const x = curve(t, start.x, controlOne.x, controlTwo.x, end.x);
    const y = curve(t, start.y, controlOne.y, controlTwo.y, end.y);
    const dx = curveSlope(t, start.x, controlOne.x, controlTwo.x, end.x);
    const dy = curveSlope(t, start.y, controlOne.y, controlTwo.y, end.y);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 12 + Math.sin(raw * Math.PI * 5) * 5;
    const scale = 0.95 - raw * 0.58;
    const fade = raw < 0.78 ? 1 : Math.max(0, 1 - (raw - 0.78) / 0.22);

    flyer.style.opacity = `${fade}`;
    flyer.style.transform = `translate3d(${x - 27}px, ${y - 18}px, 0) rotate(${angle}deg) scale(${scale})`;

    if (raw < 1) {
      requestAnimationFrame(flyFrame);
      return;
    }

    flyer.remove();
    target.classList.add("is-catching");
    control?.closest(".message")?.classList.remove("is-folding-to-favorite");
    window.setTimeout(() => target.classList.remove("is-catching"), 520);
  }

  requestAnimationFrame(flyFrame);
}

async function saveFavorite(favorite, control) {
  const storedFavorite = saveLocalFavorite(favorite)[0];
  control?.classList.add("is-active", "is-saved");
  if (control?.classList.contains("message-favorite")) {
    control.textContent = "♥";
    control.setAttribute("aria-label", "取消收藏这条答案");
  }
  window.setTimeout(() => control?.classList.remove("is-active"), 900);
  playFavoriteFly(control);
  renderFavorites();
  showToast("收藏好啦。");

  await apiRequest("./api/favorites", {
    method: "POST",
    body: JSON.stringify(favorite),
  }).catch(() => {});

  return storedFavorite;
}

async function removeFavorite(favorite, control) {
  const storedFavorite = findLocalFavorite(favorite) || favorite;
  removeLocalFavorite(favorite);
  control?.classList.remove("is-saved");
  if (control?.classList.contains("message-favorite")) {
    control.textContent = "♡";
    control.setAttribute("aria-label", "收藏这条答案");
  }
  renderFavorites();
  showToast("已经取消收藏啦。");

  await apiRequest("./api/favorites", {
    method: "DELETE",
    body: JSON.stringify({
      id: storedFavorite.id,
      answerText: getFavoriteAnswer(favorite),
      question: getFavoriteQuestion(favorite),
    }),
  }).catch(() => {});
}

async function runAnswerEcho(messages, question, control) {
  if (!question || control?.disabled) {
    return;
  }

  control.disabled = true;
  control.textContent = "制作中";

  const ritual = document.createElement("article");
  ritual.className = "message bot echo-ritual";
  const bubble = document.createElement("span");
  bubble.innerHTML = `
    <span class="echo-orbit" aria-hidden="true">
      <i>✦</i><i>❀</i><i>♡</i>
    </span>
    <span class="echo-text">兔兔正在加急赶制答案中</span>
  `;
  ritual.append(bubble);
  messages.append(ritual);
  messages.scrollTop = messages.scrollHeight;

  const echoText = bubble.querySelector(".echo-text");
  for (const step of echoSteps) {
    echoText.textContent = step;
    bubble.classList.remove("is-echoing");
    void bubble.offsetWidth;
    bubble.classList.add("is-echoing");
    await wait(520);
  }

  const mood = getOracleMood(question);
  const localAnswer = getSignedAnswer(question, mood);
  const answer = await getRemoteSignedAnswer(question, mood).catch(() =>
    currentUser ? `${localAnswer}（线上汤锅暂时没接上，先用本地签文。）` : localAnswer,
  );

  ritual.classList.add("is-done");
  echoText.textContent = "回声变成新签文啦";
  await wait(360);
  ritual.remove();

  latestAnswer = answer;
  latestQuestion = question;
  addMessage(messages, answer, "bot", {
    favoritable: true,
    echoable: true,
    question,
  });
  showToast("兔兔重新制作好啦。");

  control.disabled = false;
  control.textContent = "再制一次";
}

async function pickCard(messages, drawPanel, cardDeck, drawHint, selectedCard) {
  if (drawLocked) {
    return;
  }

  drawLocked = true;
  const localAnswer = getSignedAnswer(pendingQuestion, selectedCard.dataset.mood);
  const answerPromise = getRemoteSignedAnswer(pendingQuestion, selectedCard.dataset.mood).catch(() =>
    currentUser ? `${localAnswer}（线上汤锅暂时没接上，先用本地签文。）` : localAnswer,
  );

  [...cardDeck.children].forEach((card) => {
    if (card === selectedCard) {
      card.classList.add("is-chosen");
    } else {
      card.classList.add("is-faded");
    }
  });

  await runAnswerCountdown(drawHint);

  const answer = await answerPromise;

  const sign = answer.match(/第 \d+ 签/)?.[0] || "第 ? 签";
  selectedCard.querySelector(".card-sigil").textContent = sign;
  drawHint.textContent = pick(["翻开啦", "答案落下来了", "嘘，签文出现", "小兔子盖章"]);

  [...cardDeck.children].forEach((card) => {
    if (card === selectedCard) {
      card.classList.add("is-flipped");
    }
  });

  window.setTimeout(() => {
    drawPanel.hidden = true;
    messages.classList.remove("is-drawing");
    latestAnswer = answer;
    latestQuestion = pendingQuestion;
    addMessage(messages, answer, "bot", { favoritable: true, echoable: true, question: pendingQuestion });
  }, 850);
}

async function pickFlower(messages, drawPanel, cardDeck, drawHint, selectedFlower) {
  if (drawLocked) {
    return;
  }

  drawLocked = true;
  const localAnswer = getSignedAnswer(pendingQuestion, selectedFlower.dataset.mood);
  const answerPromise = getRemoteSignedAnswer(pendingQuestion, selectedFlower.dataset.mood).catch(() =>
    currentUser ? `${localAnswer}（线上汤锅暂时没接上，先用本地签文。）` : localAnswer,
  );

  [...cardDeck.querySelectorAll(".flower-pick")].forEach((flower) => {
    if (flower === selectedFlower) {
      flower.classList.add("is-picked");
    } else {
      flower.classList.add("is-floating-away");
    }
  });

  drawHint.textContent = "这朵花被某只猪选中啦";
  drawHint.classList.add("is-ticking");
  await wait(620);

  drawHint.textContent = "兔兔占卜师正在把花扎成一束";
  const bouquet = document.createElement("div");
  bouquet.className = "bouquet";
  bouquet.setAttribute("aria-hidden", "true");
  bouquet.innerHTML = `
    <span class="bouquet-flower one">✿</span>
    <span class="bouquet-flower two">❀</span>
    <span class="bouquet-flower three">✾</span>
    <span class="bouquet-flower four">❁</span>
    <span class="bouquet-flower five">${selectedFlower.textContent.trim() || "✿"}</span>
    <span class="bouquet-wrap"></span>
  `;
  cardDeck.append(bouquet);
  await wait(980);

  drawHint.textContent = "花香把签文送过来了";
  drawHint.classList.remove("is-ticking");
  void drawHint.offsetWidth;
  drawHint.classList.add("is-ticking");
  const answer = await answerPromise;
  await wait(520);

  drawPanel.hidden = true;
  messages.classList.remove("is-drawing");
  latestAnswer = answer;
  latestQuestion = pendingQuestion;
  addMessage(messages, answer, "bot", { favoritable: true, echoable: true, question: pendingQuestion });
}

function ask(messages, input, drawPanel, cardDeck, drawHint, question) {
  if (!currentUser) {
    const authModal = document.querySelector("#authModal");
    if (authModal) {
      authModal.hidden = false;
    }
    return;
  }

  showFavoriteReminder();
  addMessage(messages, question, "user");
  input.value = "";

  window.setTimeout(() => {
    showDrawPanel(messages, drawPanel, cardDeck, drawHint, question);
  }, 220);
}

function setAuthMode(mode) {
  authMode = mode;
  const loginTab = document.querySelector("#loginTab");
  const registerTab = document.querySelector("#registerTab");
  const nicknameField = document.querySelector("#nicknameField");
  const resetSecretField = document.querySelector("#resetSecretField");
  const authForm = document.querySelector("#authForm");
  const passwordInput = document.querySelector("#passwordInput");
  const resetSecretInput = document.querySelector("#resetSecretInput");
  const forgotPasswordButton = document.querySelector("#forgotPasswordButton");
  const authSubmit = document.querySelector("#authSubmit");

  loginTab?.classList.toggle("active", mode === "login");
  registerTab?.classList.toggle("active", mode === "register");
  authForm?.setAttribute("data-auth-mode", mode);
  if (nicknameField) nicknameField.hidden = mode !== "register";
  if (resetSecretField) resetSecretField.hidden = mode !== "reset";
  if (passwordInput) {
    passwordInput.autocomplete = mode === "reset" ? "new-password" : "current-password";
    passwordInput.placeholder = mode === "reset" ? "设置一个新的不重要密码" : "";
  }
  if (resetSecretInput && mode !== "reset") {
    resetSecretInput.value = "";
  }
  if (forgotPasswordButton) {
    forgotPasswordButton.textContent = mode === "reset" ? "想起来了，返回登录" : "忘记密码";
  }
  if (authSubmit) {
    authSubmit.textContent = mode === "login" ? "登录" : mode === "register" ? "注册" : "重设密码";
  }
}

async function initAuth() {
  const authModal = document.querySelector("#authModal");
  const authForm = document.querySelector("#authForm");
  const phoneInput = document.querySelector("#phoneInput");
  const passwordInput = document.querySelector("#passwordInput");
  const nicknameInput = document.querySelector("#nicknameInput");
  const resetSecretInput = document.querySelector("#resetSecretInput");
  const loginTab = document.querySelector("#loginTab");
  const registerTab = document.querySelector("#registerTab");
  const forgotPasswordButton = document.querySelector("#forgotPasswordButton");
  const favoriteButton = document.querySelector("#favoriteButton");
  const settingsButton = document.querySelector("#settingsButton");
  const profileModal = document.querySelector("#profileModal");
  const favoritesModal = document.querySelector("#favoritesModal");
  const closeProfile = document.querySelector("#closeProfile");
  const closeFavorites = document.querySelector("#closeFavorites");
  const profileForm = document.querySelector("#profileForm");
  const avatarInput = document.querySelector("#avatarInput");
  const avatarValue = document.querySelector("#avatarValue");
  const profileNicknameInput = document.querySelector("#profileNicknameInput");
  const feedbackForm = document.querySelector("#feedbackForm");
  const feedbackInput = document.querySelector("#feedbackInput");
  const logoutButton = document.querySelector("#logoutButton");

  favoriteButton?.addEventListener("click", () => {
    if (!currentUser) {
      if (authModal) authModal.hidden = false;
      showToast("先打开小猪通行证，再看收藏夹。");
      return;
    }
    loadFavorites();
    if (favoritesModal) favoritesModal.hidden = false;
  });

  settingsButton?.addEventListener("click", () => {
    if (!currentUser) {
      if (authModal) authModal.hidden = false;
      showToast("先打开小猪通行证。");
      return;
    }
    if (profileModal) profileModal.hidden = false;
  });

  loginTab?.addEventListener("click", () => setAuthMode("login"));
  registerTab?.addEventListener("click", () => setAuthMode("register"));
  forgotPasswordButton?.addEventListener("click", () => {
    setAuthMode(authMode === "reset" ? "login" : "reset");
  });

  avatarInput?.addEventListener("change", async () => {
    const file = avatarInput.files?.[0];
    if (!file) {
      return;
    }

    try {
      const avatar = await compressAvatar(file);
      setAvatarPreview(avatar);
      showToast("头像已选好啦，点保存后头像就会生效。");
    } catch (error) {
      showToast(error.message);
      avatarInput.value = "";
    }
  });

  try {
    const data = await apiRequest("./api/auth-me");
    databaseConfigured = data.configured !== false;
    if (data.configured === false) {
      const localUser = getLocalUser();
      updateUserUi(localUser);
      if (!localUser && authModal) {
        authModal.hidden = false;
      }
    } else {
      updateUserUi(data.user);
    }
    if (!data.user && data.configured !== false && authModal) {
      authModal.hidden = false;
    }
  } catch (error) {
    databaseConfigured = false;
    const localUser = getLocalUser();
    updateUserUi(localUser);
    if (!localUser && authModal) {
      authModal.hidden = false;
    }
  }

  authForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const phone = normalizePhoneInput(phoneInput?.value);
    const password = String(passwordInput?.value || "");

    if (!databaseConfigured) {
      if (phone.length < 6 || password.length < 6) {
        showToast("手机号和密码都要认真填哦，密码至少 6 位。");
        return;
      }

      const accounts = getLocalAccounts();
      if (authMode === "reset") {
        const secretAnswer = String(resetSecretInput?.value || "")
          .trim()
          .replace(/\s+/g, "")
          .replace(/[，,。]/g, "");
        if (secretAnswer !== "2024上海") {
          showToast("暗号不对哦，某只猪再想想大白菜骨头汤。");
          return;
        }
        if (!accounts[phone]) {
          showToast("没有找到这个手机号的小猪通行证。");
          return;
        }
        accounts[phone] = {
          ...accounts[phone],
          password,
        };
        saveLocalAccounts(accounts);
      } else
      if (authMode === "register") {
        if (accounts[phone]) {
          showToast("该用户已注册，请登录。");
          return;
        }
        accounts[phone] = {
          phone,
          password,
          nickname: String(nicknameInput?.value || "某只猪").trim().slice(0, 18) || "某只猪",
          avatar: "🐷",
        };
        saveLocalAccounts(accounts);
      } else if (!accounts[phone] || accounts[phone].password !== password) {
        showToast("手机号或密码不对，某只猪再检查一下。");
        return;
      }

      saveLocalUser(accounts[phone]);
      if (authModal) authModal.hidden = true;
      passwordInput.value = "";
      showToast(`登录信息会记住 ${SESSION_DAYS} 天。`);
      return;
    }

    const endpoint =
      authMode === "login"
        ? "./api/auth-login"
        : authMode === "register"
          ? "./api/auth-register"
          : "./api/auth-reset-password";

    try {
      const data = await apiRequest(endpoint, {
        method: "POST",
        body: JSON.stringify({
          phone,
          password,
          nickname: nicknameInput?.value,
          secretAnswer: resetSecretInput?.value,
        }),
      });
      updateUserUi(data.user);
      if (authModal) authModal.hidden = true;
      passwordInput.value = "";
      if (resetSecretInput) resetSecretInput.value = "";
      showToast(authMode === "reset" ? "密码重设成功啦，已经帮你登录。": `登录信息会记住 ${SESSION_DAYS} 天。`);
      setAuthMode("login");
    } catch (error) {
      showToast(error.message);
    }
  });

  closeProfile?.addEventListener("click", () => {
    if (profileModal) profileModal.hidden = true;
  });

  closeFavorites?.addEventListener("click", () => {
    if (favoritesModal) favoritesModal.hidden = true;
  });

  profileForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (currentUser?.localOnly) {
      const nextUser = saveLocalUser({
        ...currentUser,
        avatar: avatarValue?.value || "🐷",
        nickname: profileNicknameInput?.value || "本地小猪",
      });
      const accounts = getLocalAccounts();
      if (nextUser.phone && accounts[nextUser.phone]) {
        accounts[nextUser.phone] = {
          ...accounts[nextUser.phone],
          avatar: nextUser.avatar,
          nickname: nextUser.nickname,
        };
        saveLocalAccounts(accounts);
      }
      showToast("头像和昵称保存成功啦，某只猪。");
      return;
    }

    try {
      const data = await apiRequest("./api/auth-me", {
        method: "PATCH",
        body: JSON.stringify({
          avatar: avatarValue?.value,
          nickname: profileNicknameInput?.value,
        }),
      });
      updateUserUi(data.user);
      showToast("头像和昵称保存成功啦，某只猪。");
    } catch (error) {
      showToast(error.message);
    }
  });

  feedbackForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await apiRequest("./api/feedback", {
        method: "POST",
        body: JSON.stringify({ message: feedbackInput?.value }),
      });
      feedbackInput.value = "";
      showToast("意见反馈提交成功啦，小兔子会认真看。");
    } catch (error) {
      showToast(error.message);
    }
  });

  logoutButton?.addEventListener("click", async () => {
    await apiRequest("./api/auth-logout", { method: "POST" }).catch(() => {});
    clearLocalUser();
    updateUserUi(null);
    if (profileModal) profileModal.hidden = true;
    if (favoritesModal) favoritesModal.hidden = true;
    if (authModal) authModal.hidden = false;
  });
}

function rememberSeenVersion(versionCode = APP_VERSION_CODE) {
  localStorage.setItem(UPDATE_SEEN_KEY, String(versionCode));
}

function getSeenVersion() {
  return Number(localStorage.getItem(UPDATE_SEEN_KEY) || APP_VERSION_CODE);
}

async function getRemoteVersionCode() {
  try {
    const response = await fetch(`./version.json?t=${Date.now()}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      return APP_VERSION_CODE;
    }
    const data = await response.json();
    return Number(data.versionCode) || APP_VERSION_CODE;
  } catch (error) {
    return APP_VERSION_CODE;
  }
}

async function shouldShowUpdatePrompt() {
  const remoteVersionCode = await getRemoteVersionCode();
  return remoteVersionCode > getSeenVersion() ? remoteVersionCode : 0;
}

async function showUpdatePrompt(registration) {
  const waitingWorker = registration.waiting || registration.installing;
  const prompt = document.querySelector("#updatePrompt");
  const button = document.querySelector("#updateButton");
  if (!waitingWorker || !prompt || !button) {
    return;
  }

  const nextVersionCode = await shouldShowUpdatePrompt();
  if (!nextVersionCode) {
    return;
  }

  prompt.hidden = false;
  button.onclick = () => {
    button.disabled = true;
    button.textContent = "更新中";
    rememberSeenVersion(nextVersionCode);
    waitingWorker.postMessage({ type: "SKIP_WAITING" });
  };
}

function initServiceWorkerUpdates() {
  if (!localStorage.getItem(UPDATE_SEEN_KEY)) {
    rememberSeenVersion(APP_VERSION_CODE);
  }

  if (!("serviceWorker" in navigator)) {
    return;
  }

  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) {
      return;
    }
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker
    .register("./sw.js")
    .then((registration) => {
      if (registration.waiting) {
        showUpdatePrompt(registration);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) {
          return;
        }
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            showUpdatePrompt(registration);
          }
        });
      });
    })
    .catch(() => {});
}

function initOracle() {
  const messages = document.querySelector("#messages");
  const form = document.querySelector("#askForm");
  const input = document.querySelector("#questionInput");
  const quickAskButtons = document.querySelectorAll("[data-question]");
  const drawPanel = document.querySelector("#drawPanel");
  const cardDeck = document.querySelector("#cardDeck");
  const drawHint = document.querySelector("#drawHint");

  if (!messages || !form || !input || !drawPanel || !cardDeck || !drawHint) {
    return;
  }

  applyNightMode();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = input.value.trim();

    if (!question) {
      return;
    }

    ask(messages, input, drawPanel, cardDeck, drawHint, question);
  });

  quickAskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      ask(messages, input, drawPanel, cardDeck, drawHint, button.dataset.question);
    });
  });

  if (!restoreDailyChat(messages)) {
    addMessage(messages, pickOpeningLine(), "bot");
  }
  initVisitRitual();
  initEnergyBottle();
  initWishBottle();
  initAuth();
  initServiceWorkerUpdates();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOracle);
} else {
  initOracle();
}
