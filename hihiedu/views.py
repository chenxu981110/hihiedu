from django.views.generic import TemplateView
from django.shortcuts import render

# Create your views here.

class HomeView(TemplateView):
    template_name = 'home.html'
    
class PhysicsView(TemplateView):
    template_name = 'physics.html'
