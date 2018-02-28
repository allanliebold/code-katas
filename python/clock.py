// Clocky McClockface - Write a function to calculate the time with only the hour hand and the angle.

def what_time_is_it(angle):
    if angle > 0 and angle <= 30:
        return '01:00'
    if angle > 30 and angle <= 90:
        return '03:00'      
    elif angle > 90 and angle <= 180:
        return '06:00'
    elif angle > 180 and angle <= 270:
        return '09:00'
    else:
        return '12:00'
