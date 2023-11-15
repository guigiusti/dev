from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.wait import WebDriverWait
import csv
import time
from unidecode import unidecode
options = webdriver.ChromeOptions()
options.add_argument("--remote-debugging-port=9222")
options.add_argument("--headless=new")
path =  "/home/guilherme/.local/bin/chromedriver"
driver = webdriver.Chrome(options=options)
with open('municipality.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    links = []
    dict_links = {}
    i = 0
    for row in reader:
        website = "https://www.youtube.com/results?search_query=hino+da+cidade+de+"
        cidade = unidecode(str(row['name'])).replace(" ", "+")
        uf = row['uf']
        driver.get(website+cidade+'+'+uf)
        WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.ID, "video-title")))
        links = driver.find_element(By.ID, value="video-title")
        title = links.get_attribute('title')
        links = links.get_attribute("href")
        save_links = open("cidades_links.csv", "a")    
        order_csv_append = csv.writer(save_links)
        order_csv_append.writerow([cidade, uf, links, title])
        save_links.close()
        i += 1
        print(str(i) + "/" + "5571")
        time.sleep(0.4)
        
