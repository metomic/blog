#!/bin/bash
set -e
docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve