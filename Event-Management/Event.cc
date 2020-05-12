#include<iostream>
#include<iomanip>
#include<string>
using namespace std;

#include"Event.h"

Event::Event(string naam, int prt){
    priority = prt;
    eve_name = naam;
}

Event::~Event(){

}

void Event::print(){
    cout<<setfill(' ')<<setw(20)<<left<<
        eve_name<<setw(5)<<left<<priority;
    getDate().printLong();
}

Date& Event::getDate(){
    return(eve_date);
}

int Event:: getPriority(){
  return priority;
}

void Event::setDate(int d,int m,int y, int h, int mins){
    eve_date.set(d,m,y,h,mins);
}
