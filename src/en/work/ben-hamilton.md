---
title: 'Ben Hamilton personal site'
summary: "A graphic designer's portfolio site, made with a focus on fun and visual flair without forgetting accessibility."
displayOrder: 1
eleventyNavigation:
  key: Ben Hamilton
  parent: Work
translationKey: "benham"
year: '2021'
hero:
  image: '/images/work/benham-cover_960x640.webp'
  imageAlt: "Screenshot of Ben's website in the high-contrast colour theme."
techStack:
  - "Eleventy static site generator"
  - "Netlify CMS content management system"
  - "<abbr>HTML5</abbr>"
  - "Nunjucks"
  - "<abbr>SCSS</abbr>"
  - "Gorko Sass token generator"
  - "Vanilla <abbr>JS</abbr>"
  - "<abbr>GSAP</abbr> animation"
visitLink: 'https://www.ben-hamilton.co.uk/'
visitText: Visit site
---

Having worked closely with Ben during my time at [Atomic Smash](https://www.atomicsmash.co.uk/) in Bristol, I was very pleased when he approached me about building a portfolio site for him. I had been exploring Jamstack methods of developement and had recently completed [Andy Bell](https://piccalil.li/)'s course _'Learn Eleventy from Scratch'_, so I felt that this was the ideal opportunity to take what I had learned and put it into practice.

As a designer working on his own site, Ben had total free reign to create something extravagant and quirky, unrestricted by typical client requests, and I also relished the chance to build such a site. For example, from the start Ben had the idea for a colour theme switcher on the site, not necessarily a light/dark theme but rather a kind of 'wardrobe change' centred around a button featuring an animated SVG recreation of his coathanger tattoo. Some of the colour combinations in Ben's chosen palettes were not compliant to Web Content Accessibility Guidelines (<abbr>WCAG</abbr>) AA-standard, but as we are both keenly aware of accessibility standards, we agreed to impliment a more compliant theme in black & white; this high-contrast theme is toggled separately to the original themee change, and also pauses all the moving elements of the site, so that users who prefer reduced motion can also use the site.

Since I knew I would be deploying the site through Netlify, I decided to choose Netlify CMS to afford Ben a clean and simple way to manage the site's content. I made use of the 'widgets' feature to build reusable components for the work pages, to allow Ben to create pages that are varied yet consistent in look and feel. Another challenging aspect of this site was Ben's desire to have work pages scroll horizontally at large screen resolutions, and I spent much time tweaking this to get the look and feel just right. It was achieved using GreenSock <abbr>GSAP</abbr> animation. To make it as usable as possible, the horizontal movement of the page responds to standard up & down scroll direction, but can also be dragged left & right, as indicated by the use of the grabbing hand cursor. I also made sure that navigation between elements, for example with <kbd>Tab</kbd>, succeeded despite the scroll direction.

<figure class="blockquote">
    <blockquote>
        <p>
        George handled this project with an attention to detail that I've rarely encountered when working with a front-end developer. I was absolutely delighted with the care he took to realise my vision, no matter how challenging the requirements I threw at him.
        </p>
    </blockquote>
    <figcaption>Ben Hamilton</figcaption>
</figure>

Another notable feature of the site is the transition between work items; when you have reached the end of a work page, Ben wanted to redirect the user to the next work page automatically after a short countdown. For this, I made use of aria-live announcements to make the the intention as clear as possible to screen reader users. The countdown can be cancelled and reset by scrolling away from the end of the page.

Of particular visual interest is the use of marquees, which were achieved by using an animated <code>text-shadow</code>, and hyperlinks that change font weight drastically on hover, without any possibility of flickering; this was achieved by invisible, inaccessible duplicate text inside the link, set at the original font weight to retain the link's size while the visible text transforms.

Shortly after the site's launch in March of 2021, Ben submitted the site to [awwwards](https://www.awwwards.com/), and received an honourable mention, for which the banner sits fixed to the centre of the site's left edge. I certainly am proud of the end result; it was an absolute pleasure to work with Ben on it, and in return to work with him on the design for this very website.

{% import "macros/picture.html" as pic %}

{{ pic.image(
    '',
    '/images/work/benham-work-end_960x640.webp',
    '',
    'Screenshot of Beowulf Ipsum showing line count.',
    'Beowulf Ipsum line count screenshot'
) }}