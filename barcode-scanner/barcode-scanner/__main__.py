import requests

BASE_URL = 'https://world.openfoodfacts.org/api/2/product/{}.json'

def generate_url(barcode):
  return BASE_URL.format(barcode)

if __name__ == "__main__":
  while True:
    barcode = input("> ")
    search_url = generate_url(barcode)
    response = requests.get(search_url)
    payload = response.json()
  
    if payload['status'] == 1:
      print(payload['product']['product_name'])
    else:
      print("product not found")