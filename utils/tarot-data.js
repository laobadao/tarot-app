/**
 * 塔罗牌数据 - 78张完整牌组
 * 22张大阿尔卡纳 + 56张小阿尔卡纳
 */

const MAJOR_ARCANA = [
  {
    id: 0,
    name: '愚者',
    nameEn: 'The Fool',
    number: 0,
    keywords: ['新的开始', '冒险', '纯真', '信任'],
    upright: '新的开始，纯真的信任，冒险精神，踏上未知旅程，乐观的态度',
    reversed: '鲁莽冲动，缺乏计划，天真受骗，逃避责任，过于轻率',
    element: '风',
    planet: '天王星'
  },
  {
    id: 1,
    name: '魔术师',
    nameEn: 'The Magician',
    number: 1,
    keywords: ['创造力', '意志力', '显化', '能力'],
    upright: '强大的意志力，创造力，将想法变为现实，掌控局面，资源丰富',
    reversed: '欺骗， manipulation，滥用权力，缺乏信心，能力不足',
    element: '风',
    planet: '水星'
  },
  {
    id: 2,
    name: '女祭司',
    nameEn: 'The High Priestess',
    number: 2,
    keywords: ['直觉', '潜意识', '神秘', '内在智慧'],
    upright: '直觉增强，内在智慧，潜意识讯息，神秘知识，静观其变',
    reversed: '忽视直觉，表面判断，秘密暴露，情绪混乱，缺乏洞察力',
    element: '水',
    planet: '月亮'
  },
  {
    id: 3,
    name: '皇后',
    nameEn: 'The Empress',
    number: 3,
    keywords: ['丰饶', '母性', '自然', '创造力'],
    upright: '丰饶富足，母性能量，创造力爆发，自然和谐，享受生活',
    reversed: '创造力受阻，过度依赖，不育，懒惰，缺乏滋养',
    element: '土',
    planet: '金星'
  },
  {
    id: 4,
    name: '皇帝',
    nameEn: 'The Emperor',
    number: 4,
    keywords: ['权威', '结构', '稳定', '父性'],
    upright: '权威与领导力，建立秩序，稳定结构，父性能量，理性决策',
    reversed: '专制统治，僵化固执，滥用权力，缺乏纪律，父亲问题',
    element: '火',
    planet: '白羊座'
  },
  {
    id: 5,
    name: '教皇',
    nameEn: 'The Hierophant',
    number: 5,
    keywords: ['传统', '信仰', '教育', '仪式'],
    upright: '传统价值观，精神导师，遵循规则，宗教或精神指引，教育学习',
    reversed: '打破传统，质疑权威，非传统信仰，反叛，精神危机',
    element: '土',
    planet: '金牛座'
  },
  {
    id: 6,
    name: '恋人',
    nameEn: 'The Lovers',
    number: 6,
    keywords: ['爱情', '选择', '和谐', '结合'],
    upright: '爱情关系，重要选择，价值观一致，和谐结合，灵魂伴侣',
    reversed: '不和谐，错误选择，价值观冲突，背叛，爱情困难',
    element: '风',
    planet: '双子座'
  },
  {
    id: 7,
    name: '战车',
    nameEn: 'The Chariot',
    number: 7,
    keywords: ['意志力', '胜利', '控制', '决心'],
    upright: '坚强意志，克服挑战，胜利在望，自我控制，前进动力',
    reversed: '失控，方向错误，缺乏决心，失败，内部冲突',
    element: '水',
    planet: '巨蟹座'
  },
  {
    id: 8,
    name: '力量',
    nameEn: 'Strength',
    number: 8,
    keywords: ['勇气', '耐心', '内在力量', '同情心'],
    upright: '内在力量，勇气与耐心，以柔克刚，同情心，情绪控制',
    reversed: '软弱，缺乏自信，失控的愤怒，自我怀疑，压抑情感',
    element: '火',
    planet: '狮子座'
  },
  {
    id: 9,
    name: '隐者',
    nameEn: 'The Hermit',
    number: 9,
    keywords: ['独处', '反省', '寻求真理', '内在指引'],
    upright: '独处反省，寻求内在真理，精神导师，退隐时期，内在指引',
    reversed: '孤独，孤立，迷失方向，拒绝帮助，社交退缩',
    element: '土',
    planet: '处女座'
  },
  {
    id: 10,
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    number: 10,
    keywords: ['变化', '命运', '周期', '转折点'],
    upright: '命运转折，好运降临，周期性变化，新机会，顺势而为',
    reversed: '厄运，阻碍，抗拒改变，坏运气，循环往复的困境',
    element: '火',
    planet: '木星'
  },
  {
    id: 11,
    name: '正义',
    nameEn: 'Justice',
    number: 11,
    keywords: ['公正', '真理', '因果', '法律'],
    upright: '公正裁决，因果报应，真理彰显，法律事务，平衡和谐',
    reversed: '不公正，偏见，不诚实，逃避责任，法律问题',
    element: '风',
    planet: '天秤座'
  },
  {
    id: 12,
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    number: 12,
    keywords: ['牺牲', '等待', '新视角', '放手'],
    upright: '换个角度看问题，暂时牺牲，等待时机，精神觉醒，放手',
    reversed: '抗拒改变，拖延，不必要的牺牲，固执，停滞',
    element: '水',
    planet: '海王星'
  },
  {
    id: 13,
    name: '死神',
    nameEn: 'Death',
    number: 13,
    keywords: ['结束', '转变', '新生', '放下'],
    upright: '重大转变，结束旧阶段，必要放下，重生，深刻变革',
    reversed: '抗拒结束，停滞，恐惧改变，无法放手，拖延',
    element: '水',
    planet: '天蝎座'
  },
  {
    id: 14,
    name: '节制',
    nameEn: 'Temperance',
    number: 14,
    keywords: ['平衡', '和谐', '耐心', '中庸'],
    upright: '找到平衡，和谐统一，耐心调和，中庸之道，自我疗愈',
    reversed: '失衡，极端，缺乏耐心，过度放纵，冲突',
    element: '火',
    planet: '射手座'
  },
  {
    id: 15,
    name: '恶魔',
    nameEn: 'The Devil',
    number: 15,
    keywords: ['束缚', '欲望', '物质主义', '成瘾'],
    upright: '意识到束缚，物质欲望，成瘾行为，负面模式，依赖关系',
    reversed: '打破束缚，释放自己，克服成瘾，摆脱依赖，重获自由',
    element: '土',
    planet: '摩羯座'
  },
  {
    id: 16,
    name: '塔',
    nameEn: 'The Tower',
    number: 16,
    keywords: ['突变', '破坏', '觉醒', '启示'],
    upright: '突然改变，旧结构崩塌，必要破坏，觉醒，真相揭露',
    reversed: '避免灾难，延迟改变，幸存，渐进改变，恐惧改变',
    element: '火',
    planet: '火星'
  },
  {
    id: 17,
    name: '星星',
    nameEn: 'The Star',
    number: 17,
    keywords: ['希望', '灵感', '宁静', '信心'],
    upright: '希望重现，灵感泉涌，内心平静，信心恢复，精神指引',
    reversed: '失去希望，绝望，缺乏信心，创意枯竭，精神空虚',
    element: '风',
    planet: '水瓶座'
  },
  {
    id: 18,
    name: '月亮',
    nameEn: 'The Moon',
    number: 18,
    keywords: ['幻觉', '恐惧', '潜意识', '神秘'],
    upright: '直觉敏锐，面对恐惧，潜意识讯息，不确定，神秘事物',
    reversed: '恐惧消散，真相大白，混乱结束，澄清误解，平静',
    element: '水',
    planet: '双鱼座'
  },
  {
    id: 19,
    name: '太阳',
    nameEn: 'The Sun',
    number: 19,
    keywords: ['成功', '喜悦', '活力', '清晰'],
    upright: '巨大成功，纯真喜悦，活力充沛，清晰明朗，幸福',
    reversed: '暂时的阴霾，缺乏活力，自我怀疑，延迟的成功',
    element: '火',
    planet: '太阳'
  },
  {
    id: 20,
    name: '审判',
    nameEn: 'Judgement',
    number: 20,
    keywords: ['重生', '觉醒', '宽恕', '召唤'],
    upright: '精神觉醒，重生，宽恕过去，响应召唤，新的开始',
    reversed: '自我怀疑，拒绝改变，逃避责任，未解决的过去，内疚',
    element: '火',
    planet: '冥王星'
  },
  {
    id: 21,
    name: '世界',
    nameEn: 'The World',
    number: 21,
    keywords: ['完成', '成就', '圆满', '整合'],
    upright: '完成目标，圆满达成，成就认可，旅程结束，完整',
    reversed: '未完成，缺乏结束，空虚，无法完成， shortcuts',
    element: '土',
    planet: '土星'
  }
];

