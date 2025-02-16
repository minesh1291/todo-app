import os
import sys
sys.path.insert(0, os.path.abspath('../../..'))

project = 'Todo App'
copyright = '2024, Minesh MLOps'
author = 'Minesh MLOps'
release = '1.0.0'

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',
    'myst_parser',
]

templates_path = ['_templates']
exclude_patterns = []

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

# Enable markdown support
source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}