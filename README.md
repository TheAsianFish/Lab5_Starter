# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

**Name:** Patrick Chung

**GitHub Pages:**
- [expose.html](https://TheAsianFish.github.io/Lab5_Starter/expose.html)
- [explore.html](https://TheAsianFish.github.io/Lab5_Starter/explore.html)

## Unit Testing Questions

1. No, I would not use a unit test for the "message" feature. Sending a message involves multiple components working together like the UI, the network, and the client. This is better suited for an integration or end-to-end test since unit tests can't test how these parts interact with each other.

2. Yes, I would use a unit test for the "max message length" feature. This is a self-contained function that takes an input and returns a result, in which you can easily test that strings under 80 characters are accepted and strings over 80 are rejected without any external dependencies.
