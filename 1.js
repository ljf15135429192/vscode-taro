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
  let data={};
for (let index = 0; index < array.length; index++) {
    let one=array[index],
     str=one.substr(0, 1),
     bodyStr=`<${one}>$0</${one}>`
   
   data[one]={
       
            "prefix": str,
            "body": [
                bodyStr
            ],
            "description": one
       
    }
   
}

console.log(data)

// data=JSON.parse(data);

data=JSON.stringify(data);
// fs.readFile('./snippets/taro.json', 'utf8', function (err, data) {
//     console.log(data);
// });

fs.writeFile('./snippets/taro.json',data,function(err){
    if (err) throw err;
    console.log('文件已被保存');
})