---
layout: post
author: Lionel Pigou
title: "Kaggle Data Science Bowl 2015: Classifying plankton with deep neural networks"
tags: [machine learning, kaggle]
date: 2015-03-17
---


_Disclaimer_: This post is summarized by an AI chatbot and is based on the [full post](https://sander.ai/2015/03/17/plankton.html) by Sander Dieleman.

{% include image.html url="/assets/images/projects/plankton.gif" height="10rem"
    caption="Animated visualization of the optimization of the affine transformation parameters." %}

The ≋ Deep Sea ≋ team, consisting of myself (Lionel Pigou), Sander Dieleman, Aäron van den Oord, Ira Korshunova, Jeroen Burms, Jonas Degrave and Pieter Buteneers, participated in the Data Science Bowl, an annual data science competition hosted by Kaggle. The objective was to classify grayscale images of plankton into one of 121 classes. We won the competition and were awarded a $100,000 prize!

We used a CNN with a VGG-like architecture to classify plankton images. We pre-processed the images and used data augmentation to artificially increase the size of the dataset. We trained the CNN for 100 epochs and used model averaging to combine the predictions of multiple CNNs. This resulted in a top-1 accuracy of 93.3% on the test set.

Please refer to the [full post](https://sander.ai/2015/03/17/plankton.html) by Sander Dieleman to know more about the approach and our findings.
