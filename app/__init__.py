from flask import Flask

from .routes import main as main_blueprint


def create_app() -> Flask:
    app = Flask(__name__)
    app.register_blueprint(main_blueprint)
    return app