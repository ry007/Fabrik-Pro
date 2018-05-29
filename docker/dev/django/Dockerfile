FROM ubuntu:18.04

RUN export DEBIAN_FRONTEND=noninteractive DEBCONF_NONINTERACTIVE_SEEN=true
RUN ln -fs /usr/share/zoneinfo/Etc/UTC /etc/localtime

RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential \
        cmake \
        git \
        curl \
        libatlas-base-dev \
        libboost-all-dev \
        libgflags-dev \
        libgoogle-glog-dev \
        libhdf5-serial-dev \
        libleveldb-dev \
        liblmdb-dev \
        libopencv-dev \
        libprotobuf-dev \
        libsnappy-dev \
        protobuf-compiler \
        python3.6-dev \
        python3-setuptools\
        python3-pip && \
    rm -rf /var/lib/apt/lists/*


ENV CAFFE_ROOT=$HOME/caffe

WORKDIR $CAFFE_ROOT

ENV CLONE_TAG=1.0

RUN pip3 install --upgrade pip

RUN git clone -b ${CLONE_TAG} --depth 1 https://github.com/BVLC/caffe.git . && \
    cd python && for req in $(cat requirements.txt) pydot; do pip3 install $req; done

RUN apt-get update && apt-get install -y curl
RUN    mkdir build && cd build && cmake -DCPU_ONLY=1 -DPYTHON_INCLUDE_DIR=/usr/include/python3.6m -Dpython_version=3 .. && \
    make -j"$(nproc)"

ENV PYCAFFE_ROOT $CAFFE_ROOT/python
ENV PYTHONPATH $PYCAFFE_ROOT:$PYTHONPATH
ENV PATH $CAFFE_ROOT/build/tools:$PYCAFFE_ROOT:$PATH
RUN echo "$CAFFE_ROOT/build/lib" >> /etc/ld.so.conf.d/caffe.conf && ldconfig

WORKDIR /code

ADD . /code

RUN pip3 install -r requirements/dev.txt
RUN pip3 install --upgrade python-dateutil
EXPOSE 8000
