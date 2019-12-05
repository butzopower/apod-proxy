#!/bin/bash
set -e

while true; do
  curl -s -o /dev/null -w "%{http_code}" http://apod-proxy.cfapps.io
  printf "\n"
  sleep 1
done
