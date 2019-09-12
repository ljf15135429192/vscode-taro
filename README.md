# cssrem

A `px` to `tow px` and taro snippet plugin in VSCode

整合基础的taro标签片段

1px转化为2px
(鸡肋,由于ui小姐姐提前完成ui图375px,并且早期开发人员未全局配置,新功能需要手动2倍转化,临时功能,不需要忽略就好)

# Install

```bash
ext install taro
```

# How To Use

+ Auto snippet
 大写首字母选择补全:
V ---> <View></View>

# 支持标签:
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
  
# 全局模板:
TaroEasy

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

+ CLI: Press `F1`, enter `taro`(全局1px转化2px,忽略)

# Support Language

html vue css less scss sass stylus tpl（php smarty3）

# Configuration


num 转化倍数 默认2倍
title 官方程序 默认 gogogo
config 转化开启开关 默认 false

**NOTE:** Muse be restart vscode after modification
