#!/bin/bash
set -e

while true; do
  curl -s -o /dev/null -w "%{http_code}" https://apod-proxy.apps.pcfone.io/
  printf "\n"
  sleep 1
done
