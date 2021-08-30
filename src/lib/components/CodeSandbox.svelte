<script>
	export let sandboxId;
</script>

<iframe
	data-testid="codesandbox"
	title={`codeSandbox-${sandboxId}`}
	src={`https://codesandbox.io/embed/${sandboxId}`}
	allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
	sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>

<style>
	iframe {
		width: 100%;
		height: 500px;
		border: 0;
		border-radius: 4px;
		overflow: hidden;
	}
</style>
