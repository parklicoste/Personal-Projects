#include<iostream>
using namespace std;

#include "SchoolEvent.h"

SchoolEvent::SchoolEvent(string evt, int prt) : Event(evt , prt){
}

SchoolEvent::~SchoolEvent(){ }

bool SchoolEvent::operator<(Event* eve){
  return (this->eve_date < (eve->getDate()));
}
