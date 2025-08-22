// 64种固定颜色调色板 - 基于wplace.org风格的像素艺术调色板
export const FIXED_COLORS = [
  // 第一行 - 灰度和基础色
  '#FFFFFF', '#E4E4E4', '#888888', '#222222', '#000000', '#FF0000', '#00FF00', '#0000FF',

  // 第二行 - 红色系
  '#FFA7D1', '#E50000', '#B71C1C', '#8B0000', '#FF6B6B', '#FF1744', '#D32F2F', '#C62828',

  // 第三行 - 橙色和黄色系
  '#E59500', '#FF9800', '#F57C00', '#E65100', '#E5D900', '#FFEB3B', '#FDD835', '#F9A825',

  // 第四行 - 绿色系
  '#94E044', '#02BE01', '#4CAF50', '#388E3C', '#2E7D32', '#1B5E20', '#66BB6A', '#43A047',

  // 第五行 - 青色和蓝色系
  '#00D3DD', '#00BCD4', '#0097A7', '#00695C', '#0083C7', '#2196F3', '#1976D2', '#0D47A1',

  // 第六行 - 蓝紫色系
  '#0000EA', '#3F51B5', '#303F9F', '#1A237E', '#CF6EE4', '#9C27B0', '#7B1FA2', '#4A148C',

  // 第七行 - 紫色和粉色系
  '#820080', '#E91E63', '#C2185B', '#880E4F', '#FF4081', '#F06292', '#EC407A', '#E1BEE7',

  // 第八行 - 棕色和特殊色
  '#A06A42', '#8D6E63', '#6D4C41', '#3E2723', '#795548', '#5D4037', '#4E342E', '#BCAAA4'
]

// 验证颜色数组长度
if (FIXED_COLORS.length !== 64) {
  console.warn(`Expected 64 colors, but got ${FIXED_COLORS.length}`)
}

// 默认选中颜色
export const DEFAULT_SELECTED_COLOR = FIXED_COLORS[0] // 白色

// 需要积分的颜色（示例集合，可按业务调整）
export const POINT_REQUIRED_COLORS = [
  // 示例挑选的部分高饱和/特殊色，可按需增删
  '#FF0000', '#00FF00', '#0000FF',
  '#E50000', '#FF6B6B', '#FF1744',
  '#E5D900', '#FFEB3B',
  '#00D3DD', '#2196F3', '#1976D2',
  '#CF6EE4', '#9C27B0',
  '#FF4081', '#F06292'
]

// 颜色对象列表：{ hex, requiresPoints }
export const FIXED_COLOR_ITEMS = FIXED_COLORS.map(hex => ({
  hex,
  requiresPoints: POINT_REQUIRED_COLORS.includes(hex)
}))