# SIMEI - SIMULASI EXPORT IMPORT

## @PPEJP - Kementerian Perdagangan

## Frontend (fe)

- front end (fe) folder is just a source code
- npm install (not required)
- compile the source each after modification with :

```sh
npm run lb
```

- compliled code (dist) will cloned into be automatically, and will serve under backend

## Backend (be)

- `composer install`
- set .env for this paramater :

```
APP_URL=https://simei.sm-indonesia.id

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=project_simei
DB_USERNAME=postgres
DB_PASSWORD=root
```

- if using psql recheck php.ini

```
extension=pdo_pgsql
extension=pgsql
```

- run `php artisan g:reset` to reset aplication and install initial data
- run `php artisan optimize` to cache all configuration
