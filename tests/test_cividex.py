
import pytest

def test_is_working(page):
    page.goto('http://localhost:3000')
    assert page.inner_text('h1') == 'Welcome to CiviDex'
    page.click('text=HOME')

def test_input_exist(page):
    assert page.locator("input[name='fact']")
    assert page.locator("input[name='date']")
    assert page.locator("input[name='flag']")



def test_login_logout(page):
    page.goto('http://localhost:3000')
    page.click('text=log in')
    page.fill('#username','admin')
    page.fill('#password','admin')
    page.click('text=Log in')
    return page
    page.click('Sign Out')


#fill(#feild id, 'input text')

def test_about_page(page):
    page.goto('http://localhost:3000/team')
    assert page.inner_text('h1') == 'Meet the Team'


@pytest.fixture
def logged_in_page(page):
    page.goto("http://localhost:3000/admin")
    page.fill('#username', 'admin')
    page.fill('#password', 'admin')
    page.click('text=Log in')
    return page
