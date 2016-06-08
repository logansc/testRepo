
fetch test changes made from master, take 2

One last little thing

fetch test changes made from test9, take 2

fetch test changes made from master



top changes from gt2

#ifndef SPRITE_H
#define SPRITE_H

#include <QPixmap>


class Sprite{
111111111
private:
    QVector<QPixmap> frames;
    QVector<QPixmap>::iterator curFrame;
    int advanceCounter;
public:
222222222
    Sprite();
    Sprite(QString);
    void advance();
	333333333333333
    void advance(int);
    void setCurrentFrame(int);4444444444444444444
    QPixmap getCurrentFrame();
    QPixmap getFrame(int pos);
    QPixmap getCurrentFrameRotated(float);
    QPixmap getFrameRotated(int, int);
    int getNumberOfFrames();
    int getCurrentFrameIndex();
	555555
};

#endif // SPRITE_H666666666666666


these changes will be overwritten by force push
These are the more important changes, they will overwrite




bottom changes from gt1



gonna be lost forever??  gt1
my changes can beat up your changes
