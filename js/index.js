$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

window.onload = function () {
  //Busca usuario
  var filtro = document.getElementById('procurarAnimais');
  var tabela = document.getElementById('tabelaAnimais');
  filtro.onkeyup = function () {
    var nomeFiltro = filtro.value;
    for (var i = 1; i < tabela.rows.length; i++) {
      var conteudoCelula = tabela.rows[i].cells[2].innerText;
      var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
      tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
  };
}

window.URL = window.URL || window.webkitURL;

const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function () {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = files[i].name;
      li.appendChild(info);

    }
  }
}

var  table = document.getElementById("tabelaAnimais")


// display selected row data into input text
function selectedRowToInput() {

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      document.getElementById("nomeUsuario").value = this.cells[1].innerHTML;
      document.getElementById("emailUsuario").value = this.cells[2].innerHTML;
      document.getElementById("nivelUsuario").value = this.cells[3].innerHTML;
    };
  }
}
selectedRowToInput();
function editHtmlTbleSelectedRow() {
  var codigoUsuario = document.getElementById("codigoUsuario").value,
    nomeUsuario = document.getElementById("nomeUsuario").value,
    emailUsuario = document.getElementById("emailUsuario").value,
    nivelUsuario = document.getElementById("nivelUsuario").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = codigoUsuario;
    table.rows[rIndex].cells[1].innerHTML = nomeUsuario;
    table.rows[rIndex].cells[2].innerHTML = emailUsuario;
    table.rows[rIndex].cells[3].innerHTML = nivelUsuario;
  }
}

