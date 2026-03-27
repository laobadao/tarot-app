// 工具函数

/**
 * 格式化日期
 */
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

/**
 * 获取相对时间
 */
export const getRelativeTime = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  
  if (diff < minute) return '刚刚';
  if (diff < hour) return `${Math.floor(diff / minute)}分钟前`;
  if (diff < day) return `${Math.floor(diff / hour)}小时前`;
  if (diff < week) return `${Math.floor(diff / day)}天前`;
  
  return formatDate(timestamp);
};

/**
 * 防抖函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * 节流函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastTime = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn(...args);
    }
  };
};

/**
 * 生成唯一ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * 随机打乱数组
 */
export const shuffle = <T>(array: T[]): T[] => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

/**
 * 随机从数组中取n个元素
 */
export const sample = <T>(array: T[], n: number): T[] => {
  const shuffled = shuffle(array);
  return shuffled.slice(0, n);
};

/**
 * 安全存储
 */
export const storage = {
  set: (key: string, value: any): void => {
    try {
      wx.setStorageSync(key, JSON.stringify(value));
    } catch (e) {
      console.error('存储失败:', e);
    }
  },
  get: <T>(key: string, defaultValue?: T): T | undefined => {
    try {
      const value = wx.getStorageSync(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      console.error('读取失败:', e);
      return defaultValue;
    }
  },
  remove: (key: string): void => {
    try {
      wx.removeStorageSync(key);
    } catch (e) {
      console.error('删除失败:', e);
    }
  },
  clear: (): void => {
    try {
      wx.clearStorageSync();
    } catch (e) {
      console.error('清除失败:', e);
    }
  }
};

/**
 * 显示加载中
 */
export const showLoading = (title = '加载中...'): void => {
  wx.showLoading({ title, mask: true });
};

/**
 * 隐藏加载
 */
export const hideLoading = (): void => {
  wx.hideLoading();
};

/**
 * 显示成功提示
 */
export const showSuccess = (title: string): void => {
  wx.showToast({ title, icon: 'success' });
};

/**
 * 显示错误提示
 */
export const showError = (title: string): void => {
  wx.showToast({ title, icon: 'error' });
};

/**
 * 显示确认弹窗
 */
export const showConfirm = (
  title: string,
  content: string
): Promise<boolean> => {
  return new Promise((resolve) => {
    wx.showModal({
      title,
      content,
      confirmColor: '#d4af37',
      success: (res) => resolve(res.confirm)
    });
  });
};
