# taro 代码片段
<img src="https://github.com/ljf15135429192/vscode-taro/blob/master/images/2.gif?raw=true">

  V ---> `<View></View>`

## 支持标签:
'Scrollview'
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
  
## 全局模板:
TaroEasy
```javascript
    
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

```
持续更新中...
# taro 秃头提示
<img src="https://github.com/ljf15135429192/vscode-taro/blob/master/images/1.png?raw=true">


   - 预防秃头提示默认开启,健康生活从今天开始!

# taro 倍数转化
<img src="https://github.com/ljf15135429192/vscode-taro/blob/master/images/3.gif?raw=true">


 - 可修改转化倍数,即 num = 0.5  1px ---> 0.5px
  
# 命令行
 - Press `F1`, enter `bald` 
  - (秃头提示，默认开启)
 - Press `F1`, enter `taro`
  - (全局px倍数转化，默认关闭)
 


# 设置

- **config** 自动检测转化开启开关 默认 false
- **num**    转化倍数 默认2倍
- **Bald:config** 秃头提示开关 默认 true
- **Bald:Title**  秃头提示文本 默认 `还在写代码? 不怕秃头? 休息一会吧!!!`

