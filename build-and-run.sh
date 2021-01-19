#!/bin/bash

docker build -d dti-manager .
docker run -d -t --name dti-manager -p 3000:3000 dti-manager

