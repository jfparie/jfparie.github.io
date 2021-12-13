from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from bs4 import BeautifulSoup
import urllib.request
import datetime
import time
import re
import os

# function to check discount based on BeautifulSoup webscraping
def get_discounts():
    # scrape url1
    url_promo = 'https://www.scotch-soda.com/nl/en/promo/men?srule=SALE%20discount%25%20%2B%20dynamic&start=0&sz=36'
    page_promo = urllib.request.urlopen(url_promo)
    soup_promo = BeautifulSoup(page_promo, 'html.parser')
        
    articles_promo = soup_promo.find("div", {"class":"ui-content"}).findAll('p')
    articles_promo_str = [str(elm) for elm in articles_promo]
    
    # scrape url2
    url_shirts = 'https://www.scotch-soda.com/nl/en/men/shirts?srule=SALE%20discount%25%20%2B%20dynamic&start=0&sz=36'
    page_shirts = urllib.request.urlopen(url_shirts)
    soup_shirts = BeautifulSoup(page_shirts, 'html.parser')

    articles_shirts = soup_shirts.find("div", {"class":"ui-content"}).findAll('p')
    article_shirts_str = [str(elm) for elm in articles_shirts]
    
    # discount list
    discount_ls_promo = [elm.split('<p>')[1].split('&')[0] for elm in articles_promo_str]
    discount_ls_shirts = [elm.split('<p>')[1].split('&')[0] for elm in article_shirts_str]
    
    return(int(discount_ls_promo[0]),int(discount_ls_shirts[0]))


# function to send mail when discount is >30%
def send_50_discount_mail():
    
    message = Mail(
    from_email='heerenvanwelleer@gmail.com',
    to_emails=['jfparie@me.com','societasnautica@heerenvanwelleer.com','philiplunel@xs4all.nl','jack.asbeck@gmail.com'],
    subject='Scotch&Soda sale',
    html_content="""
    <p>Scotch&Soda 50% korting! :-)</p>
    <a href="https://www.scotch-soda.com/nl/en/men/shirts?srule=SALE%20discount%25%20%2B%20dynamic&start=0&sz=36">Klikk</a>
    <p>Deze mail is gestuurd door Jurriaan's automatische S&S sale script</p>""")
    
    try:
        sg = SendGridAPIClient('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')
        response = sg.send(message)
        print(response.status_code)

    except Exception as e:
        print(e.body)

# function to send mail with content that script is running but no >30% sale yet
def send_regret_mail():
    
    message2 = Mail(
    from_email='heerenvanwelleer@gmail.com',
    to_emails='jfparie@me.com',
    subject='Scotch&Soda sale',
    html_content="Nog geen 50% korting by Scotch :-(")
        
    try:
        sg = SendGridAPIClient('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')
        response = sg.send(message2)
        print(response.status_code)
    
    except Exception as e:
        print(e.body)


# start date
start_date = datetime.datetime.now()

# initialize while loop
keepGoing = True

while keepGoing:
    
    # get discounts
    max_discount_promo, max_discount_shirts = get_discounts()
    
    # get time difference
    date_now = datetime.datetime.now()
    date_detla = date_now - start_date

    print("keepGoing: ", date_now)
    
    if (max_discount_promo or max_discount_shirts) < -30:
        
        # send discount mail
        send_50_discount_mail()
        keepGoing = False
        
    elif date_detla.days == 1:
        
        # send regret mail
        send_regret_mail()
        
        # update start date
        start_date = datetime.datetime.now()
        
        keepGoing = True
        
    else:
        keepGoing = True
        
    time.sleep(60*60*4)