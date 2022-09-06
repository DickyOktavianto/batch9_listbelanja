//tangkap element html
let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

//data list belanja
let data_list_belanja = [];

//menambah event listener floating_button
floating_button.addEventListener('click', () => {
  //memunculkan modal
  if (modal.style.display == 'none') {
    // modal.style.display = 'flex';
    // floating_button.style.backgroundColor = 'white';
    // floating_button.style.color = 'blueviolet';
    // floating_button.style.transform = 'rotate(45deg)';
    showModal();
    return;
  }
  //sembunyikan modal
  // modal.style.display = 'none';
  // floating_button.style.backgroundColor = 'blueviolet';
  // floating_button.style.color = 'white';
  // floating_button.style.transform = 'rotate(0deg)';
  hideModal();
});

//menambah event listener ke modal_bg
modal_bg.addEventListener('click', () => {
  //
  // modal.style.display = 'none';
  // floating_button.style.backgroundColor = 'blueviolet';
  // floating_button.style.color = 'white';
  // floating_button.style.transform = 'rotate(0deg)';
  hideModal();
});

//menambah event listener addlist_form submit
addlist_form.addEventListener('submit', (event) => {
  //stop. form dari reload page
  event.preventDefault();

  //tangkap value dari masing masing input field
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  //validasi
  if (barang == '') {
    alert('Silahkan Masukkan Nama Barang');
    return;
  }

  if (harga == '') {
    alert('Silahkan Masukkan Harga Barang');
    return;
  }

  //push data list belanja
  data_list_belanja.push({
    nama_barang: barang,
    harag_barang: harga,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  console.info(data_list_belanja);

  //clear input field
  event.target.barang.value = '';
  event.target.harga.value = '';

  hideModal();
  renderTohtml();
});

//show modal
function showModal() {
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'white';
  floating_button.style.color = 'blueviolet';
  floating_button.style.transform = 'rotate(45deg)';
}

//hide model
function hideModal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = 'blueviolet';
  floating_button.style.color = 'white';
  floating_button.style.transform = 'rotate(0deg)';
}

//render function
function renderTohtml() {
  //clear element div
  root.innerHTML = '';

  // perulangan
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
      <small>${e.tanggal}</small>
      <small>${e.waktu}</small>
      <div>
        ${e.nama_barang} <span>Dengan harga : Rp. ${e.harag_barang}</span>
      </div>
      <button onclick="handledelete(${i})">selesai </button>
    </div>`;
  });
}

//function untuk delete item pada arrah datalistbelanja
function handledelete(index) {
  data_list_belanja.splice(index, 1);
  alert('Apakah Yakin Menghapusnya');
  renderTohtml();
}

//tambahkan date ke id subtitle
subtitle.innerHTML = new Date().toLocaleDateString();
