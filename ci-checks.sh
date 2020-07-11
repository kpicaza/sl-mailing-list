#!/usr/bin/env bash

docker-compose build
docker-compose run --rm backend_php composer install
docker-compose run --rm backend_php composer check-all
