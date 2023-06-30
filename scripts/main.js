
//点击图片切换模块
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mixfold2-duobuhui.png') {
      myImage.setAttribute('src', 'images/mixfold2-hanser.png');
    } else {
      myImage.setAttribute('src', 'images/mixfold2-duobuhui.png');
    }
}


//切换账号模块
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '多不会 酷毙了，' + myName;
    }
  }  
myButton.onclick = function() {
    setUserName();
 }
