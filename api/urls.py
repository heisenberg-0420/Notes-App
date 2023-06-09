from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('notes/', views.get_notes, name='notes'),
    path('notes/<int:id>', views.modify_note, name='note')
]
