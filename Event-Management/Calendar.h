
#ifndef CALENDAR_H
#define CALENDAR_H
# define MAX_ARR_SIZE 128

#include "Event.h"
#include "List.h"
#include "Array.h"
class Calendar
{
    public:
        Calendar(string);
        ~Calendar();
        void add(Event*);
        void copyEvents(Array&);
        void print();
    private:
        string cal_name;
        List<Event*> collection;
        int cur_events;
};
#endif
