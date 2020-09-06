---
title: "Tag Archive"
layout: "layouts/feed.html"
pagination:
    data: collections
    size: 1
    alias: tag
    filter: ["all", "blog", "work", "rss"]
permalink: "{{ locale }}/tag/{{ tag | slug }}/"
---
