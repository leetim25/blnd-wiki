Game Mechanics
============

## Tile
Individual square forms the board of the game. When it is not visited the tile is white, upon a visit, the color of the tile will alter to your player's color. If the player visits a tile that has been marked by another, it will blend the color of the player that visited with the color of the tile. The color can be blended as many times with any player's color.

## Card
Beginning of the game player will be assigned 8 cards. The card is mainly used for directing which way to move next turn with what number to compete in case of collision. The card will continuously shift altering the direction you can move to as the turn progress with a given number. The card will also denote how many players have the same numbered card.

## Fog of War
The fog of war will set after the game starts. The game vision is clouded by one tile each to the player's position.

## Closing Border
After a certain period, the game border will start closing. This will limit the tile you can move into, eventually leaving one tile at the end for the last player standing.

## Class Mission
-
-
-
-
-

## Points
There are two ways to earn the points:
- By marching into unclaimed tile
- By defeating another player with a collision
## Game Class
There are three type of Game Class determined by the two Class Mission at the beginning of the game
- Game Class 3
  - No Class Mission was fulfilled
  - 1 Class Mission was completed
  - Both Class Missions were completed