#ifndef SCHOOLEVENT_H
#define SCHOOLEVENT_H

#include "Event.h"

class SchoolEvent : public Event{
    public:
        SchoolEvent(string, int);
        ~SchoolEvent();
        bool operator<(Event*);
};
#endif
