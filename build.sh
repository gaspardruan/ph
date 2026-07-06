#!/bin/bash

set -euo pipefail

IMAGE_NAME="homepage"
CONTAINER_NAME="homepage_container"
NEW_TAG="${1:-}"
DOCKERFILE_DIR="."
HOST_PORT=3000
CONTAINER_PORT=80

if [ -z "$NEW_TAG" ]; then
    echo "请提供新镜像标签，例如 ./build.sh v1.1.0"
    exit 1
fi

echo "构建新镜像: $IMAGE_NAME:$NEW_TAG"
docker build -t "$IMAGE_NAME:$NEW_TAG" "$DOCKERFILE_DIR"

OLD_CONTAINER_ID=$(docker ps -a -q -f name="^${CONTAINER_NAME}$")

if [ -n "$OLD_CONTAINER_ID" ]; then
    echo "停止旧容器: $CONTAINER_NAME"
    docker stop "$CONTAINER_NAME"

    echo "删除旧容器: $CONTAINER_NAME"
    docker rm "$CONTAINER_NAME"
fi

OLD_IMAGE_ID=$(docker images -q "$IMAGE_NAME" | grep -v "$(docker images -q "$IMAGE_NAME:$NEW_TAG")" || true)

if [ -n "$OLD_IMAGE_ID" ]; then
    echo "删除旧镜像: $OLD_IMAGE_ID"
    docker rmi $OLD_IMAGE_ID
fi

echo "启动新容器: $CONTAINER_NAME"
docker run -d -p "$HOST_PORT:$CONTAINER_PORT" --name "$CONTAINER_NAME" "$IMAGE_NAME:$NEW_TAG"

echo "更新完成！"
