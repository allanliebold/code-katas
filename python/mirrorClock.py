// Clock in Mirror - Given a string representing the apparent time displayed on an analog clock, 
// return a string with the correct 'unmirrored' time. 

def what_is_the_time(time_in_mirror):
    hour = int(time_in_mirror[0:2])
    minute = int(time_in_mirror[3:])

    if minute == 0:
        if hour == 12:
            realHour = 12
        else: 
            realHour = 12 - hour
        
        realMinute = 0
    else:
        if hour == 12:
            realHour = 11
        else: 
            realHour = 11 - hour
            
        realMinute = 60 - minute
       
    if realHour == 0:
        realHour = 12
    
    time = ""
    
    if realHour < 10:
        time += "0"
    
    time += str(realHour) + ":" 
    
    if realMinute < 10:
        time += "0"
    
    time += str(realMinute)
    
    return time
