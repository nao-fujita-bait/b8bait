    function getValue() {
      // テキスト入力欄の値を取得
      var inputElement = document.getElementById("inputText");
      var value = Document.createTextNode(inputElement.value);
      value = '<p>'+value+'</p>';
      // 取得した値を表示
      document.getElementById("area").innerHTML = value;
    }
