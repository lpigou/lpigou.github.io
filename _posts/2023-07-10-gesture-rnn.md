---
layout: post
author: Lionel Pigou
title: "Beyond Temporal Pooling: Recurrence and Temporal Convolutions for Gesture Recognition in Video"
tags: [machine learning, gesture recognition]
date: 2016-02-01
---

_Disclaimer_: This post is summarized by an AI chatbot and is based on the chapter in my Ph.D dissertation on [page 105](/assets/phd-lionelpigou.pdf#page=105) and my [IJCV 2016 paper](https://arxiv.org/pdf/1506.01911.pdf). 

{% include image.html url="/assets/images/projects/beyondtemppool2.gif" height="9rem"
    caption="This illustrates the
effect of integrating temporal convolutions. The depicted
spatial feature map is the most active 4-layer-deep feature
map, extracted from an architecture without temporal convolutions. The spatiotemporal feature map is extracted
from a model with temporal convolutions. The strong activations in the spatiotemporal feature maps while moving
indicate learned motion features" %}

Recent studies have demonstrated the power of recurrent neural networks for machine
translation, image captioning and speech recognition. For the task of capturing temporal
structure in video, however, there still remain numerous open research questions. Current
research suggests using a simple temporal feature pooling strategy to take into account the
temporal aspect of video. We demonstrate that this method is not sufficient for gesture
recognition, where temporal information is more discriminative compared to general video
classification tasks. 

We explore deep architectures for gesture recognition in video and
propose a new end-to-end trainable neural network architecture incorporating temporal
convolutions and bidirectional recurrence. Our main contributions are twofold; first,
we show that recurrence is crucial for this task; second, we show that adding temporal
convolutions leads to significant improvements. We evaluate the different approaches on
the Montalbano gesture recognition dataset, where we achieve state-of-the-art results.

## Network Architectures

We investigate several architectures for gesture recognition in videos. The baseline models include a single-frame CNN and a temporal pooling model. The single-frame CNN processes each frame independently, while the temporal pooling model aggregates spatial features over a certain time window. We also propose two architectures that combine CNNs with RNNs. The first architecture uses bidirectional recurrence to capture temporal dependencies, and the second architecture adds temporal convolutions to the CNN layers to extract motion features.

{% include image.html url="/assets/images/posts/gesture-rnn/1.png"  height="22rem" 
    caption="(a) Single-frame CNN architecture. (b) Temporal feature pooling network (max- or
mean-pooling), spanning multiple video frames. (c) Model
with bidirectional recurrence. (d) Adding temporal convolutions and three-dimensional max pooling (MP refers
to max pooling). (e) Architecture with added temporal
convolutions and bidirectional recurrence.
" %}

## Experiments and Results

We evaluate our models on the Montalbano gesture recognition dataset. We preprocess the data by cropping and resizing the images. We train the models end-to-end, optimizing the network parameters using gradient descent. We also apply data augmentation and regularization techniques to improve generalization.

{% include image.html url="/assets/images/posts/gesture-rnn/2.png"  height="11rem" 
    caption="A comparison of the results for our different architectures on the Montalbano
gesture recognition dataset. The Jaccard index indicates the mean overlap between the binary
predictions and the binary ground truth across gesture categories. We also compute precision
and recall scores for each gesture class and report the mean score across classes.
*The error rate is based on majority voted frame-wise predictions from isolated gesture
fragments.
" %}

{% include image.html url="/assets/images/posts/gesture-rnn/3.png"  height="11rem" 
    caption="Montalbano gesture recognition dataset results compared to previous work. Crop:
the cropping of specific areas in the video using the skeletal information. Depth: the usage of
depth-maps. Pose: the usage of the skeletal stream as features. Note that even when we do
not use depth images, we still achieve better results.
" %}

Our results show that the temporal convolution architecture outperforms the single-frame and temporal pooling models. The models combining CNNs with RNNs achieve even better performance. Both LSTM cells and standard cells are effective for capturing temporal dependencies. Our best model achieves a high Jaccard index score, indicating accurate gesture recognition.

{% include image.html url="/assets/images/posts/gesture-rnn/4.png"  height="20rem" 
    caption="The output probabilities are shown for a sequence fragment in the test set. The
dashed line represents silences. The non-recurrent models make more mistakes and have
difficulties making hard decisions to where the gesture starts or ends and are unable to smooth
out predictions in time. Adding recurrence enables deep networks to learn the behavior of the
manual annotators with great accuracy." %}

{% include image.html url="/assets/images/posts/gesture-rnn/5.png"  height="10rem" 
    caption="This figure illustrates the effect of integrating temporal convolutions. The depicted spatial feature map is the most active 4-layer-deep feature map,
extracted from an architecture without temporal convolutions. The spatiotemporal feature
map is extracted from a model with temporal convolutions. The strong activations in the
spatiotemporal feature maps while moving indicate learned motion features." %}

{% include image.html url="/assets/images/posts/gesture-rnn/6.png"  height="19rem" 
    caption="The confusion matrix for the model with
temporal convolutions and LSTM cells, evaluated on the
test set." %}

## Conclusion and Future Work

In this chapter, we demonstrated the effectiveness of combining temporal convolutions and recurrence for gesture recognition in videos. The unified end-to-end neural network architecture achieved significant improvements in accuracy compared to traditional methods. In future work, we plan to apply these techniques to sign language recognition, which poses additional challenges such as a larger vocabulary and context-dependent signs.

By leveraging the power of deep learning, we can continue to advance gesture recognition and make progress in understanding and interpreting human movements.

