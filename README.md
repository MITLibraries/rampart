This is a demonstration repository showing visual regression testing with BackstopJS and Grunt.

Setup for this was informed by the following articles:
https://joe-watkins.io/css-visual-regression-testing-with-grunt-backstopjs/

To use this setup, after cloning this repository to your local computer you'll need to run the following setup commands:

```npm install```

```bower install```

```grunt backstop:setup```

This will download all the needed components for BackstopJS to work, and leave you ready to generate your first reference screenshots.

To see the setup in action, first run `grunt backstop:reference` to build a set of reference screenshots. Then, to run tests against these shots later, run `grunt backstop:test` to build a new set of screenshots, and compare them to the reference set.

After the test set has been generated, a new browser tab will open and the two will be compared. You'll see a display of what tests passed (no change in the reference screenshots) and which failed (because something changed). You'll need to review all failures to understand what changed - some changes are expected, as with randomly-loaded content and for style changes that are intended.

If you run into problems with this setup, please read the article at the top of this page and make sure you have all the needed software installed (Node, Bower, PhantomJS, etc). You can also ask Matt and he will help you troubleshoot.