
class Fake:
    def find(self, *args):
        return []

def nested_path(items, field='', field_last=False, split_by='_', transform=lambda x:int(x)-1, slice=0):
    append = '' if not field_last else '.' + field
    if not items:
        return field
    if isinstance(items, str):
        items = list(map(transform, items.split(split_by)))
    items_rest = []
    if slice:
        items_rest = items[-slice:]
        items = items[:-slice]

    generated = None
    if field:
        generated = field + '.' + ('.' + field + '.').join(str(x) for x in items) + append
    else:
        generated = '.'.join(str(x) for x in items) + append

    if slice:
        return generated, *items_rest
    else:
        return generated