// 小阿尔卡纳 - 权杖 (Wands)
const WANDS = generateMinorArcana('权杖', 'Wands', '火');

// 小阿尔卡纳 - 圣杯 (Cups)
const CUPS = generateMinorArcana('圣杯', 'Cups', '水');

// 小阿尔卡纳 - 宝剑 (Swords)
const SWORDS = generateMinorArcana('宝剑', 'Swords', '风');

// 小阿尔卡纳 - 星币 (Pentacles)
const PENTACLES = generateMinorArcana('星币', 'Pentacles', '土');

function generateMinorArcana(suitName, suitNameEn, element) {
  const cards = [];
  const ranks = [
    { num: 1, name: '首牌', nameEn: 'Ace' },
    { num: 2, name: '二', nameEn: 'Two' },
    { num: 3, name: '三', nameEn: 'Three' },
    { num: 4, name: '四', nameEn: 'Four' },
    { num: 5, name: '五', nameEn: 'Five' },
    { num: 6, name: '六', nameEn: 'Six' },
    { num: 7, name: '七', nameEn: 'Seven' },
    { num: 8, name: '八', nameEn: 'Eight' },
    { num: 9, name: '九', nameEn: 'Nine' },
    { num: 10, name: '十', nameEn: 'Ten' },
    { num: 11, name: '侍从', nameEn: 'Page' },
    { num: 12, name: '骑士', nameEn: 'Knight' },
    { num: 13, name: '王后', nameEn: 'Queen' },
    { num: 14, name: '国王', nameEn: 'King' }
  ];

  const meanings = getMinorArcanaMeanings(suitName);

  ranks.forEach((rank, index) => {
    const baseId = 22 + (suitName === '权杖' ? 0 : suitName === '圣杯' ? 14 : suitName === '宝剑' ? 28 : 42);
    const meaning = meanings[rank.num - 1];
    
    cards.push({
      id: baseId + index,
      name: `${suitName}${rank.name}`,
      nameEn: `${rank.nameEn} of ${suitNameEn}`,
      number: rank.num,
      suit: suitName,
      suitEn: suitNameEn,
      keywords: meaning.keywords,
      upright: meaning.upright,
      reversed: meaning.reversed,
      element: element,
      isCourt: rank.num >= 11
    });
  });

  return cards;
}

