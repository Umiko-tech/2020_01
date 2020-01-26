var deleteNo = [];
let ii = 0;
var num_max = <?php echo $num_max; ?>;
var del = 0;



             
	
function getCELL() {
 var myTbl = document.getElementById('TBL');
    // 行位置取得
　for (var i=0; i<myTbl.rows.length; i++) {
     // 行内セル位置取得
   for (var j=0; j<myTbl.rows[i].cells.length; j++) {
	var Cells=myTbl.rows[i].cells[j]; //i番行のj番列のセル "td"
　       // onclickで 'Mclk'を実行 thisはクリックしたセル"td"のオブジェクトを返す
	Cells.onclick =function(){Mclk(this);
   	}
　  }
  }
}
	

	
function Mclk(Cell) { 


  if(window.confirm('本当に削除しますか？')){ 
    
 	var myTbl = document.getElementById('TBL');
        // trをループ。rowsコレクションで,行位置取得。
	var rowINX = '行位置：'+Cell.parentNode.rowIndex;//Cellの親ノード'tr'の行位置
 	var cellINX = 'セル位置：'+Cell.cellIndex;
	Col1 = Cell.cellIndex;
	var delcell = myTbl.rows[ 0 ].cells[ Col1 ].firstChild.data;
	deleteNo.push(delcell) ;
 	var cellVal = 'セルの内容：'+Cell.innerHTML;
 
 
　	for (var i=0; i<myTbl.rows.length; i++) {
        // tr内のtdをループ。cellsコレクションで行内セル位置取得。
           myTbl.rows[i].deleteCell(Col1);
	    del += 1;
	}

	
	 //取得した値の書き出し
        res=rowINX + '<br/> '+ cellINX + '<br/>' + cellVal;
		
	
	document.getElementById('Mbox0').innerHTML=deleteNo;
	var Ms1=document.getElementById('Mbox1')
	Ms1.innerText=Cell.innerHTML;
	Ms1.textContent=Cell.innerHTML;
	num_max -= 1;
	
	  
  }else{ 
	window.alert('残しました。'); 
	return false; //追加
  } 
}
	
	



function get_javascript_variable(){
  if(num_max - del == 5){
	alert("試作は5パターンまでです。");
	return false;
  } else {
	document.forms['action'].elements['hidden_input'].value = deleteNo;
	return true;
  }	
}


function get_javascript_variable_(){		
	document.forms['action_'].elements['hidden_input_'].value = deleteNo;
	return true;
}
	
      // try ～ catch 例外処理、エラー処理
      // イベントリスナーaddEventListener,attachEventメソッド
try{
  window.addEventListener("load",getCELL,false);
  }catch(e){
  window.attachEvent("onload",getCELL);
  }
	

$(function() {
  var $win = $(window),
      $header = $('header'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
	var value = $(this).scrollTop();
	if ( value > 100 ) {
	  $header.addClass('transform');
	} else {
	  $header.removeClass('transform');
	}
  });
});

