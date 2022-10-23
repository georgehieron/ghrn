---
title: 'Beowulf Ipsum'
summary: 'An Ipsum-style text generator based on the Old English epic poem, Beowulf.'
displayOrder: 3
eleventyNavigation:
  key: Beowulf Ipsum
  parent: Work
translationKey: "bIpsum"
year: '2019'
hero:
  image: '/images/work/beowulf-ipsum-cover_960x640.webp'
  imageAlt: 'Beowulf Ipsum cover image showing a sample of generated text.'
techStack:
  - "<abbr>HTML5</abbr>"
  - "Vanilla Sass"
  - "Vanilla <abbr>JS</abbr>"
visitLink: 'https://www.beowulfipsum.com/'
visitText: Visit site
---

One day, while I was working on the front-end build of a new website, I needed to block in some example content in order to correctly begin laying out whatever section I was working on at that moment. Of course, I reached for the classic Lorem Ipsum, the long-established and globally recognised dummy text used to infer the presence of real content in the context of a layout or design. However, as a bit of a medieval history nerd I wondered, why not take the concept and apply it to historical texts? After all, in addition to Lorem Ipsum, these days there are plenty of other, often hilarious options for dummy text generators, such as [Pirate Ipsum](https://pirateipsum.me/), [Coffee Ipsum](http://coffeeipsum.com/), and [Cat Ipsum](http://www.catipsum.com/).

Although these are fun, I rarely use them because that they generate readable English words can make them still somewhat distracting, as I find myself reading through and attempting to make sense of the nonsense sentences that were generated. As stated by [lipsum.com](https://lipsum.com/):

<figure class="blockquote">
    <blockquote>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
    </blockquote>
</figure>

So, to me the idea of using ancient or medieval literature for this was perfect; a great way to synthesize my work as a web developer with my love of history and languages. I also thought that since I'd be using real texts as the source material, I would add a twist to the concept and generate portions of the content in order, from a random starting point; additionally, since Beowulf is a poem and is typically presented with a line count, I would show the line numbers of the output such that, if a user was so inclined, they could go to that portion to read what they had generated.

{% import "macros/picture.html" as pic %}

{{ pic.image(
    '',
    '/images/work/beowulf-ipsum-text_960x640.webp',
    '',
    'Screenshot of Beowulf Ipsum showing line count.',
    'Beowulf Ipsum line count screenshot'
) }}

For some finishing touches, I decided to add a toggle to allow starting the output with Beowulf's (in)famously ambiguous opening declaration of <span lang="ang">_Hwæt!_</span>, to equate to beginning with <span lang="la">_Lorem Ipsum dolor sit amet_</span>, and for a bit of fun I thought to write copy for the site in some kind of mock Old English.

The site is static, using just HTML for its single page with vanilla Sass for styling and vanilla JS for the content generation. I manually sanitized and added around 600 lines of Beowulf (but I might add more at a later date to increase the variety), and I also added a 'Copy Text' button to top it off. I certainly had fun with the styles as it definitely doesn't look like something you'd make for a typical client.

I enjoyed bringing such a nerdy concept to life; feel free to give it a go, and maybe let me know on Twitter if you do!