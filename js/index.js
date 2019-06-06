$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


/*** Input Pesquisa ***/
window.onload = function () {
  //Busca Animal
  var filtroAnimais = document.getElementById('procurarAnimais');
  var tabelaAnimais = document.getElementById('tabelaAnimais');
  filtroAnimais.onkeyup = function () {
    let nomeFiltro = filtroAnimais.value;
    for (let i = 1; i < tabelaAnimais.rows.length; i++) {
      let conteudoCelula = tabelaAnimais.rows[i].cells[2].innerText;
      let corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
      tabelaAnimais.rows[i].style.display = corresponde ? '' : 'none';
    }
  };
  //Busca usuario
  var filtroProfile = document.getElementById('procurarProfile');
  var tabelaProfile = document.getElementById('tabelaProfile');
  filtroProfile.onkeyup = function () {
    let nomeFiltro = filtroProfile.value;
    for (let i = 1; i < tabelaProfile.rows.length; i++) {
      let conteudoCelula = tabelaProfile.rows[i].cells[2].innerText;
      let corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
      tabelaProfile.rows[i].style.display = corresponde ? '' : 'none';
    }
  };
}


/*** Input selecionar imagem ***/
const fileSelect = document.getElementById("fileSelect"),
      fileElem   = document.getElementById("fileElem"),
      fileList   = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>Nenhum arquivo selecionado!</p>";
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


/*** Valores Modal Editar Animais ***/
var rIndexAnimais, tableAnimais = document.getElementById("tabelaAnimais");

function selectedRowToInput() {
  for (var i = 1; i < tableAnimais.rows.length; i++) {
    tableAnimais.rows[i].onclick = function () {
      rIndexAnimais = this.rowIndex;
      document.getElementById("idAnimal").value          = this.cells[0].innerHTML;
      document.getElementById("nameAnimal").value        = this.cells[2].innerHTML;
      document.getElementById("porteAnimal").value       = this.cells[3].innerHTML;
      document.getElementById("typeAnimal").value        = this.cells[4].innerHTML;
      document.getElementById("adoptedAnimal").value     = this.cells[5].innerHTML;
      document.getElementById("descriptionAnimal").value = this.cells[6].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  var idAnimal     = document.getElementById("idAnimal").value,
      nomeAnimal   = document.getElementById("nameAnimal").value,
      porteAnimal  = document.getElementById("porteAnimal").value,
      tipoAnimal   = document.getElementById("typeAnimal").value;
      statusAnimal = document.getElementById("adoptedAnimal").value;
      sobreAnimal  = document.getElementById("descriptionAnimal").value;
  if (!checkEmptyInput()) {
    tableAnimais.rows[rIndexAnimais].cells[0].innerHTML = idAnimal;
    tableAnimais.rows[rIndexAnimais].cells[1].innerHTML = nomeAnimal;
    tableAnimais.rows[rIndexAnimais].cells[2].innerHTML = porteAnimal;
    tableAnimais.rows[rIndexAnimais].cells[3].innerHTML = tipoAnimal;
    tableAnimais.rows[rIndexAnimais].cells[3].innerHTML = statusAnimal;
    tableAnimais.rows[rIndexAnimais].cells[3].innerHTML = sobreAnimal;
  }
}


/*** Valores Modal Editar Profile ***/
var rIndexProfile, tabelaProfile = document.getElementById("tabelaProfile");

function selectedRowToInputProfile() {
  for (var i = 1; i < tabelaProfile.rows.length; i++) {
    tabelaProfile.rows[i].onclick = function () {
      rIndexProfile = this.rowIndexProfile;
      document.getElementById("idProfile").value    = this.cells[0].innerHTML;
      document.getElementById("nomeProfile").value  = this.cells[1].innerHTML;
      document.getElementById("mailProfile").value = this.cells[2].innerHTML;
      document.getElementById("celProfile").value   = this.cells[3].innerHTML;
      document.getElementById("tipoConta").value  = this.cells[5].innerHTML;
    };
  }
}
selectedRowToInputProfile();

function editHtmlTbleSelectedRowProfile() {
  var idProfile     = document.getElementById("idProfile").value,
      nomeProfile   = document.getElementById("nomeProfile").value,
      emailProfile  = document.getElementById("mailProfile").value,
      celProfile    = document.getElementById("celProfile").value;
      tipoProfile   = document.getElementById("tipoConta").value;
  if (!checkEmptyInput()) {
    tabelaProfile.rows[rIndexProfile].cells[0].innerHTML = idProfile;
    tabelaProfile.rows[rIndexProfile].cells[1].innerHTML = nomeProfile;
    tabelaProfile.rows[rIndexProfile].cells[2].innerHTML = emailProfile;
    tabelaProfile.rows[rIndexProfile].cells[3].innerHTML = celProfile;
    tabelaProfile.rows[rIndexProfile].cells[5].innerHTML = tipoProfile;
  }
}


