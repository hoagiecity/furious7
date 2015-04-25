
class ImageExtractor():
    def __init__(self, data):
        if type(data) is list:
            self.str_list = data

        elif type(data) is str:
            self.str_list = [data]

        else:
            raise Exception("Constructor needs either image string or list of 
                    image strings.")

    def extract_details(self, str_list):
        for img_str in str_list:
            time = self.get_time(str_list)
        
    def get_time(self, str_list):
        pass




