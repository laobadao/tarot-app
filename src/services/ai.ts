/**
 * DeepSeek AI 解读服务
 * 模拟 Hermes-Trismegistus-Mistral-7B 塔罗解读风格
 */

import { DrawnCard, Spread } from '../types';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

interface InterpretationResult {
  overall: string;
  positionInterpretations: { positionId: number; interpretation: string }[];
  advice: string;
}

// 构建塔罗解读 Prompt
function buildTarotPrompt(
  question: string,
  spread: Spread,
  cards: DrawnCard[]
): string {
  const cardsDescription = cards.map((drawn, index) => {
    const position = drawn.position;
    const card = drawn.card;
    const orientation = drawn.reversed ? '逆位' : '正位';
    const meaning = drawn.reversed 
      ? card.meanings.reversed 
      : card.meanings.upright;
    
    return `
[牌位 ${index + 1}] ${position.name}
- 含义：${position.description}
- 抽到的牌：${card.name}（${card.nameEn}）${orientation}
- 关键词：${card.keywords.join('、')}
- 牌义：${meaning}
`;
  }).join('\n---\n');

  return `你是一位深谙神秘学的塔罗大师，以 Hermes Trismegistus 的智慧传承解读牌意。请为以下占卜提供专业、深入且富有灵性的解读。

## 求问者问题
"${question}"

## 使用的牌阵
${spread.name} - ${spread.description}

## 抽牌结果
${cardsDescription}

## 解读要求
请以神秘学者的口吻，结合炼金术与赫尔墨斯主义传统：

1. **整体能量场分析**（2-3段）：描述牌阵整体能量流动、主要主题和灵性指引
2. **逐牌解读**（每张牌 1-2 段）：结合牌位含义与牌义，提供深度洞察
3. **智慧指引**（1-2 段）：给求问者的具体建议与行动方向

请用中文回复，语气神秘而温暖，像一位古老的智慧导师。避免过于直白，保留一些神秘感和想象空间。`;
}

// 调用 DeepSeek API
export async function interpretReading(
  question: string,
  spread: Spread,
  cards: DrawnCard[],
  apiKey?: string
): Promise<InterpretationResult> {
  // 如果没有 API Key，使用模拟解读
  if (!apiKey) {
    return generateMockInterpretation(question, spread, cards);
  }

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: '你是一位塔罗大师，以神秘学、炼金术和赫尔墨斯主义传统解读牌意。你的解读富有灵性、深度和诗意，同时实用。'
          },
          {
            role: 'user',
            content: buildTarotPrompt(question, spread, cards)
          }
        ],
        temperature: 0.8,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      throw new Error(`API 错误: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '';
    
    // 解析 AI 回复
    return parseInterpretation(content, cards);
  } catch (error) {
    console.error('AI 解读失败:', error);
    // 失败时使用模拟解读
    return generateMockInterpretation(question, spread, cards);
  }
}

// 解析 AI 回复为结构化数据
function parseInterpretation(content: string, cards: DrawnCard[]): InterpretationResult {
  // 简单解析逻辑，可以根据需要优化
  const sections = content.split(/##?\s*(?:整体|逐牌|指引|建议)/i);
  
  const overall = sections[1]?.trim() || '能量的流动揭示了命运的轨迹，每一张牌都是宇宙给你的讯息。';
  const advice = sections[sections.length - 1]?.trim() || '信任你的直觉，答案已经在心中。';
  
  // 为每张牌生成解读
  const positionInterpretations = cards.map((drawn, index) => ({
    positionId: drawn.position.id,
    interpretation: extractCardInterpretation(content, index) || 
      `${drawn.card.name} 出现在 ${drawn.position.name}，暗示着${drawn.reversed ? '内在' : '外在'}的${drawn.card.keywords[0]}能量正在作用。`
  }));

  return { overall, positionInterpretations, advice };
}

// 从文本中提取单张牌的解读
function extractCardInterpretation(content: string, cardIndex: number): string | null {
  const patterns = [
    new RegExp(`\\[牌位 ${cardIndex + 1}\\][\\s\\S]*?(?=\\[牌位|##|$)`, 'i'),
    new RegExp(`牌位 ${cardIndex + 1}[：:](.+?)(?=牌位|$)`, 'i'),
    new RegExp(`第${cardIndex + 1}张牌[：:](.+?)(?=第|$)`, 'i')
  ];
  
  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) {
      return match[1]?.trim() || match[0]?.trim();
    }
  }
  
  return null;
}

// 生成模拟解读（无 API Key 时使用）
function generateMockInterpretation(
  question: string,
  spread: Spread,
  cards: DrawnCard[]
): InterpretationResult {
  const themes = cards.map(d => d.card.keywords[0]).join('、');
  
  const overall = `在${spread.name}的光辉中，${themes}的能量交织成一幅命运的画卷。宇宙正在回应你的询问「${question}」，这些牌揭示了你当前所处周期的深层意义。

${cards.length} 张牌构成一个完整的叙事弧线——从${cards[0]?.card.name}的启示，到${cards[cards.length - 1]?.card.name}的终章。每一张牌都是一个路标，指引你在迷雾中找到方向。`;

  const positionInterpretations = cards.map(drawn => {
    const card = drawn.card;
    const orientation = drawn.reversed ? '逆位' : '正位';
    const element = card.element ? `（${card.element}元素）` : '';
    
    return {
      positionId: drawn.position.id,
      interpretation: `${card.name} ${orientation} ${element}

${drawn.reversed ? card.meanings.reversed : card.meanings.upright}

在${drawn.position.name}的位置上，这张牌暗示着${card.keywords.slice(0, 3).join('、')}的能量正作用于这个层面。${drawn.reversed ? '逆位的出现提醒你关注内在的阻碍，需要更深层的自我觉察。' : '正位的能量顺畅流动，这是一个积极的信号。'}`
    };
  });

  const advice = `亲爱的求问者，这些牌为你描绘了一幅地图，但行走的权利始终在你手中。

${cards.length >= 3 ? `从${cards[0].card.name}到${cards[cards.length - 1].card.name}的旅程` : '这段旅程'}需要你保持觉知。当${cards.find(c => !c.reversed)?.card.name || '正位'}的光芒照耀时，勇敢前行；当${cards.find(c => c.reversed)?.card.name || '逆位'}的阴影浮现时，停下来倾听内在的声音。

记住：塔罗不是命运的判决书，而是一面镜子，映照出你心中早已知晓的真相。信任你的直觉，它是最古老的智慧。`;

  return { overall, positionInterpretations, advice };
}

// 获取解读的流式响应（用于实时显示）
export async function* interpretReadingStream(
  question: string,
  spread: Spread,
  cards: DrawnCard[],
  apiKey?: string
): AsyncGenerator<string> {
  if (!apiKey) {
    // 模拟流式输出
    const result = generateMockInterpretation(question, spread, cards);
    yield result.overall;
    return;
  }

  // 实际的流式 API 调用（如果需要）
  // 这里简化处理，实际实现需要使用 fetch 的 ReadableStream
  const result = await interpretReading(question, spread, cards, apiKey);
  yield result.overall;
}
