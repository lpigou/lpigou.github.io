---
layout:     post
title:      "RNNs and Temporal Convolutions for Gesture Recognition in Video"
subtitle:   
date:       2015-06-05 01:00:01
author:     "Lionel Pigou"
header-img: "img/banner-gesture-dark1.jpg"
publish:    true
blog: false
comments: true
darken1: 0.3
darken2: 0.3
---


<div class="slider" style="margin-bottom:20px">
    <div class="sliderimg" style="background-image:url('{{ site.baseurl }}/img/overview.png')"> </div>
    <div class="sliderimg" style="background-image:url('{{ site.baseurl }}/img/output.png')"> </div>
    <div class="sliderimg" style="background-image:url('{{ site.baseurl }}/img/motionfeatures.png')"> </div>
    <div class="sliderimg" > 
        <img  class="vid16by9 gfyitem" data-dot="false" data-controls="false" data-id="ImpartialSoulfulCurlew" />
    </div>
</div>

Recent studies have demonstrated the power of recurrent neural networks for machine translation, image captioning and speech recognition. For the task of capturing temporal structure in video, however, there still remain numerous open research questions. Current research suggests using a simple temporal feature pooling strategy to take into account the temporal aspect of video. We demonstrate that this method is not sufficient for gesture recognition, where temporal information is more discriminative compared to general video classification tasks. We explore deep architectures for gesture recognition in video and propose a new end-to-end trainable neural network architecture incorporating temporal convolutions and bidirectional recurrence. Our main contributions are twofold; first, we show that recurrence is crucial for this task; second, we show that adding temporal convo- lutions leads to significant improvements. We evaluate the different approaches on the Montalbano gesture recognition dataset, where we achieve state-of-the-art results.

