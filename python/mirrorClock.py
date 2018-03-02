// Clock in Mirror - Given a string representing the apparent time displayed on an analog clock, 
// return a string with the correct 'unmirrored' time. 

/* Top solution by Unnamed

def what_is_the_time(time_in_mirror):
    h, m = map(int, time_in_mirror.split(':'))
    return '{:02}:{:02}'.format(-(h + (m != 0)) % 12 or 12, -m % 60)


Top solution by Drymonade

def what_is_the_time(time_in_mirror):
    array = time_in_mirror.split(":")
    a = int(array[0])
    b = int(array[1])
    
    if a == 11: a = 12
    elif a == 12: a = 11
    else: a = 11 - a
    
    if b == 0: 
        b = 0
        a += 1
    else: b = 60 - b 
    return "{:02}:{:02}".format(a, b)

*/

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
