({
	baseUrl: 'public/js/client',
	name: 'greeter',
	include:["requireLib","main"],
    paths: {
    	requireLib:"../../../node_modules/requirejs/require",
        main: "../../main"
    },
    out:"public/bundle.js"
})