# UAS WEB PROGRAMMING
M. Rizki Rianto<br>
I.2210881<br>
Ilmu Komputer</i></strong>


## 1. Payload JWT

    {
    "universitas": "Djuanda",
    "prodi": "Ilmu Komputer",
    "iat": 1674270000
    }

## 2. Perbedaan arsitektur monolitik dan microservices untuk Struktur Aplikasi Skalabilitas, Pengembangan dan Pemeliharaan, Ketergantungan antar komponen.
<br>

| Kriteria                   | Arsitektur Monolitik                                   | Arsitektur Microservices                               |
|----------------------------|--------------------------------------------------------|--------------------------------------------------------|
| Struktur Aplikasi          | Aplikasinya hanya dalam satu aplikasi besar (satu unit atau satu service saja tidak dibagi - bagi jadi kecil)  | Aplikasi nya terdiri dari layanan - layanan (services) yang di chunk atau di perkecil dan di pisah-pisah|
| Skalabilitas               | Skala vertikal dengan cara menambahkan daya komputasi kepada main server | Skala horizontal dengan menambah atau mengurangi instance dari setiap layanan |
| Pengembangan              | Umumnya lebih sederhana karena semua kode dalam satu proyek aplikasi saja | Pembagian pengembangan ke dalam tim tim kecil untuk masing-masing layanan, yang sehingga meningkatkan isolasi dan fokus |
| Pemeliharaan              | Lebih sulit karena perubahan pada satu bagian saja dapat mempengaruhi seluruh aplikasi | Lebih mudah karena service sudah terpisah pisah sehingga tidak akan mengganggu keseluruhan aplikasi, pemeliharaannya di lakukan pada masing-masing service |
| Ketergantungan Antar Komponen | Kuat, karena komponen saling tergantung dan berkomunikasi secara langsung | Lemah, karena layanan dapat berkomunikasi melalui antarmuka yang ditetapkan |
| Keandalan                  | Kegagalan satu komponen aplikasi dapat mempengaruhi keseluruhan aplikasi | Kegagalan satu layanan tidak akan mempengaruhi layanan lainnya, karena service terpisah jadi gagal nya terisolasi |


## 3. Apa itu Middleware dan keuntungan penerapannya
<strong>Middleware</strong> merupakan software yang berada diantara OS dan aplikasi kita ataupun antara aplikasi lain yang berbeda (sesuai namanya 'MIDDLE').
middleware ini bertindak sebagai perantara atau jembatan agar integrasi dan komunikasi antara komponen atau sistem yang beda dapat terjalin<br>

| Keuntungan Penerapan Middleware |
| Mampu integrasi antara sistem dengan beda bahasa pemrograman, sehingga bisa berkolaborasi antar bahasa pemrograman ini |
| Merupakan infrastruktur sofrware yang bisa di gunakan kembali |
| Dengan middleware pengembangan aplikasi jadi bisa lebih cepat karena bisa menggunakan kembali komponenen-komponen dan terdapat services yang sudah teruji |

## 4. Unit testing dan metode nya
**Unit testing** merupakan jenis pengujian pada aplikasi yang mana pengujiannya dilakukan terhadap unit-unit terkecil (seperti methods) yang diujinya itu secara masing-masing.
**Metode pada unit testing** diantaranya ada <br>
* Test otomatis
    Unit test sering dilakukan dengan bantuan framework untuk test otomatis seperti JUnit dalam java dan pytest dalam Python
* White Box testing
    Metode ini melibatkan pemeriksaan struktur internal kode, dan tester memiliki akses penuh ke implementasi kode.
* Black Box testing
    Merupakan metode testing yang berfokus pada spesifikasi dan perilaku yang diharapkan, jadi hanya melakukan I/O tanpa mengetahui cara kinerja internalnya
* Stub and Mock
    tub dan mock digunakan untuk menyimulasikan fungsi atau objek yang sebenarnya, memungkinkan pengujian berfokus pada unit tertentu tanpa tergantung pada implementasi unit lainnya.

## 5. Kontainerisasi, docker dan kubernetes
**Docker** merupakan platform yang juga open source yang biasanya digunakan untuk membuat, deploy dan juga memanage kontainer. Kontainer sendiri berfungsi membungkus/wrap aplikasi serta semua dependensinya, jadi aplikasinya dapat berjalan dengan cepat dan juga bisa konsisten di berbagai environment. Di dalam Docker sendiri ada yang namanya 'Image Container',  yaitu adalah paket yang berisi aplikasi dan semua dependensinya. Image ini dapat dijalankan sebagai kontainer di lingkungan Docker

**Kubernetes** (k8s atau "kube") merupakan orkestrasi kontainer open source yang mengotomatisasi berbagai proses manual yang terjadi pada deployment, management aplikasi kontainer.

Orkestrasi sendiri merupakan otomatisasi usaha operasional untuk menjalankan workload dan service kontainer 



**Referensi bacaan :**
<i>
https://www.ibm.com/topics/docker 

https://www.vmware.com/topics/glossary/content/container-orchestration.html

https://www.redhat.com/en/topics/containers/what-is-kubernetes

https://www.docker.com/resources/what-container/ </i>


## 6. CI/CD dan Tools yang digunakan

**CI/CD** merupakan integrasi kode ke repositori kita (mis dalam github) supaya dapat dilakukan pengujian secara otomatis, cepat, dan continuous (berkelanjutan) dan akhirnya dapat dirilis secara otomatis juga<br>

Tools CI/CD yang paling mudah digunakan (Opini) : <br>
Menurut saya ada 2 tools yang agak mudah digunakan yaitu Jenkins dan Github Actions. Jenkins sendiri sudah sangat populer sehingga banyak tutorial-tutorial nya, dan sering digunakan juga. Github Action sendiri menurut saya lebih mudah karena UI dari github sendiri lebih familiar

## 7. Projek Company Profile