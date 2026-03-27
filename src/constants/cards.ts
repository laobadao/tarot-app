/**
 * 塔罗牌数据 - 经典韦特塔罗牌 78 张
 * 包含 22 张大阿卡纳 + 56 张小阿卡纳
 */

export interface TarotCard {
  id: number;
  name: string;
  nameEn: string;
  arcana: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  number: number;
  keywords: string[];
  meanings: {
    upright: string;
    reversed: string;
  };
  element?: 'fire' | 'water' | 'air' | 'earth';
  planet?: string;
  zodiac?: string;
}

// 大阿卡纳 (0-21)
export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 0,
    name: '愚者',
    nameEn: 'The Fool',
    arcana: 'major',
    number: 0,
    keywords: ['新的开始', '冒险', '纯真', '信任', '自发'],
    meanings: {
      upright: '新的开始，冒险，纯真，信任，自发。代表踏上未知旅程的勇气，相信直觉，拥抱可能性。',
      reversed: '鲁莽，轻率，缺乏计划，天真过头，冒险过度。'
    },
    element: 'air',
    planet: '天王星'
  },
  {
    id: 1,
    name: '魔术师',
    nameEn: 'The Magician',
    arcana: 'major',
    number: 1,
    keywords: ['创造力', '意志力', '显化', '资源整合', '行动力'],
    meanings: {
      upright: '创造力，意志力，显化能力，资源整合，行动力。你拥有实现梦想所需的一切工具。',
      reversed: '欺骗，操控，缺乏自信，资源浪费，未能发挥潜力。'
    },
    element: 'air',
    planet: '水星'
  },
  {
    id: 2,
    name: '女祭司',
    nameEn: 'The High Priestess',
    arcana: 'major',
    number: 2,
    keywords: ['直觉', '潜意识', '神秘', '内在智慧', '灵性'],
    meanings: {
      upright: '直觉，潜意识，神秘知识，内在智慧，灵性觉醒。相信你的第六感，答案在你心中。',
      reversed: '表面化，忽视直觉，秘密被揭露，灵性迷失，情绪压抑。'
    },
    element: 'water',
    planet: '月亮'
  },
  {
    id: 3,
    name: '皇后',
    nameEn: 'The Empress',
    arcana: 'major',
    number: 3,
    keywords: ['丰盛', '母性', '创造力', '自然', '感官享受'],
    meanings: {
      upright: '丰盛，母性，创造力，自然，感官享受， fertility。生命中的丰收季节。',
      reversed: '创造力受阻，过度依赖，物质匮乏，母性失衡，不孕。'
    },
    element: 'earth',
    planet: '金星'
  },
  {
    id: 4,
    name: '皇帝',
    nameEn: 'The Emperor',
    arcana: 'major',
    number: 4,
    keywords: ['权威', '结构', '父性', '控制', '秩序'],
    meanings: {
      upright: '权威，结构，父性能量，控制，秩序，建立稳固基础。纪律带来成功。',
      reversed: '专制，僵化，控制过度，父权滥用，缺乏纪律。'
    },
    element: 'fire',
    planet: '火星'
  },
  {
    id: 5,
    name: '教皇',
    nameEn: 'The Hierophant',
    arcana: 'major',
    number: 5,
    keywords: ['传统', '精神指引', '教育', '信仰', '仪式'],
    meanings: {
      upright: '传统，精神指引，教育，信仰系统，仪式。遵循既定的道路学习成长。',
      reversed: '反叛传统，异端，精神危机，非传统路径，质疑权威。'
    },
    element: 'earth',
    zodiac: '金牛座'
  },
  {
    id: 6,
    name: '恋人',
    nameEn: 'The Lovers',
    arcana: 'major',
    number: 6,
    keywords: ['爱情', '选择', '和谐', '结合', '价值观'],
    meanings: {
      upright: '爱情，重要选择，和谐关系，价值观统一，灵魂伴侣。关于心的决定。',
      reversed: '关系失衡，错误选择，价值观冲突，不忠，不成熟的爱。'
    },
    element: 'air',
    zodiac: '双子座'
  },
  {
    id: 7,
    name: '战车',
    nameEn: 'The Chariot',
    arcana: 'major',
    number: 7,
    keywords: ['意志力', '胜利', '决心', '前进', '控制对立'],
    meanings: {
      upright: '意志力，胜利，决心，前进，控制对立面。通过专注和毅力达成目标。',
      reversed: '失控，方向不明，侵略性，意志力涣散，失败。'
    },
    element: 'water',
    zodiac: '巨蟹座'
  },
  {
    id: 8,
    name: '力量',
    nameEn: 'Strength',
    arcana: 'major',
    number: 8,
    keywords: ['内在力量', '勇气', '耐心', '同情心', '驯服'],
    meanings: {
      upright: '内在力量，勇气，耐心，同情心，以柔克刚。真正的力量来自内在。',
      reversed: '软弱，失去勇气，愤怒管理，自我怀疑，耐心耗尽。'
    },
    element: 'fire',
    zodiac: '狮子座'
  },
  {
    id: 9,
    name: '隐者',
    nameEn: 'The Hermit',
    arcana: 'major',
    number: 9,
    keywords: ['独处', '内省', '寻求真理', '智慧', '退隐'],
    meanings: {
      upright: '独处，内省，寻求真理，智慧，退隐以寻找答案。在孤独中找到光明。',
      reversed: '孤立，孤独，迷失方向，拒绝建议，社交退缩。'
    },
    element: 'earth',
    zodiac: '处女座'
  },
  {
    id: 10,
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    arcana: 'major',
    number: 10,
    keywords: ['命运', '转折点', '循环', '机遇', '变化'],
    meanings: {
      upright: '命运，转折点，生命循环，机遇，不可避免的变化。好运降临。',
      reversed: '厄运，拒绝改变，循环受阻，错过机遇，命运挑战。'
    },
    element: 'fire',
    planet: '木星'
  },
  {
    id: 11,
    name: '正义',
    nameEn: 'Justice',
    arcana: 'major',
    number: 11,
    keywords: ['公正', '因果', '真相', '责任', '法律'],
    meanings: {
      upright: '公正，因果报应，真相，责任，法律问题。你的行动将决定结果。',
      reversed: '不公，逃避责任，不诚实，法律纠纷，因果报应延迟。'
    },
    element: 'air',
    zodiac: '天秤座'
  },
  {
    id: 12,
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    arcana: 'major',
    number: 12,
    keywords: ['牺牲', '暂停', '新视角', '放下', '等待'],
    meanings: {
      upright: '牺牲，暂停，新视角，放下控制，自愿等待。通过投降获得智慧。',
      reversed: '抗拒改变，徒劳的牺牲，停滞，自私，无法放下。'
    },
    element: 'water',
    planet: '海王星'
  },
  {
    id: 13,
    name: '死神',
    nameEn: 'Death',
    arcana: 'major',
    number: 13,
    keywords: ['转变', '结束', '新生', '放下', '蜕变'],
    meanings: {
      upright: '转变，结束带来新生，放下旧事物，蜕变。一个时代的终结，新开始的前奏。',
      reversed: '抗拒结束，停滞，恐惧改变，无法放下过去，拖延。'
    },
    element: 'water',
    zodiac: '天蝎座'
  },
  {
    id: 14,
    name: '节制',
    nameEn: 'Temperance',
    arcana: 'major',
    number: 14,
    keywords: ['平衡', '调和', '耐心', '中庸', '炼金'],
    meanings: {
      upright: '平衡，调和对立，耐心，中庸之道，炼金术。找到完美的融合点。',
      reversed: '极端，失衡，过度放纵，不耐烦，缺乏调和。'
    },
    element: 'fire',
    zodiac: '射手座'
  },
  {
    id: 15,
    name: '恶魔',
    nameEn: 'The Devil',
    arcana: 'major',
    number: 15,
    keywords: ['束缚', '物质主义', '诱惑', '阴影面', '成瘾'],
    meanings: {
      upright: '束缚（自我设限），物质主义，诱惑，阴影面，成瘾模式。你其实可以挣脱锁链。',
      reversed: '释放，摆脱束缚，意识到限制，重获自由，打破成瘾。'
    },
    element: 'earth',
    zodiac: '摩羯座'
  },
  {
    id: 16,
    name: '塔',
    nameEn: 'The Tower',
    arcana: 'major',
    number: 16,
    keywords: ['突变', '崩塌', '启示', '解放', '真相'],
    meanings: {
      upright: '突变，旧结构崩塌，启示，强制解放，真相暴露。虽然痛苦但必要。',
      reversed: '避免崩塌，延迟不可避免的变化，恐惧真相，逐步瓦解。'
    },
    element: 'fire',
    planet: '火星'
  },
  {
    id: 17,
    name: '星星',
    nameEn: 'The Star',
    arcana: 'major',
    number: 17,
    keywords: ['希望', '灵感', '宁静', '灵性', '更新'],
    meanings: {
      upright: '希望，灵感，宁静，灵性指引，更新。黑暗后的光明，保持信念。',
      reversed: '失去希望，绝望，灵感枯竭，失去信心，悲观。'
    },
    element: 'air',
    zodiac: '水瓶座'
  },
  {
    id: 18,
    name: '月亮',
    nameEn: 'The Moon',
    arcana: 'major',
    number: 18,
    keywords: ['幻象', '恐惧', '潜意识', '直觉', '不确定性'],
    meanings: {
      upright: '幻象，恐惧，潜意识浮现，直觉增强，不确定性。事情不是表面看起来那样。',
      reversed: '恐惧消散，真相大白，幻觉破除，潜意识释放，清晰。'
    },
    element: 'water',
    zodiac: '双鱼座'
  },
  {
    id: 19,
    name: '太阳',
    nameEn: 'The Sun',
    arcana: 'major',
    number: 19,
    keywords: ['成功', '快乐', '活力', '清晰', '活力'],
    meanings: {
      upright: '成功，快乐，活力，清晰，能量充沛。最积极正面的牌。',
      reversed: '暂时的沮丧，过度乐观，自我膨胀，被遮蔽的快乐。'
    },
    element: 'fire',
    planet: '太阳'
  },
  {
    id: 20,
    name: '审判',
    nameEn: 'Judgement',
    arcana: 'major',
    number: 20,
    keywords: ['重生', '审判', '内在呼唤', '宽恕', '觉醒'],
    meanings: {
      upright: '重生，审判日，内在呼唤，宽恕，灵性觉醒。响应灵魂的召唤。',
      reversed: '自我怀疑，拒绝召唤，自责，缺乏宽恕，错过觉醒。'
    },
    element: 'fire',
    planet: '冥王星'
  },
  {
    id: 21,
    name: '世界',
    nameEn: 'The World',
    arcana: 'major',
    number: 21,
    keywords: ['完成', '圆满', '成就', '整合', '旅行'],
    meanings: {
      upright: '完成，圆满，成就，整合，完成循环。一个完整周期的结束。',
      reversed: '未完成，延迟完成，缺乏 closure，需要最后一步。'
    },
    element: 'earth',
    planet: '土星'
  }
];

