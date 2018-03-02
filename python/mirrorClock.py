// Clock in Mirror - Given a string representing the apparent time displayed on an analog clock, 
// return a string with the correct 'unmirrored' time. 

def what_is_the_time(time_in_mirror):
    hour = int(time_in_mirror[0:2])
    minute = int(time_in_mirror[3:])
    print(hour)
    print(minute)
