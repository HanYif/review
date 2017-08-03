// 使用插入script标签 jsonp
// <script>
  function createJs(sUrl) {
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = sUrl;
    document.getElementsByTagName('head')[0].appendChild(oScript);
  }

  createJs('jsonp.js');

// </script>


// 使用window.name传输，原理：同一个窗口window.name不变
// 举例：在www.test.com中取www.domain.com的数据

// 在www.test.com下
  var a=document.getElementsByTagName("button")[0];

  a.onclick = function () {                               //button添加click事件
    var inf = document.createElement("iframe");       //创建iframe
    inf.src = "http://www.domain.com/window.name/b.html"+"?h = 5"  //加载数据页www.domain.com/window.name/b.html同事携带参数h = 5
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(inf);                          //引入a页面

    inf.onload = function(){
        inf.src = 'http://www.test.com/b.html'       //iframe加载完成，加载www.test.com域下边的空白页b.html
        console.log(inf.contentWindow.name)        //输出window.name中的数据
        body.removeChild(inf)                      //清除iframe
    }
  }

// 在www.domain.com下
  var str=window.location.href.substr(-1, 1);      //获取url中携带的参数值
  $.ajax({
      type:"get",
      url:"http://www.domain.com/a.php"+"?m="+str, //通过ajax将查询参数传给php页面
      async:true,
      success:function(res){
          window.name = res                         //将接收到的查询数据赋值给window.name
      },
      error:function(){
          window.name = 'error'                      //..
      }
  });