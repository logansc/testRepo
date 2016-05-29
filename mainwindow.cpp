#include <QDebug>
#include <QKeyEvent>
#include <QTimer>
#include "mainwindow.h"
#include "ui_mainwindow.h"

int scale = 10;

MainWindow::MainWindow(QWidget *parent) :
QMainWindow(parent),
ui(new Ui::MainWindow){
    ui->setupUi(this);

    scene = new QGraphicsScene();
    shipItem = new QGraphicsPixmapItem();


    shipSprite = Sprite(":/ship/Resources/Graphics/Ship");
    shipItem->setPixmap(shipSprite.getCurrentFrame());
    scene->addItem(shipItem);
    ui->view->setScene(scene);

    QTimer* timer = new QTimer(this);
    connect(timer, QTimer::timeout, this, MainWindow::timerFire);
    timer->start(5);

    this->setFocus();



    //-------------test bullshit, please ignore
    int width = shipSprite.getCurrentFrame().width();
    int height = shipSprite.getCurrentFrame().height();
    level = Level(100000, 20000, "player", height*scale, width*scale, 0, 0, 0, QPair<int,int>(0,0), 0, 0, "player");

    level.createBody("enemy", 1000, 1000, 1000, 1000, 0, QPair<int,int>(0, 0), 0, 0, "enemy");

}

MainWindow::~MainWindow(){
    delete scene;
    delete shipItem;
    delete ui;
}

void MainWindow::timerFire(){

    //-----------------test bullshit, please ignore
    shipItem->setPos(level.getPlayer().xPos, level.getPlayer().yPos);
    //level.setPlayerPos(level.getPlayer().xPos + 1, level.getPlayer().yPos + 1);
    for (Qt::Key key : keysPressed){
        switch (key){
        case Qt::Key_Up:
            level.movePlayer(0, -1);
            break;
        case Qt::Key_Right:
            level.movePlayer(1, 0);
            break;
        case Qt::Key_Down:
            level.movePlayer(0, 1);
            break;
        case Qt::Key_Left:
            level.movePlayer(-1, 0);
            break;
        case Qt::Key_A:
            break;
        case Qt::Key_S:
            shipSprite.advance(100);
            shipItem->setPixmap(shipSprite.getCurrentFrame());
            break;
        default:
            break;
        }
    }

}

void MainWindow::keyPressEvent(QKeyEvent* event){
    // I wanted keysPressed to be a list, that way there is an order to the elements.  This allows us to perform operations that are based on
    // the order in which the keys are pressed.  However, a list allows for duplicates, so I have to check to make sure I'm not adding duplicates
    if (!keysPressed.contains((Qt::Key)event->key()))
        keysPressed.append((Qt::Key)event->key());
}

void MainWindow::keyReleaseEvent(QKeyEvent* event){
    keysPressed.removeAll((Qt::Key)event->key());
}
