from django.db import models
from users.models import User   

class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='employee')
    department = models.CharField(max_length=100)
    
    def __str__(self):
        return self.user.username
    
class EmployeeAttendence(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name="emp_attendence")
    date = models.DateField(auto_now_add=True)
    is_present = models.BooleanField(default=False)
    
    class Meta:
        unique_together = ['date', 'employee']
    def __str__(self):
        return "{},{}".format(self.employee, self.date)
    