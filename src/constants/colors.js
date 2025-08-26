// 64种固定颜色调色板 - 基于wplace.org风格的像素艺术调色板
export const FIXED_COLORS = [
  '#000000', '#3C3C3C', '#787878', '#AAAAAA', '#D2D2D2', '#FFFFFF', '#600018', '#A50E1E', '#ED1C24', '#FA8072', '#E45C1A', '#FF7F27', '#F6AA09', '#F9DD3B',
  '#FFFABC', '#9C8431', '#C5AD31', '#E8D45F', '#4A6B3A', '#5A944A', '#84C573', '#0EB968', '#13E67B', '#87FF5E', '#0C816E', '#10AEA6', '#13E1BE', '#0F799F',
  '#60F7F2', '#BBFAF2', '#28509E', '#4093E4', '#7DC7FF', '#4D31B8', '#6B50F6', '#99B1FB', '#4A4284', '#7A71C4', '#B5AEF1', '#780C99', '#AA38B9', '#E09FF9',
  '#CB007A', '#EC1F80', '#F38DA9', '#9B5249', '#D18078', '#FAB6A4', '#684634', '#95682A', '#DBA463', '#7B6352', '#9C846B', '#D6B594', '#D18051', '#F8B277',
  '#FFC5A5', '#6D643F', '#948C6B', '#CDC59E', '#333941', '#6D758D', '#B3B9D1'
]

// 验证颜色数组长度
if (FIXED_COLORS.length !== 64) {
  console.warn(`Expected 64 colors, but got ${FIXED_COLORS.length}`)
}

// 默认选中颜色
export const DEFAULT_SELECTED_COLOR = FIXED_COLORS[0] // 白色

// 需要积分的颜色（示例集合，可按业务调整）
export const POINT_REQUIRED_COLORS = [
  '#AAAAAA', 'A50E1E', '#FA8072', '#E45C1A', '#9C8431', '#C5AD31', '#E8D45F', '#4A6B3A', '#5A944A', '#84C573', '#0F799F', '#BBFAF2', '#7DC7FF',
  '#4D31B8', '#4A4284', '#7A71C4', '#B5AEF1', '#9B5249', '#D18078', '#FAB6A4', '#DBA463', '#7B6352', '#9C846B', '#D6B594', '#D18051', '#FFC5A5',
  '#6D643F', '#948C6B', '#CDC59E', '#333941', '#6D758D', '#B3B9D1'
]

// 颜色对象列表：{ hex, requiresPoints }
export const FIXED_COLOR_ITEMS = FIXED_COLORS.map(hex => ({
  hex,
  requiresPoints: POINT_REQUIRED_COLORS.includes(hex)
}))