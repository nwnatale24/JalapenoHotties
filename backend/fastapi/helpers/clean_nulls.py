
# Finds the actual nulls in a dict and replaces them
# with a null string (mainly for timestring).

def replace_none_values(dct):
    # for every key and value in the dictionary
    for key, value in dct.items():
        # if the value of each key is of 'dict' type
        if isinstance(value, dict):
            # call function again on that 'dict'.
            replace_none_values(value)
        # if the value of the key is of 'list' type
        elif isinstance(value, list):
            # re-run on each item in the list
            for item in value:
                replace_none_values(item)
        # check the final value of the keys that don't have keys as a dict.
        # if they do not contain a dict and are null (None), update them.
        elif value is None:
            dct.update({key: 'null'})
    return dct
