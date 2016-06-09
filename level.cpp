from master yayaya






second attempt, want to revert this 


New commit, there should be nothing above this if revert is successful.


changes that will be reverted over, from gt2


Changes that will write over the last commit






#include "level.h"

Level::Level(){

}
#inane comments
#unneccessary stuff
#testing for git
#etc.

#more test comments
#even more test comments

#adding comment for conflict from gitTest 2.  2222222

#comments, let's make a conflict.  this was added from gitTest original



#more comments from gitTest original

##new set of comments, etcs. yeah. from gitest2

#XXXX comments from 1
#XXX comments 2

#comments for days from test2

Level::Level(int levelWidth, int levelHeight, QString type, int playerWidth, int playerHeight, int xPos, int yPos, int velocity,
QPair<int,int> direction, int curSet, int curFrame, QString spriteType){
    this->width = levelWidth;
    this->height = levelHeight;

yeahhhhh
    enemies not equal test 2
    structures = QList<body>();
    allies = QList<body>();

    player.width = playerWidth;
    player.height = playerHeight;
    player.xPos = xPos;
    player.yPos = yPos;
    player.velocity = velocity;
    player.direction = direction;
    player.curSet = curSet;
    player.curFrame = curFrame;
    player.spriteType = spriteType;
}

int Level::getWidth(){
    return width;
}

int Level::getHeight(){
    return height;
}

body Level::getPlayer(){
    return player;
}

void Level::setPlayerPos(int x, int y){
    player.xPos = x;
    player.yPos = y;
}

void Level::movePlayer(int dx, int dy){
    player.xPos += dx;
    player.yPos += dy;
}

void Level::createBody(QString type, int width, int height, int xPos, int yPos, int velocity,
QPair<int,int> direction, int curSet, int curFrame, QString spriteType){
    body* newBody = new body;
    newBody->width = width;
    newBody->height = height;
    newBody->xPos = xPos;
    newBody->yPos = yPos;
    newBody->velocity = velocity;
    newBody->direction = direction;
    newBody->curSet = curSet;
    newBody->curFrame = curFrame;
    newBody->spriteType = spriteType;

    if (type == "enemy")
        enemies.append(*newBody);
    else if (type == "structure")
        structures.append(*newBody);
    else if (type == "allies")
        allies.append(*newBody);
}

body& Level::playerEnemyCollision(){
    for(body x : enemies){
        //if ()

    }
}

void Level::collisionCheck(){
    int x1 = player.xPos;
    int w1 = player.width;
    int y1 = player.yPos;
    int h1 = player.height;
    for (body enemy : enemies){
        if (x1 + w1 - enemy.xPos > 0 && enemy.xPos + enemy.width - x1 > 0
        && y1 + h1 - enemy.yPos > 0 && enemy.yPos + enemy.height - y1 > 0){
            // Collision has occurred
        }
    }
}




