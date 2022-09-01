---
title: 'Beowulf Ipsum'
summary: 'An Ipsum-style text generator based on the Old English epic poem, Beowulf.'
displayOrder: 1
eleventyNavigation:
  key: Beowulf Ipsum
  parent: Work
translationKey: "bIpsum"
year: '2019'
hero:
  image: '/images/work/beowulf_full@2x.webp'
  imageAlt: 'Beowulf Ipsum cover image showing stylised Beowulf sample text.'
techStack:
  - "HTML5"
  - "Vanilla CSS"
  - "Vanilla JS"
---

One day, while I was working on the front-end build of a client's new website, I needed to block in some example content in order to correctly begin laying out whatever section I was working on at that moment. Of course, I reached for the classic Lorem Ipsum, the long-established and globally recognised dummy text used to infer the presence of real content in the context of a layout or design. However, as a bit of a medieval history nerd I wondered, why not take the concept and apply it to classical works? After all, in addition to Lorem Ipsum, these days there are plenty of other, often hilarious options for dummy text generators, such as [Pirate Ipsum](https://pirateipsum.me/), [Cheese Ipsum](http://www.cheeseipsum.co.uk/), [Cat Ipsum](http://www.catipsum.com/), and even [Zombie&nbsp;Ipsum](http://www.zombieipsum.com/).

Although I love the concepts, I feel like I would rarely use these because while they are great fun, the fact that they are in readable English can make them still somewhat distracting, as I find myself reading through and attempting to make sense of the nonsense that was generated. After all, according to [lipsum.com](https://lipsum.com/):

<figure class="blockquote">
    <blockquote>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
    </blockquote>
</figure>

So, to me the idea of using ancient or medieval literature for this was perfect; a great way to synthesize my work as a web developer with my love of history and languages. I also thought that since I'd be using real texts as the source material, I would add a twist to the concept and generate portions of the content in order, from a random starting point; additionally, since Beowulf is a poem and is typically presented with a line count, I would show the line numbers of the output such that, if a user was so inclined, they could go to that portion to read what they had generated.

<picture>
    <img src="/images/Screenshot_2021-02-08_Beowulf_Ipsum.png"
        alt="Screenshot of Beowulf Ipsum showing line count"
        title="Beowulf Ipsum line count screenshot">
</picture>

For some finishing touches, I decided to add a toggle to allow starting the output with Beowulf's (in)famously ambiguous opening declaration of _Hwæt!_, to equate to beginning with _Lorem Ipsum dolor sit amet_, and for a bit of fun I thought to write copy for the site in some kind of mock Old English.

The site is static, using just HTML for its single page with vanilla Sass for styling and vanilla JS for the content generation. I manually sanitized and added around 600 lines of Beowulf (but I might add more at a later date to increase the variety), and I also added a 'Copy Text' button to top it off. I certainly had fun with the styles as it definitely doesn't look like something you'd make for a typical client.

I enjoyed bringing such a nerdy concept to life; feel free to give it a go and drop me a tweet if you use it for anything!