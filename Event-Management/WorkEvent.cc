#include<iostream>
using namespace std;

#include "WorkEvent.h"

WorkEvent::WorkEvent(string evt, int prt) : Event(evt , prt){
}

WorkEvent::~WorkEvent(){ }

bool WorkEvent::operator<(Event* eve){
  return (this->priority < eve->getPriority());
}
