#도커파일 추가
FROM pytorch/pytorch:1.7.0-cuda11.0-cudnn8-runtime
WORKDIR /app
ADD requirements.txt /app/
RUN pip install --upgrade pip
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    'ffmpeg' \
    'libsm6' \
    'libxext6' \
    && \
    rm -rf /var/lib/apt/lists

RUN pip install -r requirements.txt

LABEL key="Name"
LABEL key="Version"