# Menjadi Backend Developer Expert

### Latihan automation testing

Kultur TDD aplikasi yang di bangun dapat terhindar dari kecacatan atau ketidaksesuaian dan meningkatkan kepercayaan diri dalam men-deliver karena kode yang ditulis terjamin dan terproteksi oleh pngujian  

Pengembangan TDD memiliki alur yang khas ketika membangun fitur baru.  

1. Membuat Test.  
    Diawali dengan kode test untuk fitur baru tersebut. biasanya diawali dengan kode spesifik terlebih dahulu.  
    Awali dengan menguji ketidak sesuaian input yang diberikan. apabila menguji sebuah objek, awali dengan menguji ketersediaan member (properti atau method) yang diharapkan.  
2. Membuat Test dengan hasil yang gagal.
    Pastikan menjalankan tesnya. konfirmasai bahwa tes tersebut harus gagal dengan alasan yang wajar. Pengujian akan gagal karena anda belum menuliskan kode apapun.
3. Membuat kode apa adanya untuk membuat tes menjadi lulus
    Tulis kode apa adanya yang terpenting adalah membuat pengujiannya menjadi lulus.
4. Menjalankan test dengan hasil yang lulus.
    Jalankan kebali tesnya dan pastikan lulus. Jika ada yang gagal silakan ulangi langkah ke 3.
5. Refector kode sebelum dan pastikan pengujian tetap lulus.
    Setelah pengujian lulus. inilah saatnya memperbaiki kode yang sudah diluis sebelumnya, pastikan perbaikan yang laklukan tetap menjaga fungsionalitas kode gan pengujian tetap lulus. perbaikan kode meliputi :
   - menghapus duplikasi kode
   - memecah kode menjadi fungsi-fungsi kecil.
   - mengoptimasi kogika yang dituliskan.
6. Ulangi  
   Setelah kode selesai di-refactor, ulangi alur diatas dalam menambahkan setiap fungsionalitas baru. pengujian harus dilakukan sekcil mungkin dan bertahap. jadi jika kedepannya ada kesalahan kita tidak perlu men-debug-nya dan menyadari letak kesalahan tersebut.  lakukan cimmit sesering mungkin jika menggunakan git.


## Menulis Skenario Test  
Dokument acception scenario sederhana.  
```text
Fungsi: Pendeteksi segitiga

Deskripsi: Sebagai seorang user, saya ingin mengetahui segala apa yang terbentuk ketika diberikan 3 input sisi.

Payload: 
    - sideA (number)
    - sideB (number)
    - sideC (number) 

Spesifikasi:
- Ketika semua nilai sisi sama
    - Mengembalikan nilai "Segitiga sama sisi"
- Ketika ada dua nilai sisi yang sama
    - Mengembalikan nilai "Segitiga sama kaki"
- Ketika tidak ada nilai sisi yang sama 
    - Mengembalikan nilai "Segitiga sembarang"
```
Format `feature files` dituliskan denga format `Given-When-Then (GWT)`. `Given` merupakan sebuah keadaan yagn diberikan ketika pengujian dilakukan,
`When` merupakan aksi yang dilakukan, dan `Then` merupakan hasil yang diharapkan.  

`detect_tirangle.feature`
```gherkin
Feature: fungsi pendeteksi segitiga
sebagai seorang user, saya ingin mengetahui apa yang terbentuk ketika diberikan 3 input sisi.  

Scenario Outline: Mendeteksi segitiga sama sisi
    Given saya memiliki nilai sisi <sideA>, <sideB>, <sideC>  
    When saya mendetesi segitiga
    Then menghasilkan "Segitiga sama sisi"

Examples:  
| sideA | sideB | sideC |
|-------|-------|-------|
| 4     | 4     | 4     |
| 1     | 1     | 1     |
| 8     | 8     | 8     |

Scenario Outline: mendeteksi segitiga sama kaki.
    Given saya memiliki nilai sisi <sideA>, <sideB>, <sideC>  
    When saya mendetesi segitiga
    Then menghasilkan "Segitiga sama kaki"

Examples:  
| sideA | sideB | sideC |
|-------|-------|-------|
| 2     | 2     | 1     |
| 4     | 2     | 4     |
| 1     | 3     | 3     |

Scenario Outline: mendeteksi segitiga sama kaki.
    Given saya memiliki nilai sisi <sideA>, <sideB>, <sideC>
    When saya mendetesi segitiga
    Then menghasilkan "Segitiga sembarang"

Examples:  
| sideA | sideB | sideC |
|-------|-------|-------|
| 4     | 2     | 1     |
| 2     | 3     | 5     |
| 8     | 2     | 1     |
```
### Menerapkan Automation Testing dalam Membangun Program Matematika Dasar

#### Skenario pengujian untuk MathBasic

Sebuah objek MathBasic  

- [x] Harus memiliki fungsi add, subtract, multiply, divide.
- [x] Sebuah fungsi add:
  - [x] Harus mengembalikan error ketika tidak diberikan dua parameter.
  - [x] Harus mengembalikan error ketika diberikan paramter selain number
  - [x] Harus mengembalikan nilai a + b ketika diberikan dua parameter number
- [x] Sebuah fungsi subtract:
  - [x] Harus mengembalikan error ketika tidak diberikan dua paramter 
  - [x] Harus menbembalikan error ketika diberikan parameter selain number.
  - [x] Harus mengembalikan nilai a - b ketika diberikan dua parameter number.
- [x] Sebuah fungsi multiply:
  - [x] Harus mengembalikan error ketika tidak diberikan dua parameter
  - [x] Harus mengembalikan error ketiak diberikan parameter selain number
  - [x] Harus mengembalikan nilai a*b ketika diberikan dua parameter.
- [x] Sebuah fungsi divide.
  - [x] Harus mengembalikan error ketika tidak diberikan dua parameter
  - [x] Harus mengembalikan error ketiak diberikan parameter selain number
  - [x] Harus mengembalikan nilai a/b ketika diberikan dua parameter.

### Menerapkan Automation Testing dalam Membangun Program Perhitungan Bangun Dua Dimensi  

#### Skenario pengujian untuk FigureCalculator

Sebuah objek FigureCalculator  

- [x] Harus memiliki fungsi calculateRectanglePrimeter, calculateRectangleArea, calculateTrianglePerimeter, dan calculateTriangleArea.  
- Sebuah fungsi calculateRectanglePrimeter.  
    - [x] Harus mengembalikan error ketika tidak diberikan dua paremeter.
    - [x] Harus mengembalikan error ketika diberikan pareameter selain number.
    - [x] Harus mengembalikan nilai yang terpat berdasarkan rumus keliking persegi.
- Sebuah fungsi calculateRectangleArea.  
    - [x] Harus mengembalikan error ketika tidak diberikan dua parameter.
    - [x] Harus mengembalikan error ketika diberikan parameter selain number.
    - [x] Harus mengembalikan nilai yang terpat berdasarkan rumus luar persegi.
- Sebuah fungsi calculateTrianglePerimeter.  
    - [x] Harus mengembalikan error ketika tidak diberikan 3 paremeter.
    - [x] Harus mengembalikan error ketika diberkan prameter selain number.
    - [x] Harus mengembalikan nilai yang tepat berdasarkan rumus keliling segitiga.
- Sebuah fungsi calculateTriangleArea.  
    - [x] Harus mengembalikan error ketika tidak di berikan 2 parameter
    - [x] Harus mengembalikan error ketika diberikan parameter selain number
    - [x] Harus mengembalikan nilai yang tepat berdarakan rumus luas segitiga  