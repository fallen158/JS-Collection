var result = `/**
 * 面试官你好，我是刘文超
 * 只用文字做自我介绍太单调了
 * 我就用代码来介绍把
 */

/**
 * 改变背景颜色
 */

 body { 
    background: rgb(63,82,99) 
 }
 .token.comment { 
    color: #857F6B; 
 }

/**
 * 给所有的元素加上一个过渡效果
 */

 * {
    transition: all 1s;
 } 

/**
 * 样式太单调啦，我们来改变一下
 */ 
 #code:not(:empty) {
    overflow: auto;
    background: rgb(48, 48, 48);
    border: 1px solid #ccc;
    width: 49%;
    max-height: 56%;
    font-size: 14px;
    font-family: monos;
    padding: 10px 10px 20px;
    box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
    white-space: pre-wrap;
    outline: 0;
 }
/**
 * 接下来,把我们的代码移到右边
 */
 #code{
    transform: translateX(95%);
    position: absolute;
 }

 /**
 * 代码高亮
 */ 

 .token.selector      { color: #E69F0F; }
 .token.property      { color: #64D5EA; }
 .token.function      { color: #BE84F2; }
 .content             { color: #BE84F2; }
 .token.punctuation   { color: #ffffff; }

/**
 * 加点 3D 效果
 */

 body {
    perspective: 1000px;
 }
 #code:not(:empty) {
    transform: translateX(99%) rotateY(-10deg);
    transform-origin: right;
    max-height: 90%;
 }

/**
 * 不玩啦，我来介绍下我自己吧
 * 接下来我需要准备个编辑器
 */ 
#code2:not(:empty){
    width: 48%;
    padding: 10px 10px 20px;
    margin: -15px 0 0 10px;
    color: white;
    overflow: auto;
    height: 93%;
    border: 1px solid #ccc;
    background: rgb(48, 48, 48);
    box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
    white-space: pre-wrap;
    outline: 0;
    transform: rotateY(10deg);
    transform-origin: left;
 }

 `
var md = marked('## 自我介绍\n\n我叫xxx\nxxx\nxxx\n' +
    '## 技能介绍\n' +
    'xxx\n' +
    'xxx\n' +
    'xxx\n' +
    '## 作品\n' +
    'xxx\n' +
    'xxx\n' +
    'xxx\n' +
    '## 爱好\n' +
    'xxx\n' +
    'xxx\n' +
    'xxx\n\n' +
    '到此结束!\n' +
    '谢谢观看。');

writecode(result, () => {
    writeMarkdown(md)

});



function writecode(code, fn) {
    let domCode = document.getElementById('code')
    let n = 0
    let div = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
        styleseet.innerHTML = code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= result.length) {
            clearInterval(div)
            fn.call()
        }
    }, 60)
}
function writeMarkdown(markdown) {
    let domprer = document.getElementById('code2')
    let stop = document.getElementById('stop')
    let n = 0
    let div = setInterval(() => {
        n += 1
        domprer.innerHTML = markdown.substring(0, n)
        domprer.scrollTop = domprer.scrollHeight
        if (n >= markdown.length) {
            clearInterval(div)
        }
    }, 100)

}







