---
layout: post
author: Lionel Pigou
title: "Kaggle Data Science Bowl 2017: Detecting Lung Cancer"
tags: [machine learning, kaggle]
date: 2017-04-01
---



_Disclaimer_: This post is summarized by an AI chatbot and is based on the [full post](https://eliasvansteenkiste.github.io/machine%20learning/lung-cancer-pred/) by Elias Vansteenkiste.

{% include image.html url="/assets/images/projects/kaggle-lung.gif" 
    caption="A malignant nodule from the LUNA dataset." %}

The Deep Breath team, consisting of myself (Lionel Pigou), Andreas Verleysen, Elias Vansteenkiste, Fréderic Godin, Ira Korshunova, Jonas Degrave, and Matthias Freiberger, participated in the Data Science Bowl, an annual data science competition hosted by Kaggle. The objective was to detect lung cancer based on CT scans of the chest from individuals diagnosed with cancer within a year. Despite their lack of specific knowledge in medical image analysis or cancer prediction, the team secured 9th place in the competition. 

The overall strategy was to reduce the high dimensional CT scan to a few regions of interest. Starting from these regions of interest, the team trained several neural networks to extract the region of interests and to make a final prediction starting from the regions of interest.

Please refer to the [full post](https://eliasvansteenkiste.github.io/machine%20learning/lung-cancer-pred/) by Elias Vansteenkiste to know more about the approach and our findings.
