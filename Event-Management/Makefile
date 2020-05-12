OPT = -Wall

OBJS = main.o Control.o View.o Event.o Calendar.o SchoolEvent.o WorkEvent.o Date.o Time.o

cal:	$(OBJS) EventServer.o Array.o
	g++ $(OPT) -o cal $(OBJS) EventServer.o Array.o

main.o:	main.cc Control.h
	g++ $(OPT) -c main.cc

Date.o:	Date.cc Date.h
	g++ $(OPT) -c Date.cc

Time.o:	Time.cc Time.h
	g++ $(OPT) -c Time.cc

Event.o:	Event.cc Event.h
	g++ $(OPT) -c Event.cc

WorkEvent.o:	WorkEvent.cc WorkEvent.h Event.h
	g++ $(OPT) -c WorkEvent.cc

SchoolEvent.o:	SchoolEvent.cc SchoolEvent.h Event.h
	g++ $(OPT) -c SchoolEvent.cc

Calendar.o:	Calendar.cc Calendar.h
	g++ $(OPT) -c Calendar.cc

Control.o:	Control.cc Control.h
	g++ $(OPT) -c  Control.cc

View.o:	View.cc View.h
	g++ $(OPT) -c View.cc

clean:
	rm -f $(OBJS) cal
