# Web Development Project 3 - *Git Command Trainer*

Submitted by: **Shreya Pasupuleti**

This web app: **Git Command Trainer is a terminal-themed flashcard app for practicing real Git commands. Users read a realistic developer scenario, type the command they would use, get visual feedback, and can flip the card to review the explanation.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [X] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [X] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [X] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [X] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [X] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [X] List anything else that you added to improve the site's functionality!
- I have designed the site to look like a terminal so that it teaches the user to use git commands in a fun way. Keyboard shortcuts are also available, allowing you to trigger actions without leaving the terminal input. I plan to expand this with Linux and Unix commands in the future.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app. 
* Terminal vs. Traditional UI Paradigm: Balancing a minimalist command-line aesthetic with complex flashcard state machine requirements was a unique UX challenge. The interface had to handle dynamic terminal inputs, sequential navigation, contextual feedback, shuffling, and streak tracking without relying on a standard card-based design.

* State Validation & Scoring Logic: To maintain game integrity, the scoring system required strict validation rules. Streaks automatically reset on a wrong answer, repeated attempts on the same card are blocked from inflating the score, and a card can only achieve "Mastered" status if answered correctly on the very first attempt.

* Modern Git Standards: The codebase was curated to reflect modern industry best practices. It prioritizes up-to-date Git commands (such as switch and restore --staged) while intentionally avoiding legacy checkout and reset workflows.

## Built With

- React
- Vite
- lucide-react

## Run Locally

```bash
pnpm install
pnpm run dev
```

## License

    Copyright [2026] [Shreya Pasupuleti]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.