// 小阿卡纳 - 权杖 (Wands) - 火元素
const WANDS_CARDS: TarotCard[] = Array.from({ length: 14 }, (_, i) => {
  const number = i + 1;
  const wandsData: Record<number, { name: string; keywords: string[]; upright: string; reversed: string }> = {
    1: { name: '权杖首牌', keywords: ['创造力', '灵感', '新机会', '热情'], upright: '创造力爆发，灵感降临，新的机会，热情的开始', reversed: '延迟，缺乏灵感，错失机会，热情消退' },
    2: { name: '权杖二', keywords: ['规划', '决策', '未来', '选择'], upright: '规划未来，做决策，权衡选择，展望未来', reversed: '恐惧改变，决策困难，计划受阻，短视' },
    3: { name: '权杖三', keywords: ['远见', '扩展', '合作', '成功'], upright: '有远见，业务扩展，成功合作，展望成真', reversed: '障碍，延迟，合作问题，计划失败' },
    4: { name: '权杖四', keywords: ['庆祝', '稳定', '和谐', '成就'], upright: '庆祝成功，家庭和谐，稳定基础，社区支持', reversed: '不稳定，家庭问题，庆祝取消，缺乏支持' },
    5: { name: '权杖五', keywords: ['冲突', '竞争', '挑战', '辩论'], upright: '健康竞争，克服冲突，挑战中成长，捍卫立场', reversed: '避免冲突，内心冲突，不公平竞争，和解' },
    6: { name: '权杖六', keywords: ['胜利', '认可', '好消息', '进展'], upright: '胜利与认可，好消息，公众赞扬，进展顺利', reversed: '延迟的认可，骄傲，失败的预期，傲慢' },
    7: { name: '权杖七', keywords: ['防御', '坚持', '勇气', '挑战'], upright: '为自己辩护，坚持立场，勇气面对挑战', reversed: '放弃，不知所措，无法坚持，被压倒' },
    8: { name: '权杖八', keywords: ['速度', '行动', '变化', '进展'], upright: '快速行动，消息传来，迅速变化，势头强劲', reversed: '延迟，阻力，混乱，方向不明' },
    9: { name: '权杖九', keywords: ['韧性', '准备', '警觉', '最后防线'], upright: '坚韧不拔，做好准备，警惕但不恐惧，最后防线', reversed: '精疲力竭，防御过度，偏执，放弃' },
    10: { name: '权杖十', keywords: ['负担', '责任', '压力', '成就'], upright: '承担重任，责任感，即将完成的苦差', reversed: '不堪重负，拒绝帮助，崩溃，责任分配' },
    11: { name: '权杖侍从', keywords: ['热情', '探索', '发现', '自由'], upright: '新想法，热情探索，发现机会，自由精神', reversed: '坏消息，缺乏方向，冲动，过度自信' },
    12: { name: '权杖骑士', keywords: ['冒险', '行动', '激情', '冲动'], upright: '热情行动，冒险精神，无畏前进，魅力', reversed: '鲁莽，冲动，愤怒，不计后果' },
    13: { name: '权杖皇后', keywords: ['自信', '魅力', '独立', '社交'], upright: '自信魅力，独立精神，社交能力，领导力', reversed: '专横，嫉妒，咄咄逼人，自私' },
    14: { name: '权杖国王', keywords: ['领导力', '远见', '企业家', '尊重'], upright: '领导能力，远见卓识，创业精神，赢得尊重', reversed: '专横，冲动，暴政，高风险行为' }
  };
  const data = wandsData[number];
  return {
    id: 22 + i,
    name: data.name,
    nameEn: number <= 10 ? `${number} of Wands` : `Page of Wands`,
    arcana: 'minor',
    suit: 'wands',
    number,
    keywords: data.keywords,
    meanings: { upright: data.upright, reversed: data.reversed },
    element: 'fire'
  };
});

