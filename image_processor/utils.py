import re 

def allowed_file(filename):
    pattern = r'.*\.(?:png|jpg)'
    if re.search(pattern, filename) == None:
        return False

    # More TODO

    return True

def secure_filename(filename):
    # TODO

    return True

def extract_details(image_str):
    pass
