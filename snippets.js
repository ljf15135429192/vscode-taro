const fs = require('fs');

let array = ['View',
  'Scrollview',
  'Swiper',
  'MovableView',
  'Icon',
  'Text',
  'Progress',
  'RichText',
  'Button',
  'Checkbox',
  'Form',
  'Input',
  'Label',
  'Picker',
  'PickerView',
  'Radio',
  'Slider',
  'Switch',
  'Textarea',
  'Navigation',
  'Audio',
  'Image',
  'Video',
  'Camera',
  'Map',
  'Canvas',
  'WebView'
]
let data = {};
for (let index = 0; index < array.length; index++) {
  let one = array[index],
    str = one.substr(0, 1),
    bodyStr = `<${one}>$0</${one}>`
  data[one] = {
    "prefix": str,
    "body": [
      bodyStr
    ],
    "description": one
  }
}
// 整体模板设置
let Template='index';
data.TaroEasy = {
  "prefix": 'TaroEasy',
  "body": [
    `
import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss'
class  $1  extends Component {
  constructor (props) {
    super(props)
  }
  state={}
  componentWillMount () {}
  componentDidMount () {}
  componentWillReceiveProps (nextProps,nextContext) {}
  componentWillUnmount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  componentDidNotFound () {}
  render() {
    return (
      <View>
       
      </View>
    );
  }
}
export default $1;
`
  ],
  "description": 'TaroEasy'
}

data.locas={
    "prefix": "locas",
    "body": [
      "localStorage.setExpire($1,$2,$3)"
    ],
    "description": "设置加密存储local中，并定时删除"
}

data.ss={
    "prefix": "ss",
    "body": [
      "<template>",
      "\t<div class=\"\">\n\t\t$2\n\t</div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "\tname: \"\",",
      "\tcomponents: {},",
      "\tmixins: [],",
      "\tprops: {},",
      "\tdata () {",
      "\t\treturn {}",
      "\t},",
      "\tcomputed: {},",
      "\twatch: {},",
      "\tfilter: {},",
      "\tcreated () { },",
      "\tmounted () { },",
      "\tmethods: {},",
      "}",
      "</script>",
      "<style lang='scss' scoped>",
      "</style>",
      ""
    ],
    "description": "vue2模板快速生成"
}

data.qq={
  "prefix": "qq", //唤醒代码块的命令
  "body": ["/**", " @name", " @param  data", "  @return  { }", "*/"], //代码块的主体
  "description": "快捷注释" //代码块的介绍
  }
console.log(data)

data = JSON.stringify(data);

fs.writeFile('./snippets/taro.json', data, function (err) {
  if (err) throw err;
  console.log('文件已被保存');
})