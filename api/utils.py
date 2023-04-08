from . serializers import NoteSerializer
from . models import Note

def display_note(id):
  note = Note.objects.get(id=id)
  serializer = NoteSerializer(note, many = False)
  return serializer.data
  
def notes_list():
  notes = Note.objects.all()
  serializer = NoteSerializer(notes, many = True)
  return serializer.data

def create_note(request):
  data = request.data
  serializer = NoteSerializer(data= data)
  if serializer.is_valid():
    serializer.save()
  return serializer.data

def update_note(request, id):
  data = request.data
  note = Note.objects.get(id=id)
  serializer = NoteSerializer(note, data = data)
  if serializer.is_valid():
    serializer.save()
  return serializer.data

def delete_note(id):
  note = Note.objects.get(id=id)
  note.delete()
  return 'Note Deleted'
