# Blackjack App

---

## Description.

This is the GUI for the Javascript blackjack app I created (the original can be found [here](https://github.com/LCHeffernan/blackjack-oop)). It was bootstrapped with [create React App](https://github.com/facebook/create-react-app) and tested using React Testing Library (RTL), the tests can be found in the tests folder.

<img src="/images/Screenshot-opening-hands.png" width="193" height="417" alt="Screenshot of opening hand" title="Opening hand"/><img src="/images/Screenshot-player-loses.png" width="193" height="417" alt="Screenshot of player losing" title="Losing hand"/><img src="/images/Screenshot-player-bust.png" width="193" height="417" alt="Screenshot of player bust" title="Bust hand"/><img src="/images/Screenshot-blackjack.png" width="193" height="417" alt="Screenshot of player with blackjack" title="Blackjack hand"/>

---

## Download and setup.

This project has React as a dependency and an additional dev dependency RTL. To download the project:

- Fork the repository.
- Clone down your fork using `git clone`.
- Change directory into your cloned folder and run `npm install`.
- To run all React component tests run the command `npm test`.
- To run the unit tests for the objects run `npm run unit`.
- To run the integration test for the objects run `npm run int`.

---

## Using the blackjack app.

|               | Blackjack rules                                                                                                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aim           | To beat the dealer's score and not exceed 21. Ideally to score 21 with 2 cards which is called 'blackjack'.                                                                                                                                                        |
| Scoring       | The cards 2-10 are worth their face value, the picture cards (Jack, Queen and King) are worth 10 each and the ace is worth either 11 or 1. The ace is worth 11 initially but if this would put the player's score over 21 then it gets re-evaulated to a 1.        |
| Setup         | The player and dealer are dealt an opening hand of 2 cards each. One of the dealer's card's and score is hidden from the player until the player has finished their game play.                                                                                     |
| Player's game | The player has two options. They can choose to 'hit' and receive another card or to 'stand' and have their final score evaluated.                                                                                                                                  |
| Dealer's game | Once the player has finished their game play the dealer always follows the following algorithm. If the dealer's score is lower than 17 the dealer must hit (unless the player went bust) until their score is 17 or more or they have gone 'bust' (score over 21). |
| The winner    | The highest score wins. If either the player or the dealer is bust then the other wins. If they have the same score under 21 they draw. If they both score 21 then a score of 21 with 2 cards wins over a score of 21 with more than two cards.                    |

To start a new game first run the app with `npm start` then click the new game button. You can then decide to receive another card by clicking 'hit' or to finish the game by clicking 'stand'. When stand is clicked (or you go 'bust') all the dealer's cards and their score is shown. Then the alogithm is followed until the dealer's game play has finished and the appropriate message is displayed, showing who has won the game.

---

## Future plans.

I would like the player to be able to 'split' their cards if they are dealt two cards of the same rank in their opening hand. This then gives the player two hands, which they can then hit or stand in the usual manner. I would also like to make the game multi player and even mimic the betting that happens in casinos.

---

## Author.

Lisa Heffernan

- Twitter [@Iisaheffernan](https://twitter.com/Iisaheffernan)
- GitHub [@LCHeffernan](https://github.com/LCHeffernan)
- LinkedIn [Lisa Heffernan](https://www.linkedin.com/in/lisa-heffernan-54b61312a)
