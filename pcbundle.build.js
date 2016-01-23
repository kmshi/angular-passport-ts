({
	baseUrl: 'public/pc/js/client/pc',
	name: 'greeter',
	include:["requireLib","main"],
    paths: {
    	requireLib:"../../../../components/requirejs/require",
        main: "../../../main"
    },
    out:"public/pc/bundle.js"
})