export interface Language {
  name: string
  mo: {
    [key: string]: string
  }
}

const zhCn: Language = {
  name: 'zh-cn',
  mo: {},
}

export default zhCn
