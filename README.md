How the Logic Handles Scale =>
• Zero Inter-Module Leaks: The catalog module has no reference to the authentication module. 
If you want to require users to log in to see products later, you don't combine the modules.
Instead, you add a shared/middleware/auth.middleware.js 
component to sit in front of the route in app.js.

• Plug and Play: You can easily pass down the application code to a backend developer,
telling them to create a checkout module. They can build it entirely inside src/modules/checkout/
without stepping on any code in catalog/ or authentication/.


