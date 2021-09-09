from dotenv import load_dotenv
import os
import requests

BASE_URL = 'https://api.barcodelookup.com/v3/products?barcode={}&formatted=y&key={}'

def generate_url(barcode, api_key):
  return BASE_URL.format(barcode, api_key)

if __name__ == "__main__":
  load_dotenv()
  api_key = os.environ.get('API_KEY')
  print(api_key)
  while True:
    barcode = input("> ")
    search_url = generate_url(barcode, api_key)
    response = requests.get(search_url)
  
    if response.ok:
      print(response.json()['products'][0])
    else:
      print("product not found")