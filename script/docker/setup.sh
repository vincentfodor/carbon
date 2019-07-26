#!/usr/bin/env bash
set -e

echo 'Build Docker Image'
docker build --rm -t carbon_cypress -f Dockerfile-cypress --memory-swap=-1 --shm-size=256M -m=4096M .

echo 'Setup complete'
