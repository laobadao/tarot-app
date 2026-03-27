Component({
  properties: {
    // 牌面数据
    card: {
      type: Object,
      value: null
    },
    // 是否显示牌背（未翻开）
    faceDown: {
      type: Boolean,
      value: true
    },
    // 尺寸：small, medium, large
    size: {
      type: String,
      value: 'medium'
    },
    // 是否可点击
    clickable: {
      type: Boolean,
      value: false
    },
    // 是否正在翻转
    isFlipping: {
      type: Boolean,
      value: false
    },
    // 位置标签（如"过去"、"现在"）
    positionLabel: {
      type: String,
      value: ''
    },
    // 是否显示位置标签
    showLabel: {
      type: Boolean,
      value: false
    }
  },

  data: {
    flipped: false,
    animationClass: ''
  },

  lifetimes: {
    attached() {
      this.setData({
        flipped: !this.properties.faceDown
      });
    }
  },

  observers: {
    'faceDown': function(faceDown) {
      this.setData({
        flipped: !faceDown
      });
    }
  },

  methods: {
    // 翻转牌
    flip() {
      if (this.properties.isFlipping) return;
      
      this.setData({
        isFlipping: true,
        animationClass: 'flipping'
      });
      
      setTimeout(() => {
        this.setData({
          flipped: !this.data.flipped,
          faceDown: !this.data.faceDown
        });
        
        setTimeout(() => {
          this.setData({
            isFlipping: false,
            animationClass: ''
          });
          this.triggerEvent('flip', { card: this.properties.card });
        }, 300);
      }, 300);
    },

    // 点击牌
    onTap() {
      if (this.properties.clickable) {
        this.flip();
      }
      this.triggerEvent('tap', { card: this.properties.card });
    },

    // 获取尺寸样式
    getSizeStyle() {
      const sizes = {
        small: { width: '120rpx', height: '200rpx' },
        medium: { width: '180rpx', height: '300rpx' },
        large: { width: '240rpx', height: '400rpx' }
      };
      return sizes[this.properties.size] || sizes.medium;
    }
  }
});
