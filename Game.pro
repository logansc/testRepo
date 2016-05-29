#-------------------------------------------------
#
# Project created by QtCreator 2016-05-06T14:55:04
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = Game
TEMPLATE = app
CONFIG += c++11


SOURCES += main.cpp\
        mainwindow.cpp \
    sprite.cpp \
    level.cpp

HEADERS  += mainwindow.h \
    sprite.h \
    level.h

FORMS    += mainwindow.ui

RESOURCES += \
    graphics.qrc
