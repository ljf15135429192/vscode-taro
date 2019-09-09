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
        $2
      </View>
    );
  }
}
export default $1;
`
  ],
  "description": 'TaroEasy'
}

console.log(data)

data = JSON.stringify(data);

fs.writeFile('./snippets/taro.json', data, function (err) {
  if (err) throw err;
  console.log('文件已被保存');
})