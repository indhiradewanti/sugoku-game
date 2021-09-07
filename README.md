# Sugoku Challenge
- Refrensi: https://sugoku.herokuapp.com/
- 3rd party API: https://github.com/bertoort/sugoku

## W2D1
- [x] Install expo-cli & expo init & setup project
- [x] Layout board 9x9
- [x] Fetch data board
- [x] Mencoba redux dalam react-native
- [x] Validate board

#### Notes
- agak kesulitan di menampilkan datanya
- ...
- ...

## W2D2
- [x] Setup React-native Navigation
- [x] Membuat 3 Screen
- [x] Memanfaatkan useParams
- [x] Pindah-pindah antar screen

#### Notes
- ...
- ...
- ...

## Requirement Sugoku
**Home Page**
- [x] Halaman HOME sudah ada input untuk memasukkan name
- [x] Halaman HOME sudah dapat memilih difficulty permainan
- [x] Tidak dapat masuk kehalaman game ketika nama/difficulty belum dipilih

**Game Page**
- [x] Masuk ke halaman game dengan membawa data name dan difficulty lewat params. name dan difficulty tidak perlu disimpan dalam redux
- [x] Menggunakan redux dan react-redux untuk menyimpan data 3rd party API. Semua konsep redux yang sudah pernah dipelajari (sampai redux-thunk) bisa diimplementasi
- [x] Data board yang dimainkan oleh user harus sinkron dengan state
- [x] Di halaman game menampilkan board 9x9 dan menampilkan data dari API dengan benar sesuai dengan difficulty yang dipilih sebelumnya
- [x] Sudoku dapat dimainkan seperti bermain sudoku pada umumnya:
  -  [x] Kotak yang sudah terisi pada initial permainan tidak bisa diedit
  - [x] Angka 0 di tampilkan sebagai kotak kosong
  - [x] Kotak kosong HANYA dapat diisi dengan ANGKA, dan hanya dapat diisi 1 DIGIT
  - [x]  User dapat mengecek apakah board yang dia isi sudah benar atau tidak dengan mengecek ke API `/validate`, jika hasil respon API nya statusnya solved maka user di arahkan ke halaman Finish dengan membawa data user lewat params

**Finish Page**
- [x] Pada halaman finish ada nama pemain yang sedang bermain
- [x] Pada halaman finish ada tombol yang mengembalikan kita ke halaman Home

**Tambahan**
- [x] Tombol auto solve pada halaman game yang request ke API `/solve` dan mengisi board dengan dengan data dari API, namun kotak yang sebelum nya diedit HARUS tetap bisa diedit agar: 
  * untuk memudahkan aku memerika tombol validate nya dan redirect ke halaman finish JIKA boardnya sudah benar
  * bisa aku salahin 1 kotak untuk mengecek bagaimana respon tombol validate jika board yang kuisi ada yang salah