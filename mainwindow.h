#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QLinkedList>
#include <QGraphicsScene>
#include <QGraphicsPixmapItem>
#include "level.h"//-----------------------sig/slot?

#include "Sprite.h"

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    QLinkedList<Qt::Key> keysPressed;
    QGraphicsScene* scene;
    QGraphicsPixmapItem* shipItem;
    Sprite shipSprite;

    //-------------------change to signal/slot architecture?
    Level level;


public slots:
    void timerFire();
    void keyPressEvent(QKeyEvent*);
    void keyReleaseEvent(QKeyEvent*);
};

#endif // MAINWINDOW_H
