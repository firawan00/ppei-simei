# SIMEI - SIMULASI EXPORT IMPORT

##@PPEJP - Kementerian Perdagangan

simulasi export import adalah aplikasi yang membantu Pusat Pelatihan Sumber Daya Manusia Ekspor dan Jasa Perdagangan (PPEJP) dalam menyelengarakan pelatihan export dan import.

aplikasi ini terdiri dari 2 folder utama, frontend (FE) dan backend (BE)

## requirement

- npm 8^
- composer 2^
- php 7.4.^ || 8.^
- maria 10^ || psql 15^

## build using

- laravel 8^
- react VITE

# INSTALASI

## 1. Persiapan Frontend (fe)

- masuk kedalam folder fe, dan lakukan instalasi pakage melalui terminal dengan commnand :
  `npm i`
- buka file .env dalam folder fe, ganti domaian pada bagian :
  `VITE_BEURL='https://simei.sm-indonesia.id'`
  dengan domain yang yang akan digunakan, semisal :
  `VITE_BEURL='https://simei.kemendag.go.id'`

- seteleah dilakukan configurasi pada `env`, compile ulang dengan command :
  `npm run lb`
- compiled code akan ter-otomatis ke copy ke folder be
- aplikasi frontend akan di handle dan dijalankan oleh backend

## 2. Persiapan Backend (be)

- masuk kedalam folder be, dan lakukan instalasi pakage melalui terminal dengan commnand :
  `composer install`
- buka file .env dalam folder be, ganti domaian pada bagian atas dan konfigurasi database (sesuaikan dengan kondisi server):

```
APP_URL=https://simei.sm-indonesia.id

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=project_simei
DB_USERNAME=postgres
DB_PASSWORD=root
```

- jika menggunakan postgree/psql recheck php.ini

```
extension=pdo_pgsql
extension=pgsql
```

- run `php artisan g:reset`
  untuk meng-inisiasi aplikasi dan meng-install data awal yang dibutuhkan
- run `php artisan optimize`
  untuk caching aplikasi

## 3. routing

- karena aplikikasi seluruhnya di handle oleh BE,
  ubah root folder ke dalam folder, semisalah ,
  `/var/www/simei/be`
