---
title: 'Dynamic High-contrast focus styles'
date: '2020-09-06'
tags: ['CSS', 'Accessibility']
---

I was recently working on accessibility improvements to a site that was built several years ago, during which time a lot of continuous development had been done on the site. As part of the improvements, I needed to implement an better, more visible outline style, and ran into difficulty; the site was using primarily white and a dark blue as its colours, and often different sections on a page would interchange between dark and light backgrounds. On these darker sections, a light focus style was required to give sufficient colour contrast, as opposed to on the default white background/body of the site where I'd implemented a reasonably thick, dark outline style.

Due to the way these elements and structures had been implemented, there was not an easy way to target every component that was using the dark blue background, requiring me to have a thorough look around the code and the site to try and make sure that I could correctly change the focus style to a light colour where required.

It wasn't a big problem, but it got me thinking – would it be possible to make a robust, CSS-only solution to such a problem, such that the colour of the focus style would be dynamically light or dark without having to target specific components or element groups separately.


{% highlight "html" %}
<table>
    <tr>
        <th scope="row">Client:</th>
        <td>{{ item.client }}</td>
    </tr>
    <tr>
        <th scope="row">Agency:</th>
        <td>{{ item.agency }}</td>
    </tr>
    <tr>
        <th scope="row">Expertise:</th>
        <td>{{ item.expertise }}</td>
    </tr>
    <tr>
        <th scope="row">Project Outcomes:</th>
        <td>{{ item.outcomes }}</td>
    </tr>
</table>
{% endhighlight %}
