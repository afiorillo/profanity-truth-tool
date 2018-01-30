

from flask import Flask, render_template

REVIEW_ID = 'test-id'
REVIEW_TEXT = """\
This is some text.
The goal is to give the user some text, instructions to highlight the profane part, and then a submit button.
"""
REVIEW_USER = 'user'

def make_app(**kwargs):
    app = Flask(
        __name__,
        template_folder='./templates',
        static_folder='./static', static_url_path='/static',
    )

    @app.route('/')
    def index():
        return render_template('index.jinja', reviewId=REVIEW_ID, reviewText=REVIEW_TEXT, reviewUser=REVIEW_USER)

    return app

if __name__ == '__main__':
    app = make_app()
    app.run(debug=True)