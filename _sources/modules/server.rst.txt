Python Server
============

HTTP Server
----------

The server implementation is in ``server.py`` using Python's built-in ``http.server``.

Classes
~~~~~~~

CORSRequestHandler
^^^^^^^^^^^^^^^^^

.. py:class:: CORSRequestHandler

   Custom request handler with CORS support.
   Adds necessary headers for cross-origin requests.

   .. py:method:: end_headers()

      Add CORS and cache control headers to the response.

Functions
~~~~~~~~

.. py:function:: main()

   Main function to start the HTTP server.
   Uses environment variables HOST and PORT if available.

   :return: None