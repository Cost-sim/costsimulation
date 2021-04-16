(function(){
  'use strict';

let price = document.getElementById('price');
let num = document.getElementById('num');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let reset = document.getElementById('reset');
const kits = document.querySelectorAll("div.radio input[name='kit']");
const op_few=200
const op_middle=500
const op_many=1000



// ただのチェック機能
  function checkInput() {
  // /^[1-9][0-9]*$/
  if ( price.value.match(/^[1-9][0-9]*$/) !== null &&
    num.value.match(/^[1-9][0-9]*$/) !== null
  ) {
    btn.classList.remove('disabled');
  } else {
    btn.classList.add('disabled');
  }
 };

  btn.addEventListener('click', function()  {
   
    let selectedKit;
    let str;
    let str2;
    
    // ラジオボタンの値を取得
    kits.forEach(kit => {
      if (kit.checked === true) {
      
        selectedKit = kit.value;
        if(num.value<=op_few){
          str=(price.value-selectedKit*1.5)*num.value;//OP200以下の場合:1.5倍の単価
        }else if(num.value<=op_middle){
          str=(price.value-selectedKit*1.3)*num.value;//OP500以下の場合:1.3倍の単価
        }else{
          str=(price.value-selectedKit)*num.value;
        }
        result.textContent=str;
        reset.classList.remove('hidden');
        document.getElementById("textfield5").value=price.value //フォームに納入金額を
        document.getElementById("textfield6").value=num.value //フォームに納入金額を

        
        // 1秒後にメッセージを表示
        setTimeout(()=>{
          alert('コスト試算頂きありがとうございます!下記のフォームからお問合せ頂けます。');
        },1000);
        setTimeout(() => {
          scrollTo(0,400);
        }, 3000);
    }
    });    
  });
    
  // リセットボタン
    reset.addEventListener('click', function() {
      result.textContent = 'ここに結果を表示します';
      price.value = '';
      num.value = '';
      // for(i=0;i<3;i++){
        // document.getElementsByName('kit') .checked= false;
      // };
      btn.classList.add('disabled');
      this.classList.add('hidden');
    });
    
    price.addEventListener('keyup', checkInput);
  num.addEventListener('keyup', checkInput);
  kits[0].focus();
  })();