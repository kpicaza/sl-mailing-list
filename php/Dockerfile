FROM php:7.4.3-fpm

RUN apt-get update && apt-get install -y git zip zlib1g-dev libicu-dev g++ libxml2-dev autoconf pkg-config libssh-dev libonig-dev

RUN docker-php-ext-install pdo_mysql bcmath iconv pcntl mbstring intl calendar

RUN usermod -u 1000 www-data

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN composer global require hirak/prestissimo
