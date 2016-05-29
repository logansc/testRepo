#ifndef SPRITE_H
#define SPRITE_H

#include <QPixmap>


class Sprite{
private:
    QVector<QPixmap> frames;
    QVector<QPixmap>::iterator curFrame;
    int advanceCounter;
public:
    Sprite();
    Sprite(QString);
    void advance();
    void advance(int);
    void setCurrentFrame(int);
    QPixmap getCurrentFrame();
    QPixmap getFrame(int pos);
    QPixmap getCurrentFrameRotated(float);
    QPixmap getFrameRotated(int, int);
    int getNumberOfFrames();
    int getCurrentFrameIndex();
};

#endif // SPRITE_H
