#!/bin/bash
set -e

function make_request () {
  HTTP_RESPONSE=$(curl -s -w "CODE:%{http_code}" https://apod-proxy.apps.pcfone.io/guid)
  BODY=$(echo $HTTP_RESPONSE | sed -e "s/CODE\:.*//g")
  CODE=$(echo $HTTP_RESPONSE | sed -e "s/.*CODE\://g")
  printf "$CODE "
  printf "$BODY"
  printf "\n"
}

while true; do
  make_request
  sleep 1
done
