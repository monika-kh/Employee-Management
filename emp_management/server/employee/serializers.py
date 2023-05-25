from rest_framework import serializers
from .models import *

class AttendenceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = "__all__"
        
        
class AttendenceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = EmployeeAttendence
        fields = "__all__"
            
class EmployeeAttendanceSerializer(serializers.ModelSerializer):
    date = serializers.DateField()

    class Meta:
        model = EmployeeAttendence
        fields = ('date', 'is_present',)
        
class UpdateAttendanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = EmployeeAttendence
        fields = ('is_present',)

    
class EmployeeListSerializer(serializers.ModelSerializer):
    emp_attendence = EmployeeAttendanceSerializer(many=True)
    class Meta:
        model = Employee
        fields = ("id", "emp_attendence", "department")
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if instance:
            representation["username"] = instance.user.username
            representation["firstname"] = instance.user.first_name
            representation["lastname"] = instance.user.last_name
            
        return representation
    
class EmployeeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Employee
        fields = "__all__"
        
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if instance:
            representation["username"] = instance.user.username
            representation["firstname"] = instance.user.first_name
            representation["lastname"] = instance.user.last_name
            
        return representation
    