// 小阿卡纳 - 圣杯 (Cups) - 水元素
const CUPS_CARDS: TarotCard[] = Array.from({ length: 14 }, (_, i) => {
  const number = i + 1;
  const cupsData: Record<number, { name: string; keywords: string[]; upright: string; reversed: string }> = {
    1: { name: '圣杯首牌', keywords: ['爱', '情感', '直觉', '灵性'], upright: '爱的源泉，情感满足，直觉开启，灵性连接', reversed: '情感封闭，空虚，失去灵性，悲伤' },
    2: { name: '圣杯二', keywords: ['伴侣', '和谐', '结合', '平衡'], upright: '伙伴关系，和谐关系，互相吸引，平衡', reversed: '关系失衡，分离，不和，不平等' },
    3: { name: '圣杯三', keywords: ['庆祝', '友谊', '社交', '欢乐'], upright: '庆祝友谊，社交聚会，共享欢乐，社区', reversed: '过度放纵，八卦，孤独，社交问题' },
    4: { name: '圣杯四', keywords: ['倦怠', '不满', '冷漠', '冥想'], upright: '重新评估，不满现状，沉思冥想，寻找意义', reversed: '觉醒，新意识，重新开始，感激' },
    5: { name: '圣杯五', keywords: ['失落', '悲伤', '失望', '哀痛'], upright: '处理悲伤，失落感，失望，需要接受', reversed: '接受，继续前进，宽恕，希望回归' },
    6: { name: '圣杯六', keywords: ['怀旧', '童年', '纯真', '回忆'], upright: '怀旧，童年回忆，纯真，过去的礼物', reversed: '困在过去，成长问题，不成熟，怀旧过度' },
    7: { name: '圣杯七', keywords: ['幻想', '选择', '幻觉', '梦想'], upright: '多种选择，幻想与梦想，想象丰富', reversed: '现实检验，选择明确，摆脱幻觉，清晰' },
    8: { name: '圣杯八', keywords: ['离开', '寻找', '放手', '追寻'], upright: '离开已知，追寻更深意义，放下过去', reversed: '害怕改变，停滞不前，重复模式，逃避' },
    9: { name: '圣杯九', keywords: ['满足', '愿望', '满足', '幸福'], upright: '愿望实现，情感满足，幸福，感恩', reversed: '贪婪，永不满足，肤浅，空虚' },
    10: { name: '圣杯十', keywords: ['家庭', '和谐', '爱', '圆满'], upright: '家庭和谐，爱的圆满，情感幸福，梦想家庭', reversed: '家庭问题，不和谐，破碎的家庭梦' },
    11: { name: '圣杯侍从', keywords: ['直觉', '灵性', '敏感', '想象'], upright: '直觉信息，灵性觉醒，敏感细腻，想象力', reversed: '情感不成熟，幻想，过度敏感，逃避' },
    12: { name: '圣杯骑士', keywords: ['浪漫', '魅力', '邀请', '幻想'], upright: '浪漫邀请，魅力十足，追求者，艺术气质', reversed: '承诺问题，不切实际，情绪化，逃避' },
    13: { name: '圣杯皇后', keywords: ['同情', '直觉', '情感', '关怀'], upright: '同情心，直觉强大，情感深度，滋养他人', reversed: '情绪不稳定，依赖，操纵，过度敏感' },
    14: { name: '圣杯国王', keywords: ['掌控', '智慧', '外交', '平衡'], upright: '情感掌控，智慧慈悲，外交能力，内心平静', reversed: '情绪操纵，情绪压抑，不诚实，冷漠' }
  };
  const data = cupsData[number];
  return {
    id: 36 + i,
    name: data.name,
    nameEn: number <= 10 ? `${number} of Cups` : `Page of Cups`,
    arcana: 'minor',
    suit: 'cups',
    number,
    keywords: data.keywords,
    meanings: { upright: data.upright, reversed: data.reversed },
    element: 'water'
  };
});

