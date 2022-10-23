---
title: 'Kalevala Ipsum'
summary: 'An Ipsum-style text generator based on the Finnish epic poem, Kalevala.'
displayOrder: 2
eleventyNavigation:
  key: Kalevala Ipsum
  parent: Work
translationKey: "kIpsum"
year: '2020'
hero:
  image: '/images/work/kalevala-ipsum-cover_960x640.webp'
  imageAlt: 'Kalevala Ipsum cover image showing a sample of generated text.'
techStack:
  - "<abbr>HTML5</abbr>"
  - "Vanilla Sass"
  - "Vanilla <abbr>JS</abbr>"
visitLink: 'https://www.kalevalaipsum.com/'
visitText: Visit site
---

About a year after making [Beowulf Ipsum](/en/work/beowulf-ipsum), I had recently moved to Finland, and was working on sites where Finnish was the primary language in use. This gave me the idea for another Ipsum-style text generator, based on the Finnish national epic, [Kalevala](https://en.wikipedia.org/wiki/Kalevala), as a sister-site to Beowulf Ipsum, to allow me to use dummy content that looked like Finnish specifically.

Given that the Kalevala was compiled in the 19th century, the language used is still completely readable Finnish. Therefore this idea is not strictly true to the original concept behind Lorem Ipsum, where fake Latin is used in order to give the appearance of real content without the distraction of being drawn into reading it (a quality that I think still works about Beowulf Ipsum, given how few people can read Old English in the 21st century).

{% import "macros/pictures-mobile.html" as mobpics %}

{{ mobpics.images(
    pic1Classes='',
    src1='/images/work/kalevala-ipsum-mobile_432x768.webp',
    img1Classes='',
    alt1='Screenshot of Kalevala Ipsum website introduction at mobile.',
    title1='Kalevala Ipsum introduction content seen at mobile size',
    pic2Classes='',
    src2='/images/work/beowulf-ipsum-mobile_432x768.webp',
    img2Classes='',
    alt2='Screenshot of Beowulf Ipsum website introduction at mobile',
    title2='Beowulf Ipsum introduction content seen at mobile size.',
    caption='Comparing the two sites side-by-side, they are clearly a pair.'
) }}

Nevertheless, it was fun to create, and it serves my personal use case of placeholder content on Finnish-language sites perfectly. It looks visually consistent, allowing me to focus on the coding, whereas Lorem Ipsum and Beowulf can stand out amongst existing Finnish content in a slightly jarring way.

The bulk of the project is primarily the same as with Beowulf Ipsum, of course; instead this project allowed me to use a bit more design skill. I chose a blue palette as the base to reflect the nautical themes within Kalevala, and contrasting yellow and white for accent and text colours, along with a wave patterned banner in place of the celtic knot -style one that I used in Beowulf Ipsum.

I launched it on the annually-celebrated Kalevala Day, on 28th of February 2020. The perfect completion for this little project!