function getMinorArcanaMeanings(suit) {
  const meanings = {
    '权杖': [
      { keywords: ['创造', '灵感', '新开始'], upright: '新的创意火花，灵感涌现，开始新项目，热情', reversed: '延迟的开始，缺乏灵感，动力不足' },
      { keywords: ['计划', '决定', '发现'], upright: '制定计划，做出决定，探索可能性', reversed: '恐惧决策，计划受阻，选择困难' },
      { keywords: ['远见', '领导', '扩展'], upright: '长远视野，领导能力，扩展业务', reversed: '目光短浅，领导失败，计划受挫' },
      { keywords: ['庆祝', '和谐', '稳定'], upright: '庆祝成功，家庭和谐，稳定基础', reversed: '家庭不和，不稳定，过渡期的困难' },
      { keywords: ['冲突', '竞争', '挣扎'], upright: '面对冲突，健康竞争，努力争取', reversed: '避免冲突，内心挣扎，不公平竞争' },
      { keywords: ['胜利', '认可', '好消息'], upright: '取得胜利，获得认可，收到好消息', reversed: '延迟的胜利，骄傲导致失败，坏消息' },
      { keywords: ['防御', '坚持', '勇气'], upright: '坚守阵地，防御成功，展现勇气', reversed: '放弃，精疲力竭，无力防御' },
      { keywords: ['快速', '行动', '进展'], upright: '快速进展，立即行动，消息迅速', reversed: '延迟，冲动导致错误，方向错误' },
      { keywords: ['韧性', '准备', '坚持'], upright: '坚持不懈，做好准备，展示韧性', reversed: '准备不足，筋疲力尽，即将崩溃' },
      { keywords: ['负担', '责任', '努力'], upright: '承担责任，努力工作，即将完成', reversed: '不堪重负，责任过重，即将崩溃' },
      { keywords: ['探索', '热情', '消息'], upright: '探索新领域，热情高涨，带来消息', reversed: '不成熟，缺乏方向，坏消息' },
      { keywords: ['冒险', '勇气', '行动'], upright: '勇敢冒险，采取行动，充满能量', reversed: '鲁莽，冲动，方向错误' },
      { keywords: ['自信', '独立', '热情'], upright: '自信满满，独立自主，热情友好', reversed: '自我怀疑，依赖他人，缺乏自信' },
      { keywords: ['愿景', '领导力', '创业'], upright: '远见卓识，领导力强，创业精神', reversed: '专横，冲动，缺乏计划' }
    ],
    '圣杯': [
      { keywords: ['爱', '情感', '直觉'], upright: '新的感情，直觉开启，情感涌现', reversed: '情感压抑，直觉受阻，爱被拒绝' },
      { keywords: ['合作', '和谐', '关系'], upright: '伙伴关系，和谐相处，互相支持', reversed: '关系不和，缺乏合作，不平衡' },
      { keywords: ['庆祝', '友谊', '快乐'], upright: '与友同欢，庆祝时刻，情感满足', reversed: '过度放纵，疏远朋友，缺乏快乐' },
      { keywords: ['沉思', '怀旧', '评估'], upright: '沉思过去，评估现状，情感休息', reversed: '沉溺过去，无法前进，错失机会' },
      { keywords: ['失落', '悲伤', '失望'], upright: '面对悲伤，接受失落，疗愈过程', reversed: '无法释怀，持续悲伤，拒绝接受' },
      { keywords: ['回忆', '童年', '纯真'], upright: '美好回忆，童心未泯，怀旧之情', reversed: '沉溺过去，无法成长，逃避现实' },
      { keywords: ['幻想', '选择', '想象'], upright: '丰富想象，多种选择，白日梦', reversed: '幻想破灭，选择太多，逃避现实' },
      { keywords: ['离开', '放手', '前行'], upright: '放下过去，离开舒适区，寻找更多', reversed: '害怕改变，停滞不前，重复模式' },
      { keywords: ['满足', '愿望', '幸福'], upright: '情感满足，愿望实现，内心幸福', reversed: '永不满足，贪婪，情感空虚' },
      { keywords: ['家庭', '和谐', '幸福'], upright: '家庭幸福，情感圆满，和谐家庭', reversed: '家庭问题，情感破裂，不和谐' },
      { keywords: ['创意', '敏感', '学习'], upright: '创意表达，敏感细腻，学习情感', reversed: '情感不成熟，过度敏感，幻想' },
      { keywords: ['追求', '浪漫', '邀请'], upright: '浪漫追求，收到邀请，情感冒险', reversed: '承诺恐惧，情绪化，逃避责任' },
      { keywords: ['同理心', '关怀', '直觉'], upright: '高度同理心，关怀他人，直觉敏锐', reversed: '过于敏感，依赖情感，缺乏边界' },
      { keywords: ['智慧', '冷静', ' diplomat'], upright: '情感智慧，冷静处事，外交手腕', reversed: '情感操纵，冷漠，缺乏同理心' }
    ],
    '宝剑': [
      { keywords: ['突破', '清晰', '新想法'], upright: '思维突破，头脑清晰，新想法涌现', reversed: '思维混乱，想法受阻，缺乏清晰' },
      { keywords: ['困难', '选择', '僵局'], upright: '艰难选择，进退两难，需要决断', reversed: '无法决定，信息不足，逃避选择' },
      { keywords: ['心痛', '悲伤', '分离'], upright: '接受痛苦，经历心碎，必要的分离', reversed: '无法释怀，持续痛苦，拒绝疗愈' },
      { keywords: ['休息', '恢复', '冥想'], upright: '暂停休息，恢复精力，冥想疗愈', reversed: '无法休息，焦虑不安，失眠' },
      { keywords: ['冲突', '失败', '背叛'], upright: '面对失败，经历背叛，开放冲突', reversed: '避免冲突，内心矛盾，过去创伤' },
      { keywords: ['过渡', '放下', '前行'], upright: '渡过难关，放下负担，向前看', reversed: '无法放下，停滞，重复同样错误' },
      { keywords: ['欺骗', '策略', '偷窃'], upright: '需要策略，小心欺骗，保护资源', reversed: '自我欺骗，策略失败，重新开始' },
      { keywords: ['限制', '束缚', '恐惧'], upright: '意识到限制，自我设限，需要解脱', reversed: '自我解放，摆脱束缚，新观点' },
      { keywords: ['焦虑', '噩梦', '恐惧'], upright: '面对恐惧，焦虑情绪，噩梦困扰', reversed: '希望出现，恐惧消散，重获信心' },
      { keywords: ['痛苦', '结束', '牺牲'], upright: '痛苦结束，必要牺牲，新的开始', reversed: '无法结束，持续痛苦，拒绝改变' },
      { keywords: ['好奇', '沟通', '警觉'], upright: '保持好奇，警觉观察，新沟通', reversed: '八卦，刺探，缺乏计划' },
      { keywords: ['野心', '行动', '冲动'], upright: '追求目标，快速行动，野心勃勃', reversed: '鲁莽行动，没有方向，愤怒' },
      { keywords: ['独立', '理性', '公正'], upright: '独立思考，理性分析，公正判断', reversed: '过于冷酷，主观偏见，刻薄' },
      { keywords: ['权威', '真理', '智力'], upright: '智力权威，追求真理，清晰判断', reversed: '滥用权力，冷酷无情，专制' }
    ],
    '星币': [
      { keywords: ['机会', '潜力', '繁荣'], upright: '新的机会，财富潜力，物质繁荣', reversed: '错失机会，贪婪，缺乏计划' },
      { keywords: ['平衡', '适应', '管理'], upright: '平衡资源，适应变化，良好管理', reversed: '失衡，财务管理不善，混乱' },
      { keywords: ['合作', '学习', '技能'], upright: '团队合作，学习技能，专业发展', reversed: '缺乏动力，团队合作差，技能不足' },
      { keywords: ['保守', '储蓄', '稳定'], upright: '财务保守，储蓄，追求稳定', reversed: '贪婪，吝啬，物质主义' },
      { keywords: ['困难', '损失', '贫困'], upright: '财务困难，物质损失，艰难时期', reversed: '困难结束，恢复，新机会' },
      { keywords: ['慷慨', '给予', '分享'], upright: '慷慨给予，分享财富，互相帮助', reversed: '债务，自私，不平等交换' },
      { keywords: ['评估', '奖励', '耐心'], upright: '评估进展，等待奖励，耐心耕耘', reversed: '工作无回报，不耐烦，缺乏成果' },
      { keywords: ['学徒', '努力', '专注'], upright: '勤奋学习，专注技能，努力工作', reversed: '缺乏动力，技能不足，懒惰' },
      { keywords: ['独立', '自给', '成熟'], upright: '经济独立，自给自足，财务成熟', reversed: '过度依赖，财务不成熟，债务' },
      { keywords: ['财富', '安全', '家庭'], upright: '长期财富，财务安全，家庭稳定', reversed: '财务不稳定，家庭问题，短期思维' },
      { keywords: ['学习', '实践', '成长'], upright: '学习实践，技能成长，新机会', reversed: '缺乏经验，不切实际的计划' },
      { keywords: ['效率', '责任', '勤奋'], upright: '高效工作，承担责任，勤奋努力', reversed: '懒惰，逃避责任，效率低下' },
      { keywords: ['滋养', '实用', '慷慨'], upright: '实际关怀，慷慨大方，创造舒适', reversed: '过度依赖，财务不安全，占有欲' },
      { keywords: ['成功', '成就', '安全'], upright: '事业成功，财务成就，提供安全', reversed: '财务失败，贪婪，物质至上' }
    ]
  };
  
  return meanings[suit] || meanings['权杖'];
}

