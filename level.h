#ifndef LEVEL_H
#define LEVEL_H

#include <QString>
#include <QList>
#include <QPair>

// A body is an abstract representation of a square object(player, enemy, ground, ally, etc)
// in the current level of the game.  A body is not necessaraily seen on screen--it is only
// displayed if it is within the boundaries of the view.  Where the view is depends on the
// player's location.  Bodies that are not on screen are still kept track of, and are otherwise
// no different from on-screen bodies.
struct body{
    body(){

    }
    int width;//Width of the body
    int height;//Height of the body
    int xPos;//x position of body
    int yPos;//y position of body
    int velocity;
    QPair<int,int> direction;
    int curSet;//Refers to the set of frames within a Sprite
    int curFrame;//Refers to a specific frame within a set of frames in a Sprite
    QString spriteType;//Identifies what type of sprite should be drawn when this body is to be displayed
};

class Level{
private:
    int width;
    int height;
    body player;
    QList<body> enemies;
    QList<body> structures;
    QList<body> allies;
    void createPlayer();
    body& playerEnemyCollision();
    void collisionCheck();

public:
    Level();
    Level(int levelWidth, int levelHeight, QString type, int playerWidth, int playerHeight, int xPos, int yPos, int velocity,
          QPair<int,int> direction, int curSet, int curFrame, QString spriteType);
    void createBody(QString type, int width, int height, int xPos, int yPos, int velocity,
                    QPair<int,int> direction, int curSet, int curFrame, QString spriteType);
    int getWidth();
    int getHeight();
    body getPlayer();
    void setPlayerPos(int x, int y);
    void movePlayer(int dx, int dy);

};

#endif // LEVEL_H
