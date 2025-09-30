#!/bin/bash

# 配置
IMAGE_NAME="homepage"
CONTAINER_NAME="homepage_container"
NEW_TAG="$1"   # 新标签，从参数传入，例如 ./update_docker.sh v1.1.0
DOCKERFILE_DIR="."   # Dockerfile 所在目录
HOST_PORT=3000       # 宿主机端口
CONTAINER_PORT=3000    # 容器端口

if [ -z "$NEW_TAG" ]; then
    echo "请提供新镜像标签，例如 ./update_docker.sh v1.1.0"
    exit 1
fi

echo "构建新镜像: $IMAGE_NAME:$NEW_TAG"
docker build -t $IMAGE_NAME:$NEW_TAG $DOCKERFILE_DIR

# 检查旧容器是否存在
OLD_CONTAINER_ID=$(docker ps -a -q -f name="^${CONTAINER_NAME}$")

if [ -n "$OLD_CONTAINER_ID" ]; then
    echo "停止旧容器: $CONTAINER_NAME"
    docker stop $CONTAINER_NAME

    echo "删除旧容器: $CONTAINER_NAME"
    docker rm $CONTAINER_NAME
fi

# 检查旧镜像是否存在（除了最新构建的）
OLD_IMAGE_ID=$(docker images -q $IMAGE_NAME | grep -v $(docker images -q $IMAGE_NAME:$NEW_TAG))

if [ -n "$OLD_IMAGE_ID" ]; then
    echo "删除旧镜像: $OLD_IMAGE_ID"
    docker rmi $OLD_IMAGE_ID
fi

# 启动新容器
echo "启动新容器: $CONTAINER_NAME"
docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $CONTAINER_NAME $IMAGE_NAME:$NEW_TAG

echo "更新完成！"
