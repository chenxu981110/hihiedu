from django.views.generic import TemplateView
from django.shortcuts import render

# Create your views here.

class HomeView(TemplateView):
    template_name = 'home.html'
    
class IndexView(TemplateView):
    template_name = 'index.html'
