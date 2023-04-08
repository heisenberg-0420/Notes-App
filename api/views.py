from rest_framework.response import Response
from rest_framework.decorators import api_view
from . utils import create_note, notes_list, delete_note, update_note, display_note

# Create your views here.
@api_view(['GET'])
def get_routes(request):
  routes = [
    {
      'Endpoint': '/notes/',
      'method': 'GET',
      'body': None,
      'description': 'Returns an array of notes'
    },
    {
      'Endpoint': '/notes/id',
      'method': 'GET',
      'body': None,
      'description': 'Returns a single note object'
    },
    {
      'Endpoint': '/notes/create/',
      'method': 'POST',
      'body': {'body': ""},
      'description': 'Creates new note with data sent in post request'
    },
    {
      'Endpoint': '/notes/id/update/',
      'method': 'PUT',
      'body': {'body': ""},
      'description': 'Creates an existing note with data sent in post request'
    },
    {
      'Endpoint': '/notes/id/delete/',
      'method': 'DELETE',
      'body': None,
      'description': 'Deletes and exiting note'
    },
  ]
  return Response(routes)

@api_view(['GET', 'POST'])
def get_notes (request):
  if request.method == 'GET':
    return Response(notes_list())
  
  if request.method == 'POST':
    return Response(create_note(request))

@api_view(['GET', 'PUT', 'DELETE'])
def modify_note(request, id):
  if request.method == 'GET':
    return Response(display_note(id))
  
  if request.method == 'PUT':
    return Response(update_note(request, id))

  if request.method == 'DELETE':
    return Response(delete_note(id))