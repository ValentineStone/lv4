
class Fake:
    def find(self, *args):
        return []

def nested_path(items, field='', field_last=False, split_by='_', transform=lambda x:int(x)-1):
    append = '' if not field_last else '.' + field
    if not items:
        return field
    if isinstance(items, str):
        items = list(map(transform, items.split(split_by)))
    if field:
        return field + '.' + ('.' + field + '.').join(str(x) for x in items) + append
    else:
        return '.'.join(str(x) for x in items) + append