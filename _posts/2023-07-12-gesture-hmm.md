---
layout: post
author: Lionel Pigou
title: "Deep Dynamic Neural Networks for Multimodal Gesture Segmentation and Recognition"
tags: [machine learning, gesture recognition]
date: 2015-02-17
---


This post is a summarization based on the chapter in my Ph.D dissertation on [page 59](/assets/phd-lionelpigou.pdf#page=59) and our [IEEE PAMI paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7423804). 

The ChaLearn Montalbano gesture recognition dataset is a large
collection of videos consisting of twenty different classes of Italian
gestures recorded with a Microsoft Kinect depth-sensing camera.
The challenge is to classify every gesture and to locate the gestures
in time (temporal segmentation). The multimodal nature of the
problem and the fact that gesture sequences have a variable length
are the two aspects that we focus on.

{% include image.html url="/assets/images/posts/gesture-hmm/1.png" height="20rem"
    caption="Examples of gestures in the ChaLearn dataset.
This dataset is challenging because of the “user independent” setting (a) & (b), some gestures differ primarily in
hand pose, but not in the arm movement (d) & (e). Some
gestures require both hands to perform (g,h,i). Subtle
hand movement (c) and differences in execution speed
and range (f) also make this recognition task difficult.
" %}

Inspired by successful approaches in the speech recognition
research field, we propose a data-driven model for this gesture
recognition problem. Different users perform gestures with different speeds resulting in gesture sequences with a variable length.
To tackle this, we employ hidden Markov models (HMMs). In
our case, the HMMs model the different temporal states of each
gesture.

The depth-sensing camera records images, depth maps and
allows the positional tracking of skeletal joints. Therefore, our
approach is split into two different modules: (i) a RGB-D module
using a 3D convolutional neural network (3D CNN) on the images
and the depth maps, and (ii) a skeleton module using a deep
belief network (DBN) on the skeleton joint positions. Finally,
we investigate a fusion strategy to incorporate both the skeletal
features and the video features into the HMMs.

{% include image.html url="/assets/images/posts/gesture-hmm/2.png" height="15rem"
    caption="3D CNN architecture. The input is 2 × 2@64 ∗ 64 ∗ 4, meaning 2 modalities (depth and RGB)
for the hand and body regions, each being 4 consecutive 64 by 64 frames stacked together." %}

## Abstract

Our [IEEE PAMI paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7423804) describes a novel method called Deep Dynamic Neural Networks (DDNN) for multimodal gesture recognition. A semi-supervised hierarchical dynamic framework based on a Hidden Markov Model (HMM) is proposed for simultaneous gesture segmentation and recognition where skeleton joint information, depth and RGB images, are the multimodal input observations. 

{% include image.html url="/assets/images/posts/gesture-hmm/5.png" height="15rem"
    caption="A point cloud projection of a depth
image and the 3D positional features." %}

Unlike most traditional approaches that rely on the construction of complex handcrafted features, our approach learns high-level spatiotemporal representations using deep neural networks suited to the input modality: a Gaussian-Bernouilli Deep Belief Network (DBN) to handle skeletal dynamics, and a 3D Convolutional Neural Network (3DCNN) to manage and fuse batches of depth and RGB images. This is achieved through the modeling and learning of the emission probabilities of the HMM required to infer the gesture sequence. 

{% include image.html url="/assets/images/posts/gesture-hmm/3.png" height="15rem"
    caption="Visualization of input frames, first convolutional layer 5 × 5 filters, and corresponding response
maps. As depth images are smoother than the grayscale ones, the corresponding filters are smoother as
well." %}

This purely data driven approach achieves a Jaccard index score of 0.81 in the ChaLearn LAP gesture spotting challenge. The performance is on par with a variety of state-of-the-art hand-tuned feature-based approaches and other learning-based methods, therefore opening the door to the use of deep learning techniques in order to further explore multimodal time series data.

{% include image.html url="/assets/images/posts/gesture-hmm/4.png" height="15rem"
    caption="HMM temporal contribution. First row: output emission probabilities for each gesture as
given by the late fusion scheme for the test sequence #703. The dashed line represents the probability of
the Resting/Other gesture state, while other colors represent different gestures. Second row: recognized
gestures, without HMM modeling. Third row: HMM output. Fourth row: ground truth segmentation." %}