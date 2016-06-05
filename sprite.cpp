test5 branch changes



#include <QDirIterator>
#include <QDebug>
#include "Sprite.h"

Sprite::Sprite(){

}

Sprite::Sprite(QString path){
    // The constructor uses two loops since the image paths must first be sorted
    // before being used to add images to the frames vector
    QDirIterator it(path, QDirIterator::Subdirectories);
    QVector<QString> paths;
    while (it.hasNext()) // Iterate over the images in the desired location, add their paths to a vector
        paths.push_back(it.next());
    qSort(paths); //Qt does not add the paths in any specific order so paths must be sorted
    for (QVector<QString>::iterator iter = paths.begin(); iter != paths.end(); iter++){
        frames.push_back(QPixmap(*iter));// Build the pixmap vector
        qDebug() << *iter;}
    curFrame = frames.begin();

    advanceCounter= 0;
}

// Advances the current frame to be the next frame in the sprite's frames vector
void Sprite::advance(){
    curFrame++;
    if (curFrame == frames.end())
        curFrame = frames.begin();
    advanceCounter = 0;
}

// A partial advance--the int parameter is added to the advanceCounter.  Once the counter reaches 1000,
// current frame is advanced
void Sprite::advance(int num){
    advanceCounter += num;
    if (advanceCounter >= 1000){
        advance();
    }
}

void Sprite::setCurrentFrame(int index){
    curFrame = frames.begin();
    curFrame += index;
}

QPixmap Sprite::getCurrentFrame(){
    return *curFrame;
}

QPixmap Sprite::getFrame(int pos){
    return frames.at(pos);
}

QPixmap Sprite::getCurrentFrameRotated(float rad){
    QMatrix rm;
    rm.rotate(rad / 3.14159 * 180);
    return curFrame->transformed(rm);
}

QPixmap Sprite::getFrameRotated(int pos, int rad){
    QMatrix rm;
    rm.rotate(rad / 3.14159 * 180);
    return frames.at(pos).transformed(rm);
}

int Sprite::getNumberOfFrames(){
    return frames.length();
}

int Sprite::getCurrentFrameIndex(){
    return std::distance(frames.begin(), curFrame);
}
