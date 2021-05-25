---
title: 'Dynamic High-contrast focus styles'
date: '2021-05-25'
tags: ['CSS', 'Accessibility']
---

<p class="lede">I was recently working on accessibility improvements to a relatively old site, and I needed to implement better focus styles with sufficient colour contrast.</p>

The site's primary brand colours were white and a dark blue, requiring primarily a dark focus style and, where the dark blue was in use as a background colour, a light focus style to achieve the desired result.

## The problem

Due to the age of the site and the amount of continuous development additions and improvements that had been made to it over the years, the code base had become somewhat sprawling, making it difficult to quickly and easily target every instance of a section or component with a dark blue background, where the light focus style was required.

I had to spend a not insignificant amount of time sifting through the code base with searches to catch every instance. It wasn't a big problem, but it got me thinking – would it be possible to make a robust, CSS-only solution to such a problem, such that the colour of the focus style would be dynamically light or dark without having to target specific components or element groups separately.

## The solution

The solution I came with depends heavily on two things: the use of the CSS keyword `currentColor`, and the assumption that that the value of currenColor is already compliant with the WCAG level you are aiming for against the background colour. The solution essentially uses `box-shadow` in the role of `outline` for most elements that receive focus, and for elements such as buttons that have a boxy appearance, the application of `background-color: inherit;` gives the visual effect of a button that is transparent, defined only by its visual border. However, by inheriting the parent container's colour combination, then the same colour contrast ratio is achieved. Since for buttons, the visual border becomes necessary to define the clickable area of the component, the additional use of outline with an offset value can be applied to further enhance the visual clarity of the focus position.

### The code

{% highlight "scss" %}
// Target all focusable elements...
:focus {
	background-color: initial !important;
	color: inherit !important;
	text-decoration: underline;
	/* Remove any default outline */
	outline: 0;
	/* Box shadow performs the role of outline */
	box-shadow: 0rem 0rem 0rem 0.2rem currentColor;
}

// For elements that are of a box-type shape add an additional indicator with outline + outline offset.
input,
select,
button,
.button {
	&:focus {
		outline: .2rem dotted currentColor;
		outline-offset: .3rem;
	}
}
{% endhighlight %}

Check out my proof-of-concept CodePen below for a living example. Click inside and <kbd>Tab</kbd> around to see the focus styles!

<p class="codepen" data-height="455" data-theme-id="dark" data-default-tab="result" data-user="georgehieron" data-slug-hash="PopWYPL" data-preview="true" style="height: 455px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Dynamic contrast on focus highlight – CSS only">
  <span>See the Pen <a href="https://codepen.io/georgehieron/pen/PopWYPL">
  Dynamic contrast on focus highlight – CSS only</a> by George Hieron (<a href="https://codepen.io/georgehieron">@georgehieron</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Caveats

<mark>I have not used or tested this solution outside of the CodePen example – use it in a production site at your own discretion!</mark>

This solution may or may not be simple to implement depending on the project you are dealing with - and of course, these focus styles might not be permissible according to the site's / brand's design guidelines. Whether this is something that gets used or not, I hope it at least highlights the importance of ensuring sufficient contrast for focus styles sitewide, particularly when background colours change per page, section, or component.

If you do use it, or if it simply inspires you to keep a closer eye on your accessibile colours, let me know!

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
