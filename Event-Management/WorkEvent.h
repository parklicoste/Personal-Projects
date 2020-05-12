#ifndef WORKEVENT_H
#define WORKEVENT_H

#include "Event.h"

class WorkEvent : public Event{
    public:
        WorkEvent(string, int);
        ~WorkEvent();
        bool operator<(Event*);
};
#endif
