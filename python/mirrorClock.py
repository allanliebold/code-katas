// Clock in Mirror - Given a string representing the apparent time displayed on an analog clock, 
// return a string with the correct 'unmirrored' time. 

def what_is_the_time(time_in_mirror):
    hour = int(time_in_mirror[0:2])
    minute = int(time_in_mirror[3:])

    realHour = 11 - hour
    if realHour == 0:
        realHour = 12
    
    realMinute = 60 - minute
    
    time = ""
    
    if realHour < 10:
        time += "0"
    
    time += str(realHour) + ":" 
    
    if realMinute < 10:
        time += "0"
    
    time += str(realMinute)
    
    return time