// 小阿卡纳 - 宝剑 (Swords) - 风元素
const SWORDS_CARDS: TarotCard[] = Array.from({ length: 14 }, (_, i) => {
  const number = i + 1;
  const swordsData: Record<number, { name: string; keywords: string[]; upright: string; reversed: string }> = {
    1: { name: '宝剑首牌', keywords: ['清晰', '突破', '新想法', '力量'], upright: '思维清晰，突破，新想法，智力力量', reversed: '混乱，思维不清，缺乏沟通，判断力差' },
    2: { name: '宝剑二', keywords: ['僵局', '回避', '信息不足', '权衡'], upright: '困难选择，僵局，回避决策，权衡利弊', reversed: '信息泄露，决策困难，混乱，看穿幻觉' },
    3: { name: '宝剑三', keywords: ['心碎', '悲伤', '痛苦', '失落'], upright: '心碎，情感痛苦，悲伤，必要的痛苦', reversed: '恢复，宽恕，放手痛苦，继续前进' },
    4: { name: '宝剑四', keywords: ['休息', '恢复', '冥想', '静止'], upright: '休息恢复，冥想静思，精神充电，暂时退隐', reversed: '休息不足，焦躁，失眠，无法放松' },
    5: { name: '宝剑五', keywords: ['冲突', '失败', '损失', '自私'], upright: '冲突，失败，损失，自私的胜利，皮洛士胜利', reversed: '开放沟通，和解，解决冲突，宽容' },
    6: { name: '宝剑六', keywords: ['过渡', '改变', '旅程', '前进'], upright: '过渡时期，改变，旅程，离开困难', reversed: '抗拒改变，未完成过渡，延迟，被困' },
    7: { name: '宝剑七', keywords: ['欺骗', '策略', '背叛', '偷窃'], upright: '欺骗，策略，背叛，需要谨慎，偷偷摸摸', reversed: '诚实，坦白，重新评估策略，被抓' },
    8: { name: '宝剑八', keywords: ['限制', '束缚', '无助', '困境'], upright: '自我设限，感到被困，无助，需要新视角', reversed: '释放，自由，新视角，解放自己' },
    9: { name: '宝剑九', keywords: ['焦虑', '噩梦', '恐惧', '内疚'], upright: '焦虑，噩梦，恐惧，内疚，失眠', reversed: '希望，缓解焦虑，面对恐惧，康复' },
    10: { name: '宝剑十', keywords: ['结束', '痛苦', '崩溃', '背叛'], upright: '痛苦的结束，崩溃，背叛，新的开始前的黑暗', reversed: '生存，康复，新开始，结束的痛苦' },
    11: { name: '宝剑侍页', keywords: ['好奇', '新想法', '警觉', '交流'], upright: '好奇心，新想法，警觉，学习沟通', reversed: '八卦，欺骗，缺乏沟通，思维混乱' },
    12: { name: '宝剑骑士', keywords: ['行动', '冲动', '辩论', '速度'], upright: '快速行动，果断，辩论，智力追求', reversed: '鲁莽，冲动，好辩，残忍' },
    13: { name: '宝剑皇后', keywords: ['独立', '公正', '清晰', '诚实'], upright: '独立，公正，思维清晰，诚实直接', reversed: '冷酷，苛刻，刻薄，过度理性' },
    14: { name: '宝剑国王', keywords: ['权威', '真理', '智慧', '理性'], upright: '智力权威，寻求真理，智慧，理性', reversed: '操纵，虐待，不诚实，无情' }
  };
  const data = swordsData[number];
  return {
    id: 50 + i,
    name: data.name,
    nameEn: number <= 10 ? `${number} of Swords` : `Page of Swords`,
    arcana: 'minor',
    suit: 'swords',
    number,
    keywords: data.keywords,
    meanings: { upright: data.upright, reversed: data.reversed },
    element: 'air'
  };
});