// 合并所有牌
const ALL_CARDS = [...MAJOR_ARCANA, ...WANDS, ...CUPS, ...SWORDS, ...PENTACLES];

module.exports = {
  MAJOR_ARCANA,
  WANDS,
  CUPS,
  SWORDS,
  PENTACLES,
  ALL_CARDS,
  
  // 获取随机牌
  getRandomCard() {
    const randomIndex = Math.floor(Math.random() * ALL_CARDS.length);
    const card = { ...ALL_CARDS[randomIndex] };
    // 随机决定正位或逆位
    card.isReversed = Math.random() < 0.5;
    return card;
  },
  
  // 获取多张随机牌
  getRandomCards(count) {
    const cards = [];
    const usedIds = new Set();
    
    while (cards.length < count && usedIds.size < ALL_CARDS.length) {
      const card = this.getRandomCard();
      if (!usedIds.has(card.id)) {
        usedIds.add(card.id);
        cards.push(card);
      }
    }
    
    return cards;
  },
  
  // 洗牌
  shuffleDeck() {
    return this.getRandomCards(ALL_CARDS.length);
  },
  
  // 根据ID获取牌
  getCardById(id) {
    return ALL_CARDS.find(card => card.id === id);
  },
  
  // 获取牌意解释
  getCardMeaning(card) {
    const position = card.isReversed ? '逆位' : '正位';
    const meaning = card.isReversed ? card.reversed : card.upright;
    return {
      position,
      meaning,
      keywords: card.keywords
    };
  }
};
