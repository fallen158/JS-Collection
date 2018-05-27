!function () {
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('.active')
        switch(speed){
            case 'slow':
            duration = 100
            break
            case 'normal':
            duration = 50
            break
            case 'fast':
            duration = 10
            break
        }
    })
    function writecode(pixcode, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
            container.scrollTop =  container.scrollHeight
            if(n<code.length){
                setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        }, duration)
    }
let code =`/**
 * 萌萌的皮卡丘的制作过程
 * 首先代码高亮
 * 画皮卡丘的皮
 */
 .preview-wrapper {
    flex: 1;
    height: 50%;
    background: #FEE433;
    z-index: 1;
  }
  .preview {
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  .wrapper {
    width: 100%;
    height: 205px;
    position: relative;
  }
/**
 * 皮卡丘的鼻子
 */
  .nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 14px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
  }
/**
 * 皮卡丘的眼睛
 */ 
  .eye {
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
  .eye::before { 
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -0.5px;
    border: 2px solid #000;
  }
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }
/**
 * 再画皮卡丘的脸腮
 */ 
  .face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
  }
  .face.left {
    right: 50%;
    margin-right: 116px;
  }
  .face.right { 
    left: 50%;
    margin-left: 116px;
  }
/**
 * 皮卡丘的上嘴唇
 */ 
  .upperLip {
    height: 20px;
    width: 75px;
    border: 2px solid black;
    position: absolute;
    top: 50px;
    background: #FEE433;
  }
  .upperLip.left {
    right: 50%;
    margin-right: -2px;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
  }
  .upperLip.right {
    left: 50%;
    margin-left: 3px;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }
/**
 * 皮卡丘的下嘴唇
 */   
  .lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    z-index: -1;
    height: 146.6px;
    overflow: hidden;
    width: 300px;
  }
/**
 * 皮卡丘的舌头
 */
  .lowerLip {
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    z-index: 10;
  }
  .lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 120px;
    height: 136px;
    background: #FC4A62;
    left: 46.5%;
    margin-left: -50px;
    border-radius: 100px;  
  }
/**
 * 到此结束！
 * 一个萌萌的皮卡丘送给你！
 * 谢谢观看！
 */   

`
    writecode('', code)
}.call()
