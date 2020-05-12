#ifndef CONTROL_H
#define CONTROL_H

#include "Calendar.h"
#include "View.h"
#include "EventServer.h"

class Control
{
    Calendar* workCal;
    Calendar* schoolCal;
    View v;
    EventServer* eve;    
    public:
        Control();
        ~Control();
        void launch();

};
#endif
