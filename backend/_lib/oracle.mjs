const fallbackAnswers = [
  { mood: "general", text: "可以，怪力乱神批准。小猪猪。" },
  { mood: "general", text: "这件事会慢慢变清楚，先别急着判。" },
  { mood: "general", text: "同学~~认真听讲：先把问题放小一点。" },
  { mood: "action", text: "去吧，先勇敢五分钟。" },
  { mood: "action", text: "现在适合轻轻开始，不用一下子押全部。" },
  { mood: "action", text: "照你想的那样去做，怪力乱神在旁边点头。" },
  { mood: "wait", text: "再等等，答案还在锅里煮。" },
  { mood: "wait", text: "今天不判，明天再看。嘿嘿嘿。" },
  { mood: "wait", text: "云还没散，先让它飘一会儿。" },
  { mood: "comfort", text: "别难过，小猪已经做得很好了。" },
  { mood: "comfort", text: "没事，有只小兔子会一直都在。" },
  { mood: "comfort", text: "先抱抱，委屈可以交给我保管。" },
  { mood: "love", text: "靠近一点，但也要把自己留在自己这边。" },
  { mood: "love", text: "用你自己的方式说，真诚一点就很好。" },
  { mood: "love", text: "给惊喜留出空间，不要太勉强。" },
  { mood: "playful", text: "呱呱呱，答案是先种太阳。" },
  { mood: "playful", text: "大白菜骨头汤开始冒泡，本题可行。" },
  { mood: "playful", text: "妈呀，这题有点玄，但小猪猪会赢。" },
];

export function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getFallbackAnswer(mood) {
  const pool = fallbackAnswers.filter((item) => item.mood === mood);
  return pick(pool.length ? pool : fallbackAnswers);
}

export function getMood(question) {
  const normalized = String(question || "")
    .trim()
    .replace(/[？！?？!！。，、,.~～…\s]/g, "");

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
