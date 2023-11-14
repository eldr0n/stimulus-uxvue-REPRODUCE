// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
import { startStimulusApp } from "vite-plugin-symfony/stimulus/helpers"
import { registerVueControllerComponents } from "vite-plugin-symfony/stimulus/helpers" 

registerVueControllerComponents(import.meta.glob('./vue/controllers/**/*.vue')) 
const app = startStimulusApp(
	  import.meta.glob('./controllers/*_(lazy)\?controller.[jt]s(x)\?')
);