// 小阿卡纳 - 星币 (Pentacles) - 土元素
const PENTACLES_CARDS: TarotCard[] = Array.from({ length: 14 }, (_, i) => {
  const number = i + 1;
  const pentaclesData: Record<number, { name: string; keywords: string[]; upright: string; reversed: string }> = {
    1: { name: '星币首牌', keywords: ['财富', '机会', '繁荣', '显化'], upright: '新财务机会，繁荣，显化财富，新投资', reversed: '错失机会，贪婪，财务损失，物质主义' },
    2: { name: '星币二', keywords: ['平衡', '适应', '时间管理', '优先'], upright: '多任务，平衡，适应能力，时间管理', reversed: '失衡，过度承诺，混乱，优先级混乱' },
    3: { name: '星币三', keywords: ['团队合作', '技能', '认可', '精通'], upright: '团队合作，技能展示，认可，专业精通', reversed: '缺乏团队合作，技能不足，平庸，冲突' },
    4: { name: '星币四', keywords: ['保守', '控制', '稳定', '占有'], upright: '财务保守，控制资源，稳定基础，储蓄', reversed: '贪婪，物质主义，自私，财务不稳定' },
    5: { name: '星币五', keywords: ['困难', '损失', '孤立', '担忧'], upright: '财务困难，艰难时期，孤立感，物质损失', reversed: '恢复，新希望，从困难中走出，援助' },
    6: { name: '星币六', keywords: ['慷慨', '分享', '给予', '交换'], upright: '慷慨给予，分享财富，慈善，公平交换', reversed: '债务，自私，权力不平衡，接受困难' },
    7: { name: '星币七', keywords: ['评估', '反思', '耐心', '投资'], upright: '评估进展，耐心等待，投资回报，反思', reversed: '焦虑，不耐烦，投资损失，挫折' },
    8: { name: '星币八', keywords: ['学徒', '技能', '勤奋', '专注'], upright: '学习技能，勤奋工作，专注细节，精通', reversed: '完美主义，缺乏专注，无聊，平庸' },
    9: { name: '星币九', keywords: ['独立', '奢侈', '自给自足', '成功'], upright: '财务独立，享受成果，自给自足，成功', reversed: '依赖，缺乏自律，财务不安全，虚荣' },
    10: { name: '星币十', keywords: ['遗产', '财富', '家庭', '长期'], upright: '家族财富，长期安全，遗产，繁荣', reversed: '财务失败，家庭问题，不稳定，损失' },
    11: { name: '星币侍页', keywords: ['机会', '学习', '实用', '雄心'], upright: '新机会，学习实践，实用技能，雄心', reversed: '错失机会，贪婪，懒惰，缺乏计划' },
    12: { name: '星币骑士', keywords: ['勤奋', '可靠', '稳重', '耐心'], upright: '勤奋工作，可靠，稳重，耐心坚持', reversed: '懒惰，拖延，不负责任，无聊' },
    13: { name: '星币皇后', keywords: ['滋养', '实用', '丰饶', '安全'], upright: '滋养他人，实用智慧，丰饶，物质安全', reversed: '过度依赖，物质主义，懒惰，不安全感' },
    14: { name: '星币国王', keywords: ['成就', '领导', '权威', '财富'], upright: '商业成就，领导力，权威，财富稳定', reversed: '贪婪，物质主义，腐败，财务损失' }
  };
  const data = pentaclesData[number];
  return {
    id: 64 + i,
    name: data.name,
    nameEn: number <= 10 ? `${number} of Pentacles` : `Page of Pentacles`,
    arcana: 'minor',
    suit: 'pentacles',
    number,
    keywords: data.keywords,
    meanings: { upright: data.upright, reversed: data.reversed },
    element: 'earth'
  };
});

// 全部 78 张牌
export const TAROT_CARDS: TarotCard[] = [
  ...MAJOR_ARCANA,
  ...WANDS_CARDS,
  ...CUPS_CARDS,
  ...SWORDS_CARDS,
  ...PENTACLES_CARDS
];

// 根据 ID 获取牌
export const getCardById = (id: number): TarotCard | undefined => {
  return TAROT_CARDS.find(card => card.id === id);
};

// 随机抽取一张牌
export const drawRandomCard = (): { card: TarotCard; reversed: boolean } => {
  const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
  const reversed = Math.random() > 0.5;
  return {
    card: TAROT_CARDS[randomIndex],
    reversed
  };
};

// 洗牌
export const shuffleDeck = (): number[] => {
  const deck = Array.from({ length: 78 }, (_, i) => i);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};
