from datetime import date
from django.utils import timezone
from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView

# from emp_management.server.users.permissions import IsEmployee
from .serializers import (
    AttendenceSerializer,
    EmployeeListSerializer,
    EmployeeAttendanceSerializer,
    EmployeeSerializer,
    UpdateAttendanceSerializer,
)
from rest_framework.response import Response
from .models import Employee, EmployeeAttendence
from django.db.models import Prefetch
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime


class CreateAttendenceView(APIView):
    def post(self, request):
        serializer = AttendenceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class EmployeeListView(APIView):
    def get(self, request):
        current_month = datetime.now().month
        current_year = datetime.now().year
        # employees = Employee.objects.prefetch_related(
        #         Prefetch('emp_attendence', queryset=EmployeeAttendence.objects.only('date', 'is_present'))
        #     ).all()
        employees = Employee.objects.prefetch_related(
            Prefetch(
                "emp_attendence",
                queryset=EmployeeAttendence.objects.filter(
                    date__month=current_month, date__year=current_year
                ).only("date", "is_present"),
            )
        ).all()
        serializer = EmployeeListSerializer(employees, many=True)
        return Response(serializer.data)


class EmployeeDetailView(APIView):
    # permission_class = [IsEmployee]
    def get(self, request, pk):
        employee = get_object_or_404(Employee, pk=pk)
        serializer = EmployeeSerializer(employee)
        attendance = EmployeeAttendence.objects.filter(
            employee=employee, date__month=timezone.now().month
        )
        attendance_serializer = EmployeeAttendanceSerializer(attendance, many=True)
        return Response(
            {"employee": serializer.data, "attendance": attendance_serializer.data}
        )

    def patch(self, request, pk=None):
        employee = get_object_or_404(Employee, pk=pk)
        attendence = EmployeeAttendence.objects.filter(
            employee=employee, date=date.today()
        ).first()
        serializer = UpdateAttendanceSerializer(
            attendence, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            attendence.delete()
            return Response(serializer.data)
        return Response(serializer.errors)


class AllUsersView(APIView):
    def get(self, request):
        d1 = []
        employees = Employee.objects.all()
        for emp in employees:
            data = {}
            data["user_id"] = emp.id
            data["name"] = emp.user.first_name + " " + emp.user.last_name
            data["date"] = date.today().strftime("%d/%m/%Y")
            emp_attend = EmployeeAttendence.objects.filter(
                employee=emp.id, date=date.today()
            )
            if emp_attend.exists():
                data["attendence"] = (
                    emp.emp_attendence.all().last().is_present
                    if emp.emp_attendence.all().last().is_present
                    else False
                )
            else:
                data["attendence"] = False

            d1.append(data)
        return Response(d1)
