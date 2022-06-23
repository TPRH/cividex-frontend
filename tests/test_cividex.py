
import pytest

def test_is_working(page):
    page.goto('https://cividex-frontend.vercel.app/')
    assert page.inner_text('h1') == 'Welcome to CiviDex'
    page.click('text=Return to Main Page')

