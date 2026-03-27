Component({
  properties: {
    // 牌阵类型
    spreadType: {
      type: String,
      value: 'single'
    },
    // 牌数据
    cards: {
      type: Array,
      value: []
    },
    // 是否已翻开
    revealed: {
      type: Boolean,
      value: false
    },
    // 当前步骤（用于逐步揭示）
    currentStep: {
      type: Number,
      value: -1
    }
  },

  data: {
    positions: [],
    layoutClass: ''
  },

  lifetimes: {
    attached() {
      this.updateLayout();
    }
  },

  observers: {
    'spreadType, cards': function() {
      this.updateLayout();
    }
  },

  methods: {
    updateLayout() {
      const spreads = require('../../utils/spreads.js');
      const spread = spreads.getSpreadById(this.properties.spreadType);
      
      if (!spread) return;
      
      this.setData({
        positions: spread.positions,
        layoutClass: spread.layout
      });
    },

    onCardTap(e) {
      const { card } = e.detail;
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('cardtap', { card, index });
    },

    onCardFlip(e) {
      const { card } = e.detail;
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('cardflip', { card, index });
    }
  }
});
