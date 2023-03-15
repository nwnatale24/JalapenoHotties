def replace_none_values(dct):
    for key, value in dct.items():
        if isinstance(value, dict):
            replace_none_values(value)
        elif isinstance(value, list):
            for item in value:
                replace_none_values(item)
        elif value is None:
            dct.update({key: 'null'})
    return dct